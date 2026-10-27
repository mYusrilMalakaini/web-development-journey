const inputTugas = document.querySelector("#inputTugas");
const tombolTambah = document.querySelector("#tombolTambah");
const daftarTugas = document.querySelector("#daftarTugas");
let daftarDataTugas = [];

daftarDataTugas.push("Belajar JavaScript");
console.log(daftarDataTugas);
daftarDataTugas.push("belajar CSS");
console.log(daftarDataTugas.length);


localStorage.setItem(
    "daftarDataTugas",
    JSON.stringify(daftarDataTugas)
);



tombolTambah.addEventListener("click", function(){
    tambahTugas();
});

function tambahTugas() {
    if (inputTugas.value.trim() === "") {
        return;
    }

    const tugasBaru = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const teksTugas = document.createElement("span");
    teksTugas.textContent = inputTugas.value.trim();

    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";

    tugasBaru.appendChild(checkbox);
    tugasBaru.appendChild(teksTugas);
    tugasBaru.appendChild(tombolHapus);

    tombolHapus.addEventListener("click", function() {
        tugasBaru.remove();
    });

    checkbox.addEventListener("change", function() {
        teksTugas.classList.toggle("selesai", checkbox.checked);
    });

    daftarTugas.appendChild(tugasBaru);
    inputTugas.value = "";
}

inputTugas.addEventListener("keydown", function(event){
    if(event.key === "Enter") {
        tambahTugas();
    }    
});

localStorage.setItem("tes", "hallo");
localStorage.setItem("tes", "Belajar JavaScript");
console.log(localStorage.getItem("tes"));

const tugas = ["Belajar JavaScript","Belajar CSS"];
localStorage.setItem("daftarTugas", JSON.stringify(tugas));

const dataTersimpan = localStorage.getItem("daftarTugas");
console.log(dataTersimpan);

const tugasDibuka = JSON.parse(dataTersimpan);
console.log(tugasDibuka[1]);


