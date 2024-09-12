
// Q = greater of three number
const input=require("readline-sync");
let a=input.question("Enter:"),b=input.question("Enter:"),c=input.question("Enter:"),M,M1;
if(a>b)
{
    M=a
}
else{
    M=b
}
if(M>c)
{
    M1=M;
}
else
{
    M1=c;
}
console.log(M1)

//by using function
console.log(Math.max(a,b,c))

