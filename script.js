
function cursorEffect () {
    let page1 = document.querySelector("#page1");
let cursor = document.querySelector('#cursor');

page1.addEventListener("mousemove" , function (dets) {
   gsap.to (cursor , {
    x : dets.x,
    y : dets.y
})
})

page1.addEventListener("mouseenter" , function () {
    gsap.to (cursor , {
        scale: 1 ,
        opacity : 1 
    })
})

page1.addEventListener("mouseleave" , function () {
    gsap.to (cursor , {
        scale: 0 ,
        opacity : 0 
    })
})
}

cursorEffect();