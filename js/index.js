// function slidebar-btn
document.querySelector('.slidebar-btn').addEventListener('click',() => {
    document.querySelector('.wrapper').classList.toggle('collapse-slide');
});

// Zoom image
var modalImage = document.querySelector(".modal-box");
var closeModal = document.querySelector(".btn-close-modal-box");
var prevImage = document.querySelector(".modal-box-img-prev");
var nextImage = document.querySelector(".modal-box-img-next");
var ImageContainModal = document.querySelectorAll(".post-img");
var ImageModalSelect = null;
var ImageModal = null;
var ImageShow = document.querySelector(".modal-box-img");
var index = 0;
var scrollTop = document.querySelector(".scroll-to-top");
console.log(ImageContainModal);

function updateMedia(index){
    let ImageClone = ImageModal[index].cloneNode() || "";
    ImageShow.innerHTML = "";
    ImageShow.appendChild(ImageClone);
}

ImageContainModal.forEach(function(el, idx){
    el.addEventListener("click", function(){
        modalImage.classList.add("active");

        ImageModalSelect = this;
        ImageModal = this.querySelectorAll(".post-media>*");
        index = 0;

        updateMedia(index);
        console.log("Clicked");
    });    
});


closeModal.addEventListener("click", function(){
    modalImage.classList.remove("active");
});

prevImage.addEventListener("click", function(){
    (index - 1 < 0) ? index = ImageModal.length - 1 : index = index-1 ;

    updateMedia(index);
});

nextImage.addEventListener("click", function(){
    (index + 1 > ImageModal.length - 1) ? index = 0 : index = index+1 ;

    updateMedia(index);
});

// Scroll Top
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 0){
        scrollTop.classList.add("active");
    }else {
        scrollTop.classList.remove("active");
    }
});

scrollTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});