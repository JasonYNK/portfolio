/* SMALL MENU VERSION */
var shortMenu = document.querySelector('.small_menu_p'); 
shortMenu.addEventListener('click', function(event){  
clShortMenu = event.target; 
checkShortMenu = clShortMenu.classList.contains('fa-bars');
if(checkShortMenu) {    
     var shortMenu2 = document.querySelector('.small_menu_nav'); 
        var checkShortMenu2 = shortMenu2.classList.contains('small_menu_nav_on'); 
        if(checkShortMenu2) {              
            shortMenu2.classList.remove('small_menu_nav_on');
            clShortMenu.classList.remove('test1');
            setTimeout(function(){
                clShortMenu.classList.remove('fa-long-arrow-right');
            },100);
        }else{             
            shortMenu2.classList.add('small_menu_nav_on');
            clShortMenu.classList.add('test1');
            setTimeout(function(){
                clShortMenu.classList.add('fa-long-arrow-right');
            },100);
        };
};
});
/* POPUP REGISTRATION */

var popup = document.querySelector('.header_ul');
popup.addEventListener('click', function(event){
   var target = event.target.id;
   if(target === 'header_reg'){
   var clPopup = document.querySelector('.popup_reg');
   clPopup.classList.add('popup_reg_on');
   document.body.style.overflow = 'hidden';
   }
});
var popupClose = document.querySelector('.popup_reg_form');
popupClose.addEventListener('click', function(event){
    var target = event.target.id;
    if(target === 'popup_close'){
        var clClosePopup = document.querySelector('.popup_reg_on');
        clClosePopup.classList.remove('popup_reg_on');
        document.body.style.overflow = '';
    }
});
/* POPUP FOR LOGIN */
var popup = document.querySelector('.header');
popup.addEventListener('click', function(event){
   var target = event.target.id;
   if(target === 'popup_login'){
   var clPopup = document.querySelector('.popup_login');
   clPopup.classList.add('popup_login_on');
   document.body.style.overflow = 'hidden';
   }
});
var popupClose = document.querySelector('.popup_login_form');
popupClose.addEventListener('click', function(event){
    var target = event.target.id;
    if(target === 'popup_login_close'){
        var clClosePopup = document.querySelector('.popup_login_on');
        clClosePopup.classList.remove('popup_login_on');
        document.body.style.overflow = '';
    }
});

/* SCROLL FROM BUTTON TO SECTION Jquery */
$(document).ready(function(){
    $('.desc_link, #js_download').click(function(e){
        var aClick = $(this).attr('href');
        var blockTop = $(aClick).offset().top;
        var timer;
        
        if(blockTop < 1000){
            timer = 500;
        }else{
            timer = 2000;
        }
        $('html,body').animate({scrollTop: blockTop}, timer);
        
        return false;
        
    });
});

/* POPUP FORGET PASSWORD */

var popupPass = document.querySelector('.popup_forget_form1');
popupPass.addEventListener('click', function(event){
    var target = event.target;
    var checkTarget = target.classList.contains('fa-arrow-right');
    if(checkTarget){
        var blocks = document.querySelectorAll('.popup_forget_block');
        for(var i = 0; i < blocks.length; i++){
            blocks[i].classList.toggle('popup_forget_block_on');
        }
    };
});

var popupPass = document.querySelector('.popup_forget_form2');
popupPass.addEventListener('click', function(event){
    var target = event.target;
    var checkTarget = target.classList.contains('fa-arrow-right');
    if(checkTarget){
        var blocks = document.querySelectorAll('.popup_forget_block');
        for(var i = 0; i < blocks.length; i++){
            blocks[i].classList.toggle('popup_forget_block_on');
        }
    };
});
/* POPUP FORGET FORGET EXIT & ENTER */
var popupEnter = document.querySelector('.popup_login_form');
popupEnter.addEventListener('click', function(event){
    var target = event.target.id;
    if(target === 'popup_forget_password'){
        var clClosePopup = document.querySelector('.popup_login_on');
        clClosePopup.classList.remove('popup_login_on');
        var popupEl = document.querySelector('.popup_forget');
        popupEl.classList.add('popup_forget_on');
    }

});
var popupExit = document.querySelector('.popup_forget');
popupExit.addEventListener('click', function(event){
    var target = event.target.id;
    if(target === 'popup_forget_exit'){
        var popupEl = document.querySelector('.popup_forget');
        popupEl.classList.remove('popup_forget_on');
        document.body.style.overflow = '';
    }
});

/* ВЫХОД ИЗ ФОРМЫ КЛИКОМ ПО ПУСТОМУ ЭКРАНУ */

var screenClose = document.querySelector('.popup_login');
screenClose.addEventListener('click', function(event){
   var target = event.target;
   var checkTarget = target.classList.contains('popup_login'); 
   if(checkTarget){
        var clClosePopup = document.querySelector('.popup_login_on');
        clClosePopup.classList.remove('popup_login_on');
        document.body.style.overflow = '';
   }
});

var screenClose = document.querySelector('.popup_reg');
screenClose.addEventListener('click', function(event){
   var target = event.target;
   var checkTarget = target.classList.contains('popup_reg'); 
   if(checkTarget){
        var clClosePopup = document.querySelector('.popup_reg_on');
        clClosePopup.classList.remove('popup_reg_on');
        document.body.style.overflow = '';
   }
});

var screenClose = document.querySelector('.popup_forget');
screenClose.addEventListener('click', function(event){
   var target = event.target;
   var checkTarget = target.classList.contains('popup_forget'); 
   if(checkTarget){
        var clClosePopup = document.querySelector('.popup_forget_on');
        clClosePopup.classList.remove('popup_forget_on');
        document.body.style.overflow = '';
   }
});

/* ARROW UP */
window.addEventListener('scroll', function(event){
    var winScroll = window.pageYOffset;
    var pageBody = document.querySelector('#arrow_up');
    if(winScroll > 2000) {
        pageBody.style.display = "block";
    }else{
        pageBody.style.display = "";
    }
});

var scrollUp = document.querySelector('#arrow_up');
scrollUp.addEventListener('click', function(event){
   var target = event.target.id;
   if(target === 'arrow_up'){
    var timer = setInterval(function(){
        if(window.pageYOffset > 0){
            window.scrollBy(0,-50);
        }else{
            
            clearInterval(timer);
        }
        
    }, 10);
   } 
});



