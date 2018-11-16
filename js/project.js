$(function(){
   
    $("section.services .service1,section.services .service2,section.services .service3").mouseenter(function (){
       
        $(this).addClass("active").parent().siblings().children().removeClass("active");
        
    });
    
     $("section.services .service1,section.services .service2,section.services .service3").mouseleave(function (){
       
        $(this).removeClass("active").parent().siblings().find(".service2").addClass("active");
         $(this).removeClass("active").parent().find(".service2").addClass("active");
        
    });
    
    $("section.projects div.carousel-inner").mouseenter(function (){
       
        $(this).find("div.carousel-caption").fadeIn();
        
    });
    $("section.projects div.carousel-inner").mouseleave(function (){
       
        $(this).find("div.carousel-caption").fadeOut();
        
    });
    $(window).load(function (){
        
       $("div.spinner").fadeOut(1000,function (){
           
            $ ("body").css("overflow","auto");
           
           $(this).parent().fadeOut(1000,function (){
               
               $(this).remove();
               
           });
           
           
       });
        
        
    });
    function initialize() { 
                var mapProp = { 
                    center: new google.maps.LatLng(60, 60), 
                    zoom: 5, 
                    mapTypeId: google.maps.MapTypeId.SATELLITE  
                }; 
                var map = new google.maps.Map(document.getElementById("map"), mapProp);
                var myLatLng = {lat: 41.008238, lng: 28.978359 };
                var map = new google.maps.Map(document.getElementById('map'), { zoom: 8, center: myLatLng });
                var marker = new google.maps.Marker({ position: myLatLng, map: map, title: 'Hello World!' });
            } 

            google.maps.event.addDomListener(window, 'load', initialize);
    
    $(".navbar-default .navbar-nav > li > a, section.face a").click(function (){
        
        $("html, body").animate({
            
            scrollTop:$("."+ $(this).data("scroll")).offset().top +
            
             (-$("nav").innerHeight())+1
            
        },1000)
        
    })
    
    $("section.contact .name").blur(function (){
        
       if ($(this).val().length < 4) {
           
           $(this).css("border-bottom-color","red")
           
           $(this).parent().parent().find("div.alert").fadeIn()
           
       }else{
           
            $(this).css("border-bottom-color","green")
            $(this).parent().parent().find("div.alert").fadeOut()
           
       }
        
    });
    
    $("section.contact .email").blur(function (){
        
       if ($(this).val().length < 4) {
           
           $(this).css("border-bottom-color","red")
           
           $(this).parent().parent().find("div.alert").fadeIn()
           
       }else{
           
            $(this).css("border-bottom-color","green")
            $(this).parent().parent().find("div.alert").fadeOut()
           
       }
        
    });
    $("section.contact .subject").blur(function (){
        
       if ($(this).val().length < 4) {
           
           $(this).css("border-bottom-color","red")
           
           $(this).parent().parent().find("div.alert").fadeIn()
           
       }else{
           
            $(this).css("border-bottom-color","green")
            $(this).parent().parent().find("div.alert").fadeOut()
           
       }
        
    });
    $("section.contact .phone").blur(function (){
        
       if ($(this).val().length < 11) {
           
           $(this).css("border-bottom-color","red")
           
           $(this).parent().parent().find("div.alert").fadeIn()
           
       }else{
           
            $(this).css("border-bottom-color","green")
            $(this).parent().parent().find("div.alert").fadeOut()
           
       }
        
    });
    $("section.contact .textarea").blur(function (){
        
       if ($(this).val().length < 15) {
           
           $(this).css("border-color","red")
           
           $(this).parent().parent().find("div.alert").fadeIn()
           
       }else{
           
            $(this).css("border-color","green")
            $(this).parent().parent().find("div.alert").fadeOut()
           
       }
        
    });



   
});
 
    



