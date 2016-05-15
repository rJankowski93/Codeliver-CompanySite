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
