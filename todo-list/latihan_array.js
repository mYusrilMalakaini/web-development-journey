// let daftarDataTugas = [ {
//     teks: "belajar Javascript",
//     selesai: false
// },
// {
//     teks: "Mengerjakan Tugas IoT",
//     selesai: true
// },
// {
//     teks: "Belajar DOM",
//     selesai: false
// }];

// console.log(daftarDataTugas[1].teks);
// console.log(daftarDataTugas[0].selesai);
// console.log(daftarDataTugas[2].selesai = true);
// daftarDataTugas.push({teks:"Belajar CSS", selesai: false});
// console.log(daftarDataTugas[3]);
// console.log(daftarDataTugas.length);

// let tugasAktif = daftarDataTugas.filter(function(nilai){
//     return nilai.teks !== "Mengerjakan Tugas IoT";
// })

// console.log(tugasAktif);

// let jumlahBelumSelesai = daftarDataTugas.filter(function(nilai) {
//     return nilai.selesai !== true;
// })

// console.log(jumlahBelumSelesai.length);

// let judul = document.querySelector("#judul")
// judul.textContent = "Saya Sedang Belajar JavaScript";

// let deskripsi = document.querySelector("#deskripsi");
// deskripsi.textContent = "Saya sedang mempelajadi DOM Manipulation";

// let daftarTugas = document.querySelector("#daftarTugas");
// let tugasBaru1 = document.createElement("li")
// let tugasBaru2 = document.createElement("li")

// tugasBaru2.textContent = "Belajar CSS";
// tugasBaru1.textContent = "Belajar JavaScript";

// daftarTugas.appendChild(tugasBaru);
// daftarTugas.appendChild(tugasBaru2);

// let tugas1 = document.querySelector("#tugas1");
// tugas1.remove();

// let daftarTugas = document.querySelector("#daftarTugas");
// let tugasBaru = document.createElement("li");
// tugasBaru.textContent = "Belajar JavaScript";
// daftarTugas.appendChild(tugasBaru);
// let tugasLama = document.querySelector("#tugasLama");
// tugasLama.remove();

// let tombol = document.querySelector("#tombolBelajar");

// tombol.addEventListener("click", function(){
//     console.log("Saya sedang Belajar Event Listener!");
// });

// let nama = document.querySelector("#nama");
// let hasil = document.querySelector("#hasil");

// nama.addEventListener("input",function(event){
//     hasil.textContent = event.target.value;
// });

// let formNama = document.querySelector("#formNama");
// let nama = document.querySelector("#nama");
// let hasil = document.querySelector("#hasil");
// let polaNama = /^[a-zA-Z ]+$/;
// let PolaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// let polaDomain = /^[^.]+(?:\.[^.]+)+$/;

// console.log(polaDomain.test("yahoo.co.id"));
// console.log(polaDomain.test("yahoo.com"));
// console.log(polaDomain.test("yahoo"));
// console.log(polaDomain.test("yahoo..co.id"));

// formNama.addEventListener("submit", function(event){
//     event.preventDefault();

//     if(nama.value.trim() === ""){
//         hasil.textContent = "Nama Wajib Diisi!";
//     } else if(nama.value.trim().length < 3) {
//         hasil.textContent = "Nama Minimal 3 Karakter!"
//     } else if(!polaNama.test(nama.value.trim())) {
//         hasil.textContent = "nama hanya boleh menggunakan huruf!";
//     } else {
//         hasil.textContent = "Halo " + nama.value.trim() + "!";
//     }
// });

// let polaNamaEmail = /^(?!.*\.\.)[^.\s@](?:[^@\s]*[^.\s@])?$/;
// let polaDomain = /^[^.]+(?:\.[^.]+)+$/;

// let email = "yusril@gmail.com";
// console.log(email);

// let bagianEmail = email.split("@");
// console.log(bagianEmail);

// console.log("Nama email: " + bagianEmail[0]);
// console.log("Domain: " + bagianEmail[1]);

// let namaEmail = bagianEmail[0];
// let domainEmail = bagianEmail[1];
// console.log(polaNamaEmail.test(namaEmail));
// console.log(polaDomain.test(domainEmail));

// let namaValid = polaNamaEmail.test(namaEmail);
// let domainValid = polaDomain.test(domainEmail);

// if(namaValid && domainValid) {
//     console.log("Email Valid");
// } else {
//     console.log("Email Tidak Valid");
// }

// Pemeriksaan email pertama
// if (email.split("@").length === 2) {
//     let bagianEmail = email.split("@");
//     let namaEmail = bagianEmail[0];
//     let domainEmail = bagianEmail[1];

//     console.log("Nama email:", namaEmail);
//     console.log("Domain:", domainEmail);
// } else {
//     console.log("Format @ salah");
// };

// // Pemeriksaan email kedua
// if (email2.split("@").length === 2) {
//     console.log("Email 2: Format @ benar");
// } else {
//     console.log("Email 2: Format @ salah");
// };

// // Pemeriksaan email ketiga
// if (email3.split("@").length === 2) {
//     console.log("Email 3: Format @ benar");
// } else {
//     console.log("Email 3: Format @ salah");
// };

let email = "yusril@gmail.com";

let polaNamaEmail = /^(?!.*\.\.)[^.\s@](?:[^@\s]*[^.\s@])?$/
let polaDomain = /^[^.]+(?:\.[^.]+)+$/;

if (email.split("@").length === 2) {
    console.log("Jumlah @ benar");

    let bagianEmail = email.split("@");

    let namaEmail = bagianEmail[0];
    let domainEmail = bagianEmail[1];

    let namaValid = polaNamaEmail.test(namaEmail);
    let domainValid = polaDomain.test(domainEmail);

    if (namaValid && domainValid) {
        console.log("Email Valid");
    } else {
        console.log("Email Tidak Valid");
    }
} else {
    console.log("Jumlah @ salah");
}



