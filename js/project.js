$(function(){
   
    $("section.services .service1,section.services .service2,section.services .service3").mouseenter(function (){
       
        $(this).addClass("active").parent().siblings().children().removeClass("active");
        
    });
    
     $("section.services .service1,section.services .service2,section.services .service3").mouseleave(function (){
       
        $(this).removeClass("active").parent().siblings().find(".service2").addClass("active");
         $(this).removeClass("active").parent().find(".service2").addClass("active");
        
    });
    
    
});