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
const add = (a:number,b:number) : string => {
    return a+b;
}
const result = add(1,2) + 0;
console.log(result, 'type of result: ', typeof result);
