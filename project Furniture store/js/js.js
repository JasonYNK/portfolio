

/* POPUP FOR PROJECTS */

if(document.documentElement.clientWidth > 440){
    var popupOn = 0;
var projects = document.querySelectorAll('.projects_block');
for(var i = 0; i < projects.length; i++){
    projects[i].addEventListener('click', function(event){
       
            var imgSrc = this.lastElementChild.src;
            var popUP = document.querySelector('.popup');
            var popupWrap = document.querySelector('.popup_wrap img');
            popupWrap.src = imgSrc;
            if(popupOn === 0){
                popUP.style.display = "block";
                popupOn = 1;
             }
       
    }); 
}   
}


var popupClose = document.querySelector('.popup_close');
popupClose.addEventListener('click', function(event){
   var popUP = document.querySelector('.popup');
   popUP.style.display = "";
   popupOn = 0;
});

var popupWrap = document.querySelector('.popup');
popupWrap.addEventListener('click', function(event){
    var target = event.target;
    if(target.classList.contains('popup')){
        var popUP = document.querySelector('.popup');
       popUP.style.display = "";
       popupOn = 0;
    }
   
});





/* ARROW UP */
window.addEventListener('scroll', function(event){
    var winScroll = window.pageYOffset;
    var pageBody = document.querySelector('#arrow_up');
    if(winScroll > 500) {
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














