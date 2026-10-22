function hitungGenap(angka) {
    let jumlah = 0;
    for (let item of angka) {
        if (item % 2 === 0) {
            jumlah = jumlah + 1;
        }
    }
    return jumlah; 
}

console.log(hitungGenap([10, 15, 20, 7, 8, 3]));
console.log(hitungGenap([1, 3, 5, 7]));
console.log(hitungGenap([2, 4, 6]));

// function hitungBesar(angka) {
//     let hasil = 0;
//     for(let item of angka) {
//         if (item > 10) {
//             hasil = hasil + 1;
//         }
//     }
//     return hasil;
// }

// console.log(hitungBesar([5, 12, 20, 8, 15]));
// console.log(hitungBesar([1, 2, 3]));
// console.log(hitungBesar([11, 12, 13]));

function ambilGenap(angka) {
    let hasil = [];
    for(let item of angka) {
        if (item % 2 === 0) {
            hasil.push(item);
        }
    }
    return hasil;
}

console.log(ambilGenap([1, 2, 3, 4, 5, 6]));
console.log(ambilGenap([1, 3, 5]));
console.log(ambilGenap([10, 15, 20]));

function ambilBesar(angka) {
    let result = [];
    for(let item of angka) {
        if(item > 10) {
            result.push(item);
        }
    }
    return result;
}

console.log(ambilBesar([5, 12, 20, 8, 15]));
console.log(ambilBesar([1, 2, 3]));
console.log(ambilBesar([10, 11, 12]));

function cariAngka(angka, target) {
    for(let item of angka){
        if(item === target) {
            return true;
        } 
    }
    return false;
}

console.log(cariAngka([10, 20, 30, 40], 20));
console.log(cariAngka([10, 20, 30, 40], 50));
console.log(cariAngka([5, 8, 12], 5));

let angka = [4, 8, 12, 15, 20];

let hasil = angka.filter((item) => item > 10);

let result = hasil.map((item) => item * 2);

console.log(result);
