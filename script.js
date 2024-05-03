var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var box = document.querySelector("#box");

main.addEventListener("mousemove",function(mp){
    gsap.to(cursor,{
        x:mp.x,
        y:mp.y,
        duration:0.5,
    })
})

box.addEventListener("mouseenter",function(){
    cursor.innerHTML="Visit Site"
    gsap.to(cursor,{
        scale:2,
        duration: 1,
    })
})

box.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        duration: 1
    })
})