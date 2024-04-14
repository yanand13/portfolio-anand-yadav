var typed = new Typed(".text",{
    strings:["Junior Engineer", "Junior Engineer", "Junior Engineer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzP1ezxZoOdkZBX-ZsPQJzoT_1SKUf5iQdPAk_yzLWkv2IECC9Uy8lrWergEbm1yLZMAg/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response =>{
{msg.innerHTML="Message sent successfully"}
setTimeout(function(){
    msg.innerHTML=""},4000)
    form.reset()
})
})




var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
   
}
