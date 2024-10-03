/*
	Future Imperfect by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$menu = $('#menu'),
		$sidebar = $('#sidebar'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '737px',   '1080px'  ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$menu
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Search (header).
		var $search = $('#search'),
			$search_input = $search.find('input');

		$body
			.on('click', '[href="#search"]', function(event) {

				event.preventDefault();

				// Not visible?
					if (!$search.hasClass('visible')) {

						// Reset form.
							$search[0].reset();

						// Show.
							$search.addClass('visible');

						// Focus input.
							$search_input.focus();

					}

			});

		$search_input
			.on('keydown', function(event) {

				if (event.keyCode == 27)
					$search_input.blur();

			})
			.on('blur', function() {
				window.setTimeout(function() {
					$search.removeClass('visible');
				}, 100);
			});

	// Intro.
		// var $intro = $('#intro');

		// Move to main on <=large, back to sidebar on >large.
		// 	breakpoints.on('<=large', function() {
		// 		$intro.prependTo($main);
		// 	});

		// 	breakpoints.on('>large', function() {
		// 		$intro.prependTo($sidebar);
		// 	});

		// Intro.
		
		var $controlL = $('#navigation_controls');
		var $newnav = $('#newnav');
		// var $pdf = $('#pdf_renderer'); 
		var $navL = $('#navL'); 
		var $newpdf = $('#new_canvas');
		var $pdfL = $('#canvas-flex');
		var $pdf = $('#canvas_container');
		

		// Move to main on <=large(small), back to sidebar on >large(large).
			breakpoints.on('<=large', function() {
				$controlL.prependTo($newnav);
				$pdf.prependTo($newpdf);
			});

			breakpoints.on('>large', function() {
				$controlL.prependTo($navL);
				$pdf.prependTo($pdfL);
			});

			
			const content = document.querySelectorAll('.tooltipmove');
			
			
				breakpoints.on('<=large', function() {
					
					content.forEach(element => {
						
							element.parentNode.insertBefore(element.nextElementSibling, element);
				});
			});
			
			
				

			// //header2
			// var $headerL = $('#headerL');
			// var $header2 = $('#header2');
			// var header2 = $('#header2');
			// var $links = $('#links');
			

			// breakpoints.on('<=large', function() {
			// 	header2.style.display = "flex";
			// 	$links.prependTo($header2);
			// });

			// breakpoints.on('>large', function() {
				
			// 	header2.style.display = "none";
			// 	$links.prependTo($headerL);
			// });



})(jQuery);