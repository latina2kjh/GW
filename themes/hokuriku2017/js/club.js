$(function(){
	var hash = '.' + location.hash.substr(1);
	if($("li[data-filter='"+ hash +"']").length <= 0) hash = 'all';
	$('#Grid').mixItUp({
		load: {filter: hash},
		animation: {enable: false},
		callbacks: {
			onMixEnd: function(state) {
				$('#Grid li').css({'margin-right': 0, 'clear': 'none'});
				$('#Grid li:visible').css('margin-right', '2%');
				$('#Grid li:visible').each(function (i) {
					if (i != 0 && (i+1)%3 == 0) $(this).css('margin-right', 0);
				});
			}
		}
	});
});