const formLogin = document.querySelector("#form-login");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const pesanLogin = document.querySelector("#pesan-login");
const pesanSD = document.querySelector("#pesan-selamat-datang");
const tgPassword = document.querySelector("#toggle-password");
let sudahLogin = false;

formLogin.addEventListener("submit", function(event){
    event.preventDefault();
    
    if(username.value === "") {
        pesanLogin.textContent = "Username wajib diisi!";
        pesanLogin.style.color = "red";
    } else if (password.value === "") {
        pesanLogin.textContent = "Password wajib diisi!";
        pesanLogin.style.color = "red";
    } else if(username.value === "yusril" && password.value === "12345") {
        sudahLogin = true;
        console.log(sudahLogin);
        pesanLogin.textContent = "Halo, " + username.value + "!";
        pesanSD.textContent = "Selamat Datang di Halaman Utama!"
        pesanLogin.style.color = "green";
        pesanSD.style.color = "green";
        username.value = "";
        password.value = "";
    } else {
        pesanLogin.textContent = "username/password salah";
        pesanSD.textContent = "";
        pesanLogin.style.color = "red";
    }
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
