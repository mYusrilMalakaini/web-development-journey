const inputTugas = document.querySelector("#inputTugas");
const tombolTambah = document.querySelector("#tombolTambah");
const daftarTugas = document.querySelector("#daftarTugas");

// Ambil data tugas yang tersimpan
let daftarDataTugas = JSON.parse(
    localStorage.getItem("daftarDataTugas")
) || [];

// Ubah data lama yang masih berbentuk string menjadi objek
daftarDataTugas = daftarDataTugas.map(function(item) {
    if (typeof item === "string") {
        return {
            teks: item,
            selesai: false
        };
    }

    return item;
});

// Simpan array tugas ke localStorage
function simpanTugas() {
    localStorage.setItem(
        "daftarDataTugas",
        JSON.stringify(daftarDataTugas)
    );
}

// Tampilkan satu tugas ke halaman
function tampilkanTugas(item) {
    const tugasBaru = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.selesai;

    const teksTugas = document.createElement("span");
    teksTugas.textContent = item.teks;

    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";

    // Tampilkan gaya coret jika tugas sudah selesai
    teksTugas.classList.toggle("selesai", item.selesai);

    // Perbarui dan simpan status checkbox
    checkbox.addEventListener("change", function() {
        item.selesai = checkbox.checked;
        teksTugas.classList.toggle("selesai", item.selesai);
        simpanTugas();
    });

    // Hapus tugas dari array dan localStorage
    tombolHapus.addEventListener("click", function() {
        daftarDataTugas = daftarDataTugas.filter(function(tugas) {
            return tugas !== item;
        });

        simpanTugas();
        tugasBaru.remove();
    });

    // Susun elemen tugas
    tugasBaru.appendChild(checkbox);
    tugasBaru.appendChild(teksTugas);
    tugasBaru.appendChild(tombolHapus);

    daftarTugas.appendChild(tugasBaru);
}

// Tambahkan tugas baru
function tambahTugas() {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        return;
    }

    const tugasBaru = {
        teks: teks,
        selesai: false
    };

    daftarDataTugas.push(tugasBaru);

    simpanTugas();
    tampilkanTugas(tugasBaru);

    inputTugas.value = "";
    inputTugas.focus();
}

// Klik tombol Tambah
tombolTambah.addEventListener("click", function() {
    tambahTugas();
});

// Tekan Enter untuk menambah tugas
inputTugas.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        tambahTugas();
    }
});

// Tampilkan semua tugas yang tersimpan
simpanTugas();

for (let item of daftarDataTugas) {
    tampilkanTugas(item);
}
