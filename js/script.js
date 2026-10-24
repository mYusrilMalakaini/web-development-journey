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
title.classList.add("judul-biru");
let btn1 = document.querySelector(".btn-secondary");
const deskripsi = document.querySelector("#deskripsi");
const tombol = document.querySelector("#tombol-deskripsi");
const tombol2 = document.querySelector("#tombol-warna");
const title2 = document.querySelector("#sub-2")
let angka = 0;

btn1.addEventListener("click", function() {
    angka++;

    if (angka >= 3) {
        btn1.textContent = "Selesai!";
        title.textContent = "HIHIHIHAA";
    } else {
        btn1.textContent = angka;
        title.textContent = "Selamat Datang!";
    }
});

tombol.addEventListener("click", function(){
    deskripsi.classList.toggle("deskripsi-sembunyi");

    if(deskripsi.classList.contains("deskripsi-sembunyi")) {
        tombol.textContent = "tampilkan deskripsi";
    } else {
        tombol.textContent = "sembunyikan deskripsi";
    }
});

tombol2.addEventListener("click",function(){

    if(title2.classList.contains("teks-ungu")) {
        title2.classList.remove("teks-ungu");
        title2.classList.add("teks-merah");
        tombol2.textContent = "ubah warna ungu";
    } else {
        title2.classList.remove("teks-merah");
        title2.classList.add("teks-ungu");
        tombol2.textContent = "ubah warna merah";
    }
});