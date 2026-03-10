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