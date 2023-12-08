// Soal Ketiga
// Case Pertama
let angka1 = 2
let angka2 = 2

// Menghitung operasi 
function hitung(angka1, angka2, operator) {
    switch (operator) {
    case "+":
        return angka1 + angka2;
    case "-":
        return angka1 - angka2;
    case "*":
        return angka1 * angka2;
    case "/":
        return angka1 / angka2;
    default:
    return "Operator tidak valid";
    }
}

// Menampilkan Output
console.log("Hasil 2 + 2 = " + hitung(angka1, angka2, "+"));
console.log("Hasil 2 - 2 = " + hitung(angka1, angka2, "-"));
console.log("Hasil 2 * 2 = " + hitung(angka1, angka2, "*"));
console.log("Hasil 2 / 2 = " + hitung(angka1, angka2, "/"));
// Case Kedua
angka1 = 3
angka2 = 4

// Menampilkan Output
console.log("Hasil 3 + 4 = " + hitung(angka1, angka2, "+"));
console.log("Hasil 3 - 4 = " + hitung(angka1, angka2, "-"));
console.log("Hasil 3 * 4 = " + hitung(angka1, angka2, "*"));
console.log("Hasil 3 / 4 = " + hitung(angka1, angka2, "/"));