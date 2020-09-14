let num: number = 2;
// num = 'str'; // 报错

let str1: any = 2;
str1 = 'str';

let a1: any;
a1.foo.bar = 10;

let a2: unknown;
// a2.foo = 10; // 报错

let arr1: Array < number > = [1, 2, 3];
let arr2: number[] = [4, 5, 6];

let tup1:[string, number]=['t', 1];