
// JavaScript Document

$(".partner_info img").click(function(e) {
    $(".modal").show();
$(".button").click(function(e) {
    $(".modal").hide();
});
});

$('.imgsbar a').click(function(){
	$('.imgsbar a').removeClass('active')
	$(this).addClass('active');
	var imgLeft=$(this).attr('img-left');
	$('.imgs').animate({left:imgLeft},"fast");
})
