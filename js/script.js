function redirGithub() {
    window.location.href = "https://github.com/mYusrilMalakaini";
}

function redirInstagram() {
    window.location.href = "https://www.instagram.com/yusssriill/";
}

function redirWhatsapp() {
    window.location.href = "https://wa.me/1329812924427";
}

function reloadWeb() {
    window.location.reload();
}

let title = document.querySelector("#hero-title");
let btn1 = document.querySelector(".btn-secondary");

btn1.addEventListener("click", function(){
    if(title.textContent === "Selamat Datang") {
    title.textContent = "Halo, Yusril!";
    title.style.color = "red";
    } else {
        title.textContent = "Selamat Datang";
        title.style.color = "blue";
    } 
});

