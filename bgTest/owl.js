/* <script type="text/javascript">
	$(function() {
		$("#slider").owlCarousel({
			themeClass: 'slider-theme',
			navText: [],
			items: 1,
			loop: true,
			nav: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
			navSpeed: 1000,
			dotsSpeed: 1000,
			dragEndSpeed: 1000,
			autoplayTimeout: 5000,
			responsive:{
				0:{
					nav: false,
					dots: true,
				},
				768:{
					nav: true,
					dots: true
				}
			}
		});

		$(".brands_carousel").owlCarousel({
			themeClass: 'carousel-theme',
			navText: [],
			loop: true,
			dots: false,
			autoplay: false,
			autoplayTimeout: 5000,
			margin: 15,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					slideBy: 1,
					nav: false
				},
				480: {
					items: 2,
					slideBy: 2,
					nav: true
				},
				768: {
					items: 3,
					slideBy: 3,
					nav: true
				},
				992: {
					items: 4,
					slideBy: 4,
					nav: true
				},
				1200: {
					items: 5,
					slideBy: 5,
					nav: true
				}
			}
		});

	});
</script> */

<script type="text/javascript">
$(function() {
    $("#slider").owlCarousel({
        themeClass: 'slider-theme',
        navText: [],
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        navSpeed: 1000,
        dotsSpeed: 1000,
        dragEndSpeed: 1000,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                nav: false,
                dots: true,
            },
            768:{
                nav: true,
                dots: true
            }
        }
    })
}
</script>