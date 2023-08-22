// JavaScript Document$('#btn-allcate').click(function(){
$('#our-product').hover(function(){
	$('#our-product-dropdown').toggle("slide",300);
})
$('#promotion').hover(function(){
	$('#promotion-dropdown').toggle("slide",300)
})
$('#our-services').hover(function(){
	$('#our-services-dropdown').toggle("slide",300)
})
$('#btn-menu').click(function(){
	$('#nav-left').toggle("slide",300)
})
$('#btn-close').click(function(){
	$('#nav-left').toggle("slide",300)
})
$(window).ready(function(){
	var sidebar_height=$(window).height();
	$('#nav-left').height(sidebar_height);
	
})
$('#btn-product-left').click(function(){
	$('#sidebar-left').toggle("slide",300)
})
$('#btn-product-left-close').click(function(){
	$('#sidebar-left').toggle("slide",300)
})
$(window).ready(function(){
	var model_height=$(window).height();
	var model_width=$(window).width();
	$('.model').height(model_height);
	$('.model').width(model_width);
	
})
$('.btn-heart').click(function(){
	$('.model').toggle("slide",300)
	
	
})


$(document).ready(function() {
              $("#owl-cat-clients-say").owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: false
                  },
                  800: {
                    items: 2	,
                    nav: false
                  },
                  1000: {
                    items: 3,
                    nav: false,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
$(document).ready(function() {
              $("#owl-cat-blogs").owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  800: {
                    items: 2	,
                    nav: true
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })

$('.zoom_04').ezPlus({
    zoomType: 'lens',
    lensShape: 'square',
    lensSize: 300
});
$('#quantity-plus').click(function(){
	var quantity=$('#quantity').val();
	quantity=parseInt(quantity);
	quantity=quantity+1;
	$('#quantity').val(quantity);
})
$('#quantity-manus').click(function(){
	var quantity=$('#quantity').val();
	quantity=parseInt(quantity);
	quantity=quantity-1;
	if (quantity<1)
	{
		quantity=1;
	}
	$('#quantity').val(quantity)
})

















































































// Next/previous controls


// Thumbnail image controls

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
	
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
	
}
currentSlide();
