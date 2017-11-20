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


/* navigation header js reload */
var header = document.querySelector('.nav_reduce_select');

header.addEventListener('change', function(event){ 
    var target = header.querySelectorAll('option');
    
    for(var i = 0; i < target.length; i++){
        if(target[i].selected){
            var elLocation = window.location.toString();
            var slashEl = elLocation.lastIndexOf('/');
            var locAddress = elLocation.substr(0, slashEl);
            var url = locAddress + '/' + target[i].value;
            
            window.location.assign(url);
        }
        
    }
});

/* GO JAVASCRIPT  Тестовые задания по видеоурокам скрипта*/
function sumTo(n){
    if(n !=1){
        return n+sumTo(n-1);
    }else {
        return n;
    }
}

console.log(sumTo(100));

function getRandom(min,max){
    if(min >= 5){
        return min.Math.random();
    }else if(max <=10){
        return min.Math.random();
    }else{
        alert('Не верное число!')
    }
}

console.log(getRandom(5,10));

   


 





