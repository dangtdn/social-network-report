// declare variables
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

// function toggle class
document.querySelector('.slidebar-btn').addEventListener('click',() => {
    document.querySelector('.wrapper').classList.toggle('collapse-slide');
});
document.querySelector('.list-select').addEventListener('click', () => {
    document.querySelector('.menu-select-btn').classList.toggle('appear');
});
document.querySelector('.list-select-comment').addEventListener('click', () => {
    document.querySelector('.menu-select-comment-btn').classList.toggle('appear');
});

// Zoom image
if(closeModal !== null && 
    prevImage !== null && 
    nextImage !== null &&
    ImageContainModal !== null &&
    ImageShow !== null
) {
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
}

// Scroll Top
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 0){
        scrollTop.classList.add("active");
    }else {
        scrollTop.classList.remove("active");
    }
    console.log('run')
});

scrollTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// create list room
if(document.querySelector('.main-container .row .col-11 .box-type-of-room .row')){
    let content = `<div class="col-2">
    <div class="card text-white bg-dark mt-3">
      <img class="card-img-top" src="../img/logo_tdtu.png" alt="">
      <div class="card-body text-center">
        <p class="card-title-room mb-0">Phòng CTHSSV</p>
      </div>
    </div>
    </div>`;
    let contentBody = '';
    for(let i=0; i<20; i++) {
        contentBody += content; 
    }
    console.log(contentBody)
    document.querySelector('.main-container .row .col-11 .box-type-of-room .row').innerHTML = contentBody;
}
