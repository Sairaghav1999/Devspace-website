// (function ($) {
//   $(document).ready(function(){

//   	setTimeout(scrollDown, 2000);

//     // hide .navbar first
//     $(".navbar").hide();

//     // fade in .navbar
//     $(function () {
//         $(window).scroll(function () {
//                 // set distance user needs to scroll before we start fadeIn
//             if ($(this).scrollTop() > 450) {
//                 $('.navspace').fadeIn();
//             } else {
//                 $('.navspace').fadeOut();
//             }
//         });
//     });

// });
// }(jQuery));

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

//whattoexpect
// var slideIndex = 0;
// showSlides();
// console.log('a');

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     console.log(slides);
//     console.log(dots);
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


//speakers
// var modal = document.getElementById('myModal');
// var img = document.getElementById('speakericon');
// var modalImg = document.getElementById("speakerbig");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//     modal.style.display = "none";
// }