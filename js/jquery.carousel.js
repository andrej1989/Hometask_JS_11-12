(function($){

	$.fn.carousel = function (options) {

		var defaults = {
			items: 1
		}

		var settings = $.extend(defaults, options);

		var left = $('.carousel-left');
		var right = $('.carousel-right');
		var carousels = $('.carousel ul');
		var carouselItems = $('.carousel li').length;

		var pixels = 125;
		var leftValue = 0;
		var minSet = - ((carouselItems - 5) * pixels );
		var maxSet = 0;

		

		left.on('click', function(){

			if (leftValue != maxSet) {
				leftValue += pixels * settings.items;
				carousels.animate({
				left: leftValue + "px"
			}, 500);
			}
			
		});

		right.on('click', function(){
			if (leftValue >= minSet) {
				leftValue -= pixels * settings.items;
				carousels.animate({
				left: leftValue + "px"
			}, 500);
			}
			
		});

		return this;
	}
	
})(jQuery);

