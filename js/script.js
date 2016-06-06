var all = (function() {
	var variables = {
		sectionaAboutUs : {},
		sectionWhatDo : {},
		sectiontTechnology : {},
		sectionContact : {},
		positionSectionAboutUs : {},
		positionSectionWhatDo : {},
		positionSectionTechnology : {},
		positionSectionContact : {},
		logoHeight: 0
	};

	document.addEventListener('DOMContentLoaded', startPage, false);
	document.addEventListener('DOMContentLoaded', slowScroll, false);

	function startPage() {
		variables.sectionWhatDo = $("#whatDo");
		variables.sectionaAboutUs = $("#aboutUs");
		variables.sectiontTechnology = $("#technology");
		variables.sectionContact = $("#contact");
	}
	
	function setSize() {
		logoHeight = $(".logo").height()-1;
		variables.positionSectionWhatDo = parseInt(variables.sectionWhatDo
				.position().top - logoHeight);
		
		variables.positionSectionAboutUs = parseInt(variables.sectionaAboutUs
				.position().top - logoHeight);
		
		variables.positionSectionTechnology = parseInt(variables.sectiontTechnology
				.position().top - logoHeight);
		
		variables.positionSectionContact = parseInt(variables.sectionContact
				.position().top - logoHeight);
	}

	function slowScroll() {
		$(function() {
			$('a[href*="#"]:not([href="#"])')
					.click(
							function() {
								setSize();
								if (location.pathname.replace(/^\//, '') == this.pathname
										.replace(/^\//, '')
										&& location.hostname == this.hostname) {
									var target = $(this.hash);
									target = target.length ? target
											: $('[name=' + this.hash.slice(1)
													+ ']');
									if (target.length) {
										$('html,body')
												.stop()
												.animate(
														{
															scrollTop : target
																	.offset().top - logoHeight
														}, 1000);
										return false;
									}
								}
							});
		});
	}

	var show = (function() {
		var topDistance = 30;
		position = $(window).scrollTop();
		colorMenu(position);
		showLogo(topDistance, position);
		showIcons(topDistance, position);
		$(window).scroll(function() {
			position = $(window).scrollTop();
			colorMenu(position);
			showLogo(topDistance, position);
			showIcons(topDistance, position);
		});
	})();

	function showLogo(topDistance, position) {
		if (position > topDistance) {
			$('#logo').addClass("logoShow");
			$('#menu').addClass("menuRight");
		} else if (position < topDistance) {
			$('#logo').removeClass("logoShow");
			$('#menu').removeClass("menuRight");
		}
	}

	function showIcons(topDistance, position) {
		if (position > 900) {
			$('.hideImg').addClass("showImg");
		}
	}

	function colorMenu(position) {
		if (position < (variables.positionSectionWhatDo + 2)
				&& position > (variables.positionSectionWhatDo - 2)) {
			$('.menuLinkWhatDo').addClass("menuLinkWhatDoNewColor");
		} else {
			$('.menuLinkWhatDo').removeClass("menuLinkWhatDoNewColor");
		}

		if (position < (variables.positionSectionAboutUs + 2)
				&& position > (variables.positionSectionAboutUs - 2)) {
			$('.menuLinkAboutUs').addClass("menuLinkAboutUsNewColor");
		} else {
			$('.menuLinkAboutUs').removeClass("menuLinkAboutUsNewColor");
		}
		console
		if (position < (variables.positionSectionTechnology + 2)
				&& position > (variables.positionSectionTechnology - 2)) {
			$('.menuLinkTechnology').addClass("menuLinkTechnologyNewColor");
		} else {
			$('.menuLinkTechnology').removeClass("menuLinkTechnologyNewColor");
		}
		if (position < (variables.positionSectionContact + 2)
				&& position > (variables.positionSectionContact - 2)) {
			$('.menuLinkContact').addClass("menuLinkContactNewColor");
		} else {
			$('.menuLinkContact').removeClass("menuLinkContactNewColor");
		}
	}

}());