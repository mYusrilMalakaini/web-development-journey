const inputTugas = document.querySelector("#inputTugas");
const tombolTambah = document.querySelector("#tombolTambah");
const daftarTugas = document.querySelector("#daftarTugas");

console.log(daftarTugas[1].teks);
console.log(daftarTugas[0].selesai);
console.log(daftarTugas[2].selesai);


let daftarDataTugas = JSON.parse(
    localStorage.getItem("daftarDataTugas")
) || [];

daftarDataTugas = daftarDataTugas.map(function(item) {
    if (typeof item === "string") {
        return {
            teks: item,
            selesai: false
        };
    }

    return item;
});

function simpanTugas() {
    localStorage.setItem(
        "daftarDataTugas",
        JSON.stringify(daftarDataTugas)
    );
}

function tampilkanTugas(item) {
    const tugasBaru = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.selesai;

    const teksTugas = document.createElement("span");
    teksTugas.textContent = item.teks;

    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";

    teksTugas.classList.toggle("selesai", item.selesai);

    checkbox.addEventListener("change", function() {
        item.selesai = checkbox.checked;
        teksTugas.classList.toggle("selesai", item.selesai);
        simpanTugas();
    });

    tombolHapus.addEventListener("click", function() {
        daftarDataTugas = daftarDataTugas.filter(function(tugas) {
            return tugas !== item;
        });

        simpanTugas();
        tugasBaru.remove();
    });

    tugasBaru.appendChild(checkbox);
    tugasBaru.appendChild(teksTugas);
    tugasBaru.appendChild(tombolHapus);

    daftarTugas.appendChild(tugasBaru);
}

function tambahTugas() {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        return;
    }

    const tugasBaru = {
        teks: teks,
        selesai: false
    };

    daftarDataTugas.push(tugasBaru);

    simpanTugas();
    tampilkanTugas(tugasBaru);

    inputTugas.value = "";
    inputTugas.focus();
}

tombolTambah.addEventListener("click", function() {
    tambahTugas();
});

inputTugas.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        tambahTugas();
    }
});

simpanTugas();

for (let item of daftarDataTugas) {
    tampilkanTugas(item);
}
