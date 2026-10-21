

function hitungTotal(nilai) {
    let total = 0;
    for(let item of nilai) {
        total = total + item;
    }
    return total;  
}

console.log(hitungTotal([10, 20, 30]));