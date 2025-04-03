// list 1 dari soal
const list1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
// list 2 dari soal
const list2 = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5];
// deklarasi fungsi review yang menghitung nilai terendah, nilai tertinggi, dan nilai rata-rata dari paramerter yang berupa list yang telah dideklarasi sebelumnya
function review(list) {
    let count = sum = 0;
    let min = Infinity;
    let max = -Infinity;
    for (let i of list) {
        if (i < min) {
            min = i;
        }
        if (i > max) {
            max = i
        }
        sum += i;
        count += 1;
    }
    let mean = sum / count;
    const answer = new Array(min, max, mean);
    return answer;
}
// Menampilkan Output
console.log("Jawaban list satu: ", review(list1));
console.log("Jawaban list dua: ", review(list2));