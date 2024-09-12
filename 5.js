
// Q= *
//    *  *
//    *  *  * 

// by using function
const z=require("readline-sync");
let a=z.question("Enter the N:"),s="";
for(let i=1;a>=i;i++)
{
    s=s+"* ".repeat(i)+"\n"
}
console.log(s)





// this is another method
for(let i=0;a>i;i++)
{
    for(let j=0;i>j;j++)
    {
        s=s+"* ";
    }
    s+="\n"
}
console.log(s)



