$(document).ready(function () {

	(function selectActiveMenuItem() {
		var path = window.location.pathname;
		var $menuItems = $('header .nav span');
		for (var i = 1; i < $menuItems.length; i++) {
			var $i = $($menuItems[i]);
			var $a = $i.find('a');
			var href = $a.attr('href');
			if (path.indexOf(href) == 0) {
				$i.addClass('active');
				return;
			}
		}
	})();

	// init lazy images
	if (window.LazyLoad){
		setTimeout(function () {
			new LazyLoad({
				elements_selector: "img[data-src]"
			});
		}, 200);
	}

});

