//N=4
//4_4_3_2
//3_4_3
//2_4
//1
//2_4
//3_4_3
//4_4_3_2

const input=require("readline-sync")
let a=Number(input.question("Enter a:")),s="",b=a,c=a;
for(b;b>0;b--)
{
    s+=b+" "
    for(let j=0;b-1>j;j++)
    {
        s+=a-j+" "
    }
    s+="\n"
}

for(let i=1;a>i;i++)
{   s+=i+1+" "
    for(let j=0;i>j;j++)
    {
        s+=a-j+" "
    }
    s+="\n"
}
console.log(s)