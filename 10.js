//4
//4 3 4
//4 3 2 3 4
//4 3 2 1 2 3 4
//4 3 2 3 4
//4 3 4
//4
//N=4


const a=require("readline-sync");
let b=a.question("Enter N:"),f=b,c=f,s="",z=1;
for(let i=1;b>=i;i++)
{
    c=b
    for(let j=1;i>=j;j++)
    {
        s+=c+" "
        c--
    }
    c+=2
    for(let j=1;z-1>=j;j++)
    {
        s+=c+" "
        c++
    }
    z+=1
    s+="\n"
    
}
for(;b-1>0;b--)
{
    c=f
    for(let i=1;b>i;i++)
    {
        s+=c+" "
        c--
    }
    
    c+=2
    for(i=1;b-1>i;i++)
    {
        s+=c+" "
        c++
    }
    s+="\n"
}
console.log(s)