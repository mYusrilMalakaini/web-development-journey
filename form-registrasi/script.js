
let formRegistrasi = document.querySelector("#formRegistrasi");
let inputNama = document.querySelector("#inputNama");
let inputEmail = document.querySelector("#inputEmail");
let inputPassword = document.querySelector("#inputPassword");
let konfirmasiPassword = document.querySelector("#konfirmasiPassword");
let hasil = document.querySelector("#hasil");
let togglePassword = document.querySelector("#togglePassword");
let toggleKonfirmasi = document.querySelector("#toggleKonfirmasi");
let passwordStrength = document.querySelector("#passwordStrength");

function toggleVisibility(input, tombol) {
    if (input.type === "password") {
        input.type = "text";
        tombol.textContent = "Hide";
    } else {
        input.type = "password";
        tombol.textContent = "Show";
    }
}

function tampilkanPesan(pesan, tipe) {
    hasil.textContent = pesan;

    hasil.classList.remove("error", "success");
    hasil.classList.add(tipe);
}

inputPassword.addEventListener("input",function(){
    let password = inputPassword.value;

    let adaKapital = /[A-Z]/.test(password);
    let adaHurufKecil = /[a-z]/.test(password);
    let adaAngka = /[0-9]/.test(password);
    let adaSimbol = /[^A-Za-z0-9]/.test(password);


    if(password.length < 8) {
        passwordStrength.classList.remove("medium");
        passwordStrength.classList.remove("strong");
        passwordStrength.classList.add("weak");
    } else if(password.length >= 8 && adaKapital && adaAngka && adaHurufKecil && adaSimbol) {
        passwordStrength.classList.remove("weak");
        passwordStrength.classList.remove("medium");
        passwordStrength.classList.add("strong");
    } else {
        passwordStrength.classList.remove("weak");
        passwordStrength.classList.remove("strong");
        passwordStrength.classList.add("medium");
    } 
});

formRegistrasi.addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = inputNama.value.trim();
    let email = inputEmail.value.trim();
    let password = inputPassword.value;
    let konfirmasi = konfirmasiPassword.value;

    // 1. Validasi nama
    if (nama === "") {
        tampilkanPesan("Nama wajib diisi!", "error");
        return;
    }

    if (nama.length < 3) {
        tampilkanPesan("Nama minimal 3 karakter", "error");
        return;
    }

    // 2. Validasi email
    if (email === "") {
        tampilkanPesan("Email wajib diisi!", "error");
        return;
    }

    let bagianEmail = email.split("@");

    if (bagianEmail.length !== 2) {
        tampilkanPesan("Email harus memiliki satu @!", "error");
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
        tampilkanPesan("Format email tidak valid", "error");
        return;
    }

    // 3. Validasi password
    if (password.trim() === "") {
        tampilkanPesan("Password wajib diisi!", "error");
        return;
    }

    if (password.length < 8) {
        tampilkanPesan("Password wajib memiliki 8 karakter", "error");
        return;
    }

    // 4. Validasi konfirmasi password
    if (konfirmasi === "") {
        tampilkanPesan("konfirmasi password wajib diiisi", "error");
        return;
    }

    if (password !== konfirmasi) {
        tampilkanPesan("Password tidak cocok", "error");
        return;
    }

    // 5. Semua validasi berhasil
    tampilkanPesan("Registrasi Berhasil", "success");
});

togglePassword.addEventListener("click", function() {
    toggleVisibility(inputPassword, togglePassword);
});

toggleKonfirmasi.addEventListener("click", function() {
    toggleVisibility(konfirmasiPassword, toggleKonfirmasi);
});



