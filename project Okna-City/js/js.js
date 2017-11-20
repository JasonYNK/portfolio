// ПРОКРУТКА ДЛЯ HEADER
window.addEventListener('scroll', function(event){
    var winScroll = window.pageYOffset;
    
    if(winScroll > 75) {
        var head = document.querySelector('.header');
        head.classList.add('js_header');
    }else{
        var headJS = document.querySelector('.header');
        headJS.classList.remove('js_header');
    };
});
/*==========Выезжающее доп. сжатое меню===========*/
 var shortMenu = document.querySelector('.short_menu_p'); 
shortMenu.addEventListener('click', function(event){   
clShortMenu = event.target; 
checkShortMenu = clShortMenu.classList.contains('fa-bars');
if(checkShortMenu) {   
    
     var shortMenu2 = document.querySelector('.small_menu'); 
        var checkShortMenu2 = shortMenu2.classList.contains('small_menu_on'); 
        if(checkShortMenu2) {    
            shortMenu2.classList.remove('small_menu_on');
            clShortMenu.classList.remove('test1');
            setTimeout(function(){
                clShortMenu.classList.remove('fa-long-arrow-right');
            },100);
        }else{           
            shortMenu2.classList.add('small_menu_on');
            clShortMenu.classList.add('test1');
            setTimeout(function(){
                clShortMenu.classList.add('fa-long-arrow-right');
                
            },100);  
        };
};
});

/* SLIDER SLIDER ======================== */

function Slider(selector, options) {
    var __self = this;
    // DOM Nodes
    var sliderNode = document.querySelector(selector),
        sliderImagesNode = sliderNode.querySelector('.slider__images-wrap'),
        prevSliderNode = sliderNode.querySelector('.slider__paper_previous'),
        nextSliderNode = sliderNode.querySelector('.slider__paper_next');
        
    var currentSlideIndex = options.currentSlide || 0,
        imagesCount = sliderImagesNode.children.length,
        slideSize = sliderImagesNode.offsetWidth;
        
        
        this.prevSlide = function () {
            if(currentSlideIndex === 0){
                currentSlideIndex = imagesCount - 1;
                return;
            }
            currentSlideIndex--;
        };
        this.nextSlide = function () {
            if (currentSlideIndex === imagesCount -1){
                currentSlideIndex = 0;
                return;
            }
            currentSlideIndex++;
        };
        
        this.__render = function(){
            sliderImagesNode.style.marginLeft = -(currentSlideIndex * slideSize) + 'px';
        };
        
    prevSliderNode.onclick = function(e){
        e.preventDefault();
        __self.prevSlide();
        __self.__render();
    };
    nextSliderNode.onclick = function(e){
        e.preventDefault();
        __self.nextSlide();
        __self.__render();
    };
     
    this.__render();   
}















