$(function(){
	function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        
        var elemTop = $(elem).offset().top;
        if (elemTop -50 < docViewBottom) {
            return true
        } else {
            return false
        }

    }
    var boxElemets=$(".rollItem1");
    function animateInit(){
        $.each($(".m-gameCh"), function () {
            if ($(this).attr('init') == 'false' && isScrolledIntoView($(this))) {
                $(this).attr('init', 'true');
                TweenMax.to($(this), .5, {bottom:0,delay:$(this).index()*.1,opacity:1})

            }
        });

    }
    animateInit();
    $(window).scroll(function () {
        animateInit();
    });
   
  //延迟
    $(function(){
       $(".m-gameCh").hover(function(){
            TweenMax.to($(this).find(".bgimg"), 3, {scale:1.1,ease:Expo.easeOut})
        },function(){
            TweenMax.to($(this).find(".bgimg"), 3, {scale:1,ease:Expo.easeOut})
        })       
    })
    //延迟
    $(function(){
       $(".st-img").hover(function(){
            TweenMax.to($(this).find(".bgimg"), 3, {scale:1.1,ease:Expo.easeOut})
        },function(){
            TweenMax.to($(this).find(".bgimg"), 3, {scale:1,ease:Expo.easeOut})
        })       
    })
    //延迟
    $(function(){
       $(".zs-img").hover(function(){
            TweenMax.to($(this).find(".bgimg"), 3, {scale:1.1,ease:Expo.easeOut})
        },function(){
            TweenMax.to($(this).find(".bgimg"), 3, {scale:1,ease:Expo.easeOut})
        })       
    }) 
     //延迟
    $(function(){
       $(".m-pinpai").hover(function(){
            TweenMax.to($(this).find(".bgimg"), 3, {scale:1.1,ease:Expo.easeOut})
        },function(){
            TweenMax.to($(this).find(".bgimg"), 3, {scale:1,ease:Expo.easeOut})
        })       
    })      

})



/*  |xGv00|588494aef8d53702beb28f9c9603358d */