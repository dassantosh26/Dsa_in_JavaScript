// 1- Sum of all natural numbers from 1 to n

function sumOfNatuaralNums(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
    }
    return sum;
}
console.log(sumOfNatuaralNums(5));
