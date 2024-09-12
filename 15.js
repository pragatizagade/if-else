// HCF of N numbers

const input=require("readline-sync")
let N=input.questionInt("Enter the N:")
let A=input.questionInt("Enter the Value:"),max,min,a;
for(let i=1;N>i;i++)
{
    let B=input.questionInt("Enter the Value:")
    if(A>B)
    {
        max=A;
        min=B;
    }
    else
    {
        max=B;
        min=A;
    }
    while(max%min)
    {
        a=max%min;
        max=min;
        min=a;
    }
    A=min;
}
console.log("The HCF is:"+A);