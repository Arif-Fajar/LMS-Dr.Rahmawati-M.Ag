/* =========================================================
   LMS Ulumul Qur'an — SPA router
   Setiap section (selain Beranda) adalah "app-page" yang
   posisinya fixed penuh layar, tersembunyi di bawah viewport.
   Saat menu diklik, halaman terkait meluncur naik dan
   menutupi Beranda (bukan pindah dokumen / reload).
   ========================================================= */

(function () {
    "use strict";

    var header = document.getElementById("site-header");
    var nav = document.getElementById("main-nav");
    var backdrop = document.getElementById("nav-backdrop");
    var menuToggle = document.getElementById("menu-toggle");
    var themeToggle = document.getElementById("theme-toggle");
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    var overlayPages = Array.prototype.slice.call(document.querySelectorAll("#pages-root .app-page"));
    var homePage = document.getElementById("page-home");

    var pageMap = {}; // id -> element
    overlayPages.forEach(function (el) {
        var key = el.id.replace("page-", "");
        pageMap[key] = el;
    });

    var currentPage = "home";

    /* ---------- Perbarui tampilan thumbnail sebuah .video-card ---------- */
    function refreshVideoCardVisual(card) {
        var id = extractYoutubeId(card.getAttribute("data-youtube"));
        var thumb = card.querySelector(".video-thumb");
        card.classList.remove("no-link");
        if (thumb) {
            thumb.classList.remove("has-thumb");
            thumb.style.backgroundImage = "";
        }
        if (id) {
            if (thumb) {
                thumb.style.backgroundImage =
                    "linear-gradient(0deg, rgba(11,42,43,.55), rgba(11,42,43,.1)), url('https://img.youtube.com/vi/" + id + "/hqdefault.jpg')";
                thumb.classList.add("has-thumb");
            }
        } else {
            card.classList.add("no-link");
        }
    }

    /* ---------- Render satu grup "Materi Pokok" ----------
       Mendukung DUA format item secara bersamaan:
       - STRING biasa (format lama)              -> tampil sebagai <li> teks datar
       - OBJEK { title, detail, rangkuman }       -> tampil sebagai <details> yang
         bisa diklik: judul di <summary>, penjelasan lengkap + papan rangkuman
         di dalamnya (dibuka di halaman yang sama, tanpa modal/sub-window). */
    function renderMateriPokokGroup(group) {
        var hasObjectItems = group.items.some(function (item) {
            return item && typeof item === "object";
        });

        var html = '<div class="modul-group-title">' + group.label + "</div>";

        if (!hasObjectItems) {
            // Semua item masih string -> render seperti semula (daftar biasa)
            html += "<ul>";
            group.items.forEach(function (item) {
                html += "<li>" + item + "</li>";
            });
            html += "</ul>";
            return html;
        }

        html += '<div class="materi-pokok-list">';
        group.items.forEach(function (item) {
            if (item && typeof item === "object") {
                html += '<details class="card materi-pokok-item">';
                html += "<summary>" + item.title + "</summary>";
                html += '<div class="materi-pokok-detail">' + (item.detail || "") + "</div>";
                if (item.rangkuman) {
                    html +=
                        '<div class="rangkuman-board"><strong>Rangkuman</strong><p>' +
                        item.rangkuman +
                        "</p></div>";
                }
                html += "</details>";
            } else {
                // Item string di tengah grup yang sebagian sudah diisi objek
                html += '<p class="materi-pokok-plain">' + item + "</p>";
            }
        });
        html += "</div>";
        return html;
    }

    /* ---------- Isi halaman detail pertemuan sebelum ditampilkan ---------- */
    var currentPertemuanNum = null;
    var pendingFormatifSubmission = null;
    function renderPertemuan(num) {
        currentPertemuanNum = Number(num);
        var data = PERTEMUAN_DATA[num];
        var crumb = document.getElementById("pertemuan-crumb");
        var eyebrow = document.getElementById("pertemuan-eyebrow");
        var titleEl = document.getElementById("pertemuan-title");
        var modulEl = document.getElementById("pertemuan-modul");
        var videoCard = document.getElementById("pertemuan-video-card");
        var videoTitleEl = document.getElementById("pertemuan-video-title");
        var videoDescEl = document.getElementById("pertemuan-video-desc");
        var caseTextEl = document.getElementById("pertemuan-case-text");

        if (!data) {
            if (titleEl) titleEl.textContent = "Pertemuan tidak ditemukan";
            if (modulEl) modulEl.innerHTML = "";
            return;
        }

        if (crumb) crumb.textContent = "Pertemuan " + num;
        if (eyebrow) eyebrow.textContent = "Pertemuan " + num;
        if (titleEl) titleEl.textContent = data.title;

        if (modulEl) {
            var html = "";
            data.groups.forEach(function (group) {
                html += renderMateriPokokGroup(group);
            });
            html += '<div class="modul-output">' + data.output + "</div>";
            modulEl.innerHTML = html;
        }

        // Ambil link video langsung dari kartu asli di menu Video (satu sumber data),
        // supaya kalau link diganti di menu Video, sub-page Materi ikut berubah otomatis.
        var sourceVideoCard = document.querySelector('#page-video .video-card[data-week="' + num + '"]');
        var youtubeLink = sourceVideoCard ? sourceVideoCard.getAttribute("data-youtube") : (data.youtube || "");

        if (videoCard) videoCard.setAttribute("data-youtube", youtubeLink || "");
        if (videoTitleEl) videoTitleEl.textContent = data.title;
        if (videoDescEl) videoDescEl.textContent = data.videoDesc || "";
        if (videoCard) refreshVideoCardVisual(videoCard);

        if (caseTextEl) caseTextEl.textContent = data.studiKasus || "Belum ada studi kasus untuk pertemuan ini.";

        renderFormatif(num, data);
    }

    /* ---------- Isi blok Uji Formatif (10 PG + 5 esai) untuk pertemuan tertentu ---------- */
    var OPTION_LETTERS = ["A", "B", "C", "D", "E"];

    function renderFormatif(num, data) {
        var mcqList = document.getElementById("pertemuan-mcq-list");
        var essayList = document.getElementById("pertemuan-essay-list");
        var submitBtn = document.getElementById("pertemuan-formatif-submit");
        var result = document.getElementById("pertemuan-formatif-result");
        var emptyMsg = document.getElementById("pertemuan-formatif-empty");
        var hasFormatif = data && Array.isArray(data.mcq) && data.mcq.length && Array.isArray(data.essay) && data.essay.length;

        if (result) { result.textContent = ""; result.className = "formatif-result"; }
        var sendWaBlockReset = document.getElementById("formatif-send-wa");
        if(sendWaBlockReset) sendWaBlockReset.hidden = true;
        pendingFormatifSubmission = null;
        if (emptyMsg) emptyMsg.hidden = !!hasFormatif;
        if (submitBtn) submitBtn.hidden = !hasFormatif;

        if (!hasFormatif) {
            if (mcqList) mcqList.innerHTML = "";
            if (essayList) essayList.innerHTML = "";
            return;
        }

        if (mcqList) {
            var mcqHtml = "";
            data.mcq.forEach(function (item, i) {
                mcqHtml += '<div class="card quiz-question formatif-question" data-idx="' + i + '">';
                mcqHtml += "<h4>" + (i + 1) + ". " + item.q + "</h4>";
                item.options.forEach(function (opt, j) {
                    mcqHtml +=
                        '<label><input type="radio" name="pertemuan-mcq-' + i + '" value="' + j +
                        '" data-correct="' + (j === item.correct ? "true" : "false") + '"> ' +
                        OPTION_LETTERS[j] + ". " + opt + "</label>";
                });
                mcqHtml += "</div>";
            });
            mcqList.innerHTML = mcqHtml;
        }

        if (essayList) {
            var essayHtml = "";
            data.essay.forEach(function (q, i) {
                essayHtml += '<div class="card formatif-question">';
                essayHtml += "<h4>" + (i + 1) + ". " + q + "</h4>";
                essayHtml += '<textarea placeholder="Tulis jawaban Anda di sini..."></textarea>';
                essayHtml += "</div>";
            });
            essayList.innerHTML = essayHtml;
        }
    }

    /* ---------- Buka halaman ---------- */
    function openPage(key, opts) {
        opts = opts || {};

        var pertemuanMatch = /^pertemuan-(\d+)$/.exec(key);
        var routeKey = pertemuanMatch ? "pertemuan" : key;
        if (pertemuanMatch) renderPertemuan(pertemuanMatch[1]);

        var isHome = routeKey === "home" || !pageMap[routeKey];

        // Tutup semua overlay lain
        overlayPages.forEach(function (el) { el.classList.remove("is-active"); });

        if (!isHome) {
            var target = pageMap[routeKey];
            target.classList.add("is-active");
            target.scrollTop = 0;
            document.body.classList.add("no-scroll");
            currentPage = key;
        } else {
            document.body.classList.remove("no-scroll");
            homePage.scrollTop = 0;
            if (opts.scrollHome !== false) {
                window.scrollTo({ top: 0, behavior: opts.smooth === false ? "auto" : "smooth" });
            }
            currentPage = "home";
        }

        // Saat melihat detail pertemuan, sorot nav "Materi" sebagai induknya
        updateActiveNav(pertemuanMatch ? "materi" : currentPage);
        closeMobileMenu();

        if (opts.pushHash !== false) {
            var hash = "#" + key;
            if (window.location.hash !== hash) {
                history.pushState({ page: key }, "", hash);
            }
        }

        // Pindahkan fokus ke judul halaman untuk aksesibilitas
        var focusTarget = isHome ? homePage : pageMap[routeKey];
        var heading = focusTarget.querySelector("h1, h2");
        if (heading) {
            heading.setAttribute("tabindex", "-1");
            heading.focus({ preventScroll: true });
        }
    }

    function updateActiveNav(key) {
        navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("data-page") === key);
        });
    }

    /* ---------- Klik nav & tombol data-goto ---------- */
    document.addEventListener("click", function (e) {
        var trigger = e.target.closest("[data-page], [data-goto]");
        if (!trigger) return;
        var key = trigger.getAttribute("data-page") || trigger.getAttribute("data-goto");
        if (!key) return;
        e.preventDefault();
        openPage(key);
    });

    /* ---------- Aksesibilitas keyboard untuk elemen [data-goto] non-tombol
       (mis. kartu Materi yang berperan sebagai role="button") ---------- */
    document.addEventListener("keydown", function (e) {
        if (e.key !== "Enter" && e.key !== " ") return;
        var trigger = e.target.closest('[data-goto][role="button"]');
        if (!trigger) return;
        e.preventDefault();
        trigger.click();
    });

    /* ---------- Navigasi lewat tombol back/forward browser ---------- */
    window.addEventListener("popstate", function () {
        var key = (window.location.hash || "#home").slice(1);
        openPage(key, { pushHash: false });
    });

    /* ---------- Escape untuk kembali ke Beranda ---------- */
    document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        var modalOpen = document.getElementById("video-modal") &&
            document.getElementById("video-modal").classList.contains("show");
        if (modalOpen) return; // biarkan handler modal yang menangani
        if (currentPage !== "home") {
            openPage("home");
        }
    });

    /* ---------- Menu mobile ---------- */
    function openMobileMenu() {
        nav.classList.add("open");
        backdrop.classList.add("show");
        menuToggle.setAttribute("aria-expanded", "true");
    }
    function closeMobileMenu() {
        nav.classList.remove("open");
        backdrop.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
    }
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            var isOpen = nav.classList.contains("open");
            if (isOpen) { closeMobileMenu(); } else { openMobileMenu(); }
        });
    }
    if (backdrop) {
        backdrop.addEventListener("click", closeMobileMenu);
    }

    /* ---------- Header menyusut saat scroll di Beranda ---------- */
    var lastScroll = 0;
    window.addEventListener("scroll", function () {
        if (currentPage !== "home") return;
        var y = window.scrollY;
        header.style.boxShadow = y > 10 ? "0 12px 30px -20px rgba(0,0,0,.6)" : "none";
        lastScroll = y;
    }, { passive: true });

    /* ---------- Theme toggle (gelap manuskrip <-> terang perkamen) ---------- */
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("theme-light");
        });
    }

    /* ---------- Video pembelajaran: tautkan ke YouTube ---------- */
    var videoModal = document.getElementById("video-modal");
    var videoFrame = document.getElementById("video-modal-frame");
    var videoTitle = document.getElementById("video-modal-title");
    var videoCards = document.querySelectorAll(".video-card");

    function extractYoutubeId(raw) {
        if (!raw) return null;
        raw = raw.trim();
        if (!raw) return null;
        // Sudah berupa ID polos (11 karakter, tanpa spasi/slash)
        if (/^[a-zA-Z0-9_-]{11}$/.test(raw)) return raw;
        var patterns = [
            /youtu\.be\/([a-zA-Z0-9_-]{11})/,
            /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
            /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
            /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
        ];
        for (var i = 0; i < patterns.length; i++) {
            var m = raw.match(patterns[i]);
            if (m) return m[1];
        }
        return null;
    }

    // Pasang thumbnail asli YouTube otomatis jika link sudah diisi
    videoCards.forEach(function (card) {
        refreshVideoCardVisual(card);
    });

    function openVideoModal(id, title) {
        videoFrame.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
        videoTitle.textContent = title || "";
        videoModal.hidden = false;
        videoModal.setAttribute("aria-hidden", "false");
        requestAnimationFrame(function () { videoModal.classList.add("show"); });
        document.body.classList.add("no-scroll");
    }

    function closeVideoModal() {
        videoModal.classList.remove("show");
        document.body.classList.remove("no-scroll");
        setTimeout(function () {
            videoModal.hidden = true;
            videoModal.setAttribute("aria-hidden", "true");
            videoFrame.src = ""; // hentikan pemutaran
        }, 200);
    }

    videoCards.forEach(function (card) {
        function handleOpen() {
            var id = extractYoutubeId(card.getAttribute("data-youtube"));
            var title = card.querySelector("h3") ? card.querySelector("h3").textContent : "";
            if (!id) {
                alert("Video belum ditautkan.\n\nUntuk menautkan, buka file index.html lalu isi atribut data-youtube pada kartu \"" + title + "\" dengan ID atau link YouTube.");
                return;
            }
            openVideoModal(id, title);
        }
        card.addEventListener("click", handleOpen);
        card.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen();
            }
        });
    });

    if (videoModal) {
        videoModal.querySelectorAll("[data-close-modal]").forEach(function (el) {
            el.addEventListener("click", closeVideoModal);
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && videoModal.classList.contains("show")) {
                closeVideoModal();
            }
        });
    }

    /* ---------- Filter sederhana untuk Materi & Video ---------- */
    function wireFilter(scopeSelector, listSelector, itemSelector) {
        var scope = document.querySelector(scopeSelector);
        if (!scope) return;
        var buttons = scope.querySelectorAll(".filter-btn");
        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                buttons.forEach(function (b) { b.classList.remove("active"); });
                btn.classList.add("active");
                // Demo sederhana: filter kategori nyata bisa dihubungkan
                // ke data-kategori pada tiap kartu bila tersedia.
            });
        });
    }
    wireFilter("#page-materi", ".materi-list", ".card");
    wireFilter("#page-video", ".video-list", ".video-card");

/* ---------- Identitas Mahasiswa (localStorage) ---------- */
    var IDENTITY_KEY = "ulumul-quran-identity";
    var identityModal = document.getElementById("identity-modal");
    var identityForm = document.getElementById("identity-form");
    var identityNimInput = document.getElementById("identity-nim");
    var identityNamaInput = document.getElementById("identity-nama");
    var identityKelasInput = document.getElementById("identity-kelas");
    var identitySavedCallback = null;

    function getIdentity() {
        try {
            var raw = localStorage.getItem(IDENTITY_KEY);
            if (!raw) return null;
            var parsed = JSON.parse(raw);
            if (parsed && parsed.nim && parsed.nama && parsed.kelas) return parsed;
            return null;
        } catch (e) {
            return null;
        }
    }

    function saveIdentity(data) {
        try {
            localStorage.setItem(IDENTITY_KEY, JSON.stringify(data));
        } catch (e) { /* localStorage tidak tersedia, abaikan */ }
    }

    function openIdentityModal(onSaved) {
        if (!identityModal) return;
        identitySavedCallback = onSaved || null;
        var existing = getIdentity();
        if (existing) {
            identityNimInput.value = existing.nim;
            identityNamaInput.value = existing.nama;
            identityKelasInput.value = existing.kelas;
        }
        identityModal.hidden = false;
        identityModal.setAttribute("aria-hidden", "false");
        requestAnimationFrame(function () { identityModal.classList.add("show"); });
        document.body.classList.add("no-scroll");
    }

    function closeIdentityModal() {
        if (!identityModal) return;
        identityModal.classList.remove("show");
        document.body.classList.remove("no-scroll");
        setTimeout(function () {
            identityModal.hidden = true;
            identityModal.setAttribute("aria-hidden", "true");
        }, 200);
    }

    if (identityForm) {
        identityForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var data = {
                nim: identityNimInput.value.trim(),
                nama: identityNamaInput.value.trim(),
                kelas: identityKelasInput.value.trim()
            };
            if (!data.nim || !data.nama || !data.kelas) return;
            saveIdentity(data);
            closeIdentityModal();
            if (identitySavedCallback) {
                identitySavedCallback(data);
                identitySavedCallback = null;
            }
        });
    }

    if (identityModal) {
        identityModal.querySelectorAll("[data-close-identity]").forEach(function (el) {
            el.addEventListener("click", closeIdentityModal);
        });
    }

    /* ---------- Tampilkan area konfirmasi + tombol kirim WA ---------- */
    function showSendWaBlock(identity) {
        var block = document.getElementById("formatif-send-wa");
        var note = document.getElementById("formatif-identity-note");
        if (!block || !note) return;
        note.textContent =
            "Data pengirim: " + identity.nim + " — " + identity.nama + " — " + identity.kelas +
            ". Pastikan data ini sudah benar sebelum mengirim.";
        block.hidden = false;
    }

    var editIdentityBtn = document.getElementById("formatif-edit-identity-btn");
    if (editIdentityBtn) {
        editIdentityBtn.addEventListener("click", function () {
            openIdentityModal(function (savedIdentity) {
                showSendWaBlock(savedIdentity);
            });
        });
    }

    /* ---------- Uji Formatif: kumpulkan & nilai 10 PG, siapkan data esai ---------- */
    var formatifSubmitBtn = document.getElementById("pertemuan-formatif-submit");
    if (formatifSubmitBtn) {
        formatifSubmitBtn.addEventListener("click", function () {
            var mcqList = document.getElementById("pertemuan-mcq-list");
            var essayList = document.getElementById("pertemuan-essay-list");
            var result = document.getElementById("pertemuan-formatif-result");
            var sendWaBlock = document.getElementById("formatif-send-wa");
            if (!mcqList || !result) return;

            if (sendWaBlock) sendWaBlock.hidden = true;

            var questions = Array.prototype.slice.call(mcqList.querySelectorAll(".formatif-question"));
            var answered = 0;
            var correct = 0;
            questions.forEach(function (q) {
                var checked = q.querySelector('input[type="radio"]:checked');
                if (checked) {
                    answered++;
                    if (checked.getAttribute("data-correct") === "true") correct++;
                }
            });

            if (answered < questions.length) {
                result.textContent = "Jawab semua soal pilihan ganda terlebih dahulu (" + answered + "/" + questions.length + " terisi).";
                result.className = "formatif-result error";
                return;
            }

            var essayEls = essayList ? Array.prototype.slice.call(essayList.querySelectorAll(".formatif-question")) : [];
            var essays = essayEls.map(function (el) {
                var qText = el.querySelector("h4") ? el.querySelector("h4").textContent : "";
                var textarea = el.querySelector("textarea");
                return { q: qText, a: textarea ? textarea.value.trim() : "" };
            });
            var essayFilled = essays.filter(function (e) { return e.a.length > 0; }).length;

            var score = Math.round((correct / questions.length) * 100);
            result.textContent =
                "Pilihan Ganda: " + correct + "/" + questions.length + " benar (skor " + score + "). " +
                "Esai: " + essayFilled + "/" + essays.length + " terisi.";
            result.className = "formatif-result success";

            var pertemuanData = PERTEMUAN_DATA[currentPertemuanNum] || {};
            pendingFormatifSubmission = {
                pertemuanNum: currentPertemuanNum,
                title: pertemuanData.title || "",
                correct: correct,
                total: questions.length,
                essays: essays
            };

            var identity = getIdentity();
            if (!identity) {
                openIdentityModal(function (savedIdentity) {
                    showSendWaBlock(savedIdentity);
                });
            } else {
                showSendWaBlock(identity);
            }
        });
    }

    /* ---------- Kirim esai ke Email dosen ---------- */
    var EMAIL_DOSEN = "rahmawatibeddu@uinpalopo.ac.id";
    var formatifEmailBtn = document.getElementById("formatif-email-btn");
    if (formatifEmailBtn){
        formatifEmailBtn.addEventListener("click", function (){
            var identity = getIdentity();
            if(!identity || !pendingFormatifSubmission) return;
            var sub = pendingFormatifSubmission;
            var subject = "Uji Formatif Ulumul Qur'an - Pertemuan " + sub.pertemuanNum + " - " + identity.nama;
            var lines = [];
            lines.push("Assalamu'alaikum, Ibu/Bapak Dosen.");
            lines.push("");
            lines.push("Saya ingin mengumpulkan Uji Formatif Ulumul Qur'an.");
            lines.push("");
            lines.push("Nama: " + identity.nama);
            lines.push("NIM: " + identity.nim);
            lines.push("Kelas/Angkatan: " + identity.kelas);
            lines.push("");
            lines.push("Pertemuan: " + sub.pertemuanNum + " - " + sub.title);
            lines.push("Skor Pilihan Ganda: " + sub.correct + "/" + sub.total);
            lines.push("");
            lines.push("Jawaban Esai:");
            sub.essays.forEach(function (item) {
                lines.push(item.q);
                lines.push("Jawaban: " + (item.a || "(belum diisi)"));
                lines.push("");
            });
            lines.push("Terima kasih.");

            var bodyEncoded = encodeURIComponent(lines.join("\n"));
            var subjectEncoded = encodeURIComponent(subject);

            var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1" + "&to=" + encodeURIComponent(EMAIL_DOSEN) + "&su=" +subjectEncoded + "&body=" + bodyEncoded;
            window.open(gmailUrl, "_blank");

            if (currentPertemuanNum) {
                markPertemuanComplete(currentPertemuanNum);
            }
        });
    }

    /* ---------- Form Kontak: kirim pesan via Email (Gmail compose) ---------- */
    var kontakForm = document.getElementById("kontak-form");
    if (kontakForm) {
        kontakForm.addEventListener("submit", function (e) {
            e.preventDefault();

            var namaEl = document.getElementById("kontak-nama");
            var nimEl = document.getElementById("kontak-nim");
            var subjekEl = document.getElementById("kontak-subjek");
            var pesanEl = document.getElementById("kontak-pesan");

            var nama = namaEl ? namaEl.value.trim() : "";
            var nim = nimEl ? nimEl.value.trim() : "";
            var subjekIsian = subjekEl ? subjekEl.value.trim() : "";
            var pesan = pesanEl ? pesanEl.value.trim() : "";

            if (!nama || !nim || !subjekIsian || !pesan) {
                alert("Mohon lengkapi semua kolom sebelum mengirim.");
                return;
            }

            var subject = "[Kontak LMS] " + subjekIsian + " - " + nama;
            var lines = [];
            lines.push("Assalamu'alaikum, Ibu/Bapak Dosen.");
            lines.push("");
            lines.push("Nama: " + nama);
            lines.push("NIM: " + nim);
            lines.push("");
            lines.push("Pesan:");
            lines.push(pesan);

            var bodyEncoded = encodeURIComponent(lines.join("\n"));
            var subjectEncoded = encodeURIComponent(subject);

            var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1" +
                "&to=" + encodeURIComponent(EMAIL_DOSEN) +
                "&su=" + subjectEncoded +
                "&body=" + bodyEncoded;
            window.open(gmailUrl, "_blank");

            kontakForm.reset();
        });
    }
    /* ---------- Pencarian materi ---------- */
    var materiSearch = document.getElementById("materi-search");
    if (materiSearch) {
        materiSearch.addEventListener("input", function () {
            var q = materiSearch.value.trim().toLowerCase();
            var cards = document.querySelectorAll("#page-materi .materi-list .card");
            cards.forEach(function (card) {
                var text = card.textContent.toLowerCase();
                card.style.display = text.indexOf(q) !== -1 ? "" : "none";
            });
        });
    }

    /* ---------- Progress belajar (persentase pertemuan yang dibuka) ---------- */
    var TOTAL_PERTEMUAN = 16;
    var completedPertemuan = new Set();

    function updateProgressUI() {
        var bar = document.getElementById("home-progress-bar");
        var text = document.getElementById("home-progress-text");
        var count = completedPertemuan.size;
        var pct = Math.min(100, Math.round((count / TOTAL_PERTEMUAN) * 100));
        if (bar) bar.style.width = pct + "%";
        if (text) text.textContent = count + " / " + TOTAL_PERTEMUAN + " Pertemuan selesai"
    }

    function markPertemuanComplete(num) {
    completedPertemuan.add(Number(num));
    updateProgressUI();
    }

    var _openPage = openPage;
    openPage = function (key, opts) {
        _openPage(key, opts);
        // Kunjungan ke detail pertemuan dihitung sebagai kunjungan "materi"
        if (key === "ujian") {
            markPertemuanComplete(8);
            markPertemuanComplete(16);
        }
    };
    updateProgressUI();

    /* ---------- Inisialisasi dari hash URL ---------- */
    var initialKey = (window.location.hash || "#home").slice(1);
    if (pageMap[initialKey] || /^pertemuan-\d+$/.test(initialKey)) {
        openPage(initialKey, { pushHash: false, smooth: false });
    } else {
        updateActiveNav("home");
    }

})();