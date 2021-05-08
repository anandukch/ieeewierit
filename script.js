var hamb=document.querySelector('.hamb')
var navLink=document.querySelector('.nav-items')
var link1= document.querySelector('.lin1')
var link2= document.querySelector('.lin2')
var link3= document.querySelector('.lin3')
hamb.addEventListener('click',()=>{
    
    navLink.classList.toggle('open')
    console.log('c');
})
link1.addEventListener('click',()=>{
    navLink.classList.toggle('open')
    
})
link2.addEventListener('click',()=>{
    navLink.classList.toggle('open')
    
})
link3.addEventListener('click',()=>{
    navLink.classList.toggle('open')
    
})
