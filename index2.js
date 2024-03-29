const ip=[1,2,3,4,5]
// const tf=(i)=>{
//     return i*2;
// }
// const ar=ip.map((i)=>{
//     return i*2;
// });
// console.log(ar);
const tf=(n)=>{
    if(n%2==0)
    return true;
else return false;
}
const ar=ip.filter(tf);
console.log(ar)