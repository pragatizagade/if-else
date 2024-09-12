// Q = check wheather it is palindrom number or not
const z=require("readline-sync")
let a=z.question("Enter:")
let n=a.length,c=0;
for(let i=0;(Math.floor(n/2))>i;i++)
{
    if(a[i]===a[n-1-i])
    {
        c++;
    }
}
if(c==Math.floor(n/2))
{
    console.log("palimdrom number")
}
else
{
    console.log("not palimdrom number")
}

// by using function
let b=a.split("").reverse().join("")
if(a===b)
{
    console.log("palindrome number")
}
else{
    console.log("not a palimdrom number")
}