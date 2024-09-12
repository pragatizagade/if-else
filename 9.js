//*
//* * *
//* * * * *
//* * * * * * *
//* * * * *
//* * *
//*
// N= 4

const a=require("readline-sync");
let b=a.question("Enter N:"),c=1,s="";
for(let i=1;b>=i;i++)
{
    s+="* ".repeat(c)+"\n"
    c+=2
}
c-=4
for(let i=1;b>i;i++)
{
    s+="* ".repeat(c)+"\n"
    c-=2
}
console.log(s)