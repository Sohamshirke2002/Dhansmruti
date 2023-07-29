
        function myFunction() {
        var x = document.getElementById("mylinks");
        if (x.style.display === "block") {
        x.style.display = "none";
        } else {
        x.style.display = "block";
        }
        };

        function myFunction2() {
            var w = window.innerWidth;
            if(w<800){
                $(".logo").attr("src", scrollSrc);
            }
        };

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
});

var initialSrc = "images/image2.png";
var scrollSrc = "images/image1.png";
var w = window.innerWidth;

$(window).scroll(function() {
var value = $(this).scrollTop();
if(w>=800){
    if (value > 0){
        $(".logo").attr("src", scrollSrc);
    }
    else{
        $(".logo").attr("src", initialSrc);
    }
}
if(w<800){
    $(".logo").attr("src", scrollSrc);
}
});

// 2nd file

const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 4000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 4000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
