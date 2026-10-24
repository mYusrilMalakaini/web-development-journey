const formLogin = document.querySelector("#form-login");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const pesanLogin = document.querySelector("#pesan-login");

formLogin.addEventListener("submit", function(event){
    event.preventDefault();

    pesanLogin.textContent = "Halo, " + username.value + "!";
})