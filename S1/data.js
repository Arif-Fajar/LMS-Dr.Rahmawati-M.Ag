/* ---------- Data 14 pertemuan aktif (dipakai halaman detail Materi) ----------
   Pertemuan 8 = UTS, Pertemuan 16 = UAS (tidak punya uji formatif, lihat halaman #ujian) */
var PERTEMUAN_DATA = {
    1: {
        title: "Pengantar Ilmu Fikih",
        groups: [
            { label: "Materi Pokok", items: [
                {
                    title: "Pengertian fikih secara bahasa dan istilah",
                    detail: "<h4>A. Pengertian secara Bahasa</h4><p>Secara bahasa, fikih berarti pemahaman yang mendalam terhadap suatu persoalan. Istilah fikih berasal dari kata Arab <em>fiqh</em> yang menunjukkan kemampuan memahami dan mengetahui sesuatu secara mendalam.</p><h4>B. Pengertian secara Istilah</h4><p>Secara istilah, fikih adalah ilmu yang membahas hukum-hukum syariat yang bersifat praktis dan diperoleh melalui dalil-dalil yang terperinci. Fikih mencakup ketentuan yang berkaitan dengan ibadah maupun hubungan antarmanusia.</p><h4>C. Karakteristik Fikih</h4><p>Fikih merupakan hasil pemahaman dan ijtihad manusia terhadap sumber-sumber syariat. Karena itu, dalam beberapa persoalan dapat ditemukan perbedaan pendapat di antara para ulama.</p>",
                    rangkuman: "Fikih secara bahasa berarti pemahaman yang mendalam, sedangkan secara istilah merupakan ilmu tentang hukum syariat praktis yang digali dari dalil-dalil terperinci."
                },
                {
                    title: "Perbedaan syariat, fikih, dan ushul fikih",
                    detail: "<h4>A. Syariat</h4><p>Syariat adalah ketentuan yang bersumber dari Allah dan Rasul-Nya yang menjadi pedoman kehidupan umat Islam. Syariat mencakup aspek akidah, ibadah, akhlak, dan hukum.</p><h4>B. Fikih</h4><p>Fikih merupakan hasil pemahaman dan ijtihad ulama terhadap dalil-dalil syariat untuk menentukan hukum praktis. Karena merupakan hasil ijtihad, fikih dapat memiliki perbedaan pendapat.</p><h4>C. Ushul Fikih</h4><p>Ushul fikih adalah ilmu yang membahas kaidah dan metode yang digunakan untuk menggali hukum dari dalil-dalil syariat. Dengan demikian, ushul fikih berfungsi sebagai metodologi dalam proses istinbath hukum.</p>",
                    rangkuman: "Syariat merupakan ketentuan yang bersumber dari wahyu, fikih merupakan hasil pemahaman dan ijtihad terhadap syariat, sedangkan ushul fikih merupakan metode untuk menggali hukum dari dalil."
                },
                {
                    title: "Ruang lingkup fikih (ibadah, muamalah, munakahat, jinayah, siyasah)",
                    detail: "<h4>A. Fikih Ibadah</h4><p>Fikih ibadah membahas ketentuan hubungan manusia dengan Allah, seperti thaharah, shalat, puasa, zakat, dan haji.</p><h4>B. Fikih Muamalah</h4><p>Fikih muamalah membahas hubungan antarmanusia dalam berbagai kegiatan sosial dan ekonomi, seperti jual beli, sewa-menyewa, utang-piutang, dan kerja sama.</p><h4>C. Fikih Munakahat</h4><p>Fikih munakahat membahas hukum perkawinan dan keluarga, termasuk akad nikah, mahar, nafkah, perceraian, hadhanah, dan persoalan keluarga lainnya.</p><h4>D. Fikih Jinayah</h4><p>Fikih jinayah membahas ketentuan yang berkaitan dengan tindak pidana dan sanksi dalam perspektif hukum Islam.</p><h4>E. Fikih Siyasah</h4><p>Fikih siyasah membahas persoalan pemerintahan, hubungan masyarakat dan negara, serta pengelolaan kepentingan umum berdasarkan prinsip-prinsip syariat.</p>",
                    rangkuman: "Ruang lingkup fikih meliputi ibadah, muamalah, munakahat, jinayah, dan siyasah yang mengatur berbagai aspek kehidupan manusia."
                },
                {
                    title: "Tujuan dan kedudukan fikih dalam kehidupan umat Islam",
                    detail: "<h4>A. Tujuan Fikih</h4><p>Fikih bertujuan memberikan pedoman praktis agar umat Islam dapat menjalankan ibadah dan aktivitas kehidupan sesuai dengan ketentuan syariat.</p><h4>B. Kedudukan Fikih</h4><p>Fikih memiliki kedudukan penting karena membantu menerjemahkan prinsip-prinsip syariat ke dalam ketentuan praktis yang dapat diterapkan dalam kehidupan sehari-hari.</p><h4>C. Fikih dalam Kehidupan</h4><p>Penerapan fikih dapat ditemukan dalam berbagai aktivitas, mulai dari ibadah, hubungan keluarga, transaksi ekonomi, hingga persoalan sosial. Pemahaman fikih membantu seseorang mengambil keputusan berdasarkan pertimbangan hukum Islam.</p>",
                    rangkuman: "Fikih berfungsi sebagai pedoman praktis bagi umat Islam dalam menjalankan ibadah dan mengatur berbagai aktivitas kehidupan sesuai prinsip syariat."
                }
            ] }
        ],
        output: "Output: Mampu menjelaskan pengertian, ruang lingkup, tujuan, dan kedudukan fikih dalam Islam",
        youtube: "",
        videoDesc: "Pertemuan 1 · Pengertian, ruang lingkup & kedudukan fikih",
        studiKasus: "Analisis perbedaan penerapan syariat dan fikih dalam menyikapi persoalan ibadah dan muamalah kontemporer.",
        mcq: [
            { q: "Secara bahasa, fikih berarti ....", options: ["Peraturan negara", "Pemahaman yang mendalam", "Kitab suci", "Adat istiadat"], correct: 1 },
            { q: "Secara istilah, fikih adalah ....", options: ["Ilmu tentang hukum-hukum syariat yang bersifat praktis (amaliyah) yang digali dari dalil-dalil terperinci", "Ilmu tentang akidah", "Ilmu tentang akhlak", "Ilmu tentang sejarah Islam"], correct: 0 },
            { q: "Perbedaan mendasar antara syariat dan fikih terletak pada ....", options: ["Syariat bersifat tetap, fikih bersifat dinamis karena hasil ijtihad", "Syariat hasil ijtihad ulama", "Fikih bersumber langsung dari wahyu", "Tidak ada perbedaan"], correct: 0 },
            { q: "Ushul fikih berfungsi sebagai ....", options: ["Metodologi penggalian hukum dari dalil", "Kumpulan hadis", "Kitab tafsir", "Kaidah bahasa Arab"], correct: 0 },
            { q: "Ruang lingkup fikih ibadah membahas tentang ....", options: ["Hubungan manusia dengan Allah", "Hubungan manusia dengan sesama dalam harta", "Hukum pidana Islam", "Hukum tata negara Islam"], correct: 0 },
            { q: "Fikih muamalah mengatur ....", options: ["Tata cara shalat", "Hubungan sosial dan ekonomi antarmanusia", "Rukun iman", "Waktu-waktu ibadah"], correct: 1 },
            { q: "Fikih munakahat membahas ....", options: ["Perkawinan dan hukum keluarga", "Jual beli", "Pidana Islam", "Ketatanegaraan"], correct: 0 },
            { q: "Fikih jinayah berkaitan dengan ....", options: ["Hukum pidana Islam", "Zakat", "Puasa", "Warisan"], correct: 0 },
            { q: "Salah satu tujuan mempelajari fikih adalah ....", options: ["Agar dapat beribadah dan bermuamalah sesuai tuntunan syariat", "Untuk menghafal Al-Qur'an", "Untuk menjadi hakim", "Untuk mengganti hukum negara"], correct: 0 },
            { q: "Kedudukan fikih dalam kehidupan umat Islam adalah sebagai ....", options: ["Pedoman praktis pelaksanaan ajaran Islam", "Pengganti akidah", "Pengganti Al-Qur'an", "Hukum adat"], correct: 0 }
        ],
        essay: [
            "Jelaskan pengertian fikih menurut bahasa dan istilah.",
            "Jelaskan perbedaan antara syariat, fikih, dan ushul fikih.",
            "Sebutkan dan jelaskan ruang lingkup kajian fikih.",
            "Mengapa fikih dapat bersifat dinamis sedangkan syariat bersifat tetap?",
            "Analisis pentingnya kedudukan fikih dalam kehidupan sehari-hari umat Islam."
        ]
    },
    2: {
        title: "Sumber Hukum Islam",
        groups: [
            { label: "Materi Pokok", items: [
                {
                    title: "Al-Qur'an sebagai sumber hukum utama",
                    detail: "<h4>A. Kedudukan Al-Qur'an</h4><p>Al-Qur'an merupakan sumber utama hukum Islam dan menjadi dasar bagi penetapan berbagai ketentuan syariat. Ayat-ayat Al-Qur'an memberikan petunjuk mengenai persoalan akidah, ibadah, muamalah, akhlak, dan kehidupan sosial.</p><h4>B. Al-Qur'an sebagai Dasar Istinbath</h4><p>Dalam proses istinbath, Al-Qur'an menjadi sumber pertama yang harus diperhatikan. Ketentuan yang telah ditetapkan secara jelas dalam Al-Qur'an menjadi dasar bagi sumber dan metode hukum lainnya.</p><h4>C. Ayat Hukum</h4><p>Ayat hukum dapat memberikan ketentuan secara langsung maupun prinsip umum yang kemudian dijelaskan melalui As-Sunnah dan metode istinbath yang sesuai.</p>",
                    rangkuman: "Al-Qur'an merupakan sumber hukum Islam yang utama dan menjadi dasar dalam proses penetapan hukum syariat."
                },
                {
                    title: "As-Sunnah/Hadis sebagai penjelas Al-Qur'an",
                    detail: "<h4>A. Pengertian As-Sunnah</h4><p>As-Sunnah adalah segala sesuatu yang berasal dari Nabi Muhammad SAW berupa perkataan, perbuatan, persetujuan, dan sifat yang menjadi pedoman bagi umat Islam.</p><h4>B. Fungsi terhadap Al-Qur'an</h4><p>As-Sunnah berfungsi menjelaskan ayat Al-Qur'an yang masih bersifat umum, merinci ketentuan yang belum dijelaskan secara detail, serta memberikan ketentuan dalam persoalan tertentu.</p><h4>C. Hubungan Al-Qur'an dan Sunnah</h4><p>Al-Qur'an dan As-Sunnah memiliki hubungan yang erat dalam pembentukan hukum Islam. As-Sunnah tidak menggantikan Al-Qur'an, tetapi berfungsi menjelaskan dan menerapkan petunjuk yang terkandung di dalamnya.</p>",
                    rangkuman: "As-Sunnah merupakan sumber hukum Islam yang berfungsi menjelaskan, merinci, dan menerapkan petunjuk Al-Qur'an."
                },
                {
                    title: "Ijma' dan Qiyas sebagai sumber hukum yang disepakati",
                    detail: "<h4>A. Ijma'</h4><p>Ijma' adalah kesepakatan para mujtahid dari umat Islam pada suatu masa mengenai hukum syariat terhadap suatu persoalan. Ijma' digunakan ketika terdapat kesepakatan yang memenuhi ketentuan metodologisnya.</p><h4>B. Qiyas</h4><p>Qiyas adalah menetapkan hukum suatu persoalan baru dengan menyamakannya dengan persoalan yang telah memiliki ketentuan hukum karena adanya kesamaan <em>'illat</em>.</p><h4>C. Peran Ijma' dan Qiyas</h4><p>Kedua metode tersebut membantu menjawab persoalan hukum yang berkembang. Qiyas terutama digunakan ketika tidak ditemukan ketentuan langsung mengenai persoalan baru dalam nash.</p>",
                    rangkuman: "Ijma' merupakan kesepakatan para mujtahid mengenai suatu hukum, sedangkan qiyas menetapkan hukum perkara baru berdasarkan kesamaan 'illat dengan perkara yang telah memiliki hukum."
                },
                {
                    title: "Sumber hukum yang diperselisihkan: istihsan, maslahah mursalah, 'urf, sadd adz-dzari'ah, istishab",
                    detail: "<h4>A. Istihsan</h4><p>Istihsan merupakan metode memilih ketentuan hukum yang dipandang lebih kuat atau lebih sesuai karena adanya pertimbangan dalil tertentu, dibandingkan penerapan qiyas secara umum dalam kasus tertentu.</p><h4>B. Maslahah Mursalah</h4><p>Maslahah mursalah adalah pertimbangan kemaslahatan yang tidak memiliki dalil khusus yang secara eksplisit menerima atau menolaknya, tetapi sejalan dengan tujuan syariat.</p><h4>C. 'Urf</h4><p>'Urf adalah kebiasaan masyarakat yang dapat dipertimbangkan dalam penetapan hukum selama tidak bertentangan dengan prinsip syariat.</p><h4>D. Sadd Adz-Dzari'ah</h4><p>Sadd adz-dzari'ah berarti menutup sarana yang dapat mengantarkan kepada kerusakan atau kemudaratan.</p><h4>E. Istishab</h4><p>Istishab adalah mempertahankan keberlakuan hukum atau keadaan yang telah ada sampai ditemukan dalil yang menunjukkan perubahan.</p>",
                    rangkuman: "Istihsan, maslahah mursalah, 'urf, sadd adz-dzari'ah, dan istishab merupakan metode istinbath yang digunakan dengan persyaratan tertentu dan memiliki perbedaan penerimaan di kalangan ulama."
                }
            ]}
        ],
        output: "Output: Mampu mengidentifikasi dan menjelaskan sumber-sumber hukum Islam",
        youtube: "",
        videoDesc: "Pertemuan 2 · Al-Qur'an, As-Sunnah, Ijma' & Qiyas",
        studiKasus: "Analisis penggunaan maslahah mursalah dan 'urf dalam penetapan hukum atas persoalan yang tidak diatur secara eksplisit dalam nash.",
        mcq: [
            { q: "Sumber hukum Islam yang paling utama adalah ....", options: ["Al-Qur'an", "Ijma'", "Qiyas", "'Urf"], correct: 0 },
            { q: "As-Sunnah berfungsi sebagai ....", options: ["Penjelas dan penguat hukum dalam Al-Qur'an", "Pengganti Al-Qur'an", "Kitab sejarah", "Adat masyarakat Arab"], correct: 0 },
            { q: "Ijma' adalah ....", options: ["Kesepakatan para mujtahid atas suatu hukum syariat", "Pendapat pribadi seorang ulama", "Kebiasaan masyarakat", "Tafsir Al-Qur'an"], correct: 0 },
            { q: "Qiyas berarti ....", options: ["Menyamakan suatu perkara baru dengan perkara yang sudah ada hukumnya karena kesamaan illat", "Menghafal hadis", "Membaca Al-Qur'an", "Menetapkan ijma'"], correct: 0 },
            { q: "Istihsan adalah ....", options: ["Berpindah dari satu hukum ke hukum lain karena ada dalil yang lebih kuat", "Mengabaikan nash", "Mengikuti adat semata", "Menolak qiyas selamanya"], correct: 0 },
            { q: "Maslahah mursalah digunakan ketika ....", options: ["Tidak ada nash yang secara eksplisit mengatur suatu perkara namun mengandung kemaslahatan", "Nash sudah jelas mengatur", "Terdapat ijma' yang kuat", "Terdapat qiyas yang shahih"], correct: 0 },
            { q: "'Urf dalam istinbath hukum berarti ....", options: ["Kebiasaan masyarakat yang tidak bertentangan dengan syariat", "Hukum yang dibuat pemerintah", "Pendapat pribadi hakim", "Hadis dhaif"], correct: 0 },
            { q: "Sadd adz-dzari'ah berarti ....", options: ["Menutup jalan menuju kerusakan/kemudaratan", "Membuka peluang ijtihad", "Menghapus hukum lama", "Mengganti Al-Qur'an"], correct: 0 },
            { q: "Istishab adalah ....", options: ["Menetapkan berlakunya hukum yang telah ada selama tidak ada dalil yang mengubahnya", "Membatalkan hukum lama tanpa dalil", "Mengikuti pendapat mayoritas", "Mengabaikan hukum asal"], correct: 0 },
            { q: "Sumber hukum yang disepakati (muttafaq) ulama meliputi ....", options: ["Al-Qur'an, As-Sunnah, Ijma', dan Qiyas", "Istihsan dan 'urf saja", "Maslahah mursalah saja", "Istishab saja"], correct: 0 }
        ],
        essay: [
            "Jelaskan kedudukan Al-Qur'an sebagai sumber hukum Islam yang utama.",
            "Jelaskan fungsi As-Sunnah terhadap Al-Qur'an.",
            "Apa perbedaan antara ijma' dan qiyas?",
            "Jelaskan salah satu sumber hukum yang diperselisihkan beserta contohnya.",
            "Analisis pentingnya maslahah mursalah dalam menjawab persoalan hukum kontemporer."
        ]
    },
    3: {
        title: "Kaidah Dasar dalam Fikih",
        groups: [
            { label: "Materi Pokok",items: [
                {
                    title: "Pengertian kaidah fikih",
                    detail: "<h4>A. Pengertian</h4><p>Kaidah fikih adalah prinsip umum yang mencakup sejumlah persoalan fikih yang memiliki karakteristik atau hukum yang sejenis. Kaidah tersebut membantu mengelompokkan berbagai persoalan hukum ke dalam prinsip yang lebih umum.</p><h4>B. Fungsi</h4><p>Kaidah fikih digunakan untuk mempermudah memahami dan menganalisis berbagai persoalan fikih. Dengan menguasai kaidah umum, seseorang dapat memahami hubungan antara banyak kasus yang berbeda secara lebih sistematis.</p><h4>C. Kedudukan</h4><p>Kaidah fikih bukan pengganti dalil Al-Qur'an dan As-Sunnah, tetapi merupakan hasil perumusan prinsip-prinsip hukum yang dapat membantu penerapan fikih.</p>",
                    rangkuman: "Kaidah fikih adalah prinsip umum yang mencakup berbagai persoalan fikih sejenis dan berfungsi mempermudah pemahaman serta analisis hukum."
                },
                {
                    title: "Al-Qawa'id al-Khams (lima kaidah fikih pokok)",
                    detail: "<h4>A. Pengertian</h4><p>Al-Qawa'id al-Khams adalah lima kaidah fikih pokok yang memiliki cakupan sangat luas dan menjadi dasar bagi banyak kaidah cabang.</p><h4>B. Lima Kaidah Pokok</h4><p>Lima kaidah tersebut adalah <em>al-umuru bi maqashidiha</em> (segala perkara tergantung tujuannya), <em>al-yaqin la yazulu bisy-syak</em> (keyakinan tidak hilang karena keraguan), <em>al-masyaqqah tajlibut taisir</em> (kesulitan mendatangkan kemudahan), <em>adh-dhararu yuzal</em> (kemudaratan harus dihilangkan), dan <em>al-'adah muhakkamah</em> (adat dapat menjadi dasar hukum).</p><h4>C. Manfaat</h4><p>Lima kaidah tersebut membantu memahami pola umum hukum fikih dan menerapkannya terhadap berbagai persoalan baru.</p>",
                    rangkuman: "Al-Qawa'id al-Khams terdiri dari lima kaidah utama yang mencakup niat, keyakinan, kemudahan, penghilangan mudarat, dan pertimbangan adat."
                },
                {
                    title: "Kaidah al-umuru bi maqashidiha",
                    detail: "<h4>A. Pengertian</h4><p>Kaidah <em>al-umuru bi maqashidiha</em> berarti segala perkara bergantung pada tujuan atau maksudnya. Kaidah ini menunjukkan pentingnya niat dalam menentukan nilai dan konsekuensi suatu perbuatan.</p><h4>B. Penerapan</h4><p>Dalam ibadah, niat menjadi unsur penting yang membedakan satu jenis ibadah dengan ibadah lainnya. Dalam transaksi, maksud para pihak juga dapat membantu memahami karakter suatu akad selama tidak bertentangan dengan ketentuan syariat.</p><h4>C. Batasan</h4><p>Niat yang baik tidak dapat mengubah perbuatan yang secara syariat dilarang menjadi diperbolehkan. Karena itu, kaidah ini tetap harus diterapkan bersama dalil dan ketentuan hukum lainnya.</p>",
                    rangkuman: "Al-umuru bi maqashidiha menegaskan bahwa tujuan dan niat memiliki peran penting dalam menentukan hukum dan nilai suatu perbuatan."
                },
                {
                    title: "Kaidah al-yaqin la yazulu bisy-syak",
                    detail: "<h4>A. Pengertian</h4><p>Kaidah <em>al-yaqin la yazulu bisy-syak</em> berarti keyakinan tidak dapat dihilangkan hanya karena muncul keraguan. Keadaan yang telah diyakini tetap dianggap berlaku sampai terdapat kepastian yang menunjukkan perubahan.</p><h4>B. Contoh dalam Thaharah</h4><p>Seseorang yang yakin telah berwudhu kemudian merasa ragu apakah wudhunya batal atau tidak, maka keadaan sucinya tetap dianggap ada sampai terdapat kepastian bahwa wudhunya batal.</p><h4>C. Fungsi</h4><p>Kaidah ini memberikan kepastian dalam penerapan hukum dan mencegah seseorang meninggalkan keadaan yang telah diyakini hanya berdasarkan keraguan.</p>",
                    rangkuman: "Al-yaqin la yazulu bisy-syak berarti keadaan yang telah diyakini tetap berlaku sampai terdapat kepastian yang membuktikan perubahan."
                }
            ] }
        ],
        output: "Output: Mampu menjelaskan kaidah dasar fikih dan penerapannya",
        youtube: "",
        videoDesc: "Pertemuan 3 · Al-Qawa'id al-Khams & kaidah al-umuru bi maqashidiha",
        studiKasus: "Penerapan kaidah al-umuru bi maqashidiha dalam menentukan keabsahan niat ibadah sehari-hari.",
        mcq: [
            { q: "Kaidah fikih adalah ....", options: ["Prinsip umum yang mencakup banyak persoalan fikih yang sejenis", "Hadis nabi", "Ayat Al-Qur'an", "Pendapat pribadi ulama"], correct: 0 },
            { q: "Al-Qawa'id al-Khams merupakan ....", options: ["Lima kaidah fikih pokok yang menjadi induk kaidah-kaidah lainnya", "Lima rukun Islam", "Lima syarat wudhu", "Lima waktu shalat"], correct: 0 },
            { q: "\"الأمور بمقاصدها\" berarti ....", options: ["Segala perkara tergantung tujuannya", "Keyakinan tidak hilang karena keraguan", "Kesulitan mendatangkan kemudahan", "Adat menjadi hukum"], correct: 0 },
            { q: "Niat dalam ibadah menentukan ....", options: ["Sah atau tidaknya suatu amalan", "Banyaknya pahala saja", "Waktu pelaksanaan ibadah", "Tempat pelaksanaan ibadah"], correct: 0 },
            { q: "Kaidah \"اليقين لا يزول بالشك\" berarti ....", options: ["Keyakinan tidak hilang karena adanya keraguan", "Keraguan menghapus keyakinan", "Adat menjadi hukum", "Kesulitan mendatangkan kemudahan"], correct: 0 },
            { q: "Contoh penerapan kaidah al-yaqin la yazulu bisy-syak adalah ....", options: ["Seseorang yang yakin telah berwudhu tetap dianggap suci meski ragu telah batal", "Membatalkan wudhu karena ragu", "Mengulang shalat karena ragu", "Meninggalkan ibadah karena ragu"], correct: 0 },
            { q: "Kaidah fikih berfungsi untuk ....", options: ["Mempermudah pemahaman dan penerapan hukum fikih", "Menghapus Al-Qur'an", "Mengganti hadis", "Membatalkan ijma'"], correct: 0 },
            { q: "Lima kaidah fikih pokok mencakup persoalan ....", options: ["Niat, keyakinan, kesulitan, kemudaratan, dan adat", "Rukun shalat", "Rukun haji", "Syarat wudhu"], correct: 0 },
            { q: "Kaidah al-umuru bi maqashidiha banyak diterapkan dalam ....", options: ["Penentuan sah tidaknya suatu akad atau ibadah berdasarkan niat", "Penentuan waktu shalat", "Penentuan arah kiblat", "Penentuan jumlah rakaat"], correct: 0 },
            { q: "Manfaat mempelajari kaidah fikih bagi mahasiswa hukum adalah ....", options: ["Memudahkan analisis terhadap persoalan hukum yang beragam", "Menghafal seluruh hadis", "Mengganti tugas hakim", "Menghapus perbedaan mazhab"], correct: 0 }
        ],
        essay: [
            "Jelaskan pengertian kaidah fikih dan fungsinya.",
            "Sebutkan lima kaidah fikih pokok (Al-Qawa'id al-Khams).",
            "Jelaskan makna kaidah al-umuru bi maqashidiha beserta contohnya.",
            "Jelaskan makna kaidah al-yaqin la yazulu bisy-syak beserta contohnya.",
            "Analisis pentingnya kaidah fikih dalam menyelesaikan persoalan hukum yang tidak diatur secara eksplisit."
        ]
    },
    4: {
        title: "Prinsip Kemudahan dalam Islam",
        groups: [
            { label: "Materi Pokok",items: [
                {
                    title: "Kaidah al-masyaqqah tajlibut taisir",
                    detail: "<h4>A. Pengertian</h4><p>Kaidah <em>al-masyaqqah tajlibut taisir</em> berarti kesulitan dapat menjadi sebab adanya kemudahan dalam penerapan hukum. Islam memberikan keringanan ketika seseorang menghadapi kesulitan yang diakui secara syar'i.</p><h4>B. Bentuk Kemudahan</h4><p>Kemudahan dapat berupa perubahan cara pelaksanaan ibadah, pengurangan beban tertentu, atau penggantian bentuk pelaksanaan dengan cara yang diperbolehkan syariat.</p><h4>C. Batasan</h4><p>Tidak semua kesulitan otomatis menyebabkan keringanan. Kesulitan tersebut harus memiliki alasan yang diakui syariat dan penerapan keringanan tetap mengikuti ketentuan yang berlaku.</p>",
                    rangkuman: "Al-masyaqqah tajlibut taisir menunjukkan bahwa kesulitan yang diakui syariat dapat menjadi sebab munculnya keringanan hukum."
                },
                {
                    title: "Kaidah adh-dhararu yuzal",
                    detail: "<h4>A. Pengertian</h4><p>Kaidah <em>adh-dhararu yuzal</em> berarti kemudaratan harus dihilangkan. Prinsip ini mengarahkan agar tindakan yang menimbulkan kerugian atau bahaya terhadap seseorang maupun masyarakat dicegah atau dihilangkan.</p><h4>B. Penerapan</h4><p>Kaidah ini dapat diterapkan dalam berbagai persoalan muamalah dan kehidupan sosial, misalnya mencegah transaksi yang merugikan salah satu pihak atau menghilangkan kondisi yang membahayakan orang lain.</p><h4>C. Hubungan dengan Kemaslahatan</h4><p>Penghilangan kemudaratan bertujuan menjaga kepentingan manusia dan mewujudkan kemaslahatan yang sesuai dengan prinsip syariat.</p>",
                    rangkuman: "Adh-dhararu yuzal menegaskan bahwa kemudaratan harus dicegah dan dihilangkan untuk menjaga kemaslahatan manusia."
                },
                {
                    title: "Kaidah al-'adah muhakkamah",
                    detail: "<h4>A. Pengertian</h4><p>Kaidah <em>al-'adah muhakkamah</em> berarti adat atau kebiasaan dapat dipertimbangkan sebagai dasar hukum dalam kondisi tertentu.</p><h4>B. Syarat Adat</h4><p>Adat yang dipertimbangkan harus berlaku secara nyata dalam masyarakat, tidak bertentangan dengan nash atau prinsip syariat, serta relevan dengan persoalan yang sedang dibahas.</p><h4>C. Contoh</h4><p>Kebiasaan masyarakat dapat digunakan untuk memahami ukuran atau bentuk tertentu dalam transaksi, pemberian mahar, atau kebiasaan sosial selama tidak bertentangan dengan ketentuan syariat.</p>",
                    rangkuman: "Al-'adah muhakkamah memungkinkan adat yang berlaku di masyarakat menjadi pertimbangan hukum selama tidak bertentangan dengan syariat."
                },
                {
                    title: "Konsep rukhsah (keringanan) dalam ibadah",
                    detail: "<h4>A. Pengertian</h4><p>Rukhsah adalah keringanan hukum yang diberikan syariat karena adanya kondisi atau uzur tertentu. Rukhsah menunjukkan adanya perhatian syariat terhadap kemampuan dan keadaan manusia.</p><h4>B. Contoh Rukhsah</h4><p>Contoh rukhsah antara lain diperbolehkannya menjamak atau mengqashar shalat bagi musafir sesuai ketentuan, serta keringanan tidak berpuasa bagi orang yang memenuhi kondisi yang dibenarkan syariat.</p><h4>C. Tujuan Rukhsah</h4><p>Rukhsah bertujuan memberikan kemudahan tanpa menghilangkan prinsip dan tujuan dasar ibadah. Penggunaannya tetap harus sesuai sebab dan ketentuan yang ditetapkan syariat.</p>",
                    rangkuman: "Rukhsah adalah keringanan yang diberikan syariat karena adanya uzur tertentu untuk memudahkan pelaksanaan ibadah tanpa mengabaikan ketentuannya."
                }
            ] }
        ],
        output: "Output: Mampu menerapkan prinsip kemudahan dan konsep rukhsah dalam persoalan ibadah dan muamalah",
        youtube: "",
        videoDesc: "Pertemuan 4 · Al-masyaqqah tajlibut taisir & konsep rukhsah",
        studiKasus: "Analisis penerapan rukhsah bagi musafir dan orang sakit dalam pelaksanaan shalat dan puasa.",
        mcq: [
            { q: "\"المشقة تجلب التيسير\" berarti ....", options: ["Kesulitan mendatangkan kemudahan", "Keyakinan tidak hilang karena keraguan", "Adat menjadi hukum", "Bahaya harus dihilangkan"], correct: 0 },
            { q: "\"الضرر يزال\" berarti ....", options: ["Kemudaratan harus dihilangkan", "Kesulitan mendatangkan kemudahan", "Adat menjadi hukum", "Niat menentukan hukum"], correct: 0 },
            { q: "\"العادة محكمة\" berarti ....", options: ["Adat kebiasaan dapat menjadi dasar hukum", "Semua adat wajib diikuti", "Semua adat dilarang", "Adat menghapus syariat"], correct: 0 },
            { q: "Rukhsah dalam fikih berarti ....", options: ["Keringanan hukum yang diberikan karena adanya sebab tertentu", "Penambahan kewajiban", "Penghapusan seluruh ibadah", "Penggantian rukun ibadah"], correct: 0 },
            { q: "Salah satu contoh rukhsah adalah ....", options: ["Diperbolehkannya berbuka puasa bagi musafir", "Diwajibkannya puasa bagi orang sakit", "Dilarangnya shalat jamak", "Diwajibkannya haji bagi yang tidak mampu"], correct: 0 },
            { q: "Adat dapat dijadikan dasar hukum apabila ....", options: ["Tidak bertentangan dengan syariat", "Bertentangan dengan Al-Qur'an", "Merugikan masyarakat", "Melanggar hukum"], correct: 0 },
            { q: "Kaidah adh-dhararu yuzal banyak diterapkan dalam ....", options: ["Persoalan yang menimbulkan kemudaratan bagi pelakunya", "Penentuan waktu shalat", "Penentuan arah kiblat", "Penentuan jumlah rakaat"], correct: 0 },
            { q: "Prinsip kemudahan dalam Islam bertujuan ....", options: ["Meringankan beban pelaksanaan ibadah tanpa menghapus kewajibannya", "Menghapus seluruh kewajiban", "Menambah kesulitan", "Mengubah syariat"], correct: 0 },
            { q: "Salah satu bentuk penerapan al-'adah muhakkamah adalah ....", options: ["Penggunaan kebiasaan setempat dalam menentukan ukuran mahar", "Penghapusan mahar", "Penghapusan wali nikah", "Penghapusan saksi nikah"], correct: 0 },
            { q: "Rukhsah diberikan kepada orang yang mengalami ....", options: ["Kesulitan atau uzur syar'i", "Kemudahan berlebih", "Kekayaan berlebih", "Kesehatan prima"], correct: 0 }
        ],
        essay: [
            "Jelaskan makna kaidah المشقة تجلب التيسير beserta contohnya.",
            "Jelaskan makna kaidah الضرر يزال beserta contohnya.",
            "Jelaskan syarat adat yang dapat dijadikan dasar hukum (al-'adah muhakkamah).",
            "Apa yang dimaksud dengan rukhsah? Berikan contohnya dalam ibadah shalat dan puasa.",
            "Analisis penerapan prinsip kemudahan dalam persoalan ibadah kontemporer."
        ]
    },
    5: {
        title: "Thaharah I (Bersuci)",
        groups: [
            { label: "Materi Pokok",    items: [
                {
                    title: "Pengertian thaharah",
                    detail: "<h4>A. Pengertian</h4><p>Thaharah secara bahasa berarti bersih dan suci. Secara istilah, thaharah adalah proses bersuci dari hadas dan najis sesuai dengan ketentuan fikih agar seseorang dapat melaksanakan ibadah tertentu.</p><h4>B. Kedudukan Thaharah</h4><p>Thaharah memiliki kedudukan penting dalam ibadah, terutama shalat. Bersuci dari hadas dan najis merupakan bagian dari persyaratan yang harus diperhatikan sebelum melaksanakan ibadah tertentu.</p><h4>C. Sarana Bersuci</h4><p>Bersuci dapat dilakukan dengan menggunakan air yang memenuhi ketentuan syariat. Dalam kondisi tertentu, tayammum dapat menjadi pengganti bersuci menggunakan air sesuai dengan syarat yang telah ditentukan.</p>",
                    rangkuman: "Thaharah adalah proses bersuci dari hadas dan najis sesuai ketentuan fikih dan menjadi bagian penting dalam persiapan pelaksanaan ibadah."
                },
                {
                    title: "Macam-macam hadas (kecil dan besar)",
                    detail: "<h4>A. Hadas Kecil</h4><p>Hadas kecil adalah keadaan tidak suci yang menyebabkan seseorang harus berwudhu sebelum melakukan ibadah tertentu seperti shalat. Hadas kecil dapat terjadi karena beberapa hal, seperti keluarnya sesuatu dari qubul atau dubur dan sebab lain yang menjadi pembatal wudhu.</p><h4>B. Hadas Besar</h4><p>Hadas besar adalah keadaan yang mengharuskan seseorang melakukan mandi wajib. Contohnya adalah janabah dan berakhirnya haid atau nifas.</p><h4>C. Perbedaan</h4><p>Hadas kecil pada umumnya disucikan dengan wudhu, sedangkan hadas besar disucikan dengan mandi wajib. Dalam kondisi tertentu yang memenuhi syarat, tayammum dapat menggantikan wudhu atau mandi.</p>",
                    rangkuman: "Hadas terbagi menjadi hadas kecil yang pada dasarnya disucikan dengan wudhu dan hadas besar yang disucikan dengan mandi wajib."
                },
                {
                    title: "Jenis-jenis najis (mukhaffafah, mutawassithah, mughallazhah)",
                    detail: "<h4>A. Najis Mukhaffafah</h4><p>Najis mukhaffafah adalah najis ringan. Dalam pembahasan fikih yang umum diajarkan, contohnya adalah air kencing bayi laki-laki yang belum mengonsumsi makanan selain ASI.</p><h4>B. Najis Mutawassithah</h4><p>Najis mutawassithah adalah najis sedang. Contohnya antara lain darah, nanah, dan kotoran. Najis jenis ini perlu dihilangkan zat, warna, bau, atau sifatnya sesuai ketentuan yang berlaku.</p><h4>C. Najis Mughallazhah</h4><p>Najis mughallazhah adalah najis berat. Dalam mazhab Syafi'i, contohnya adalah najis yang berasal dari anjing dan babi serta turunannya. Cara penyuciannya memiliki ketentuan khusus.</p>",
                    rangkuman: "Najis secara umum dibedakan menjadi mukhaffafah (ringan), mutawassithah (sedang), dan mughallazhah (berat), dengan tata cara penyucian yang berbeda."
                },
                {
                    title: "Cara menyucikan najis menurut fikih",
                    detail: "<h4>A. Najis Mukhaffafah</h4><p>Najis mukhaffafah memiliki tata cara penyucian yang lebih ringan. Dalam ketentuan fikih Syafi'i, bagian yang terkena najis cukup diperciki air setelah menghilangkan benda najisnya apabila terdapat benda najis yang tampak.</p><h4>B. Najis Mutawassithah</h4><p>Najis mutawassithah disucikan dengan menghilangkan benda najis dan membersihkan bagian yang terkena dengan air hingga sifat najisnya hilang sesuai kemampuan.</p><h4>C. Najis Mughallazhah</h4><p>Dalam mazhab Syafi'i, bagian yang terkena najis mughallazhah dibasuh tujuh kali dan salah satunya menggunakan tanah atau media yang memiliki fungsi serupa sesuai ketentuan fikih.</p><h4>D. Prinsip Penyucian</h4><p>Tujuan penyucian adalah menghilangkan najis dari tempat, pakaian, atau benda yang terkena sehingga kembali dalam keadaan suci sesuai ketentuan syariat.</p>",
                    rangkuman: "Penyucian najis dilakukan sesuai jenisnya; najis ringan, sedang, dan berat memiliki ketentuan penyucian yang berbeda."
                }
            ]}
        ],
        output: "Output: Mampu menjelaskan konsep thaharah, hadas, najis, dan cara menyucikannya",
        youtube: "",
        videoDesc: "Pertemuan 5 · Hadas, najis & cara menyucikannya",
        studiKasus: "Analisis cara menyucikan berbagai jenis najis yang sering dijumpai dalam kehidupan sehari-hari.",
        mcq: [
            { q: "Thaharah secara bahasa berarti ....", options: ["Bersuci atau kebersihan", "Ibadah", "Kewajiban", "Larangan"], correct: 0 },
            { q: "Hadas kecil dapat disucikan dengan ....", options: ["Wudhu", "Mandi wajib", "Tayammum saja", "Mencuci pakaian"], correct: 0 },
            { q: "Hadas besar disucikan dengan ....", options: ["Mandi wajib (mandi junub)", "Wudhu saja", "Bertayammum tanpa sebab", "Membasuh tangan"], correct: 0 },
            { q: "Najis mukhaffafah adalah ....", options: ["Najis ringan, seperti air kencing bayi laki-laki yang belum makan selain ASI", "Najis berat seperti air liur anjing", "Najis sedang seperti darah", "Najis yang tidak perlu disucikan"], correct: 0 },
            { q: "Najis mughallazhah adalah ....", options: ["Najis berat, seperti anjing dan babi", "Najis ringan", "Najis sedang", "Najis yang boleh diabaikan"], correct: 0 },
            { q: "Cara menyucikan najis mughallazhah adalah ....", options: ["Dibasuh tujuh kali, salah satunya dengan tanah/debu", "Dibasuh sekali dengan air", "Diusap dengan kain", "Dijemur di bawah matahari"], correct: 0 },
            { q: "Najis mutawassithah mencakup ....", options: ["Kebanyakan najis seperti darah, nanah, dan kotoran hewan", "Air kencing bayi laki-laki", "Air liur anjing dan babi", "Debu dan tanah"], correct: 0 },
            { q: "Salah satu hikmah thaharah adalah ....", options: ["Menjaga kebersihan dan kesucian diri sebagai syarat ibadah", "Menambah beban ibadah", "Menghapus kewajiban shalat", "Mengganti wudhu"], correct: 0 },
            { q: "Air yang boleh digunakan untuk bersuci disebut ....", options: ["Air mutlak (suci dan menyucikan)", "Air musta'mal", "Air mutanajjis", "Air yang telah berubah warnanya karena najis"], correct: 0 },
            { q: "Thaharah menjadi syarat sah bagi pelaksanaan ....", options: ["Shalat", "Zakat", "Puasa", "Haji semata"], correct: 0 }
        ],
        essay: [
            "Jelaskan pengertian thaharah dan kedudukannya dalam ibadah.",
            "Jelaskan perbedaan hadas kecil dan hadas besar beserta cara menyucikannya.",
            "Sebutkan macam-macam najis dan cara menyucikan masing-masing.",
            "Jelaskan syarat air yang boleh digunakan untuk bersuci.",
            "Analisis hikmah disyariatkannya thaharah dalam Islam."
        ]
    },
    6: {
        title: "Thaharah II",
        groups: [
            { label: "Materi Pokok",items: [
                {
                    title: "Rukun, syarat, dan sunnah wudhu",
                    detail: "<h4>A. Rukun Wudhu</h4><p>Rukun wudhu adalah bagian yang harus dilakukan agar wudhu sah. Dalam mazhab Syafi'i, rukun wudhu meliputi niat, membasuh wajah, membasuh kedua tangan sampai siku, mengusap sebagian kepala, membasuh kedua kaki sampai mata kaki, dan tertib.</p><h4>B. Syarat Wudhu</h4><p>Syarat wudhu berkaitan dengan keadaan orang yang berwudhu, air yang digunakan, serta terpenuhinya ketentuan agar proses wudhu dapat menghasilkan kesucian.</p><h4>C. Sunnah Wudhu</h4><p>Sunnah wudhu antara lain membaca basmalah, berkumur-kumur, memasukkan air ke hidung, mendahulukan anggota kanan, dan mengulangi basuhan sebanyak tiga kali pada bagian yang disunnahkan.</p>",
                    rangkuman: "Wudhu memiliki rukun yang wajib dipenuhi dan beberapa sunnah yang menyempurnakan pelaksanaannya sesuai ketentuan fikih."
                },
                {
                    title: "Hal-hal yang membatalkan wudhu",
                    detail: "<h4>A. Keluarnya Sesuatu dari Qubul atau Dubur</h4><p>Keluarnya sesuatu dari qubul atau dubur, seperti buang air kecil, buang air besar, atau kentut, termasuk pembatal wudhu.</p><h4>B. Hilangnya Kesadaran</h4><p>Hilangnya kesadaran, seperti pingsan atau mabuk, dapat membatalkan wudhu karena seseorang tidak lagi berada dalam keadaan sadar.</p><h4>C. Tidur</h4><p>Tidur dapat menjadi pembatal wudhu apabila menyebabkan hilangnya kesadaran terhadap keadaan tubuh. Ketentuannya dapat berbeda berdasarkan posisi dan keadaan tidur.</p><h4>D. Sebab Lain Menurut Mazhab</h4><p>Beberapa pembatal wudhu memiliki perincian yang berbeda antarmazhab. Karena itu, pembahasan pembatal wudhu perlu memperhatikan mazhab fikih yang digunakan.</p>",
                    rangkuman: "Wudhu dapat batal karena beberapa keadaan, terutama keluarnya sesuatu dari qubul atau dubur dan hilangnya kesadaran, dengan beberapa rincian yang dapat berbeda antarmazhab."
                },
                {
                    title: "Pengertian, syarat, dan tata cara tayammum",
                    detail: "<h4>A. Pengertian</h4><p>Tayammum adalah cara bersuci menggunakan media yang berasal dari tanah atau debu yang suci sebagai pengganti wudhu atau mandi dalam kondisi tertentu.</p><h4>B. Sebab Diperbolehkannya Tayammum</h4><p>Tayammum dapat dilakukan ketika seseorang tidak mendapatkan air atau terdapat uzur syar'i yang menyebabkan penggunaan air tidak dapat dilakukan atau dapat membahayakan.</p><h4>C. Tata Cara</h4><p>Secara umum, tayammum dilakukan dengan niat, menggunakan media yang suci, kemudian mengusap wajah dan kedua tangan sesuai tata cara yang berlaku dalam mazhab yang diikuti.</p><h4>D. Ketentuan</h4><p>Tayammum merupakan bentuk keringanan syariat dan bukan pengganti bebas yang dapat dilakukan tanpa sebab. Pelaksanaannya harus memenuhi syarat dan ketentuan yang ditetapkan dalam fikih.</p>",
                    rangkuman: "Tayammum merupakan keringanan bersuci menggunakan media tanah atau debu yang suci ketika terdapat kondisi yang membolehkan pengganti air."
                },
                {
                    title: "Praktik wudhu dan tayammum",
                    detail: "<h4>A. Praktik Wudhu</h4><p>Praktik wudhu dilakukan dengan memenuhi seluruh rukun secara tertib, mulai dari niat hingga membasuh kaki. Setiap anggota yang wajib dibasuh harus terkena air secara merata sesuai ketentuan.</p><h4>B. Praktik Tayammum</h4><p>Praktik tayammum dilakukan ketika terdapat sebab yang membolehkannya. Pelaksana harus menggunakan media yang suci dan mengikuti urutan gerakan sesuai ketentuan fikih.</p><h4>C. Kesalahan yang Perlu Dihindari</h4><p>Kesalahan dalam praktik dapat berupa tidak meratakan air pada anggota wajib wudhu, meninggalkan salah satu rukun, menggunakan media tayammum yang tidak memenuhi ketentuan, atau melakukan tayammum tanpa adanya sebab yang dibenarkan.</p>",
                    rangkuman: "Praktik wudhu dan tayammum harus dilakukan dengan memenuhi rukun, syarat, urutan, dan sebab yang telah ditentukan dalam fikih."
                }
            ]}
        ],
        output: "Output: Mampu mempraktikkan tata cara wudhu dan tayammum sesuai ketentuan fikih",
        youtube: "",
        videoDesc: "Pertemuan 6 · Praktik wudhu & tayammum",
        studiKasus: "Analisis kesalahan umum dalam praktik wudhu dan tayammum di masyarakat.",
        mcq: [
            { q: "Salah satu rukun wudhu adalah ....", options: ["Membasuh wajah", "Membaca niat puasa", "Membasuh seluruh tubuh", "Bertayammum"], correct: 0 },
            { q: "Sunnah wudhu di antaranya adalah ....", options: ["Membaca basmalah dan bersiwak", "Mengucap talak", "Membaca niat haji", "Membasuh seluruh tubuh"], correct: 0 },
            { q: "Salah satu hal yang membatalkan wudhu adalah ....", options: ["Keluarnya sesuatu dari qubul atau dubur", "Membaca Al-Qur'an", "Berbicara", "Berjalan"], correct: 0 },
            { q: "Tayammum diperbolehkan ketika ....", options: ["Tidak ditemukan air atau ada uzur syar'i untuk menggunakan air", "Air melimpah", "Sedang di rumah", "Sedang tidak berhadas"], correct: 0 },
            { q: "Tayammum dilakukan dengan menggunakan ....", options: ["Debu atau tanah yang suci", "Air suci", "Batu", "Pasir laut saja"], correct: 0 },
            { q: "Rukun tayammum meliputi ....", options: ["Niat, mengusap wajah, dan mengusap kedua tangan", "Membasuh kaki", "Membasuh seluruh tubuh", "Berkumur-kumur"], correct: 0 },
            { q: "Wudhu menjadi tidak sah apabila ....", options: ["Salah satu rukunnya ditinggalkan", "Membaca doa setelahnya", "Menggunakan air dingin", "Dilakukan dengan tertib"], correct: 0 },
            { q: "Salah satu syarat sah tayammum adalah ....", options: ["Sudah masuk waktu shalat", "Dilakukan sebelum berhadas", "Menggunakan air", "Dilakukan tanpa niat"], correct: 0 },
            { q: "Mengusap sebagian kepala saat wudhu termasuk ....", options: ["Rukun wudhu", "Sunnah wudhu", "Pembatal wudhu", "Syarat tayammum"], correct: 0 },
            { q: "Praktik wudhu dan tayammum penting dipelajari agar ....", options: ["Ibadah shalat sah karena thaharah terpenuhi dengan benar", "Menambah waktu ibadah", "Menghindari kewajiban shalat", "Mengurangi rukun ibadah"], correct: 0 }
        ],
        essay: [
            "Jelaskan rukun dan sunnah wudhu.",
            "Sebutkan hal-hal yang dapat membatalkan wudhu.",
            "Jelaskan pengertian dan syarat diperbolehkannya tayammum.",
            "Uraikan tata cara pelaksanaan tayammum yang benar.",
            "Analisis kesalahan-kesalahan umum yang sering terjadi dalam praktik wudhu dan tayammum di masyarakat."
        ]
    },
    7: {
        title: "Haid, Nifas, dan Istihadhah",
        groups: [
            { label: "Materi Pokok",items: [
                {
                    title: "Pengertian haid, nifas, dan istihadhah",
                    detail: "<h4>A. Haid</h4><p>Haid adalah darah yang keluar dari rahim perempuan secara alami pada waktu tertentu dan bukan disebabkan oleh kelahiran atau penyakit. Ketentuan mengenai masa dan sifat haid dibahas secara rinci dalam kitab-kitab fikih.</p><h4>B. Nifas</h4><p>Nifas adalah darah yang keluar setelah proses melahirkan. Hukum yang berkaitan dengan nifas memiliki beberapa kesamaan dengan haid dalam persoalan ibadah, meskipun keduanya merupakan keadaan yang berbeda.</p><h4>C. Istihadhah</h4><p>Istihadhah adalah darah yang keluar di luar keadaan haid atau nifas. Dalam fikih, perempuan yang mengalami istihadhah tetap memiliki kewajiban ibadah dengan mengikuti ketentuan bersuci yang berlaku.</p>",
                    rangkuman: "Haid adalah darah alami yang keluar pada waktu tertentu, nifas adalah darah setelah melahirkan, sedangkan istihadhah adalah darah di luar haid atau nifas."
                },
                {
                    title: "Perbedaan ketiganya",
                    detail: "<h4>A. Berdasarkan Sebab</h4><p>Haid merupakan siklus biologis alami, nifas berkaitan dengan proses melahirkan, sedangkan istihadhah merupakan darah yang keluar di luar ketentuan haid atau nifas.</p><h4>B. Berdasarkan Hukum Ibadah</h4><p>Haid dan nifas memiliki ketentuan khusus yang menyebabkan beberapa ibadah tertentu tidak dilaksanakan selama masa tersebut. Istihadhah memiliki hukum berbeda karena perempuan yang mengalaminya tetap berkewajiban menjalankan ibadah dengan tata cara bersuci yang sesuai.</p><h4>C. Pentingnya Identifikasi</h4><p>Membedakan ketiga keadaan tersebut penting karena status darah menentukan hukum bersuci, shalat, puasa, dan ibadah lainnya.</p>",
                    rangkuman: "Haid, nifas, dan istihadhah berbeda berdasarkan sebab, karakteristik, dan konsekuensi hukumnya terhadap pelaksanaan ibadah."
                },
                {
                    title: "Hukum ibadah bagi wanita yang mengalaminya",
                    detail: "<h4>A. Wanita Haid dan Nifas</h4><p>Wanita yang sedang haid atau nifas tidak melaksanakan shalat. Puasa Ramadan yang ditinggalkan karena haid atau nifas wajib diganti atau diqadha setelah suci sesuai ketentuan fikih.</p><h4>B. Wanita Istihadhah</h4><p>Wanita yang mengalami istihadhah tetap melaksanakan shalat dan ibadah lainnya. Ia mengikuti ketentuan bersuci yang berlaku bagi orang yang mengalami keadaan hadas berkelanjutan sesuai rincian fikih.</p><h4>C. Perbedaan dengan Sakit</h4><p>Istihadhah tidak menjadikan seluruh ibadah gugur. Karena itu, penting membedakannya dari haid dan nifas sebelum menentukan hukum ibadah.</p>",
                    rangkuman: "Haid dan nifas memiliki ketentuan khusus terhadap shalat dan puasa, sedangkan wanita istihadhah tetap menjalankan ibadah dengan mengikuti ketentuan bersuci yang sesuai."
                },
                {
                    title: "Cara bersuci setelah haid dan nifas",
                    detail: "<h4>A. Memastikan Berakhirnya Darah</h4><p>Setelah darah haid atau nifas berhenti dan telah terdapat tanda kesucian sesuai ketentuan fikih, perempuan melakukan mandi wajib.</p><h4>B. Mandi Wajib</h4><p>Mandi wajib dilakukan dengan niat bersuci dari hadas besar dan memastikan air mengenai seluruh bagian tubuh yang wajib terkena air.</p><h4>C. Setelah Bersuci</h4><p>Setelah mandi wajib selesai, perempuan kembali menjalankan ibadah yang sebelumnya tidak dapat dilakukan karena haid atau nifas, seperti shalat. Puasa Ramadan yang ditinggalkan karena haid atau nifas dilakukan qadha sesuai ketentuan.</p>",
                    rangkuman: "Setelah haid atau nifas berakhir, perempuan melakukan mandi wajib sesuai ketentuan agar kembali dalam keadaan suci dan dapat melaksanakan ibadah."
                }
            ]}
        ],
        output: "Output: Mampu membedakan haid, nifas, dan istihadhah serta hukum ibadah bagi wanita yang mengalaminya",
        youtube: "",
        videoDesc: "Pertemuan 7 · Hukum ibadah bagi wanita & cara bersuci",
        studiKasus: "Analisis permasalahan kontemporer terkait fikih wanita, seperti penggunaan obat penunda haid dalam ibadah haji.",
        mcq: [
            { q: "Haid adalah ....", options: ["Darah yang keluar dari rahim wanita secara alami pada waktu tertentu", "Darah yang keluar karena luka", "Darah nifas", "Darah karena penyakit"], correct: 0 },
            { q: "Nifas adalah ....", options: ["Darah yang keluar setelah melahirkan", "Darah haid bulanan", "Darah karena penyakit", "Darah karena luka"], correct: 0 },
            { q: "Istihadhah adalah ....", options: ["Darah penyakit yang keluar di luar kebiasaan haid atau nifas", "Darah haid normal", "Darah nifas normal", "Darah yang keluar karena melahirkan"], correct: 0 },
            { q: "Wanita yang sedang haid dilarang untuk ....", options: ["Melaksanakan shalat dan puasa", "Membaca dzikir", "Bersedekah", "Berdoa"], correct: 0 },
            { q: "Setelah suci dari haid, wanita wajib ....", options: ["Mandi wajib sebelum melaksanakan shalat", "Bertayammum selamanya", "Menunggu tujuh hari", "Menunda shalat tanpa batas"], correct: 0 },
            { q: "Wanita yang mengalami istihadhah tetap wajib ....", options: ["Melaksanakan shalat dengan berwudhu setiap kali hendak shalat", "Meninggalkan seluruh ibadah", "Mandi wajib setiap hari tanpa alasan", "Meninggalkan puasa selamanya"], correct: 0 },
            { q: "Salah satu perbedaan haid dan istihadhah adalah ....", options: ["Haid keluar pada waktu kebiasaan, istihadhah di luar kebiasaan karena penyakit", "Haid tidak membatalkan puasa", "Istihadhah membatalkan shalat", "Tidak ada perbedaan"], correct: 0 },
            { q: "Puasa yang ditinggalkan karena haid wajib ....", options: ["Diqadha setelah suci", "Digantikan dengan fidyah", "Dibiarkan tanpa qadha", "Digantikan dengan sedekah saja"], correct: 0 },
            { q: "Nifas maksimal berlangsung selama ....", options: ["Sekitar 40 hari menurut pendapat mayoritas ulama", "Satu hari", "Satu tahun", "Tidak terbatas"], correct: 0 },
            { q: "Permasalahan kontemporer terkait fikih wanita di antaranya adalah ....", options: ["Penggunaan obat penunda haid saat ibadah haji", "Penentuan arah kiblat", "Penentuan awal Ramadan", "Pembagian zakat"], correct: 0 }
        ],
        essay: [
            "Jelaskan pengertian haid, nifas, dan istihadhah.",
            "Jelaskan perbedaan hukum ibadah bagi wanita haid, nifas, dan istihadhah.",
            "Bagaimana cara bersuci yang benar setelah haid dan nifas berakhir?",
            "Jelaskan hukum puasa yang ditinggalkan karena haid.",
            "Analisis salah satu permasalahan kontemporer terkait fikih wanita dan solusinya menurut fikih."
        ]
    },
    9: {
        title: "Shalat I (Dasar-Dasar Shalat)",
        groups: [
                            {
                    label: "Materi Pokok",
                    items: [
                        {
                            title: "Pengertian dan kedudukan shalat",
                            detail: `
                                <h4>A. Pengertian Shalat</h4>
                                <p>Shalat adalah ibadah yang terdiri atas perkataan dan perbuatan tertentu, dimulai dengan takbiratul ihram dan diakhiri dengan salam sesuai dengan ketentuan syariat.</p>

                                <h4>B. Kedudukan Shalat</h4>
                                <p>Shalat merupakan salah satu rukun Islam dan memiliki kedudukan penting dalam kehidupan seorang Muslim. Shalat wajib dilaksanakan lima waktu dalam sehari semalam bagi Muslim yang telah memenuhi syarat wajibnya.</p>

                                <h4>C. Tujuan Shalat</h4>
                                <p>Shalat tidak hanya merupakan kewajiban ibadah, tetapi juga menjadi sarana mengingat Allah, membentuk kedisiplinan, dan mencegah perbuatan keji dan mungkar.</p>
                            `,
                            rangkuman: "Shalat adalah ibadah khusus yang dimulai dengan takbiratul ihram dan diakhiri salam. Shalat lima waktu merupakan salah satu rukun Islam dan memiliki kedudukan penting dalam kehidupan seorang Muslim."
                        },
                        {
                            title: "Syarat wajib dan syarat sah shalat",
                            detail: `
                                <h4>A. Syarat Wajib</h4>
                                <p>Syarat wajib berkaitan dengan keadaan seseorang yang menyebabkan shalat menjadi kewajiban baginya. Secara umum mencakup Islam, baligh, dan berakal, dengan rincian fikih tertentu mengenai penerapannya.</p>

                                <h4>B. Syarat Sah</h4>
                                <p>Syarat sah adalah ketentuan yang harus terpenuhi agar shalat dinilai sah. Di antaranya adalah masuk waktu, suci dari hadas dan najis, menutup aurat, menghadap kiblat, serta mengetahui bahwa waktu shalat telah masuk.</p>

                                <h4>C. Perbedaan Syarat Wajib dan Syarat Sah</h4>
                                <p>Syarat wajib menentukan apakah seseorang terkena kewajiban shalat, sedangkan syarat sah menentukan apakah pelaksanaan shalatnya memenuhi ketentuan keabsahan.</p>
                            `,
                            rangkuman: "Syarat wajib menentukan seseorang terkena kewajiban shalat, sedangkan syarat sah harus terpenuhi agar pelaksanaan shalat dinilai sah."
                        },
                        {
                            title: "Rukun shalat",
                            detail: `
                                <h4>A. Pengertian Rukun Shalat</h4>
                                <p>Rukun shalat adalah bagian pokok yang harus dilakukan dalam pelaksanaan shalat. Meninggalkan rukun secara sengaja dapat menyebabkan shalat tidak sah.</p>

                                <h4>B. Contoh Rukun Shalat</h4>
                                <p>Beberapa rukun shalat antara lain niat, berdiri bagi yang mampu, takbiratul ihram, membaca Al-Fatihah, rukuk, i'tidal, sujud, duduk di antara dua sujud, tasyahud akhir, salam, dan tertib. Jumlah dan rincian rukun dapat berbeda dalam klasifikasi mazhab.</p>

                                <h4>C. Rukun yang Terlupa</h4>
                                <p>Apabila salah satu rukun terlupa, terdapat ketentuan fikih mengenai cara memperbaikinya. Karena rukun merupakan bagian pokok shalat, ia tidak dapat sekadar digantikan dengan sujud sahwi.</p>
                            `,
                            rangkuman: "Rukun shalat adalah bagian pokok dalam shalat yang harus dilakukan. Jika salah satu rukun ditinggalkan, shalat perlu diperbaiki sesuai ketentuan fikih dan tidak cukup hanya dengan sujud sahwi."
                        },
                        {
                            title: "Sunnah-sunnah shalat dan hal yang membatalkannya",
                            detail: `
                                <h4>A. Sunnah Shalat</h4>
                                <p>Sunnah shalat adalah amalan yang dianjurkan untuk dilakukan dalam shalat. Pelaksanaannya menyempurnakan ibadah, tetapi meninggalkannya tidak sama dengan meninggalkan rukun.</p>

                                <h4>B. Contoh Sunnah</h4>
                                <p>Contohnya membaca doa iftitah, mengangkat tangan pada tempat-tempat yang disunnahkan, membaca surah setelah Al-Fatihah pada tempatnya, dan beberapa bacaan serta gerakan yang dianjurkan.</p>

                                <h4>C. Hal yang Membatalkan Shalat</h4>
                                <p>Beberapa hal yang dapat membatalkan shalat antara lain berbicara dengan sengaja di luar bacaan shalat, makan atau minum, banyak bergerak tanpa kebutuhan yang dibenarkan, serta meninggalkan rukun atau syarat sah dalam keadaan yang menyebabkan shalat tidak dapat dilanjutkan secara sah.</p>

                                <h4>D. Perbedaan dengan Sunnah</h4>
                                <p>Meninggalkan sunnah tidak memiliki konsekuensi yang sama dengan meninggalkan rukun. Oleh karena itu, mahasiswa perlu membedakan antara rukun, sunnah, dan pembatal shalat.</p>
                            `,
                            rangkuman: "Sunnah shalat berfungsi menyempurnakan pelaksanaan shalat, sedangkan pembatal shalat merupakan hal yang menyebabkan shalat tidak sah atau terputus sesuai ketentuannya."
                        }
                    ]
                }
        ],
        output: "Output: Mampu menjelaskan syarat, rukun, dan sunnah shalat serta hal-hal yang membatalkannya",
        youtube: "",
        videoDesc: "Pertemuan 9 · Syarat, rukun & sunnah shalat",
        studiKasus: "Analisis keabsahan shalat seseorang yang meninggalkan salah satu rukunnya karena lupa.",
        mcq: [
            { q: "Shalat menempati kedudukan sebagai ....", options: ["Tiang agama dan ibadah yang pertama kali dihisab", "Ibadah tambahan", "Ibadah yang boleh ditinggalkan", "Kewajiban tahunan"], correct: 0 },
            { q: "Salah satu syarat wajib shalat adalah ....", options: ["Baligh dan berakal", "Memiliki harta", "Sudah menikah", "Bertempat tinggal tetap"], correct: 0 },
            { q: "Salah satu syarat sah shalat adalah ....", options: ["Suci dari hadas dan najis", "Membaca surah panjang", "Shalat berjamaah", "Menghadap ke segala arah"], correct: 0 },
            { q: "Rukun shalat di antaranya adalah ....", options: ["Takbiratul ihram dan membaca Al-Fatihah", "Membaca doa qunut", "Membaca surah pendek", "Duduk tasyahud awal saja"], correct: 0 },
            { q: "Meninggalkan salah satu rukun shalat menyebabkan ....", options: ["Shalat menjadi tidak sah", "Shalat tetap sah", "Shalat menjadi sunnah", "Tidak berpengaruh pada keabsahan shalat"], correct: 0 },
            { q: "Sunnah dalam shalat di antaranya adalah ....", options: ["Membaca doa iftitah", "Membasuh wajah", "Membaca niat puasa", "Menghadap kiblat"], correct: 0 },
            { q: "Salah satu hal yang membatalkan shalat adalah ....", options: ["Berbicara dengan sengaja di luar bacaan shalat", "Membaca Al-Fatihah", "Rukuk", "Sujud"], correct: 0 },
            { q: "Menghadap kiblat termasuk ....", options: ["Syarat sah shalat", "Rukun shalat", "Sunnah shalat", "Pembatal shalat"], correct: 0 },
            { q: "Jika seseorang lupa melakukan salah satu sunnah ab'adh dalam shalat, ia disunnahkan ....", options: ["Melakukan sujud sahwi", "Mengulang shalat dari awal", "Membatalkan shalat", "Mengabaikannya tanpa tindakan"], correct: 0 },
            { q: "Thaharah menjadi salah satu ....", options: ["Syarat sah shalat", "Rukun shalat", "Sunnah shalat", "Pembatal shalat"], correct: 0 }
        ],
        essay: [
            "Jelaskan pengertian dan kedudukan shalat dalam Islam.",
            "Sebutkan syarat wajib dan syarat sah shalat.",
            "Sebutkan rukun-rukun shalat secara berurutan.",
            "Jelaskan hal-hal yang dapat membatalkan shalat.",
            "Analisis pentingnya memahami rukun dan syarat shalat agar ibadah shalat sah dan diterima."
        ]
    },
    10: {
        title: "Shalat II (Berjamaah dan Shalat Sunnah)",
        groups: [
                                {
                        label: "Materi Pokok",
                        items: [
                            {
                                title: "Keutamaan shalat berjamaah",
                                detail: `
                                    <h4>A. Pengertian Shalat Berjamaah</h4>
                                    <p>Shalat berjamaah adalah pelaksanaan shalat yang dilakukan bersama-sama dengan adanya imam dan makmum. Imam menjadi pihak yang diikuti oleh makmum dalam gerakan dan bacaan tertentu.</p>

                                    <h4>B. Keutamaan</h4>
                                    <p>Shalat berjamaah memiliki keutamaan yang besar dalam ajaran Islam. Selain nilai ibadah, berjamaah juga memperkuat persaudaraan, kedisiplinan, dan kebersamaan umat.</p>

                                    <h4>C. Keteraturan Jamaah</h4>
                                    <p>Dalam shalat berjamaah, makmum mengikuti imam dan tidak mendahului gerakan imam. Pengaturan saf juga menjadi bagian penting dalam pelaksanaan berjamaah.</p>
                                `,
                                rangkuman: "Shalat berjamaah adalah shalat bersama dengan imam dan makmum. Selain memiliki keutamaan ibadah, berjamaah mengajarkan kedisiplinan, keteraturan, dan persatuan."
                            },
                            {
                                title: "Syarat menjadi imam dan makmum",
                                detail: `
                                    <h4>A. Ketentuan Imam</h4>
                                    <p>Imam harus memenuhi ketentuan yang memungkinkan shalatnya sah dan mampu memimpin jamaah. Dalam pembahasan fikih terdapat rincian mengenai kemampuan membaca Al-Qur'an, jenis kelamin jamaah, dan keadaan tertentu.</p>

                                    <h4>B. Ketentuan Makmum</h4>
                                    <p>Makmum harus memiliki niat mengikuti imam dan mengikuti gerakan imam sesuai tata cara yang ditentukan. Makmum tidak boleh mendahului imam secara sengaja.</p>

                                    <h4>C. Posisi Imam dan Makmum</h4>
                                    <p>Posisi imam dan makmum diatur berdasarkan jumlah serta keadaan jamaah. Pengaturan saf bertujuan menjaga keteraturan pelaksanaan shalat.</p>

                                    <h4>D. Masbuk</h4>
                                    <p>Makmum yang terlambat mengikuti sebagian rakaat disebut masbuk. Ia mengikuti imam pada keadaan yang didapatinya dan menyempurnakan rakaat yang tertinggal setelah imam selesai salam sesuai ketentuan fikih.</p>
                                `,
                                rangkuman: "Imam memimpin shalat dan makmum mengikuti imam. Keduanya memiliki ketentuan tertentu, termasuk niat, posisi, mengikuti gerakan, serta aturan bagi makmum yang terlambat atau masbuk."
                            },
                            {
                                title: "Shalat sunnah rawatib, dhuha, tahajud, dan witir",
                                detail: `
                                    <h4>A. Shalat Rawatib</h4>
                                    <p>Shalat rawatib adalah shalat sunnah yang berkaitan dengan shalat fardu, baik sebelum maupun sesudahnya. Shalat ini berfungsi menyempurnakan ibadah wajib.</p>

                                    <h4>B. Shalat Dhuha</h4>
                                    <p>Shalat dhuha dilaksanakan pada waktu dhuha setelah matahari naik hingga sebelum masuk waktu zawal. Jumlah rakaatnya memiliki beberapa bentuk yang dibahas dalam fikih.</p>

                                    <h4>C. Shalat Tahajud</h4>
                                    <p>Shalat tahajud merupakan shalat sunnah malam yang dilakukan setelah tidur. Ibadah ini menjadi salah satu bentuk pendekatan diri kepada Allah.</p>

                                    <h4>D. Shalat Witir</h4>
                                    <p>Shalat witir adalah shalat sunnah yang jumlah rakaatnya ganjil dan biasanya dilaksanakan sebagai penutup rangkaian shalat malam.</p>
                                `,
                                rangkuman: "Rawatib berkaitan dengan shalat fardu, dhuha dilakukan pada waktu pagi setelah matahari naik, tahajud merupakan shalat malam setelah tidur, dan witir merupakan shalat sunnah dengan jumlah rakaat ganjil."
                            },
                            {
                                title: "Shalat Id dan shalat jenazah",
                                detail: `
                                    <h4>A. Shalat Id</h4>
                                    <p>Shalat Id adalah shalat yang dilaksanakan pada Idul Fitri dan Idul Adha. Pelaksanaannya memiliki tata cara khusus dan biasanya dilakukan secara berjamaah di masjid atau tempat terbuka.</p>

                                    <h4>B. Takbir Tambahan</h4>
                                    <p>Salah satu ciri shalat Id adalah adanya takbir tambahan pada rakaat tertentu. Jumlah dan rincian pelaksanaannya dapat berbeda berdasarkan pendapat fikih.</p>

                                    <h4>C. Shalat Jenazah</h4>
                                    <p>Shalat jenazah merupakan ibadah yang dilakukan untuk mendoakan seorang Muslim yang meninggal. Shalat ini berbeda dari shalat biasa karena tidak memiliki rukuk dan sujud.</p>

                                    <h4>D. Tata Cara Umum</h4>
                                    <p>Shalat jenazah dilaksanakan dengan berdiri dan beberapa kali takbir yang disertai bacaan serta doa untuk jenazah. Rincian bacaan dapat mengikuti tuntunan mazhab atau panduan fikih yang digunakan.</p>
                                `,
                                rangkuman: "Shalat Id memiliki tata cara khusus dan dilaksanakan pada dua hari raya. Shalat jenazah merupakan ibadah untuk mendoakan jenazah dan dilaksanakan tanpa rukuk maupun sujud."
                            }
                        ]
                    }
                ],
        output: "Output: Mampu menguraikan ketentuan shalat berjamaah dan berbagai shalat sunnah",
        youtube: "",
        videoDesc: "Pertemuan 10 · Shalat berjamaah, rawatib, dhuha & jenazah",
        studiKasus: "Analisis tata cara pelaksanaan shalat jenazah dan hukum-hukum terkait shalat berjamaah dalam kondisi darurat.",
        mcq: [
            { q: "Shalat berjamaah memiliki keutamaan ....", options: ["Pahala yang lebih besar dibanding shalat sendirian", "Sama saja dengan shalat sendirian", "Hukumnya makruh", "Tidak dianjurkan"], correct: 0 },
            { q: "Salah satu syarat menjadi imam adalah ....", options: ["Memahami bacaan Al-Qur'an dengan baik", "Memiliki harta yang banyak", "Berusia lanjut", "Berasal dari keluarga terpandang"], correct: 0 },
            { q: "Makmum wajib ....", options: ["Mengikuti gerakan imam", "Mendahului gerakan imam", "Membaca surah yang berbeda dengan imam", "Shalat menghadap arah berbeda"], correct: 0 },
            { q: "Shalat rawatib adalah ....", options: ["Shalat sunnah yang mengiringi shalat fardhu", "Shalat sunnah malam hari saja", "Shalat sunnah hari raya", "Shalat sunnah gerhana"], correct: 0 },
            { q: "Shalat dhuha dilaksanakan pada waktu ....", options: ["Pagi hari setelah matahari naik sepenggalah", "Setelah shalat Isya", "Sebelum shalat Subuh", "Tengah malam"], correct: 0 },
            { q: "Shalat tahajud dilaksanakan ....", options: ["Pada malam hari setelah tidur", "Pada siang hari", "Sebelum shalat Zuhur", "Pada waktu Ashar"], correct: 0 },
            { q: "Shalat witir umumnya dilaksanakan ....", options: ["Sebagai penutup shalat malam dengan jumlah rakaat ganjil", "Sebagai pembuka shalat malam", "Pada siang hari", "Dengan jumlah rakaat genap wajib"], correct: 0 },
            { q: "Shalat Id dilaksanakan pada ....", options: ["Hari raya Idulfitri dan Iduladha", "Setiap hari Jumat", "Setiap malam Jumat", "Awal bulan Ramadan"], correct: 0 },
            { q: "Shalat jenazah termasuk ....", options: ["Fardhu kifayah", "Fardhu 'ain", "Sunnah muakkadah", "Sunnah ghairu muakkadah"], correct: 0 },
            { q: "Salah satu syarat sah shalat berjamaah adalah ....", options: ["Makmum berniat mengikuti imam", "Imam dan makmum shalat di tempat berjauhan tanpa penghubung", "Makmum mendahului takbir imam", "Imam tidak perlu suci dari hadas"], correct: 0 }
        ],
        essay: [
            "Jelaskan keutamaan shalat berjamaah dibanding shalat sendirian.",
            "Sebutkan syarat-syarat menjadi imam dan makmum dalam shalat berjamaah.",
            "Jelaskan perbedaan shalat rawatib, dhuha, tahajud, dan witir.",
            "Jelaskan tata cara pelaksanaan shalat jenazah.",
            "Analisis hukum shalat Id dan kedudukannya dalam syariat Islam."
        ]
    },
    11: {
        title: "Zakat dan Infak",
        groups: [
                                {
                        label: "Materi Pokok",
                        items: [
                            {
                                title: "Pengertian dan dalil kewajiban zakat",
                                detail: `
                                    <h4>A. Pengertian Zakat</h4>
                                    <p>Zakat adalah kewajiban mengeluarkan sebagian harta tertentu untuk diberikan kepada pihak yang berhak menerimanya sesuai dengan ketentuan syariat.</p>

                                    <h4>B. Kedudukan Zakat</h4>
                                    <p>Zakat merupakan salah satu rukun Islam. Kewajibannya memiliki dasar yang kuat dalam Al-Qur'an dan Sunnah serta menjadi bagian dari sistem sosial ekonomi Islam.</p>

                                    <h4>C. Tujuan Zakat</h4>
                                    <p>Zakat bertujuan membersihkan harta dan jiwa serta membantu memenuhi kebutuhan kelompok masyarakat yang berhak menerima zakat.</p>

                                    <h4>D. Hubungan Zakat dan Solidaritas Sosial</h4>
                                    <p>Zakat memiliki dimensi individual sekaligus sosial. Pengelolaannya dapat menjadi instrumen untuk membantu mengurangi kesenjangan dan memenuhi kebutuhan masyarakat yang membutuhkan.</p>
                                `,
                                rangkuman: "Zakat adalah kewajiban mengeluarkan harta tertentu kepada pihak yang berhak. Zakat merupakan rukun Islam dan memiliki fungsi ibadah sekaligus sosial."
                            },
                            {
                                title: "Syarat wajib zakat",
                                detail: `
                                    <h4>A. Kepemilikan Harta</h4>
                                    <p>Salah satu pembahasan penting dalam zakat adalah kepemilikan harta secara penuh atau sesuai kriteria kepemilikan yang ditetapkan dalam fikih.</p>

                                    <h4>B. Nishab</h4>
                                    <p>Nishab adalah batas minimal harta yang menjadi salah satu ukuran wajib zakat pada jenis harta tertentu. Besaran nishab berbeda sesuai jenis harta yang dizakati.</p>

                                    <h4>C. Haul</h4>
                                    <p>Haul adalah masa kepemilikan selama satu tahun hijriah yang menjadi salah satu syarat pada jenis harta tertentu. Tidak semua jenis zakat menggunakan persyaratan haul dengan cara yang sama.</p>

                                    <h4>D. Jenis Harta</h4>
                                    <p>Ketentuan zakat berbeda berdasarkan jenis harta, seperti emas dan perak, perdagangan, pertanian, peternakan, serta bentuk kekayaan lainnya yang dibahas dalam fikih.</p>
                                `,
                                rangkuman: "Syarat wajib zakat berkaitan dengan jenis dan kepemilikan harta, nishab, dan pada jenis tertentu haul. Ketentuannya berbeda sesuai dengan kategori harta yang dizakati."
                            },
                            {
                                title: "Zakat fitrah dan zakat mal",
                                detail: `
                                    <h4>A. Zakat Fitrah</h4>
                                    <p>Zakat fitrah adalah zakat yang berkaitan dengan jiwa atau individu Muslim dan ditunaikan pada akhir Ramadan sebelum pelaksanaan shalat Id sesuai ketentuan waktunya.</p>

                                    <h4>B. Besaran Zakat Fitrah</h4>
                                    <p>Zakat fitrah secara klasik ditunaikan dalam bentuk makanan pokok dengan ukuran tertentu. Dalam praktik modern, pembayaran menggunakan uang dapat mengikuti ketentuan lembaga atau pendapat fikih yang menjadi pedoman.</p>

                                    <h4>C. Zakat Mal</h4>
                                    <p>Zakat mal adalah zakat atas harta tertentu yang telah memenuhi syarat dan ketentuan seperti nishab serta, pada sebagian jenis harta, haul.</p>

                                    <h4>D. Perbedaan Keduanya</h4>
                                    <p>Zakat fitrah berkaitan dengan individu dan waktu penunaiannya terkait Ramadan, sedangkan zakat mal berkaitan dengan kepemilikan harta yang memenuhi persyaratan zakat.</p>
                                `,
                                rangkuman: "Zakat fitrah berkaitan dengan kewajiban setiap individu Muslim pada akhir Ramadan, sedangkan zakat mal berkaitan dengan harta tertentu yang telah memenuhi syarat zakat."
                            },
                            {
                                title: "Delapan golongan penerima zakat serta pengertian infak dan sedekah",
                                detail: `
                                    <h4>A. Delapan Asnaf</h4>
                                    <p>Al-Qur'an menjelaskan delapan golongan yang berhak menerima zakat, yaitu fakir, miskin, amil, muallaf, riqab, gharim, fi sabilillah, dan ibnu sabil.</p>

                                    <h4>B. Fakir dan Miskin</h4>
                                    <p>Fakir dan miskin adalah kelompok yang memiliki keterbatasan dalam memenuhi kebutuhan hidup. Perincian perbedaan keduanya dibahas dalam literatur fikih.</p>

                                    <h4>C. Amil, Muallaf, Gharim, dan Ibnu Sabil</h4>
                                    <p>Amil berkaitan dengan pihak yang mengelola zakat, muallaf berkaitan dengan kelompok yang memiliki kondisi tertentu dalam hubungan dengan Islam, gharim adalah orang yang memiliki beban utang dalam kondisi yang dibenarkan, sedangkan ibnu sabil adalah musafir yang mengalami keterbatasan bekal dalam perjalanan.</p>

                                    <h4>D. Infak dan Sedekah</h4>
                                    <p>Infak adalah pengeluaran harta untuk berbagai tujuan yang dibenarkan. Sedekah memiliki cakupan yang lebih luas dan dapat berupa pemberian harta maupun amal kebajikan lainnya. Keduanya berbeda dari zakat yang memiliki ketentuan dan penerima tertentu.</p>
                                `,
                                rangkuman: "Zakat memiliki delapan kelompok penerima atau asnaf. Infak merupakan pengeluaran harta untuk tujuan yang dibenarkan, sedangkan sedekah memiliki cakupan amal yang lebih luas dan tidak terbatas pada pemberian harta."
                            }
                        ]
                    }
                ],
        output: "Output: Mampu menjelaskan syarat wajib zakat, macam zakat, dan golongan penerima zakat",
        youtube: "",
        videoDesc: "Pertemuan 11 · Syarat zakat & delapan asnaf",
        studiKasus: "Analisis penerapan zakat profesi dan zakat digital pada penghasilan modern.",
        mcq: [
            { q: "Zakat secara bahasa berarti ....", options: ["Membersihkan atau menyucikan", "Memberi hutang", "Meminjamkan harta", "Menabung"], correct: 0 },
            { q: "Zakat fitrah wajib dikeluarkan pada ....", options: ["Bulan Ramadan menjelang Idulfitri", "Bulan Zulhijjah", "Awal Muharram", "Sepanjang tahun kapan saja"], correct: 0 },
            { q: "Zakat mal dikenakan atas ....", options: ["Harta yang telah mencapai nisab dan haul", "Seluruh harta tanpa syarat", "Harta warisan saja", "Harta pinjaman"], correct: 0 },
            { q: "Salah satu syarat wajib zakat adalah ....", options: ["Harta telah mencapai nisab", "Pemilik harta beragama apapun", "Harta belum mencapai satu tahun", "Harta berupa utang"], correct: 0 },
            { q: "Golongan fakir dalam asnaf zakat adalah ....", options: ["Orang yang tidak memiliki harta dan penghasilan yang mencukupi kebutuhannya", "Orang kaya yang bersedekah", "Pengurus zakat", "Orang yang baru masuk Islam"], correct: 0 },
            { q: "Amil dalam asnaf zakat adalah ....", options: ["Petugas yang mengelola dan menyalurkan zakat", "Orang yang berutang", "Orang yang berjihad di jalan Allah", "Musafir yang kehabisan bekal"], correct: 0 },
            { q: "Gharim adalah golongan ....", options: ["Orang yang berutang untuk memenuhi kebutuhan yang dibenarkan syariat", "Orang kaya", "Musafir", "Amil zakat"], correct: 0 },
            { q: "Infak berbeda dengan zakat karena ....", options: ["Infak tidak memiliki ketentuan nisab dan haul yang tetap", "Infak wajib dengan nisab tertentu", "Infak hanya untuk fakir miskin", "Infak sama persis dengan zakat"], correct: 0 },
            { q: "Zakat fitrah bertujuan ....", options: ["Menyucikan diri orang yang berpuasa dan membantu fakir miskin di hari raya", "Menambah harta pemberi zakat", "Menghapus kewajiban puasa", "Mengganti kewajiban shalat"], correct: 0 },
            { q: "Salah satu contoh penerapan zakat kontemporer adalah ....", options: ["Zakat profesi atas penghasilan pekerjaan", "Zakat hanya berlaku pada hasil pertanian", "Zakat hanya berlaku pada peternakan", "Zakat tidak berlaku pada harta modern"], correct: 0 }
        ],
        essay: [
            "Jelaskan pengertian zakat dan dalil kewajibannya.",
            "Jelaskan perbedaan zakat fitrah dan zakat mal.",
            "Sebutkan syarat wajib zakat.",
            "Sebutkan dan jelaskan delapan golongan penerima zakat (asnaf).",
            "Analisis penerapan zakat profesi dan zakat digital pada penghasilan masyarakat modern."
        ]
    },
    12: {
        title: "Puasa",
        groups: [
                                {
                        label: "Materi Pokok",
                        items: [
                            {
                                title: "Pengertian dan macam-macam puasa (wajib dan sunnah)",
                                detail: `
                                    <h4>A. Pengertian Puasa</h4>
                                    <p>Puasa atau <em>shaum</em> adalah menahan diri dari hal-hal tertentu yang membatalkan puasa sejak terbit fajar hingga terbenam matahari dengan niat beribadah kepada Allah.</p>

                                    <h4>B. Puasa Wajib</h4>
                                    <p>Puasa Ramadan merupakan puasa wajib bagi Muslim yang memenuhi syarat. Selain Ramadan, terdapat puasa wajib karena sebab tertentu seperti nazar dan bentuk kafarat tertentu sesuai ketentuan fikih.</p>

                                    <h4>C. Puasa Sunnah</h4>
                                    <p>Puasa sunnah merupakan puasa yang dianjurkan tetapi tidak diwajibkan. Contohnya puasa Senin-Kamis, Ayyamul Bidh, Arafah bagi yang tidak sedang berhaji, dan Asyura.</p>

                                    <h4>D. Hikmah Puasa</h4>
                                    <p>Puasa bertujuan membentuk ketakwaan, pengendalian diri, kesabaran, serta kepedulian terhadap sesama.</p>
                                `,
                                rangkuman: "Puasa adalah menahan diri dari hal-hal yang membatalkan sejak fajar hingga magrib dengan niat ibadah. Puasa terdiri atas puasa wajib dan sunnah dengan tujuan utama membentuk ketakwaan dan pengendalian diri."
                            },
                            {
                                title: "Rukun dan syarat puasa",
                                detail: `
                                    <h4>A. Rukun Puasa</h4>
                                    <p>Rukun puasa pada dasarnya mencakup niat dan menahan diri dari hal-hal yang membatalkan puasa sejak waktu yang ditentukan.</p>

                                    <h4>B. Syarat Wajib</h4>
                                    <p>Syarat wajib berkaitan dengan keadaan seseorang yang menyebabkan puasa menjadi kewajiban, seperti Islam, baligh, dan berakal, dengan rincian fikih mengenai kondisi tertentu.</p>

                                    <h4>C. Syarat Sah</h4>
                                    <p>Syarat sah berkaitan dengan terpenuhinya ketentuan agar puasa dapat dinilai sah. Niat dan pelaksanaan puasa pada waktu yang ditentukan menjadi bagian penting dalam pembahasannya.</p>

                                    <h4>D. Niat</h4>
                                    <p>Niat menunjukkan kesengajaan melaksanakan puasa sebagai ibadah. Ketentuan waktu niat dapat berbeda berdasarkan jenis puasa dan pendapat mazhab.</p>
                                `,
                                rangkuman: "Rukun puasa mencakup niat dan menahan diri dari pembatal puasa pada waktunya. Syarat wajib menentukan siapa yang wajib berpuasa, sedangkan syarat sah menentukan keabsahan pelaksanaannya."
                            },
                            {
                                title: "Hal-hal yang membatalkan puasa, qadha, dan kafarat",
                                detail: `
                                    <h4>A. Pembatal Puasa</h4>
                                    <p>Puasa dapat batal karena melakukan hal-hal tertentu dengan sengaja, seperti makan atau minum secara sengaja, serta perbuatan lain yang termasuk pembatal menurut ketentuan fikih.</p>

                                    <h4>B. Perbedaan Sengaja dan Lupa</h4>
                                    <p>Dalam beberapa keadaan, seseorang yang melakukan sesuatu karena lupa memiliki ketentuan yang berbeda dengan orang yang melakukannya secara sengaja. Karena itu, kondisi terjadinya perbuatan perlu diperhatikan.</p>

                                    <h4>C. Qadha</h4>
                                    <p>Qadha adalah mengganti puasa wajib yang ditinggalkan pada waktu lain sesuai ketentuan syariat. Sebab seseorang wajib qadha dapat berbeda, misalnya karena sakit atau perjalanan.</p>

                                    <h4>D. Kafarat</h4>
                                    <p>Kafarat merupakan bentuk penebusan tertentu yang diwajibkan dalam kondisi tertentu. Ketentuan kafarat tidak berlaku untuk setiap pembatal puasa dan memiliki rincian berdasarkan sebab serta pendapat mazhab.</p>
                                `,
                                rangkuman: "Pembatal puasa harus dibedakan berdasarkan sebab dan keadaan terjadinya. Puasa yang harus diganti dilakukan melalui qadha, sedangkan kafarat hanya berlaku pada kondisi tertentu sesuai ketentuan fikih."
                            },
                            {
                                title: "Puasa bagi musafir dan orang sakit",
                                detail: `
                                    <h4>A. Rukhsah dalam Puasa</h4>
                                    <p>Islam memberikan keringanan atau <em>rukhsah</em> dalam ibadah ketika seseorang mengalami kondisi tertentu yang menyulitkan. Musafir dan orang sakit termasuk kelompok yang memiliki ketentuan khusus dalam puasa.</p>

                                    <h4>B. Puasa bagi Musafir</h4>
                                    <p>Orang yang melakukan perjalanan dengan memenuhi kriteria safar dapat memperoleh keringanan untuk tidak berpuasa dan menggantinya pada hari lain. Rincian jarak, kondisi perjalanan, dan ketentuan lainnya dibahas dalam fikih.</p>

                                    <h4>C. Puasa bagi Orang Sakit</h4>
                                    <p>Orang sakit yang berpuasa dapat mengalami kondisi yang membahayakan atau memperparah penyakitnya. Dalam keadaan demikian, syariat memberikan ketentuan khusus berupa keringanan untuk tidak berpuasa dan menggantinya sesuai kondisi.</p>

                                    <h4>D. Prinsip Kemudahan</h4>
                                    <p>Ketentuan tersebut menunjukkan bahwa syariat mempertimbangkan kemampuan manusia. Keringanan bukan berarti meninggalkan kewajiban tanpa alasan, tetapi merupakan ketentuan syariat bagi kondisi yang memenuhi persyaratan.</p>
                                `,
                                rangkuman: "Musafir dan orang sakit dapat memperoleh rukhsah untuk tidak berpuasa apabila memenuhi ketentuan syariat. Puasa yang ditinggalkan kemudian memiliki konsekuensi penggantian sesuai kondisi dan hukum fikih."
                            }
                        ]
                    }
        ],
        output: "Output: Mampu menganalisis rukun, syarat, dan pembatal puasa serta ketentuan qadha dan kafarat",
        youtube: "",
        videoDesc: "Pertemuan 12 · Rukun, pembatal, qadha & kafarat",
        studiKasus: "Analisis rukhsah puasa bagi musafir dan orang sakit serta ketentuan qadha dan kafarat yang menyertainya.",
        mcq: [
            { q: "Puasa secara bahasa berarti ....", options: ["Menahan diri", "Membersihkan diri", "Memberi sedekah", "Melaksanakan ibadah malam"], correct: 0 },
            { q: "Puasa Ramadan hukumnya ....", options: ["Wajib bagi setiap muslim yang mampu", "Sunnah muakkadah", "Mubah", "Makruh"], correct: 0 },
            { q: "Salah satu rukun puasa adalah ....", options: ["Menahan diri dari hal yang membatalkan sejak fajar hingga maghrib", "Membaca niat setiap hari secara lisan wajib", "Berbuka sebelum waktunya", "Makan sahur wajib"], correct: 0 },
            { q: "Salah satu syarat wajib puasa adalah ....", options: ["Baligh dan berakal", "Memiliki harta", "Sudah menikah", "Berjenis kelamin tertentu"], correct: 0 },
            { q: "Salah satu hal yang membatalkan puasa adalah ....", options: ["Makan dan minum dengan sengaja", "Tidur di siang hari", "Mandi di siang hari", "Bersiwak"], correct: 0 },
            { q: "Musafir diperbolehkan ....", options: ["Tidak berpuasa dan menggantinya dengan qadha", "Wajib tetap berpuasa tanpa keringanan", "Membayar fidyah tanpa qadha", "Meninggalkan puasa tanpa mengganti"], correct: 0 },
            { q: "Orang sakit yang tidak mampu berpuasa dan tidak ada harapan sembuh wajib ....", options: ["Membayar fidyah", "Mengqadha puasa saat sembuh", "Meninggalkan puasa tanpa kewajiban apa pun", "Membayar kafarat berat"], correct: 0 },
            { q: "Kafarat puasa dikenakan bagi orang yang ....", options: ["Melakukan hubungan suami istri di siang hari bulan Ramadan dengan sengaja", "Lupa makan saat puasa", "Sakit ringan", "Bepergian jauh"], correct: 0 },
            { q: "Qadha puasa dilakukan ....", options: ["Pada hari lain di luar bulan Ramadan sejumlah hari yang ditinggalkan", "Hanya dengan membayar fidyah", "Tidak perlu dilakukan", "Digantikan dengan sedekah biasa"], correct: 0 },
            { q: "Puasa sunnah di antaranya adalah ....", options: ["Puasa Senin-Kamis dan puasa Arafah", "Puasa Ramadan", "Puasa nazar wajib", "Puasa qadha"], correct: 0 }
        ],
        essay: [
            "Jelaskan pengertian dan macam-macam puasa dalam Islam.",
            "Sebutkan rukun dan syarat wajib puasa.",
            "Jelaskan hal-hal yang dapat membatalkan puasa.",
            "Jelaskan ketentuan qadha dan kafarat dalam puasa.",
            "Analisis penerapan rukhsah puasa bagi musafir dan orang sakit."
        ]
    },
    13: {
        title: "Haji dan Umrah",
        groups: [
                                {
                        label: "Materi Pokok",
                        items: [
                            {
                                title: "Pengertian dan dalil kewajiban haji dan umrah",
                                detail: `
                                    <h4>A. Pengertian Haji</h4>
                                    <p>Haji adalah ibadah dengan mengunjungi Baitullah di Makkah pada waktu tertentu untuk melaksanakan rangkaian ibadah tertentu sesuai dengan ketentuan syariat. Haji merupakan salah satu rukun Islam dan diwajibkan bagi Muslim yang telah memenuhi kemampuan atau <em>istitha'ah</em>.</p>

                                    <h4>B. Pengertian Umrah</h4>
                                    <p>Umrah adalah ibadah mengunjungi Baitullah untuk melaksanakan ihram, tawaf, sa'i, dan tahallul. Berbeda dengan haji, umrah tidak terikat dengan waktu pelaksanaan tertentu seperti haji.</p>

                                    <h4>C. Dalil Kewajiban</h4>
                                    <p>Kewajiban haji didasarkan antara lain pada QS. Ali 'Imran ayat 97 yang menjelaskan kewajiban manusia untuk melaksanakan haji ke Baitullah bagi yang mampu menempuh perjalanan ke sana.</p>

                                    <h4>D. Konsep Istitha'ah</h4>
                                    <p>Istitha'ah berkaitan dengan kemampuan seseorang untuk melaksanakan haji, antara lain kemampuan fisik, finansial, keamanan perjalanan, serta kondisi lain yang memungkinkan ibadah dilakukan dengan baik.</p>
                                `,
                                rangkuman: "Haji adalah ibadah ke Baitullah pada waktu tertentu dengan rangkaian ibadah tertentu dan merupakan kewajiban bagi Muslim yang mampu. Umrah memiliki rangkaian dasar yang serupa, tetapi tidak terikat waktu khusus seperti haji."
                            },
                            {
                                title: "Syarat, rukun, dan wajib haji",
                                detail: `
                                    <h4>A. Syarat Wajib Haji</h4>
                                    <p>Syarat wajib haji secara umum meliputi Islam, baligh, berakal, merdeka, dan mampu atau <em>istitha'ah</em>. Rincian penerapannya dapat memiliki perbedaan dalam pembahasan mazhab.</p>

                                    <h4>B. Rukun Haji</h4>
                                    <p>Rukun haji merupakan bagian pokok yang harus dilaksanakan. Dalam pembahasan fikih mazhab Syafi'i, rukun haji meliputi ihram dengan niat, wukuf di Arafah, tawaf ifadah, sa'i antara Safa dan Marwah, tahallul, dan tertib.</p>

                                    <h4>C. Wajib Haji</h4>
                                    <p>Wajib haji merupakan amalan yang harus dilaksanakan dalam rangkaian haji. Jika seseorang meninggalkannya, terdapat konsekuensi fikih tertentu, berbeda dengan meninggalkan rukun yang dapat memengaruhi sahnya haji.</p>

                                    <h4>D. Perbedaan Rukun dan Wajib</h4>
                                    <p>Rukun merupakan unsur utama yang menentukan sahnya ibadah, sedangkan wajib haji merupakan ketentuan yang harus dikerjakan dengan konsekuensi tertentu apabila ditinggalkan sesuai ketentuan fikih.</p>
                                `,
                                rangkuman: "Syarat wajib menentukan siapa yang berkewajiban berhaji. Rukun merupakan bagian pokok yang menentukan sahnya haji, sedangkan wajib haji adalah ketentuan yang harus dilaksanakan dengan konsekuensi fikih tertentu apabila ditinggalkan."
                            },
                            {
                                title: "Tata cara pelaksanaan haji dan umrah",
                                detail: `
                                    <h4>A. Ihram</h4>
                                    <p>Pelaksanaan haji dan umrah dimulai dengan ihram, yaitu keadaan khusus yang dimasuki dengan niat ibadah dari miqat yang telah ditentukan.</p>

                                    <h4>B. Tawaf</h4>
                                    <p>Tawaf adalah mengelilingi Ka'bah sebanyak tujuh putaran dengan tata cara dan ketentuan yang telah ditetapkan.</p>

                                    <h4>C. Sa'i</h4>
                                    <p>Sa'i adalah berjalan antara bukit Safa dan Marwah sebanyak tujuh kali perjalanan. Sa'i menjadi bagian penting dalam rangkaian haji dan umrah.</p>

                                    <h4>D. Wukuf dan Tahallul</h4>
                                    <p>Wukuf di Arafah merupakan salah satu rukun haji yang dilaksanakan pada waktu yang telah ditentukan. Setelah memenuhi rangkaian tertentu, jamaah melakukan tahallul sebagai tanda berakhirnya sebagian atau seluruh larangan ihram sesuai tahapan ibadah.</p>

                                    <h4>E. Perbedaan Haji dan Umrah</h4>
                                    <p>Haji memiliki rangkaian tambahan seperti wukuf di Arafah, sedangkan umrah pada dasarnya terdiri dari ihram, tawaf, sa'i, dan tahallul sesuai ketentuan fikih.</p>
                                `,
                                rangkuman: "Rangkaian haji dan umrah meliputi ihram, tawaf, sa'i, dan tahallul. Haji memiliki rangkaian tambahan yang paling penting yaitu wukuf di Arafah."
                            },
                            {
                                title: "Larangan ihram dan dam",
                                detail: `
                                    <h4>A. Pengertian Larangan Ihram</h4>
                                    <p>Larangan ihram adalah sejumlah perbuatan yang tidak boleh dilakukan oleh orang yang sedang berada dalam keadaan ihram. Ketentuannya berbeda antara laki-laki dan perempuan pada beberapa aspek.</p>

                                    <h4>B. Contoh Larangan Ihram</h4>
                                    <p>Contohnya adalah memotong rambut atau kuku dengan sengaja, menggunakan wewangian dalam kondisi tertentu, berburu hewan darat, serta melakukan beberapa perbuatan lain yang dilarang selama ihram.</p>

                                    <h4>C. Pengertian Dam</h4>
                                    <p>Dam merupakan bentuk kompensasi atau kewajiban tertentu yang dikenakan dalam beberapa kondisi pelanggaran atau keadaan khusus dalam pelaksanaan haji dan umrah.</p>

                                    <h4>D. Pentingnya Memahami Larangan Ihram</h4>
                                    <p>Pengetahuan mengenai larangan ihram membantu jamaah menjaga kesempurnaan ibadah dan menghindari pelanggaran yang dapat menimbulkan konsekuensi fikih.</p>
                                `,
                                rangkuman: "Larangan ihram adalah perbuatan yang harus dihindari selama berada dalam keadaan ihram. Dam merupakan bentuk kompensasi tertentu yang berlaku pada kondisi yang telah ditentukan dalam fikih."
                            }
                        ]
                    }],
        output: "Output: Mampu menjelaskan syarat, rukun, dan tata cara pelaksanaan haji dan umrah",
        youtube: "",
        videoDesc: "Pertemuan 13 · Rukun, wajib haji & manasik",
        studiKasus: "Analisis pelaksanaan manasik haji dan konsekuensi hukum bagi jemaah yang melanggar larangan ihram.",
        mcq: [
            { q: "Haji hukumnya wajib bagi ....", options: ["Muslim yang mampu (istitha'ah) secara fisik dan finansial", "Setiap muslim tanpa syarat", "Hanya bagi laki-laki", "Hanya bagi yang tinggal di Mekah"], correct: 0 },
            { q: "Salah satu rukun haji adalah ....", options: ["Wukuf di Arafah", "Mabit di Mina saja", "Melempar jumrah saja", "Memakai ihram saja"], correct: 0 },
            { q: "Ihram dimulai dengan ....", options: ["Niat masuk ke dalam ibadah haji atau umrah dari miqat", "Melempar jumrah", "Tawaf ifadhah", "Sa'i antara Safa dan Marwah"], correct: 0 },
            { q: "Salah satu larangan ihram bagi laki-laki adalah ....", options: ["Memakai pakaian berjahit", "Membaca talbiyah", "Berdoa", "Bertasbih"], correct: 0 },
            { q: "Tawaf adalah ....", options: ["Mengelilingi Ka'bah sebanyak tujuh kali", "Berlari antara Safa dan Marwah", "Bermalam di Mina", "Wukuf di Arafah"], correct: 0 },
            { q: "Sa'i dilakukan antara ....", options: ["Bukit Safa dan Marwah", "Arafah dan Mina", "Muzdalifah dan Mina", "Ka'bah dan Arafah"], correct: 0 },
            { q: "Wukuf di Arafah dilaksanakan pada ....", options: ["Tanggal 9 Zulhijjah", "Tanggal 10 Zulhijjah", "Tanggal 8 Zulhijjah", "Tanggal 1 Zulhijjah"], correct: 0 },
            { q: "Umrah berbeda dengan haji karena ....", options: ["Umrah tidak memiliki rukun wukuf di Arafah", "Umrah wajib dilakukan setiap tahun", "Umrah lebih lama waktunya", "Umrah tidak memerlukan ihram"], correct: 0 },
            { q: "Salah satu wajib haji adalah ....", options: ["Melontar jumrah", "Tawaf qudum", "Sa'i", "Ihram dari miqat"], correct: 0 },
            { q: "Denda (dam) dikenakan bagi jemaah haji yang ....", options: ["Melanggar salah satu larangan ihram", "Melaksanakan tawaf dengan sempurna", "Melaksanakan wukuf tepat waktu", "Membaca talbiyah dengan benar"], correct: 0 }
        ],
        essay: [
            "Jelaskan pengertian haji dan umrah serta perbedaan keduanya.",
            "Sebutkan syarat wajib haji.",
            "Sebutkan rukun dan wajib haji.",
            "Jelaskan larangan-larangan selama berihram.",
            "Analisis konsekuensi hukum bagi jemaah haji yang melanggar larangan ihram."
        ]
    },
    14: {
        title: "Muamalah I (Jual Beli)",
        groups: [
                    {
                        label: "Materi Pokok",
                        items: [
                            {
                                title: "Pengertian dan dasar hukum jual beli",
                                detail: `
                                    <h4>A. Pengertian Jual Beli</h4>
                                    <p>Jual beli atau <em>al-bai'</em> adalah akad pertukaran harta atau manfaat yang dilakukan secara sah berdasarkan kesepakatan para pihak. Dalam kehidupan sehari-hari, jual beli menjadi salah satu bentuk utama transaksi ekonomi.</p>

                                    <h4>B. Dasar Hukum</h4>
                                    <p>Jual beli pada dasarnya diperbolehkan dalam Islam selama memenuhi ketentuan syariat. Al-Qur'an membedakan jual beli dari riba dan memberikan dasar bagi aktivitas perdagangan yang dilakukan secara halal.</p>

                                    <h4>C. Prinsip Kerelaan</h4>
                                    <p>Transaksi harus dilaksanakan atas dasar kerelaan para pihak. Kerelaan tersebut harus didasarkan pada informasi yang cukup dan tidak diperoleh melalui penipuan atau paksaan.</p>

                                    <h4>D. Tujuan Pengaturan Jual Beli</h4>
                                    <p>Ketentuan jual beli bertujuan menciptakan transaksi yang adil, transparan, saling menguntungkan, serta melindungi hak penjual dan pembeli.</p>
                                `,
                                rangkuman: "Jual beli adalah akad pertukaran yang pada dasarnya diperbolehkan selama memenuhi ketentuan syariat. Prinsip pentingnya adalah kerelaan, kejujuran, keadilan, dan tidak adanya unsur yang dilarang."
                            },
                            {
                                title: "Rukun dan syarat jual beli",
                                detail: `
                                    <h4>A. Rukun Jual Beli</h4>
                                    <p>Dalam pembahasan fikih, unsur jual beli mencakup pihak yang melakukan akad, objek transaksi, dan sighat atau bentuk akad. Rincian klasifikasi rukun dapat berbeda menurut mazhab.</p>

                                    <h4>B. Pihak yang Berakad</h4>
                                    <p>Penjual dan pembeli harus memiliki kapasitas untuk melakukan transaksi serta melaksanakan akad atas dasar kehendak sendiri.</p>

                                    <h4>C. Objek Jual Beli</h4>
                                    <p>Barang yang diperjualbelikan harus memiliki kejelasan, dapat diserahterimakan, dan merupakan objek yang diperbolehkan untuk diperjualbelikan menurut syariat.</p>

                                    <h4>D. Sighat atau Akad</h4>
                                    <p>Akad menunjukkan adanya kesepakatan antara pihak penjual dan pembeli. Dalam praktik modern, akad dapat dilakukan secara langsung maupun melalui media elektronik selama unsur dan ketentuannya terpenuhi.</p>
                                `,
                                rangkuman: "Jual beli memiliki unsur pihak yang berakad, objek transaksi, dan akad. Setiap unsur harus memenuhi ketentuan agar transaksi dapat dinilai sah menurut fikih."
                            },
                            {
                                title: "Jual beli yang dilarang dalam Islam",
                                detail: `
                                    <h4>A. Gharar</h4>
                                    <p>Gharar adalah ketidakjelasan yang berlebihan dalam transaksi sehingga dapat menimbulkan ketidakadilan atau perselisihan. Contohnya adalah ketidakjelasan objek, harga, atau kemampuan menyerahkan barang dalam kondisi tertentu.</p>

                                    <h4>B. Tadlis</h4>
                                    <p>Tadlis berkaitan dengan menyembunyikan cacat atau memberikan informasi yang menyesatkan mengenai barang yang diperjualbelikan.</p>

                                    <h4>C. Maisir</h4>
                                    <p>Maisir merupakan unsur perjudian atau spekulasi yang memperoleh keuntungan berdasarkan untung-untungan dengan mempertaruhkan sesuatu.</p>

                                    <h4>D. Objek yang Dilarang</h4>
                                    <p>Islam melarang transaksi terhadap objek tertentu yang diharamkan atau tidak memenuhi syarat sebagai objek jual beli yang sah.</p>
                                `,
                                rangkuman: "Jual beli dilarang apabila mengandung unsur yang bertentangan dengan syariat, seperti gharar yang berlebihan, penipuan atau tadlis, maisir, maupun objek transaksi yang diharamkan."
                            },
                            {
                                title: "Jual beli online dan transaksi digital",
                                detail: `
                                    <h4>A. Konsep Jual Beli Online</h4>
                                    <p>Jual beli online merupakan transaksi yang dilakukan melalui media elektronik seperti marketplace, aplikasi, atau situs web. Secara prinsip, transaksi digital dapat mengikuti ketentuan jual beli dalam fikih.</p>

                                    <h4>B. Kejelasan Informasi</h4>
                                    <p>Penjual perlu memberikan informasi yang jelas mengenai barang, harga, kondisi, jumlah, serta ketentuan pengiriman. Pembeli juga harus memahami objek dan ketentuan transaksi sebelum menyetujui akad.</p>

                                    <h4>C. Akad Elektronik</h4>
                                    <p>Kesepakatan dalam transaksi digital dapat diwujudkan melalui tindakan elektronik seperti persetujuan pembelian, pembayaran, dan konfirmasi pesanan selama menunjukkan adanya kesepakatan para pihak.</p>

                                    <h4>D. Perlindungan Konsumen</h4>
                                    <p>Prinsip kejujuran dan keadilan tetap berlaku dalam transaksi digital. Penipuan, manipulasi informasi, dan penyembunyian cacat barang bertentangan dengan prinsip muamalah Islam.</p>
                                `,
                                rangkuman: "Jual beli online pada prinsipnya dapat dilakukan selama memenuhi ketentuan akad dan prinsip muamalah. Kejelasan barang, harga, pembayaran, pengiriman, serta kejujuran informasi menjadi hal penting dalam transaksi digital."
                            }
                        ]
                    }
                            ],
                        output: "Output: Mampu menjelaskan rukun, syarat jual beli, dan konsep khiyar dalam muamalah",
                        youtube: "",
                        videoDesc: "Pertemuan 14 · Rukun, syarat jual beli & khiyar",
                        studiKasus: "Analisis penerapan rukun dan syarat jual beli serta hak khiyar dalam transaksi jual beli online.",
                        mcq: [
                            { q: "Muamalah dalam Islam mengatur ....", options: ["Hubungan sosial dan ekonomi antarmanusia", "Hubungan manusia dengan Allah semata", "Tata cara shalat", "Rukun iman"], correct: 0 },
                            { q: "Salah satu prinsip muamalah dalam Islam adalah ....", options: ["Saling rida (ridha) antara kedua belah pihak", "Paksaan salah satu pihak", "Ketidakjelasan objek akad", "Riba dalam transaksi"], correct: 0 },
                            { q: "Salah satu rukun jual beli adalah ....", options: ["Penjual, pembeli, dan barang/harga yang jelas", "Hanya penjual saja", "Hanya barang saja", "Hanya harga saja"], correct: 0 },
                            { q: "Syarat sah jual beli di antaranya adalah ....", options: ["Barang yang diperjualbelikan harus halal dan jelas", "Barang boleh tidak jelas wujudnya", "Harga boleh tidak disepakati", "Transaksi boleh mengandung unsur penipuan"], correct: 0 },
                            { q: "Jual beli menjadi batal apabila ....", options: ["Mengandung unsur riba atau gharar (ketidakjelasan)", "Dilakukan dengan akad yang jelas", "Barang sesuai dengan yang dijanjikan", "Harga disepakati kedua pihak"], correct: 0 },
                            { q: "Khiyar dalam jual beli berarti ....", options: ["Hak untuk memilih melanjutkan atau membatalkan transaksi", "Kewajiban membayar penuh", "Larangan membatalkan transaksi", "Kewajiban menyerahkan barang tanpa syarat"], correct: 0 },
                            { q: "Salah satu jenis khiyar adalah ....", options: ["Khiyar majlis, yaitu hak memilih selama masih berada di tempat akad", "Khiyar yang tidak pernah berlaku", "Khiyar hanya untuk penjual", "Khiyar yang menghapus seluruh akad otomatis"], correct: 0 },
                            { q: "Etika bisnis dalam Islam menekankan ....", options: ["Kejujuran dan keterbukaan informasi mengenai barang yang dijual", "Menyembunyikan cacat barang", "Menipu pembeli demi keuntungan", "Mengabaikan hak pembeli"], correct: 0 },
                            { q: "Gharar dalam jual beli berarti ....", options: ["Ketidakjelasan yang dapat merugikan salah satu pihak", "Kejelasan penuh mengenai objek akad", "Kesepakatan harga yang adil", "Transaksi yang dilakukan secara tunai"], correct: 0 },
                            { q: "Salah satu tantangan penerapan fikih jual beli pada transaksi online adalah ....", options: ["Memastikan kejelasan objek dan kejujuran deskripsi barang", "Tidak ada tantangan sama sekali", "Transaksi online otomatis dilarang", "Transaksi online tidak memerlukan akad"], correct: 0 }
                        ],
                        essay: [
                            "Jelaskan pengertian dan prinsip-prinsip muamalah dalam Islam.",
                            "Sebutkan rukun dan syarat sah jual beli.",
                            "Jelaskan hal-hal yang menyebabkan jual beli menjadi batal.",
                            "Jelaskan konsep khiyar dan jenis-jenisnya dalam jual beli.",
                            "Analisis penerapan etika bisnis Islam dan khiyar dalam transaksi jual beli online."
                        ]
                    },
    15: {
        title: "Muamalah II (Riba dan Ekonomi Syariah)",
        groups: [
                        {
                label: "Materi Pokok",
                items: [
                    {
                        title: "Pengertian dan macam-macam riba",
                        detail: `
                            <h4>A. Pengertian Riba</h4>
                            <p>Riba secara umum berkaitan dengan tambahan yang dipersyaratkan dalam transaksi tertentu dan dilarang dalam hukum Islam. Larangan riba merupakan salah satu prinsip penting dalam ekonomi syariah.</p>

                            <h4>B. Riba Fadhl</h4>
                            <p>Riba fadhl berkaitan dengan pertukaran barang ribawi sejenis yang dilakukan dengan kelebihan atau tidak memenuhi ketentuan pertukaran yang dipersyaratkan dalam fikih.</p>

                            <h4>C. Riba Nasi'ah</h4>
                            <p>Riba nasi'ah berkaitan dengan tambahan yang muncul karena penundaan atau penangguhan dalam transaksi tertentu yang termasuk dalam pembahasan riba.</p>

                            <h4>D. Larangan Riba</h4>
                            <p>Larangan riba bertujuan mencegah praktik ekonomi yang mengandung ketidakadilan dan eksploitasi serta mendorong transaksi yang lebih adil dan produktif.</p>
                        `,
                        rangkuman: "Riba merupakan tambahan yang dilarang dalam transaksi tertentu menurut syariat. Dalam fikih dikenal beberapa bentuk riba, antara lain riba fadhl dan riba nasi'ah."
                    },
                    {
                        title: "Perbedaan riba, jual beli, dan keuntungan",
                        detail: `
                            <h4>A. Keuntungan dalam Jual Beli</h4>
                            <p>Keuntungan dalam jual beli berasal dari pertukaran barang atau jasa yang dilakukan melalui akad yang sah. Besarnya keuntungan tidak otomatis menjadikan suatu transaksi sebagai riba.</p>

                            <h4>B. Riba</h4>
                            <p>Riba memiliki karakteristik khusus yang berkaitan dengan tambahan terlarang dalam transaksi tertentu. Karena itu, analisis suatu transaksi harus memperhatikan struktur akad dan objek transaksinya.</p>

                            <h4>C. Perbedaan Risiko</h4>
                            <p>Dalam perdagangan, keuntungan pada dasarnya berkaitan dengan kepemilikan dan risiko usaha. Dalam transaksi yang mengandung riba, tambahan dapat dipersyaratkan berdasarkan struktur transaksi yang dilarang.</p>

                            <h4>D. Pentingnya Analisis Akad</h4>
                            <p>Dalam ekonomi modern, suatu transaksi tidak cukup dinilai hanya berdasarkan nama produknya. Struktur akad, hubungan para pihak, objek, kewajiban pembayaran, serta mekanisme keuntungan perlu dianalisis.</p>
                        `,
                        rangkuman: "Keuntungan jual beli dan riba tidak dapat disamakan. Penilaian transaksi harus melihat akad dan mekanisme ekonominya, bukan hanya besar kecilnya keuntungan atau nama produk."
                    },
                    {
                        title: "Prinsip dasar ekonomi syariah",
                        detail: `
                            <h4>A. Keadilan</h4>
                            <p>Ekonomi syariah menekankan keadilan dalam hubungan ekonomi sehingga hak dan kewajiban para pihak harus diperhatikan secara seimbang.</p>

                            <h4>B. Larangan Unsur yang Diharamkan</h4>
                            <p>Transaksi ekonomi syariah menghindari unsur seperti riba, gharar yang berlebihan, dan maisir sesuai dengan ketentuan syariat.</p>

                            <h4>C. Kerelaan dan Transparansi</h4>
                            <p>Para pihak harus mengetahui ketentuan transaksi dan menyepakatinya tanpa adanya penipuan, manipulasi, atau paksaan.</p>

                            <h4>D. Kemaslahatan</h4>
                            <p>Kegiatan ekonomi diarahkan untuk menghasilkan manfaat yang baik bagi individu dan masyarakat serta tidak menimbulkan kerugian atau eksploitasi yang bertentangan dengan prinsip syariah.</p>
                        `,
                        rangkuman: "Ekonomi syariah berlandaskan keadilan, transparansi, kerelaan, kemaslahatan, serta menghindari riba, gharar yang berlebihan, dan maisir."
                    },
                    {
                        title: "Contoh penerapan ekonomi syariah dalam kehidupan modern",
                        detail: `
                            <h4>A. Perbankan Syariah</h4>
                            <p>Perbankan syariah menggunakan akad-akad yang dirancang sesuai prinsip syariah dalam penghimpunan dana, pembiayaan, dan layanan keuangan.</p>

                            <h4>B. Akad Bagi Hasil</h4>
                            <p>Akad seperti mudharabah dan musyarakah menggunakan konsep kerja sama dengan pembagian hasil sesuai kesepakatan dan ketentuan akad.</p>

                            <h4>C. Jual Beli dan Pembiayaan Syariah</h4>
                            <p>Dalam praktik modern terdapat berbagai bentuk pembiayaan yang menggunakan akad jual beli atau akad lainnya. Setiap produk perlu dilihat berdasarkan struktur akad dan ketentuan syariahnya.</p>

                            <h4>D. Ekonomi Digital</h4>
                            <p>Prinsip ekonomi syariah juga dapat diterapkan dalam perdagangan digital, pembayaran elektronik, dan berbagai bentuk bisnis modern selama transaksi memenuhi prinsip dan ketentuan syariah.</p>
                        `,
                        rangkuman: "Ekonomi syariah dapat diterapkan dalam perbankan, pembiayaan, perdagangan, kerja sama usaha, dan ekonomi digital dengan menggunakan akad serta mekanisme yang sesuai dengan prinsip syariah."
                    }
                ]
            }
        ],
        output: "Output: Mampu mengevaluasi persoalan riba, ekonomi syariah, dan kasus muamalah kontemporer",
        youtube: "",
        videoDesc: "Pertemuan 15 · Riba, ekonomi syariah & kasus kredit-paylater",
        studiKasus: "Analisis kesesuaian skema kredit bank, pinjaman online, dan paylater dengan prinsip ekonomi syariah.",
        mcq: [
            { q: "Riba secara bahasa berarti ....", options: ["Tambahan atau kelebihan", "Pengurangan", "Kesepakatan", "Pembagian"], correct: 0 },
            { q: "Riba dalam Islam hukumnya ....", options: ["Haram", "Mubah", "Sunnah", "Makruh saja"], correct: 0 },
            { q: "Riba nasi'ah adalah ....", options: ["Tambahan yang disyaratkan karena penundaan waktu pembayaran", "Tambahan karena pertukaran barang sejenis yang tidak seimbang secara tunai", "Tambahan karena hadiah", "Tambahan karena zakat"], correct: 0 },
            { q: "Riba fadhl adalah ....", options: ["Tambahan pada pertukaran barang ribawi sejenis yang tidak seimbang", "Tambahan karena keterlambatan pembayaran utang", "Tambahan berupa hadiah pernikahan", "Tambahan berupa sedekah"], correct: 0 },
            { q: "Bank syariah berbeda dengan bank konvensional dalam hal ....", options: ["Sistem bagi hasil menggantikan sistem bunga", "Penggunaan bunga tetap", "Tidak adanya akad dalam transaksi", "Tidak ada pengawasan syariah"], correct: 0 },
            { q: "Salah satu prinsip ekonomi syariah adalah ....", options: ["Larangan riba, gharar, dan maisir (judi)", "Kebebasan penuh tanpa batasan syariat", "Bunga sebagai sumber keuntungan utama", "Spekulasi sebagai dasar transaksi"], correct: 0 },
            { q: "Kredit bank konvensional umumnya mengandung unsur ....", options: ["Bunga yang termasuk kategori riba", "Bagi hasil yang sesuai syariat", "Akad murabahah", "Akad mudharabah"], correct: 0 },
            { q: "Pinjaman online (pinjol) ilegal sering kali mengandung ....", options: ["Bunga tinggi yang termasuk riba dan praktik yang merugikan peminjam", "Skema bagi hasil yang adil", "Pengawasan otoritas syariah yang ketat", "Akad yang sesuai fikih muamalah"], correct: 0 },
            { q: "Paylater dapat dikategorikan sesuai fikih apabila ....", options: ["Tidak mengandung unsur riba, gharar, dan kezaliman dalam akadnya", "Selalu dianggap halal tanpa syarat", "Selalu dianggap haram tanpa analisis", "Tidak memerlukan akad yang jelas"], correct: 0 },
            { q: "Analisis kasus muamalah kontemporer memerlukan ....", options: ["Pemahaman terhadap prinsip fikih muamalah dan praktik ekonomi modern", "Pengabaian terhadap dalil syariat", "Pendapat pribadi semata", "Kebiasaan masyarakat tanpa dasar hukum"], correct: 0 }
        ],
        essay: [
            "Jelaskan pengertian riba dan dalil larangannya dalam Islam.",
            "Jelaskan perbedaan riba nasi'ah dan riba fadhl.",
            "Jelaskan prinsip dasar sistem ekonomi dan perbankan syariah.",
            "Analisis kesesuaian skema kredit bank konvensional dengan prinsip fikih muamalah.",
            "Analisis kesesuaian pinjaman online dan paylater dengan prinsip ekonomi syariah."
        ]
    }
};