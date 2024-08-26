$(document).ready(function() {
    $(window).on("scroll", function(){
        if(window.scrollY > 200){
            $("#scroll_top").show();
        } else {
            $("#scroll_top").hide();
        }
    });

    // Scroll to top animation on button click
    $("#scroll_top").click(function(){
        $('html, body').animate({scrollTop: 0}, 50);
    });
});