;(function($){
	$(function(){
$(document).foundation();
var $prev = $('.ba-works-slider .ba-works-prev'),
	$next = $('.ba-works-slider .ba-works-next');
$('.ba-works-slider').slick({
		slide:('.ba-works-slider__slide'),
		arrows: true,
		autoplay: true,
		dots: true,
		prevArrow: $prev,
		nextArrow: $next

			});
  $('.ba-team-slider').slick({
   slide: '.ba-team-slide',
   slidesToShow: 3,
   slidesToScroll: 1,
   prevArrow: ('.ba-team-prev'),
   nextArrow: ('.ba-team-next')
  });

  var mapDiv = $('#map')[0];
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 49.592552, lng: 34.547128},
			zoom: 10,
			scrollwheel: false
		});

		var marker = new google.maps.Marker({
			position: {lat: 49.592552, lng: 34.547128},
			map: map,
			icon: '../assets/img/pin.png'
		});
		// var infowindow = new google.maps.InfoWindow({
		// 	content: "hello world"
		// });
		//   marker.addListener('click', function() {
  //   	infowindow.open(map, marker);
  // });
})
})(jQuery);
