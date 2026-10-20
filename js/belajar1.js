// const makanan = "nasi goreng";
// const harga = 15000;
// const enak = true;

// console.log(typeof makanan);
// console.log(typeof harga);
// console.log(typeof enak);


// input ndari pengguna

// const nilai = 80;

// if(nilai >= 85) {
//     console.log("Nilai kamu A");
// } else if (nilai >=75) {
//     console.log("Nilai kamu B");
// } else {
//     console.log("Kamu perlu belajar lagi");
// }

// const umur = 20;
// const punyaSIM = false;

// if (umur >= 17 && punyaSIM === true) {
//     console.log("Boleh mengemudi");
// } else {
//     console.log("belum boleh mengemudi");
// }

const punyaMember = true;
const umur = 17;
const izinKhusus = false;

if (umur >= 18 && (punyaMember || izinKhusus)) {
    console.log("boleh mengikuti pelatihan");
} else {
    console.log("tidak boleh mengikuti pelatihan");
}