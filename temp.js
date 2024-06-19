console.log("hello sujay")

let focusStrip = document.createElement('div')
focusStrip.innerHTML = "FOCUS!!"
focusStrip.className = 'focus-strip'


let body = document.querySelector('body')
body.appendChild(focusStrip)


const focusStripHeight = focusStrip.offsetHeight
document.body.style.marginTop = `${focusStripHeight}px`

let isDraggable = false

let imousex, imousey, fsx, fsy;

focusStrip.addEventListener('mousedown', (e) => {
    console.log(e)
    console.log('DOWN called')
    isDraggable = true

    fsx = focusStrip.offsetLeft
    fsy = focusStrip.offsetTop  
    imousex = e.clientX
    imousey = e.clientY

    document.body.style.userSelect = 'none' // Prevent text selection
})

focusStrip.addEventListener('mousemove', (e) => {
    if(isDraggable) {
        const deltaX = e.clientX - imousex
        const deltaY = e.clientY - imousey
        
        focusStrip.style.left = `${fsx + deltaX}px`
        focusStrip.style.top = `${fsy + deltaY}px`
    }
})

focusStrip.addEventListener('mouseup', (e) => {
    console.log("UP called");
    isDraggable = false
})




