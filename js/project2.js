$(function (){
    
    $("body").css("padding-top",$(".nav").innerHeight() + 10);
    
    $("section.about div.leaders div.media").mouseenter(function(){
        
        
        $(this).find(".media-object").css("transform","scale(1.2)");
        
       
        
        
    });
    $("section.about div.leaders div.media").mouseleave(function(){
        
        
        $(this).find(".media-object").css("transform","scale(1)")
        
        
        
    });
    
    
})

 $(window).load(function (){
        
       $("div.spinner").fadeOut(1000,function (){
           
            $ ("body").css("overflow","auto");
           
           $(this).parent().fadeOut(1000,function (){
               
               $(this).remove();
               
           });
           
           
       });
        
        
    });