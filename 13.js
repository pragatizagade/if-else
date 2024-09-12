
//N=4
//4 5 4 3 2
//3 4 5 4 3
//2 3 4 5 4
//1 2 3 4 5


const input=require("readline-sync")
let a=Number(input.question("Enter a:")),s="",b=a,c=a;
for(let i=0;a>i;i++)
{
    for(let j=0;a+1>j;j++)
    {
        if(i+1>j)
        {
            s+=c+j+" "
            b=a+1
        }
        else
        {
            s+=b+" "
            b--
        }
    }
    c--
    s+="\n"
}
console.log(s)
