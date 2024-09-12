// Q = X + X^2/2 + X^3/3 + ...n
const z=require("readline-sync")
let a=z.question("Enter Value :"),s=0,n=z.question("Enter Value N :");
for(let i=1;n>=i;i++)
{
    s=s+Math.floor(Math.pow(a,i)/i);
    //console.log(s);
    
}
console.log(s)