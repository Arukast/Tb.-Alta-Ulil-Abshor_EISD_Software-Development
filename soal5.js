// Variable yang akan digunakan dalam soal
const varSoal = "Naip Lovyu";

// fungsi yang akan mencari kombinasi dari string dan akan mengembalikan nilai berupa set
let possibleCombination = (strInput) => {
    // mengubah input string menjadi hanya karakter huruf dan huruf kecil semua
    const fixStrInput = strInput.replace(/[^a-zA-Z]/g, '').toLowerCase();
    // deklarasi set baru
    let combination = new Set();
    // iterasi pertama untuk mengambil panjang awal indeks yang akan diambil
    for (let i = 0; i < fixStrInput.length; i++) {
        // iterasi kedua untuk mengambil panjang akhir indeks yang akan diambil
        for (let j = i + 1; j <= fixStrInput.length && (j - i) <= 6; j++) {
            // memasukan potongan huruf dari input string yang telah diubah dengan panjang dari i sampai j ke dalam set
            combination.add(fixStrInput.slice(i, j));
        }
    }
    // melakukan pengembalian
    return combination;
}
// deklarasi variable jawaban
let answer = possibleCombination(varSoal)
// menampilkan output
console.log(answer, "\n", answer.size)
