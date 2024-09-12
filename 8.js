// Q=     1
//        1 2 1
   //     1 2 3 2 1
 //       1 2 3 4 3 2 1

 const z=require("readline-sync");
let a=z.question("Enter the N:"),s="",b=1
for(let i=1;a>=i;i++)
{
    for(let j=1;i>=j;j++)
    {
        s+=j+" "
    }
    for(let j=i-1;j>0;j--)
    {
        s+=j+" "
    }
    s+="\n"
}
console.log(s)