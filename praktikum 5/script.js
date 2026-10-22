const form = document.getElementById("formTugas");
const input = document.getElementById("inputTugas");
const daftar = document.getElementById("daftar");
const info = document.getElementById("info");
const btnHapusSemua = document.getElementById("btnHapusSemua");

// Ambil data tersimpan dari localStorage, atau gunakan array kosong bila belum ada
let tugas = JSON.parse(localStorage.getItem("tugas")) || [];

// Fungsi menyimpan array tugas ke localStorage
function simpan() {
    localStorage.setItem("tugas", JSON.stringify(tugas));
}

// Fungsi merender daftar tugas ke elemen HTML
function tampilkan() {
    daftar.innerHTML = ""; // kosongkan daftar lama

    tugas.forEach(function (item, index) {
        const li = document.createElement("li");
        if (item.selesai) li.classList.add("selesai");

        const teks = document.createElement("span");
        teks.textContent = item.judul; // aman dari serangan XSS

        const btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.className = "hapus";

        // Klik teks: tandai selesai / belum selesai
        teks.addEventListener("click", function () {
            tugas[index].selesai = !tugas[index].selesai;
            simpan();
            tampilkan();
        });

        // Klik tombol: hapus satu tugas
        btnHapus.addEventListener("click", function () {
            tugas.splice(index, 1);
            simpan();
            tampilkan();
        });

        li.appendChild(teks);
        li.appendChild(btnHapus);
        daftar.appendChild(li);
    });

    const sisa = tugas.filter(t => !t.selesai).length;
    info.textContent = `${sisa} dari ${tugas.length} tugas belum selesai`;
}

// Event submit form tambah tugas baru
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const judul = input.value.trim();

    if (judul === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    tugas.push({ judul: judul, selesai: false });
    simpan();
    tampilkan();
    input.value = "";
    input.focus();
});

// ============================================================
// Pertanyaan Analisis No. 3:
// Tombol Hapus Semua yang mengosongkan daftar setelah confirm()
// ============================================================
if (btnHapusSemua) {
    btnHapusSemua.addEventListener("click", function () {
        if (tugas.length === 0) {
            alert("Daftar tugas sudah kosong!");
            return;
        }

        const yakin = confirm("Apakah Anda yakin ingin menghapus semua tugas?");
        if (yakin) {
            tugas = [];
            simpan();
            tampilkan();
        }
    });
}

// Tampilkan data awal saat halaman pertama kali dimuat
tampilkan();
