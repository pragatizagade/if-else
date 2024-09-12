//Take a number N from the user as input and repeatedly find the sum of the digits of the number till you get a single digit. Print that digit. Example: 678 -> 6+7+8 = 21 -> 2+1 = 3

const input=require("readline-sync")
let N=input.questionInt("Enter the N:"),b=N
let a=N.toString().length;
while(b>9)
{
    let s=0;
    while(b>0)
    {
        s+=b%10;
        b=Math.floor(b/10);
    }
    b=s;
}
console.log(b);