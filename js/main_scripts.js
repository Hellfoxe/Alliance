

$('#menu-burger').click(function() {
  var overlayMenu = $('#overlay-menu'),
      menuIconLines = $('#menu-burger .menu-icon'),
      menuBurger = $('#menu-burger');

  if(overlayMenu.hasClass('open')) {
    overlayMenu.removeClass('open');
    menuIconLines.removeClass('open');
    menuBurger.removeClass('open');
  }else{    overlayMenu.addClass('open');
            // menuIconLines.addClass('open');
            // menuBurger.addClass('open');
  };


})







// $(document).ready(function(){
//
//   $('.main-menu').bind('click',function showMenu(e){
//     event.preventDefault(e);
//   $('.main-menu-popup').fadeIn(500);
//   $('.main-menu-popup').css('color', 'red');
// }
// )});







  // var link = document.querySelector(".main-menu");
  // var popup = document.querySelector(".main-menu-popup");
  //
  // link.addEventListener("click", function() {
  // 	event.preventDefault();
  // 	popup.classList.add("main-menu-popup-show");
  //
  //
  // });
  //
  // function toggle(el) {
  // 	el.style.display = (el.style.display == 'none') ? '' : 'none'
  // }
