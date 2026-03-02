document.getElementById("one").addEventListener("click",function(){
    let val=document.getElementById("one").value;
    document.getElementById("input").value+=val;
})

document.getElementById("two").addEventListener("click",function(){
    let val=document.getElementById("two").value;
    document.getElementById("input").value+=val;
})

document.getElementById("three").addEventListener("click",function(){
    let val=document.getElementById("three").value;
    document.getElementById("input").value+=val;
})

document.getElementById("four").addEventListener("click",function(){
    let val=document.getElementById("four").value;
    document.getElementById("input").value+=val;
})

document.getElementById("five").addEventListener("click",function(){
    let val=document.getElementById("five").value;
    document.getElementById("input").value+=val;
})

document.getElementById("six").addEventListener("click",function(){
    let val=document.getElementById("six").value;
    document.getElementById("input").value+=val;
})

document.getElementById("seven").addEventListener("click",function(){
    let val=document.getElementById("seven").value;
    document.getElementById("input").value+=val;
})

document.getElementById("eight").addEventListener("click",function(){
    let val=document.getElementById("eight").value;
    document.getElementById("input").value+=val;
})

document.getElementById("nine").addEventListener("click",function(){
    let val=document.getElementById("nine").value;
    document.getElementById("input").value+=val;
})

document.getElementById("zero").addEventListener("click",function(){
    let val=document.getElementById("zero").value;
    document.getElementById("input").value+=val;
})

document.getElementById("dot").addEventListener("click",function(){
    let val=document.getElementById("dot").value;
    document.getElementById("input").value+=val;
})

document.getElementById("add").addEventListener("click",function(){
    let val=document.getElementById("add").value;
    document.getElementById("input").value+=val;
})

document.getElementById("sub").addEventListener("click",function(){
    let val=document.getElementById("sub").value;
    document.getElementById("input").value+=val;
})

document.getElementById("multiply").addEventListener("click",function(){
    let val=document.getElementById("multiply").value;
    document.getElementById("input").value+=val;
})

document.getElementById("divide").addEventListener("click",function(){
    let val=document.getElementById("divide").value;
    document.getElementById("input").value+=val;
})

document.getElementById("open").addEventListener("click",function(){
    let val=document.getElementById("open").value;
    document.getElementById("input").value+=val;
})

document.getElementById("close").addEventListener("click",function(){
    let val=document.getElementById("close").value;
    document.getElementById("input").value+=val;
})

document.getElementById("C").addEventListener("click",function(){
    document.getElementById("input").value="";
    document.getElementById("output").value="";
})

document.getElementById("equal").addEventListener("click",function(){
    let val=eval(document.getElementById("input").value);
    document.getElementById("output").value=val;
})

document.getElementById("backspace").addEventListener("click",function(){
    let val=document.getElementById("input").value.slice(0,-1);
    document.getElementById("input").value=val;
})