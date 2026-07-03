// --- DATA SOAL GAME (DATA SOURCE) ---
const DATA_SOAL = [
    {
        level: 1,
        bahasa: "HTML",
        file: "index.html",
        petunjuk: "Gambar tidak muncul di browser karena tag atribut pemanggilan gambar keliru.",
        kodeRusak: `<!-- Cari baris yang salah di bawah ini -->\n<div class="profile">\n  <img href="logo.png" alt="Logo Perusahaan">\n</div>`,
        solusiBenar: `<img src="logo.png" alt="Logo Perusahaan">`
    },
    {
        level: 2,
        bahasa: "CSS",
        file: "style.css",
        petunjuk: "Warna latar belakang div kontainer gagal berubah karena kesalahan sintaksis penulisan nama kelas selector.",
        kodeRusak: `.container {\n  width: 100%;\n}\n\nclass-container {\n  background-color: red;\n}`,
        solusiBenar: `.container {`
    },
    {
        level: 3,
        bahasa: "JavaScript",
        file: "app.js",
        petunjuk: "Terjadi error karena fungsi pemanggilan element DOM ID tidak tepat.",
        kodeRusak: `// Ingin mengambil elemen <button id="submit"> \nconst tombol = document.getElementByTagName("submit");\ntombol.addEventListener("click", jalankan);`,
        solusiBenar: `const tombol = document.getElementById("submit");`
    },
    {
        level: 4,
        bahasa: "PHP",
        file: "koneksi.php",
        petunjuk: "Aplikasi crash (syntax error) karena kurangnya karakter penutup baris perintah database.",
        kodeRusak: `<?php\n$host = "localhost";\n$user = "root"\n$pass = "rahasia";\n$db   = "sekolah";`,
        solusiBenar: `$user = "root";`
    }
];

// --- STATE GAME ---
let levelSekarangIndex = 0;
let totalSkor = 0;

// --- ELEMEN DOM ---
const elLevel = document.getElementById('current-level');
const elBahasa = document.getElementById('code-language');
const elSkor = document.getElementById('current-score');
const elPetunjuk = document.getElementById('bug-clue');
const elKodeBlock = document.getElementById('code-block');
const elFileName = document.querySelector('.file-name');
const inputSolusi = document.getElementById('user-solution');
const btnSubmit = document.getElementById('submit-btn');
const elFeedback = document.getElementById('feedback-message');

// --- FUNGSI 1: LOAD JAWABAN/SOAL KE LAYAR ---
function muatSoal() {
    // Ambil data berdasarkan indeks level berjalan
    const data = DATA_SOAL[levelSekarangIndex];

    // Update teks informasi dashboard
    elLevel.innerText = `${data.level} / ${DATA_SOAL.length}`;
    elBahasa.innerText = data.bahasa;
    elFileName.innerText = data.file;
    elPetunjuk.innerText = data.petunjuk;
    
    // Gunakan innerText agar tag HTML rusak tidak dieksekusi sebagai HTML asli melainkan string kode teks biasa
    elKodeBlock.innerText = data.kodeRusak;
    
    // Kosongkan form input user dan sembunyikan feedback level sebelumnya
    inputSolusi.value = '';
    elFeedback.className = "feedback hidden";
}

// --- FUNGSI 2: CEK VALIDASI JAWABAN USER ---
function validasiJawaban() {
    const data = DATA_SOAL[levelSekarangIndex];
    
    // Lakukan pembersihan spasi berlebih di awal & akhir string input untuk menghindari salah ketik spasi
    const jawabanUserClean = inputSolusi.value.trim();
    const solusiBenarClean = data.solusiBenar.trim();

    if (jawabanUserClean === solusiBenarClean) {
        // JAWABAN BENAR
        totalSkor += 25;
        elSkor.innerText = totalSkor;

        tampilkanFeedback(true, "Selamat! Bug berhasil dibersihkan. ✨");
        
        // Kunci tombol sejenak agar user melihat efek sukses sebelum pindah level
        btnSubmit.disabled = true;

        setTimeout(() => {
            levelSekarangIndex++;
            btnSubmit.disabled = false;
            
            if (levelSekarangIndex < DATA_SOAL.length) {
                muatSoal();
            } else {
                menangGame();
            }
        }, 2000);

    } else {
        // JAWABAN SALAH
        tampilkanFeedback(false, "Kode masih error! Cek kembali ketelitian penulisan sintaksis Anda. ❌");
    }
}

// --- FUNGSI AUXILIARY: TAMPILKAN POPUP JAWABAN ---
function tampilkanFeedback(isSukses, pesan) {
    elFeedback.innerText = pesan;
    if (isSukses) {
        elFeedback.className = "feedback success";
    } else {
        elFeedback.className = "feedback error";
    }
}

// --- FUNGSI 3: KONDISI SELESAI GAME ---
function menangGame() {
    elLevel.innerText = "Selesai";
    elPetunjuk.innerText = "Luar biasa! Semua bug di sistem berhasil kamu bersihkan!";
    elKodeBlock.innerText = `// HASIL AKHIR:\nMission Accomplished!\nTotal Skor Anda: ${totalSkor} Poin.`;
    
    // Sembunyikan form aksi input
    document.querySelector('.action-container').style.display = 'none';
    elFeedback.className = "feedback success";
    elFeedback.innerText = "🏆 Anda Resmi Menjadi Bug Hunter Handal!";
}

// --- EVENT LISTENERS ---
btnSubmit.addEventListener('click', validasiJawaban);

// Dukungan fungsionalitas penekanan tombol 'Enter' langsung pada keyboard untuk mengirim jawaban
inputSolusi.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        validasiJawaban();
    }
});

// Jalankan inisialisasi muat soal pertama kali saat aplikasi dibuka
document.addEventListener('DOMContentLoaded', muatSoal);
