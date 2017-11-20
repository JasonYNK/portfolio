// ПРОКРУТКА ДЛЯ HEADER
window.addEventListener('scroll', function(event){
    var winScroll = window.pageYOffset;
    
    if(winScroll > 75) {
        var head = document.querySelector('.header');
        head.classList.add('js_header');
        /*
        var headUl = document.querySelector('.header_ul');
        headUl.classList.add('js_header_ul');
        var headLogo = document.querySelector('.header_logo');
        headLogo.classList.add('js_header_logo');
        var headP = document.querySelector('.header_p');
        headP.classList.add('js_header_p');
        */
    }else{
        var headJS = document.querySelector('.header');
        headJS.classList.remove('js_header');
        /*
        var headUlJS = document.querySelector('.header_ul');
        headUlJS.classList.remove('js_header_ul');
        var headLogoJS = document.querySelector('.header_logo');
        headLogoJS.classList.remove('js_header_logo');
        var headPJS = document.querySelector('.header_p');
        headPJS.classList.remove('js_header_p');
        */
    };
});


/*==========Выезжающее доп. сжатое меню===========*/
/* Метод замены классов */

 var shortMenu = document.querySelector('.short_menu_p'); // Нашел в документе иконку(родителя), по которой буду кликать
shortMenu.addEventListener('click', function(event){  // Навесили событие клика
clShortMenu = event.target; // конечная цель клика по иконке
checkShortMenu = clShortMenu.classList.contains('fa-bars');
if(checkShortMenu) {    // проверяю, попал ли в цель
    
     var shortMenu2 = document.querySelector('.small_menu'); // нахожу элемент меню
        var checkShortMenu2 = shortMenu2.classList.contains('small_menu_on'); // проверяю, есть ли в нем еще класс short_menu2_on
        if(checkShortMenu2) {              // если да, то удалить его
            shortMenu2.classList.remove('small_menu_on');
            clShortMenu.classList.remove('test1');
            setTimeout(function(){
                clShortMenu.classList.remove('fa-long-arrow-right');
                
                
            },100);
        }else{             // если нет, то добавить его
            shortMenu2.classList.add('small_menu_on');
            clShortMenu.classList.add('test1');
            setTimeout(function(){
                clShortMenu.classList.add('fa-long-arrow-right');
                
            },100);
            
                    
            
            
        };
};
});



/* Метод замены display */
/*var shortMenu = document.querySelector('.short_menu_p'); // Нашел в документе иконку(родителя), по которой буду кликать
shortMenu.addEventListener('click', function(event){  // Навесили событие клика
    clShortMenu = event.target; // конечная цель клика по иконке
    checkShortMenu = clShortMenu.classList.contains('fa-bars');
    
    if(checkShortMenu){    // проверяю, попал ли в цель
        var shortMenu2 = document.querySelector('.short_menu2');
        var elStyle = getComputedStyle(shortMenu2);
        if(elStyle.display === 'none') {
            shortMenu2.style.display = "block";
        }else  {
            shortMenu2.style.display = "none";
        }
    }
});
*/











  /*var mainPage = document.querySelector('.main_page'); // вытащил класс и записал его в переменную
        var checkPage2 = mainPage.classList.contains('main_page_2'); // проверил, состоит ли в классе main_page второй класс main_page_2
        if(checkPage2) {             // если правда(true) выполняю след. условие до команды (else)
            mainPage.classList.add('main_page_3'); // добавляю еще один класс main page 3
        }else {     // если значение false, т.е. класс main_page_2 не обнаружен в классе main_page, то добавляю класс
            mainPage.classList.add('main_page_2');
        }
        xxx = 0;
    */


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















