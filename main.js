

let mouseCursor = document.querySelector('.cursor');
    var link = document.querySelectorAll('a');

    const cursor = (e) => {
    // mouseCursor.style.top = e.clientY + 'px';
    // mouseCursor.style.left = e.clientX + 'px';
    mouseCursor.style.transform =   'translate(-50%,-50%)'+'translate('+e.clientX+'px'+','+e.clientY + 'px)';
}
window.addEventListener('mousemove',cursor);
link.forEach(element => {
    element.addEventListener("mouseover", ()=>{
        mouseCursor.classList.add('link-grow');
    });
    element.addEventListener("mouseleave", ()=>{
        mouseCursor.classList.remove('link-grow');
    });
});



const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".scroll-container"),
    smooth: true
});