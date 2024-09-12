//Write a program to print all Armstrong numbers in a given range of M to N.
const input=require("readline-sync")
let M=input.questionInt("Enter the M:")
let N=input.questionInt("Enter the N:")
//let b=Number(M)
//let a=Number(N)
let s=0,c;

while(N>=M)
{
     c=M.toString().length;// first converting number into string then calculating length
     let a=M
     
    while(a>0)
    {
        d=a%10;
        s+=d**c;
        a=Math.floor(a/10)
    }
    if(s===M)
    {
        console.log(M);
    }
    s=0;
    M++;
}
//console.log(c)