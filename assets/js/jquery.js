$(window).scroll(function () {
	var windowH = $(window).height(),
		scrollY = $(window).scrollTop(),
		elPosition = $('.bg_anime').offset().top;
	if (scrollY > elPosition - windowH) {
		$('.bg_anime').addClass("start_anime");
	}
});