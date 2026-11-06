
let formRegistrasi = document.querySelector("#formRegistrasi");
let inputNama = document.querySelector("#inputNama");
let inputEmail = document.querySelector("#inputEmail");
let inputPassword = document.querySelector("#inputPassword");
let konfirmasiPassword = document.querySelector("#konfirmasiPassword");
let hasil = document.querySelector("#hasil");

function tampilkanPesan(pesan, tipe) {
    hasil.textContent = pesan;

    hasil.classList.remove("error", "success");
    hasil.classList.add(tipe);
}

formRegistrasi.addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = inputNama.value.trim();
    let email = inputEmail.value.trim();
    let password = inputPassword.value;
    let konfirmasi = konfirmasiPassword.value;

    // 1. Validasi nama
    if (nama === "") {
        hasil.textContent = "Nama wajib diisi!";
        return;
    }

    if (nama.length < 3) {
        hasil.textContent = "Nama minimal 3 karakter!";
        return;
    }

    // 2. Validasi email
    if (email === "") {
        hasil.textContent = "Email wajib diisi!";
        return;
    }

    let bagianEmail = email.split("@");

    if (bagianEmail.length !== 2) {
        hasil.textContent = "Email harus memiliki tepat satu @!";
        return;
    }

    let namaValid = bagianEmail[0];
    let domainValid = bagianEmail[1];

    if (
        namaValid === "" ||
        domainValid === "" ||
        !domainValid.includes(".") ||
        domainValid.startsWith(".") ||
        domainValid.endsWith(".")
    ) {
        hasil.textContent = "Format email tidak valid!";
        return;
    }

    // 3. Validasi password
    if (password.trim() === "") {
        hasil.textContent = "Password wajib diisi!";
        return;
    }

    if (password.length < 8) {
        hasil.textContent = "Password minimal 8 karakter!";
        return;
    }

    // 4. Validasi konfirmasi password
    if (konfirmasi === "") {
        hasil.textContent = "Konfirmasi password wajib diisi!";
        return;
    }

    if (password !== konfirmasi) {
        hasil.textContent = "Password tidak cocok!";
        return;
    }

    // 5. Semua validasi berhasil
    hasil.textContent = "Registrasi berhasil!";
});



