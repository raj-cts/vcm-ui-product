$(document).ready(function () {
	$('.searchIcon').click(function () {
		$('.search-pop').show();

	$('.investment-popup').hide();

	});
	
	$('.drop-icon').click(function () {
		$('.investment-popup').toggle();
		$(this).toggleClass('active');
		
	});

	$('.popup-close').click(function () {
		$('.search-pop').hide();
	});
    	$('.mask').click(function () {
		$(this).hide();
        $('.listCont .overlay').hide();
            $('.listCont .nav-link').removeClass('active');
            $('body').removeClass('active');
	});


	$(".nav-link").click(function () {
		let size = $(window).width();
		if (size > 992) {
			if ($(this).closest("li").find(".overlay").is(':visible')) {
				$(this).closest(".listCont").find("li .overlay").hide();
				$(this).closest(".navbar-collapse").find(".mask").hide();
                $("body").removeClass('active');
				$(this).removeClass('active');
                 return true;
			} else {
				$(this).closest(".listCont").find("li .overlay").hide();
				$(this).closest('li').find(".overlay").show();
				$(this).closest(".navbar-collapse").find(".mask").show();
				$("body").addClass('active');
				$(this).closest(".listCont").find(".nav-link").removeClass('active');
				$(this).addClass('active');
                return false;
			}
		}
	});
	//} else {
	$(".nav-link").click(function () {
		let size = $(window).width();
		if (size < 992) {
			$(this).closest(".nav-item").find("#myNav").css('width', '100%');
		}
	});
	$(".lft-arrow").click(function () {
		let size = $(window).width();
		if (size < 992) {
			$(this).closest("#myNav").css('width', '0%');
		}
	});
	$(".navbar-toggler .close").click(function () {
		let size = $(window).width();
		if (size < 992) {
			$(".listCont").find("li .overlay").css('width', '0%');
		}
	});
	
	
	//}
});
	//var windowsize = $(window).width();
	$(window).resize(function () {
		var windowsize = $(window).width();
		if (windowsize < 992) {
			$("#navbarToggleExternalContent").removeClass('show')
			$(".navbar-toggler").addClass('collapsed')
			$('.nav-link').removeClass('active');
			$(".navbar-toggler").attr('aria-expanded', false)
			$('.nav-link').closest(".nav-item").find(".overlay").css('width', '0%');
			$('.nav-link').closest(".listCont").find("li .overlay").show();
		} else {
			$('.nav-link').closest(".nav-item").find(".overlay").css('width', '100%');
			$('.nav-link').closest(".listCont").find("li .overlay").hide();
			$(".mask").hide();
            $('.listCont .nav-link').removeClass('active');
		}
	});