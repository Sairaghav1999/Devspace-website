(function ($) {
  $(document).ready(function(){

  	setTimeout(scrollDown, 2000);

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
                // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 450) {
                $('.navspace').fadeIn();
            } else {
                $('.navspace').fadeOut();
            }
        });
    });

});
}(jQuery));

// function scrollDown() {
// 	console.log("sup"); 
// 	document.getElementById("body").style.overflow = "scroll";

// 	$('html, body').animate({scrollTop: $('div#page-2').offset().top }, 1300);
// }

//Hamburger
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementsByClassName("navDrop")[0].style.visibility = "hidden";
    console.log(open);
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementsByClassName("navDrop")[0].style.visibility = "visible";
    console.log(Close);
}
