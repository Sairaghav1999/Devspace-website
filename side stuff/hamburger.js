var nav = document.getElementById("topNav");
var main = document.getElementById("header");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");
var screenHeight = window.innerHeight;

//default to measure if/else from
// nav.style.height = "50px";
// main.style.marginTop = "0px";
// for (i = 0; i < menu.length; i++)
// {menu[i].style.marginTop="0px";};

// close.addEventListener("click", function(){
//   var menuIcon = close.children;
//   for (i = 0; i < menuIcon.length; i++){
//   menuIcon[i].classList.toggle("active");
//   }   
// });
console.log('hello');

// function navToggle() {	
// 	//to close
// 	if (nav.style.height <= screenheight) {
// 	nav.style.height = "50px";
// 	main.style.marginTop = "";
	
//     	var i = 0;
//     	for (i = 0; i < menu.length; i++){
// 	menu[i].style.opacity="0.0";
// 	menu[i].style.marginTop="100px";
// 	};
//     	document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
// 	} 
// 	//to open
// 	else if (nav.style.height <= "50px") {
// 	nav.style.height = "screenHeight";
// 	main.style.marginTop = "0px";
//     	var i = 0;
//     	for (i = 0; i < menu.length; i++){
// 	menu[i].style.opacity="1.0";
// 	menu[i].style.marginTop="0px";
// 	};
//     	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// 	}	
// };	




function navToggle(){
	console.log("asdasd");
	var navigation=document.getElementById("menu");
	console.log(navigation);
	if(navigation.style.visibility=="hidden"){
		console.log("1");
		navigation.style.height= window.innerHeight;
		console.log(navigation.style.height);
		navigation.style.width= window.innerWidth;
		console.log(navigation.style.width);
		navigation.style.visibility = "visible"
	}
	else if(navigation.style.visibility=="visible"){
		navigation.style.height= "0%";
		console.log(navigation.style.height);
		navigation.style.width= "0%";
		console.log(navigation.style.width);
		navigation.style.visibility = "hidden";
	}
}