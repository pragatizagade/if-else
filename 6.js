// Q =  1
//      2  3
//      4  5  6

const z=require("readline-sync");
let a=z.question("Enter the N:"),s="",b=1;
for(let i=1;a>=i;i++)
{
    for(let j=1;i>=j;j++)
    {
        s+=b+" "
        b++;
    }
    s+="\n"
}
console.log(s)