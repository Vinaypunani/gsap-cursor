var cursor1 = document.querySelector("#cursor01");
var cursor02 = document.querySelector("#cursor02");
var main = document.querySelector("#main");
var box = document.querySelector("#box");

main.addEventListener("mousemove",function(mp){
    gsap.to(cursor1,{
        x:mp.x,
        y:mp.y,
        duration:0.5,
    })
})

main.addEventListener("mousemove",function(mp1){
    gsap.to(cursor02,{
        x:mp1.x,
        y:mp1.y,
        duration:1,
    })
})

box.addEventListener("mouseenter",function(){
    cursor02.innerHTML="Visit Site"
    gsap.to(cursor02,{
        scale:1.5,
        duration: 1,
    })
})

box.addEventListener("mouseleave",function(){
    cursor02.innerHTML=""
    gsap.to(cursor02,{
        scale:1,
        duration: 1
    })
})