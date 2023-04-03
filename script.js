
        let inp = document.getElementById("inp");
        let inp2 = document.getElementById("inp-2");
        let s1 = document.getElementById("select-1");
        let s2 = document.getElementById("select-2");
        let btn = document.getElementById("btn");

  

        s1,s2.addEventListener('change', function (){
 if(s1.value == "binary" && s2.value == "binary")
 {
    btn.addEventListener("click" , function(){
        console.log("b to b not posible");
    let c = "not posible";
    inp2.value = c;
    })
 }
 else if(s1.value == "binary" && s2.value == "octal")
 {
    // console.log("b to o");
    btn.addEventListener("click",function(){
    if(inp.value.includes(2) || inp.value.includes(3) || inp.value.includes(4) || inp.value.includes(5) || inp.value.includes(6) || inp.value.includes(7) || inp.value.includes(8) || inp.value.includes(9))
    {
        inp2.value = "NOT A BINARY NUMBER";

    }
    else{
        inp2.value = (parseInt(inp.value,2).toString(8));

    }
    });

    // inp2.value = c;
 }
 else if(s1.value == "binary" && s2.value == "decimal")
 {
    btn.addEventListener("click",function(){
        if(inp.value.includes(2) || inp.value.includes(3) || inp.value.includes(4) || inp.value.includes(5) || inp.value.includes(6) || inp.value.includes(7) || inp.value.includes(8) || inp.value.includes(9))
        {
            inp2.value = "NOT A BINARY NUMBER";

        }
        else{
            inp2.value = (parseInt(inp.value,2).toString(10));

        }
        });

 }
 else if(s1.value == "binary" && s2.value == "hexadecimal")
 {
    btn.addEventListener("click",function(){
        if(inp.value.includes(2) || inp.value.includes(3) || inp.value.includes(4) || inp.value.includes(5) || inp.value.includes(6) || inp.value.includes(7) || inp.value.includes(8) || inp.value.includes(9))

        {
            inp2.value = "NOT A BINARY NUMBER";

        }
        else{
            inp2.value = (parseInt(inp.value,2).toString(16).toUpperCase());

        }
        });
 }
});
 

// octal to other number convertor javascript start ::
s1,s2.addEventListener('change', function (){
    if(s1.value == "octal" && s2.value == "octal")
{
    btn.addEventListener("click" ,function(){
        let c = "not posible";
    inp2.value = c;
    });
}
else if(s1.value == "octal" && s2.value == "binary")
{
    btn.addEventListener("click" , function(){
        if(inp.value.includes(8) || inp.value.includes(9))
        {
            inp2.value = "NOT POSIBLE";
        console.log(" cknkdcdcdcd");

        }
        else{
    inp2.value = (parseInt(inp.value,8).toString(2));
           
        }
    });
    
}
else if(s1.value == "octal" && s2.value == "decimal")
{
    btn.addEventListener("click" , function(){
        if(inp.value.includes(8) || inp.value.includes(9))
        {
            inp2.value = "NOT POSIBLE";
        }
        else{
    inp2.value = (parseInt(inp.value,8).toString(10));
           
        }
    });
}
else if(s1.value == "octal" && s2.value == "hexadecimal")
{btn.addEventListener("click" , function(){
    if(inp.value.includes(8) || inp.value.includes(9))
    {
        inp2.value = "NOT POSIBLE";
    }
    else{
        inp2.value = (parseInt(inp.value,8).toString(16).toUpperCase());
    }
});
}
});

// for decimal to other number function start 

s1,s2.addEventListener('change', function (){
    if(s1.value == "decimal" && s2.value == "decimal")
{
    btn.addEventListener("click" ,function(){
    
    // inp2.value = (parseInt(inp.value,10).toString(2));
    inp2.value = " not posible"; 
    });
}
else if(s1.value == "decimal" && s2.value == "octal")
{  btn.addEventListener("click" ,function(){
    
    // inp2.value = (parseInt(inp.value,10).toString(2));
    inp2.value = (parseInt(inp.value,10).toString(8));

    // inp2.value = " not posible"; 
    });
}
else if(s1.value == "decimal" && s2.value == "hexadecimal")
{
    btn.addEventListener("click" ,function(){
    
        // inp2.value = (parseInt(inp.value,10).toString(2));
        inp2.value = (parseInt(inp.value,10).toString(16).toUpperCase());

    
        // inp2.value = " not posible"; 
        });
}
});

// for hexadecimal to other number function start
s1,s2.addEventListener('change', function (){
    if(s1.value == "hexadecimial" && s2.value == "hexadecimal")
{
    btn.addEventListener("click" ,function(){
    
    // inp2.value = (parseInt(inp.value,10).toString(2));
    inp2.value = " not posible"; 
    });
}
else if(s1.value == "hexadecimal" && s2.value == "binary")
{
    btn.addEventListener("click" ,function(){
    
        // inp2.value = (parseInt(inp.value,10).toString(2));
    inp2.value = (parseInt(inp.value,16).toString(2));
        });
}
else if(s1.value == "hexadecimal" && s2.value == "octal")
{
    btn.addEventListener("click" ,function(){
    
        // inp2.value = (parseInt(inp.value,10).toString(2));
    inp2.value = (parseInt(inp.value,16).toString(8));
        });
    
}
else if(s1.value == "hexadecimal" && s2.value == "decimal")
{
    btn.addEventListener("click" ,function(){
    
        // inp2.value = (parseInt(inp.value,10).toString(2));
        inp2.value = (parseInt(inp.value,16).toString(10));

        });
}
});


