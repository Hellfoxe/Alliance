

// $('#click').click(function() {
//   var overlayMenu = $('#overlay-menu'),
//     menuIconLines = $('#mclick .menu-icon'),
//     menuBurger = $('#menu-burger');
//
//   if (overlayMenu.hasClass('open')) {
//     overlayMenu.removeClass('open');
//     menuIconLines.removeClass('open');
//     menuBurger.removeClass('open');
//   } else {
//     overlayMenu.addClass('open');
//     // menuIconLines.addClass('open');
//     // menuBurger.addClass('open');
//   };
//
//
// });



/*Scroll------->Slide02*/


// Slide-02
$('.slide-02_image').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 420){
	$('.slide-02_image').css({opacity: "1"});
$('.slide-02_image').animate({left: "0"}, "slow");
}

});

$('.slide-02_content').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 460){
	$('.slide-02_content').css({opacity: "1"});
$('.slide-02_content').animate({bottom: "+100"}, "slow");
}

});

$('#oldLogo').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 420){
	$('#oldLogo').css({opacity: "1"});
$('#oldLogo').animate({bottom: "+200"}, "slow");
}

});


$('.dropDownNomber02').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 2300){
	$('.dropDownNomber02').css({opacity: "1"});
$('.dropDownNomber02').animate({top: "-10"}, "slow");
}

});


// Slowmotion

    $(document).ready(function() {
            $("body").css("display", "none");
      	    $("body").fadeIn(900);
    });


// Animatix\
// slide_01
$(document).ready(function(){
$('.dropDown-01').show();
$('.click-01').css('color','#ba1717');
$('.click-01').click(function(){
	$('.dropDown-01').slideToggle();
		$('.dropDown-02').hide(200);
		$('.dropDown-03').hide(200);
		$('.click-01').css('color','#ba1717');
			$('.click-02').css('color','#1c1c1c');
				$('.click-03').css('color','#1c1c1c');
			$('.dropDownNomber01').animate({left: "+10"}, "slow");
			$('.dropDownNomber02').animate({left: "-10"}, "slow");
			$('.dropDownNomber03').animate({left: "-10"}, "slow");
});

// slide-02
$('.dropDown-02').hide();
$('.click-02').click(function(){
	$('.dropDown-02').slideToggle();
	$('.dropDown-01').hide(200);
		$('.dropDown-03').hide(200);
		$('.click-02').css('color','#ba1717');
			$('.click-01').css('color','#1c1c1c');
				$('.click-03').css('color','#1c1c1c');
		$('.dropDownNomber02').animate({left: "+10"}, "slow");
		$('.dropDownNomber01').animate({left: "-10"}, "slow");
		$('.dropDownNomber03').animate({left: "-10"}, "slow");


});

// slide-03
$('.dropDown-03').hide();
$('.click-03').click(function(){
	$('.dropDown-03').slideToggle();
	$('.dropDown-01').hide(200);
	$('.dropDown-02').hide(200);
	$('.click-03').css('color','#ba1717');
		$('.click-01').css('color','#1c1c1c');
			$('.click-02').css('color','#1c1c1c');
	$('.dropDownNomber03').animate({left: "+10"}, "slow");
	$('.dropDownNomber01').animate({left: "-10"}, "slow");
	$('.dropDownNomber02').animate({left: "-10"}, "slow");


});
});






// Logo
$('.logo-red').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 720){
$('.logo-white').hide(0);
$('.logo-red').show(0);
}
// else{
// // $('.logo-red').show('fast');
// }
});


$('.logo-red').hide();
$(window).scroll(function() {
if ($(this).scrollTop() < 720){
$('.logo-white').show(0);
$('.logo-red').hide(0);
}
// else{
// // $('.logo-red').show('fast');
// }
});
