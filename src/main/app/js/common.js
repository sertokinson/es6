let a = 5;
const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];
console.log([...num1, ...num2]);
const A = {
    a: "a1",
    b: "b"
};
const B = {
    a:"a2"
};
const C = {
    ...A,
    ...B
};
console.log(C);
const arr=[1,2,3];
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(...arr));
function res(arg1,arg2,...args) {
    console.log(arg1,arg2,args);
}
res(1,2,3,4,5,6,7,8);