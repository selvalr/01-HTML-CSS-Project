const show_otp=document.querySelector(".otp-show");
const btn_Otp=document.querySelector(".otp-button");

btn_Otp.addEventListener("click",()=>{

    //const otp = Math.floor(Math.random() * (1000000 - 100000)) + 100000;

    const otp =  Math.floor(Math.random() * (1000000 - 100000))+ 100000;
    

    show_otp.innerHTML=`<span>${otp}</span>`
})