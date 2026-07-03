# 🎯 Code Bug Hunter Game

Sebuah game edukasi interaktif berbasis web untuk melatih kemampuan *troubleshooting* dan analisis kode pemrograman. Pemain ditantang untuk menemukan kesalahan sintaksis (*bug*) pada potongan kode yang disediakan dan mengetikkan perbaikan yang benar.

Proyek ini dibangun menggunakan **Vanilla JavaScript (ES6+), HTML5, dan CSS3** tanpa *library* eksternal, menjadikannya contoh portofolio yang sangat baik untuk menunjukkan pemahaman struktur data dan logika manipulasi DOM.

---

## 🚀 Fitur Utama

*   **Multi-Language Challenges:** Menyediakan tantangan *debugging* dari berbagai bahasa pemrograman populer yang diajarkan di SMK RPL, meliputi **HTML, CSS, JavaScript, dan PHP**.
*   **VS Code Inspired UI:** Antarmuka tampilan kode dirancang menyerupai teks editor modern (*Dark Mode*) lengkap dengan dekorasi tombol jendela dan font monospace agar memberikan pengalaman layaknya *coding* sungguhan.
*   **Dynamic Data Architecture:** Soal-soal dikelola secara modular menggunakan struktur data *Array of Objects* di JavaScript, mempermudah penambahan level atau soal baru di masa mendatang.
*   **Smart Input Validation:** Sistem menggunakan metode `.trim()` untuk membersihkan spasi berlebih di awal atau akhir masukan pengguna, meminimalkan kesalahan validasi akibat ketidaksengajaan menekan tombol spasi.
*   **Instant Visual Feedback:** Memberikan indikasi warna hijau untuk jawaban benar dan warna merah untuk jawaban salah, lengkap dengan animasi transisi delay sebelum otomatis berpindah ke level berikutnya.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur dashboard skor, petunjuk, dan mini-editor
├── style.css        # Desain antarmuka gelap modern, skema warna editor, dan gaya feedback
└── script.js        # Array database soal, logika validasi input, dan manajemen level game
