//0 0 0 0 0
//x 0 0 0 x
//x x 0 x x
//x 0 0 0 x
//0 0 0 0 0


const input = require("readline-sync")
let N=input.questionInt("Enter the N:");
let a=Math.floor(N/2),s=""
/*for(let i=0;a+1>i;i++)
{
    for(let j=0;N>j;j++)
    {
        if(i>0&&i>j)
        {
            s+='*'+" "
        }
        else if(N-i>j)
        {
            s+="0"+" "
        }
        else
        {
            s+="*"+" "
        }
    }
    s+="\n"
}
for(a;a>0;a--)
{
    for(let j=0;N>j;j++)
    {
        if(a-1>j&&a>1)
        {
            s+="*"+" "
        }
        else if(N-a>=j)
        {
           s+="0"+" " 
        }
        else{
            s+="*"+" "
        }
    }
    s+="\n"
}
console.log(s);
*/
let  i;

for(i=0;a+1>i;i++)
{   
    s+="* ".repeat(i)+"0 ".repeat(N-(i*2))+"* ".repeat(i)+"\n";
}
for(a;a>0;a--)
{
    s+="* ".repeat(a-1)+"0 ".repeat(i)+"* ".repeat(a-1)+"\n"
    i+=2
}

console.log(s)


