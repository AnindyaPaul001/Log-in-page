$(document).ready(function() {
    // Function to move the carpet horizontally
    function moveShadow() {
        $(".shadow").animate({left: "100%"}, 2500, "linear", function() {
            // Reset the carpet's position
            $(this).css("left", "0");
            // Call the moveShadow function recursively
            moveShadow();
        });
    }

    // Call the moveShadow function to start the animation
    moveShadow();
    $(".box").mouseover(function() {
        $(this).addClass("box-hover"); // Add the 'hovered' class when mouse is over
        setTimeout(function() {
            $(".box").removeClass("box-hover"); // Remove the 'hovered' class 
        }, 2000);
    });
    
   
});


