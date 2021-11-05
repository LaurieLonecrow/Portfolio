

function popUpMenu() {
  var popup = document.getElementById("menu");
  popup.classList.toggle("show");
}


// Cursor
$(document).ready(function () {
 
let mouseX = 0;
let mouseY = 0;
let followX = 0;
let followY = 0;

$(document).on("mousemove", function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  followX += (mouseX - followX) / 9;
  followY += (mouseY - followY) / 9;
$(".cursor").css({"left":`${mouseX}`+"px",
  "top":`${mouseY}`+"px"})
$(".cursor-follower").css({"left":`${followX-20}`+"px",
"top":`${followY-20}`+"px"})  
});

$(".main-nav li").on("mouseenter", () => {
  $(".cursor").addClass("active")
})
$(".main-nav li").on("mouseleave", () => {
  $(".cursor").removeClass("active")
})

});
