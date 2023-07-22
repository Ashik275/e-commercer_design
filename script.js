// Script for navigation bar
const bar = document.getElementById('bar');
const closebtn = document.getElementById('close');
const nav= document.getElementById('navbar');
 
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(closebtn){
    closebtn.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
