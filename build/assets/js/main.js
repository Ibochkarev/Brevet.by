$(document).ready(function () {

  $('.sub-menu ul').hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).parent(".sub-menu").children("a").toggleClass("active");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });

});