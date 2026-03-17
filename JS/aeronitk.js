let slides=document.querySelectorAll('.slide');
let dots=document.querySelectorAll('.dot');
let index=0;
function slideshow(i){
    slides.forEach((s)=>{
        s.classList.remove('active');
        slides[i].classList.add('active');

    });
    dots.forEach((d)=>{
        d.classList.remove('active');
        dots[i].classList.add('active');
    });
}
document.querySelector('.next').addEventListener('click',()=>{
    index++;
    if(index>slides.length-1){
        index=0;
    }
    slideshow(index);

})
document.querySelector('.prev').addEventListener('click',()=>{
    index--;
    if(index<0){
        index=slides.length-1;
    }
    slideshow(index);
})
window.addEventListener("scroll", function() {

    let header = document.querySelector(".Header");

    if (window.scrollY > 120) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
let player = document.getElementById("player");

document.querySelector('.vid1').addEventListener('ended',()=>{
    document.querySelector('.vid1').style.display='none';
    document.querySelector('.vid2').style.display='block';
    document.querySelector('.vid2').play();
});
document.querySelector('.vid2').addEventListener('ended',()=>{
    document.querySelector('.vid2').style.display='none';
    document.querySelector('.vid1').style.display='block';
    document.querySelector('.vid1').play();
});

window.addEventListener('scroll',()=>{
    if(window.scrollY>170){
        document.querySelector('.about-text').classList.add('about-text-transtion');
        document.querySelector('.drone-img').classList.add('drone-img-transition');
    }
})
window.addEventListener('scroll',()=>{
    if(window.scrollY==0){
        document.querySelector('.about-text').classList.remove('about-text-transtion');
        document.querySelector('.drone-img').classList.remove('drone-img-transition');
    }
})