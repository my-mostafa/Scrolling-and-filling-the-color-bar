let div = document.querySelector("div")

window.addEventListener("scroll",function(){
  
    let allheight = document.body.clientHeight
    let www = window.innerHeight
    let scroolheight = window.scrollY
    
    let percent = Math.floor((scroolheight / (allheight - www))*100)
    
    div.style.width = percent+'%'
    
})











