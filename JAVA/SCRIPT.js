// JavaScript Document
jQuery(document).ready(function(e) {
    $(".nav>li").mouseover(function(e) {
        $(this).children(".submenu").stop().slideDown();
    });
	$(".nav>li").mouseleave(function(e) {
        $(this).children(".submenu").stop().slideUp();
    });
});


var win;
	function winOpen(){
		win=window.open('one.html','child()','width=900, height=620')
	}

var win;
	function winOpen2(){
		win=window.open('two.html','child()','width=900, height=620')
	}

var win;
	function winOpen3(){
		win=window.open('three.html','child()','width=620, height=620')
	}
	
var win;
	function winOpen4(){
		win=window.open('four.html','child()','width=820, height=620')
	}
	
var win;
	function winOpen5(){
		win=window.open('five.html','child()','width=820, height=620')
	}
	
var win;
	function winOpen6(){
		win=window.open('six.html','child()','width=600, height=400')
	}
	
var win;
	function winOpen7(){
		win=window.open('seven.html','child()','width=450, height=600')
	}
	
var win;
	function winOpen8(){
		win=window.open('eight.html','child()','width=620, height=860')
	}
	
var win;
	function winOpen9(){
		win=window.open('nine.html','child()','width=900, height=620')
	}							

$(".moon").click(function(e) {
    $(".modal").show();
});
$(".modal p button").click(function(e) {
    $(".modal").hide();
});

$(".circle").click(function(e) {
    $(".modaltwo").show();
});
$(".modaltwo p button").click(function(e) {
    $(".modaltwo").hide();
});

$(".star").click(function(e) {
    $(".modalthree").show();
});
$(".modalthree p button").click(function(e) {
    $(".modalthree").hide();
});
