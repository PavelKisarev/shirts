(function($){
	$.fn.myPlax = function(options) {

		this.defaults = {
			ratioH: 0.02,
			ratioV: 0.02
		}
		
        var settings = $.extend({},this.defaults,options),
			layer = $(this);
			
		var getHorizontal = function(e,ratioH){
			let coordX = e.pageX,
				halfWidth = $(document).width() / 2,
				xPos = (coordX - halfWidth) * ratioH;
			
			return xPos;
		}
		var getVertical = function(e,ratioV){
			let coordY = e.pageY,
				halfHeight= $(document).height() / 2,
				yPos =  (coordY - halfHeight) * ratioV;
			
			return yPos;
		}

		$('html').on('mousemove', function(e) {

			let x = getHorizontal(e,settings.ratioH),
				y = getVertical(e,settings.ratioV),
				windowWidth = $(document).width();

				if( windowWidth > 768 ){
					$(layer).css({'top':y,'left':x});
				}

		})

	};
})(jQuery);