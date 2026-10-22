// let saldoAwal = 50000;
// let saldoTambahan = 25000;
// let saldoAkhir = saldoAwal + saldoTambahan;


// console.log(saldoAkhir);


// function cekAngka(angka) {
//     if(angka > 0) {
//         return "Positif"
//     } else if(angka < 0) {
//         return "Negatif"
//     } else {
//         return "Nol"
//     }
// }

// console.log(cekAngka(5));
// console.log(cekAngka(-3));
// console.log(cekAngka(0));

// for(let i = 1; i <= 20; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
        
//     }
// }

// let angka = [4, 8, 12, 16];

// function cariAngka(angka, target) {
//     for(let item of angka) {
//         if(item === target) {
//             return true;
//         } 
//     }
//     return false;
// }

// console.log(cariAngka(angka, 12)); // true
// console.log(cariAngka(angka, 7));  // false

// let angka = [3, 8, 12, 5, 20, 7];

// let hasil = angka.filter((item) => item > 10);
// console.log(hasil);

// let nomor = [2, 4, 6, 8];

// let result = nomor.map((element) => element * 3);
// console.log(result);

// let angka = [4,8,12,15,20,25];

// let hasil = angka.filter((item) => item > 10);
// let total = hasil.map((item) => item * 2);

// console.log(total);

// let angka = [4, 10, 18, 22, 30];
let mahasiswa = [
    { nama: "Andi", nilai: 75 },
    { nama: "Budi", nilai: 90 },
    { nama: "Citra", nilai: 85 },
    { nama: "Dina", nilai: 95 }
];

let produk = [
    { nama: "Laptop", harga: 8000000 },
    { nama: "Mouse", harga: 150000 },
    { nama: "Keyboard", harga: 350000 },
    { nama: "Monitor", harga: 2000000 }
];

let hasilM = mahasiswa.find((item) => item.nama === "Ritra");
console.log(hasilM);

let hasilP = produk.find((barang) => barang.harga < 200000);
console.log(hasilP);

let angka = [5, 12, 18, 25, 30];

let hasil = angka.find((item) => item > 10 && item < 20);

console.log(hasil);
