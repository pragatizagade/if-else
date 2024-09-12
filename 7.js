// Q =  0
//      2 4
  //    4 8 8
//      8 16 16 16

const z=require("readline-sync");
let a=z.question("Enter the N:"),s="",b=2,c=2;
console.log("0")
for(let i=2;a>=i;i++)
{   s=s+b+" "
    for(let j=1;i>j;j++)
    {
        s+=b*2+" "
        
    }

    s+="\n"
    b=b*2
}
console.log(s)
