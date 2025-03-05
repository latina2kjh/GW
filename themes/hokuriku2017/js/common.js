$(function(){
	$('.js-subNav').hover(function(){
		var winW = $(window).width();
		if(winW >= 1200){
			$(this).find('.subNav').stop(true, true).slideToggle();
		}
	}).find('subNav').hide();

	$('.js-accordion dt').click(function(){
		var $this = $(this);
		$($this.next()).stop().slideToggle('slow',function(){
			$this.toggleClass('open');
		});
	});
	$('.gNav .sub').hide();
	$(".gNav .ttl").on("click", function() {
		$(this).next().slideToggle("500");
		$(this).toggleClass("ac");
	});
});
