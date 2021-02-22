/*-------------------------------------------------------
    All javascript and jquery plugins activation
-------------------------------------------------------*/
(function($){
    "use strict";

    /*---------------------------
        sticky header
    ---------------------------*/
    window.addEventListener("scroll", function(){
        const header = document.querySelector("#header-area");
        header.classList.toggle("sticky", window.scrollY > 0);
    });  
    

    /*---------------------------
    Smooth scrolling
    ---------------------------*/
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    

    /*---------------------------
        counter
    ---------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    

    /*---------------------------
    parallax sections
    ---------------------------*/
    $('.section-slider').parallax('50%',0.1);
    $('.section-counter').parallax('50%',0.1);


    /*---------------------------
    skills bar sections
    ---------------------------*/
    const progressLine = document.querySelectorAll('.progress-line');

    progressLine.forEach(function(item){
        item.style.width = item.getAttribute('data-percent') + '%';
        item.style.opacity = '1';
    });


    /*---------------------------
        Scroll to top
    ---------------------------*/
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $('#scroll-to-top').fadeIn();
        }else{
            $('#scroll-to-top').fadeOut();
        }
    });
    
    $('#scroll-to-top').click(function(){
        $("html,body").animate({scrollTop : 0 }, 600);
        return false;
    });
    
    
    /*---------------------------
        WOW animation
    ---------------------------*/
    new WOW().init();
    
    
})(jQuery);