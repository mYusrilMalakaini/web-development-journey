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

if(title != null) {
    title.textContent ="Saya siap membuat web interaktif!";
}

let tombol1 = document.querySelector("tombol1");
let pesan1 = document.querySelector("#pesan1");

tombol1.addEventListener("click", function(){
    pesan1.textContent = "Tombol berhasil diklik!";
});