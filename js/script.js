var slowScroll = (function() {
	
	document.addEventListener('DOMContentLoaded', slowScroll, false);
	
  function slowScroll() {
	  $(function() {
		  $('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').stop().animate({
		          scrollTop: target.offset().top - 70
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});
	}
}());

var transparentMenu = (function() {
		var fadeSpeed = 200, fadeTo = 0.5, topDistance = 30;
		var topbarME = function() { $('#nav').fadeTo(fadeSpeed,1); };
		var topbarML = function() { $('#nav').fadeTo(fadeSpeed,fadeTo); };
		var inside = false;
		$(window).scroll(function() {
			position = $(window).scrollTop();
			if(position > topDistance && !inside) {
				topbarML();
				$('#nav').bind('mouseenter',topbarME);
				$('#nav').bind('mouseleave',topbarML);
				inside = true;
			}
			else if (position < topDistance){
				topbarME();
				$('#nav').unbind('mouseenter',topbarME);
				$('#nav').unbind('mouseleave',topbarML);
				inside = false;
			}
		});
	})();

var slowlyAnimation = (function() {
	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	 
	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	 
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	      $element.addClass('in-view');
	    } else {
	      $element.removeClass('in-view');
	    }
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
})();



