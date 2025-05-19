// const person = {
//     name : "Namrah",

//     greeting : () => {
//         return `Hello this is ${this.name}`;
//     }
// };


function sumEven(arr)
{
    const evenNumbers = arr.filter(num => num%2===0);
    const sum  = evenNumbers.reduce((acc, num)=> acc+num);
    return sum;
}

let val = [1,2,3,4,5,6,7,8];

const sum = sumEven(val);
console.log("sum is : ", sum);