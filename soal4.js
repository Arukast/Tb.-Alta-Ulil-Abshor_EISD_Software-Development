const listSoal1 = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,  12, 14, 16, 18, 20, 17, 19];
const listDummy = [1, 2, 3, 4, 5, 6]

function duplicateChecker(listInput) {
    const uniqueElements = new Set();
    let flag = false;
    for (let i of listInput) {
        if (uniqueElements.has(i)) {
            flag = true;
            break;
        } else {
            uniqueElements.add(i);
        }
    }
    return flag;
}
console.log(duplicateChecker(listSoal1));
console.log(duplicateChecker(listDummy));