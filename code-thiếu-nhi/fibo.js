let Fib=[];
Fib[0]=0;
Fib[1]=1;
function Fibo(n) 
{
    for(let i=2; i<=n; i++)
    {
        Fib[i]=Fib[i-2] + Fib[i-1];       
        console.log(Fib[i]);
    }
}
Fibo(6);
