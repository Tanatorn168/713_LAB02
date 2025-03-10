//console.log("Hello, TypeScript with Node.js!");
//let x:number | string = 10;
//x = 10;

//if (typeof x === 'string') {
//    console.log('x is a string');
// }else if (typeof x === 'number') {
//   console.log('x is a number');
// }else {
//    console.log('x is neither a string nor a number');
// }

//Task 3
const add = (a:number,b:number):string => {
    const result =  a+b;
    return result.toString();
 }
    console.log(add(1,2));
 //findMaX Function
const findMax = (numbers: number[]): string => {
    const maxNumber = Math.max(...numbers);
    return maxNumber.toString();
}
const numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers));