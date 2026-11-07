// let inputBuah = document.querySelector("#inputBuah");
// let tombolTambah = document.querySelector("#tombolTambah");
// let daftarBuah = document.querySelector("#daftarBuah");

// tombolTambah.addEventListener("click", function(){
//     let namaBuah = inputBuah.value;
//     let hapusBuah = document.createElement("button")
//     console.log(namaBuah);
//     let buahBaru = document.createElement("li");
//     buahBaru.textContent = namaBuah;
//     hapusBuah.textContent = "Hapus"
//     daftarBuah.appendChild(buahBaru);
//     buahBaru.appendChild(hapusBuah);
// });

// daftarBuah.addEventListener("click", function(event) {
//     if (event.target.classList.contains("tombolHapus")) {
//         event.target.parentElement.remove();
//     }
// });

// let daftarHewan = ["Kucing", "Anjing", "Kelinci", "Burung", "Ikan"];

// let daftarHewanHTML = document.querySelector("#daftarHewanHTML");

// daftarHewan.forEach(function(hewan){
//     let itemHewan = document.createElement("li");

//     itemHewan.textContent = hewan;

//     daftarHewanHTML.appendChild(itemHewan);
// });

// let hewan = daftarHewan.map(function(hewan){
//     let itemHewan = document.createElement("li");

//     itemHewan.textContent = hewan;
//     return itemHewan;
// });

// hewan.forEach(function(item){
//     daftarHewanHTML.appendChild(item);
// });

localStorage.setItem("nama", "Yusril");

let namaPengguna = localStorage.getItem("nama");

console.log(namaPengguna);

let pengguna = {
    nama: "Yusril",
    umur: 21,
    hobi: ["Coding", "Futsal", "Gaming"]
};

let dataJSON =  JSON.stringify(pengguna);

localStorage.setItem("pengguna", dataJSON);

let dataTersimpan = localStorage.getItem("pengguna");

let dataPengguna = JSON.parse(dataTersimpan);
console.log(dataPengguna.nama);
console.log(dataPengguna.umur);
console.log(dataPengguna.hobi);
