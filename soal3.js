// variable list tamu yang datang dan bukti foto
const listGuest = ["Ningguang", "Hutao", "Xiao", "Childe"];
const photoEvidence = true; 

// fungsi dengan parameter list dan bukti yang akan mengembalikan hasil berupa string untuk hasil pengecekan suspect 
let suspectChecker = (list, evidence) => {
    // variable yang mendeklarasikan bahwa kue masih ada
    let cakeExist = true;

    // iterasi untuk mengecek setiap tamu yang ada di list tamu sesuai urutan kedatangan
    for (let guest of list) {
        // mengecek apakah tamu bernama Xiao dan memiliki bukti foto
        if (guest === "Xiao" && evidence) {
            // jika kondisi benar, maka akan membuktikan bahwa Xiao dan tamu yang telah datang sebelum Xiao tidak bersalah
            console.log(`${guest} mengambil foto dan kue masih ada. Oleh karena itu tamu sebelum Xiao tidak bersalah dan Xioa memiliki kemungkinan kecil untuk bersalah.`);
        // mengecek apakah tamu bernama Childe
        } else if (guest === "Childe") {
            // jika kondisi benar, maka Childe dapat dipastikan pelaku karena masuk terakhir sebelum kue hilang
            console.log(`${guest} masuk terakhir sebelum kue hilang!`);
            // mengubah value variable yang sebelumnya true menjadi false
            cakeExist = false;
        }
    }
    // mengecek apakah kue hilang 
    if (!cakeExist) {
        // jika kondisi benar, maka fungsi menghasilkan kesimpulan berupa Childe adalah pelaku
        return "Kemungkinan besar pelaku adalah Childe!";
    } else {
        // jika kondisi tidak benar, maka fungsi menghasilkan kesimpulan tidak ada bukti yang cukup untuk mencari pelaku
        return 'Belum ada bukti yang cukup untuk mencari pelaku';
    }
}

// menampilkan output
console.log(suspectChecker(listGuest, photoEvidence));