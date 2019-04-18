function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
let ArrayNumber = [];
for (let i = 0; i < 50; i++) {
    ArrayNumber[i] = Math.floor(Math.random()*101);
}
let maxValue = findMax(ArrayNumber);
document.write("The maximum value is : " + maxValue + "</br>");
document.write(ArrayNumber);
document.write('<br/>');
document.write(findMax(ArrayNumber));
