let inputTugas = document.querySelector("#inputTugas");
let tombolTambah = document.querySelector("#tombolTambah");
let daftarTugas = document.querySelector("#daftarTugas");

tombolTambah.addEventListener("click", function(){
    let namaTugas = inputTugas.value;
    let tugasBaru = document.createElement("li");
    tugasBaru.textContent = namaTugas.trim();
    let tombolHapus = document.createElement("button");
    let tombolSelesai = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolSelesai.textContent = "selesai";
    tombolHapus.classList.add("tombolHapus");
    tombolSelesai.classList.add("tombolSelesai");


    if(namaTugas.trim() === ""){
        return;
    } else {
        tugasBaru.appendChild(tombolHapus);
        tugasBaru.appendChild(tombolSelesai);
        daftarTugas.appendChild(tugasBaru);
        inputTugas.value = "";
    }
});

daftarTugas.addEventListener("click", function(event){
    if(event.target.classList.contains("tombolHapus")){
        event.target.parentElement.remove();
    };
    if(event.target.classList.contains("tombolSelesai")){
        event.target.parentElement.classList.toggle("selesai");
    }
});

