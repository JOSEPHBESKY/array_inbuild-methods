const array1 = [1, 30, 39, 29, 10, 13];
const arr1=array1.every((e)=>e<40);
console.log(arr1);

const array2=[1, 30, 39, 29, 10, 13];
const arr2=array2.filter((e)=>e>30);
console.log(arr2);

const array3=[1, 30, 39, 29, 10, 13];
const arr3=array3.map((e)=>e+3);
console.log(arr3);

const array4=[1, 30, 39, 29, 10, 13];
const arr4=array4.some((e)=>e>15);
console.log(arr4);
