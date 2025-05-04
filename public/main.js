const btn=document.querySelector("button")
const input=document.querySelector("input")
const img=document.querySelector("img")

btn.addEventListener("click",async()=>{
    const url=input.value;
    await fetch("/generate",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({url})
    });
    img.src = "qrcode.png?" + new Date().getTime();
})
