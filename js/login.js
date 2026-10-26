const formLogin = document.querySelector("#form-login");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const pesanLogin = document.querySelector("#pesan-login");
const pesanSD = document.querySelector("#pesan-selamat-datang");
const tgPassword = document.querySelector("#toggle-password");
const statusLogin = document.querySelector("#status-login");
const btnLogout = document.querySelector("#btn-logout");
let sudahLogin = false;
btnLogout.disabled =  true;


function tampilkanPesan(teks, warna) {
    pesanLogin.textContent = teks;
    pesanLogin.style.color = warna;
}

formLogin.addEventListener("submit", function(event){
    event.preventDefault();

    if(sudahLogin === true) {
            return;
        }
    if(username.value === "") {
        tampilkanPesan("Username wajib diisi!","red");
    } else if (password.value === "") {
        tampilkanPesan("Password wajib diisi!","red");
    } else if(username.value === "yusril" && password.value === "12345") {
        btnLogout.disabled = false;
        sudahLogin = true;
        console.log(sudahLogin);
        statusLogin.textContent = "Sedang login";
        tampilkanPesan("anda berhasil login " + username.value + "!", "green");
        pesanSD.textContent = "Selamat Datang di Halaman Utama!"
        pesanSD.style.color = "green";
        username.value = "";
        password.value = "";
    } else {
        tampilkanPesan("tempiq salah lu username/password", "red");
        pesanSD.textContent = "";
        sudahLogin = false;
        statusLogin.textContent = "Status: Belum login";
        btnLogout.disabled = true;
    }
});

btnLogout.addEventListener("click", function(){
    btnLogout.disabled = true;
    sudahLogin = false;
    statusLogin.textContent = "Status: Belum login";
    pesanLogin.textContent = "";
    pesanSD.textContent = "";
    username.value = "";
    password.value = "";
});

tgPassword.addEventListener("click", function() {
    if (password.type === "password") {
        password.type = "text";
        tgPassword.textContent = "🙈";
    } else {
        password.type = "password";
        tgPassword.textContent = "👁️";
    }
});

