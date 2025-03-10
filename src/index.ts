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
//import { add } from './function';
//const result = add(1,2) + 0;


//console.log(result, 'type of result:', typeof result);

import add, {substract} from'./function';
const result = add(1, 2) + 0;
const result2 = substract(1,2) + 0;
console.log(result, 'type of result:', typeof result);
console.log(result2, 'type of result:', typeof result2);
//const result = add(1,2) + 0;
//console.log(result, 'type of result: ', typeof result);
 //findMaX Function
//const findMax = (numbers: number[]): string => {
//    const maxNumber = Math.max(...numbers);
//    return maxNumber.toString();
//}
//const numbers = [1, 2, 3, 4, 5];
//console.log(findMax(numbers));