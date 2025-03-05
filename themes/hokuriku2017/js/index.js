$(function(){
	$('.featureSlide').slick({
		infinite: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: true,
				arrows: false
			}
		},
		{
			breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					arrows: false
				}
		}]
	});

	$('.bannerSlide').slick({
		infinite: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 767,
			settings: 'unslick'
				//settings: {
					//slidesToShow: 2,
					//slidesToScroll: 1,
					//infinite:false
				//}
			}
		]
	});
});
