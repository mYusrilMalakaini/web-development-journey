let daftarDataTugas = [ {
    teks: "belajar Javascript",
    selesai: false
},
{
    teks: "Mengerjakan Tugas IoT",
    selesai: true
},
{
    teks: "Belajar DOM",
    selesai: false
}];

console.log(daftarDataTugas[1].teks);
console.log(daftarDataTugas[0].selesai);
console.log(daftarDataTugas[2].selesai = true);
daftarDataTugas.push({teks:"Belajar CSS", selesai: false});
console.log(daftarDataTugas[3]);
console.log(daftarDataTugas.length);

let tugasAktif = daftarDataTugas.filter(function(nilai){
    return nilai.teks !== "Mengerjakan Tugas IoT";
})

console.log(tugasAktif);

let jumlahBelumSelesai = daftarDataTugas.filter(function(nilai) {
    return nilai.selesai !== true;
})

console.log(jumlahBelumSelesai.length);

let judul = document.querySelector("#judul")
judul.textContent = "Saya Sedang Belajar JavaScript";

let deskripsi = document.querySelector("#deskripsi");
deskripsi.textContent = "Saya sedang mempelajadi DOM Manipulation";

let daftarTugas = document.querySelector("#daftarTugas");
let tugasBaru1 = document.createElement("li")
let tugasBaru2 = document.createElement("li")

tugasBaru2.textContent = "Belajar CSS";
tugasBaru1.textContent = "Belajar JavaScript";

daftarTugas.appendChild(tugasBaru);
daftarTugas.appendChild(tugasBaru2);

let tugas1 = document.querySelector("#tugas1");
tugas1.remove();

let daftarTugas = document.querySelector("#daftarTugas");
let tugasBaru = document.createElement("li");
tugasBaru.textContent = "Belajar JavaScript";
daftarTugas.appendChild(tugasBaru);
let tugasLama = document.querySelector("#tugasLama");
tugasLama.remove();

let tombol = document.querySelector("#tombolBelajar");

tombol.addEventListener("click", function(){
    console.log("Saya sedang Belajar Event Listener!");
});

let nama = document.querySelector("#nama");
let hasil = document.querySelector("#hasil");

nama.addEventListener("input",function(event){
    hasil.textContent = event.target.value;
});