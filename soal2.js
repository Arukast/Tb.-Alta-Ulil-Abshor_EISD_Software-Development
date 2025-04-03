// deklarasi variable
let word1, word2, word3, word4, word5;
// pemberian value setiap variable
word1 = "Angsa";
word2 = "KataK";
word3 = "kasur empuk";
word4 = "Aku Suka Kamu";
word5 = "Ibu Ratna antar ubi.";

// deklarasi fungsi untuk mencari kata palindrom dengan parameter berupa string
function palindrom(wordInput){
    // melakukan RegEx untuk menghapus semua karakter selain alphabet dan merubah string menjadi lower case 
    const word = wordInput.replace(/[^a-zA-Z]/g, '').toLowerCase();
    // merubah kata yang telah diubah sebelumnya dengan cara mengubahnya menjadi array lalu di reverse dan setelah itu diubah kembali menjadi string
    const reverseWord = word.split("").reverse().join("");
    // melakukan conditional operator dengan mengecek apakah variable word dan reverseWord sama baik dalam value dan tipe data 
    return word === reverseWord ? "eureeka!" : "suka blyat";
}
// menampilkan output
console.log(palindrom(word1));
console.log(palindrom(word2));
console.log(palindrom(word3));
console.log(palindrom(word4));
console.log(palindrom(word5));