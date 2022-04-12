// function checkTamGiac(a,b,c) 
// {
//     let temp;
//     if(a+b>c || a+c>b || b+c>a)
//     {
//        temp ="Đây là tam giác ";  
//         if(a==b || a==c || b==c)
//         {
//            temp ="Đây là tam giác cân";
//         }
//         else if(a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b)
//         {
//            temp ="Đây là tam giác vuông";
//         } 
//         else if(a==b && b==c)
//         {
//            temp ="Đây là tam giác đều";
//         }
//     }   
//     else
//     {
//        temp ="Đây ko là tam giác";
//     }
//     return temp;
// }
// console.log(checkTamGiac(3,4,5));

///////////////////////////////////////////////////////
function checkTamGiac(a,b,c) 
{
    if(a+b>c || a+c>b || b+c>a)
    {
        if(a==b && b==c)
        {
            console.log("Đây là tam giác đều");
        }
        // else if((a==b) || (a==c) || (b==c))
        // {
        //     console.log("Đây là tam giác cân");
        // }
        // else if((a==b && a*a==b*b+c*c) || (b==c && b*b==a*a+c*c) || (a==c && c*c==a*a+b*b))
        // {
        //     console.log("Đây là tam giác vuông cân");
        // }
        else if(Math.round(a*a)==b*b+c*c || Math.round(b*b)==a*a+c*c || Math.round(c*c)==a*a+b*b)
        {
            if((a==b) || (a==c) || (b==c))
            {
                console.log("Đây là tam giác cân");
            }
            else
            {
                console.log("Đây là tam giác vuông");
            }
        }
        else{
            console.log("Đây là tam giác");   
        }      
    }   
    else
    {
        console.log("Đây ko là tam giác");
    }
}
checkTamGiac(3,3,3);