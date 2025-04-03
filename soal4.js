// deklarasi list
const listSoal1 = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,  12, 14, 16, 18, 20, 17, 19];
const listDummy = [1, 2, 3, 4, 5, 6]
// deklarasi fungsi yang mengecek apakah sebuah data/list memiliki nilai duplikat
function duplicateChecker(listInput) {
    // deklarasi set baru yang akan diisi dengan nilai-nilai yang ada di data tanpa ada yang duplikat
    const uniqueElements = new Set();
    // flag yang secara default akan dikirimkan false, akan tetapi perhitungan dibawah yang akan membuat nilai menjadi true
    let flag = false;
    // iterasi list dan mengecek setiap nilai didalam list dan jika set belum memiliki nilai yang diiterasi maka akan ditambahkan ke dalam set, tetapi jika memliki maka akan merubah nilai flag menjadi true dan iterasi akan berhenti
    for (let i of listInput) {
        if (uniqueElements.has(i)) {
            flag = true;
            break;
        } else {
            uniqueElements.add(i);
        }
    }
    // mengembalikan nilai flag
    return flag;
}
// menampilkan output
console.log(duplicateChecker(listSoal1));
console.log(duplicateChecker(listDummy));