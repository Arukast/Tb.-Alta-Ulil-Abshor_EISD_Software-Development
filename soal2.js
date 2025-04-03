let word1, word2, word3, word4, word5;

word1 = "Angsa";
word2 = "KataK";
word3 = "kasur empuk";
word4 = "Aku Suka Kamu";
word5 = "Ibu Ratna antar ubi.";

function palindrom(wordInput){
    const word = wordInput.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reverseFixWord = word.split("").reverse().join("");

    return word === reverseFixWord ? "eureeka!" : "suka blyat";
}

console.log(palindrom(word1));
console.log(palindrom(word2));
console.log(palindrom(word3));
console.log(palindrom(word4));
console.log(palindrom(word5));