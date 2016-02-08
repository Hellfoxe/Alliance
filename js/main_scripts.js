

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
})




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
