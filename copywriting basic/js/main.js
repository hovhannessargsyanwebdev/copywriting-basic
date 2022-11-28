    // TO TOP
 var toUp = document.querySelectorAll('.to_top');
  toUp = $(toUp);    
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {      
        $(toUp).fadeIn(200);    
    } else {
        $(toUp).fadeOut(200);   
    }
});
$(toUp).click(function(event) {    
event.preventDefault();  
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});
