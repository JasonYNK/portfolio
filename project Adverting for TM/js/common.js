function showMenu(){
	console.log(1);
	var respList = document.querySelector('.responsive-list');
	respList.classList.toggle('responsive-list-js');
	
}

function Slider(selector, options){
    var __self = this; // saved "this"" in the closure
    
    //DOM nodes
    var sliderNode = document.querySelector(selector),
        sliderImagesNode = sliderNode.querySelector('.slider-pages-wrap'),
        prevSliderNode = sliderNode.querySelector('.slider-arrow-left'),
        nextSliderNode = sliderNode.querySelector('.slider-arrow-right');
        
    
    var currentSlideIndex = options.currentSlide || 0,
        imagesCount = sliderImagesNode.children.length,
        slideSize = sliderImagesNode.offsetWidth;
        
        // Created counters
    this.prevSlideMove = function(){
        if(currentSlideIndex === 0){
            currentSlideIndex = imagesCount - 1;
            return;
        }
        currentSlideIndex--;
    }
    this.nextSlideMove = function(){
        if(currentSlideIndex === imagesCount - 1){
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    }
    // event clicks on the buttons
    nextSliderNode.onclick = function(){
    	__self.nextSlideMove();
      __self.__render();
    }

    prevSliderNode.onclick = function(){
       __self.prevSlideMove();
       __self.__render();
    }
    
    // sliding wrapper with a help of marginLEFT
    this.__render = function (){
        sliderImagesNode.style.marginLeft = -(currentSlideIndex * slideSize) + 'px';
    }
    this.sliderTimer = function(){
        __self.nextSlideMove();
        __self.__render();
    }
    
    setInterval(function(){
        __self.sliderTimer();
    },5000);
   }
  
  /* SCROLL MENU */ 

var menu = document.querySelector('.header_nav');
menu.addEventListener('click', function(event){
   var target = event.target;
   var checkMenu = target.classList.contains('menu-href');
   if(checkMenu){
   	event.preventDefault();
   	var link = target.href;
   	var numb = link.indexOf('#') + 1;
   	var id = link.substr(numb);
   	console.log(numb);
   	var el = document.getElementById(id);
   	var elTop = el.offsetTop;
   	var currentTop = window.pageYOffset;
   	var step = 10;
   	if(currentTop < elTop){
   		var timer = setInterval(function(){
   			if(currentTop < elTop){
   				window.scrollBy(0, step);
   				currentTop = window.pageYOffset;
   			}else{
   				clearInterval(timer);
   			}
   		}, 4);
   	}else{
   		var timer = setInterval(function(){
   			if(currentTop > elTop){
   				window.scrollBy(0, -step);
   				currentTop = window.pageYOffset;
   			}else{
   				clearInterval(timer);
   			}
   		}, 4);
   	}
   }
 });