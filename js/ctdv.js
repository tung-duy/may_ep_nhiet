$(function() {
	$('#dg-container').gallery({
 		autoplay	:	true,
 		current		: 2,	
 	});

 	$("[data-fancybox]").fancybox({
		protect: true,
		loop: true,
	});

	$(".khoifancybox").slick({
		autoplay: true,
  		autoplaySpeed: 2000,
		slidesToShow   : 3,
		centerPadding: '60px',
		infinite   : true,
		dots       : false,
		arrows     : false,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,

		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,

		        slidesToShow: 1
		      }
		    }
		  ]
		});

});	

