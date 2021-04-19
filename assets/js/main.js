(function($){
	"use strict";
    jQuery(document).ready(function () {
        jQuery('.menu').meanmenu();
	});
	
    jQuery(document).ready(function () {
        jQuery('.third-menu').meanmenu();
	});
	
	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(400);
    });
    // END PRELOADER JS CODE
	
	$(document).on('ready', function(){
		
		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 50) {
				$('.main-menu').addClass('menu-shrink animated slideInDown');
			} else {
				$('.main-menu').removeClass('menu-shrink animated slideInUp');
			}
		});	

		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 50) {
				$('.third-main-menu').addClass('menu-shrink animated slideInDown');
			} else {
				$('.third-main-menu').removeClass('menu-shrink animated slideInUp');
			}
		});	

		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 50) {
				$('.four-main-menu').addClass('menu-shrink animated slideInDown');
			} else {
				$('.four-main-menu').removeClass('menu-shrink animated slideInUp');
			}
		});	

		$('.menu li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
        });
		
		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});

		$('.scroll-btm a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
        });
		
		// Side Menu JS
        $(".btn_container").click(function(){
			$(".over_lay").css({
			  width: "100%"
			});
			$(".list_items_container").css({
			  left: "0px"
			});
		});
		$(".over_lay, .close_btn").click(function(){
			$(".over_lay").css({
			  width: "0px"
			});
			$(".list_items_container").css({
			  left: "-300px"
			});
		});
		
		//End Side Menu JS

		
		$(function() {
			$('.tab-nav').each(function() {
				var $active, $content, $links = $(this).find('a');
		
				$active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
				$active.addClass('active');
		
				$content = $($active[0].hash);
		
				$links.not($active).each(function() {
					$(this.hash).hide();
				});
		
				$(this).on('click', 'a', function(e) {
					$active.removeClass('active');
					$content.hide();
		
					$active = $(this);
					$content = $(this.hash);
		
					$active.addClass('active');
					$content.show();
		
					e.preventDefault();
				});
			});
		});

		/* this javascript is only to change the "actpage" attribut on the .cdp div*/

		window.onload = function(){
			var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
			$('.cdp_i').on('click', function(){
			var go = $(this).attr('href').replace('#!', '');
			if (go === '+1') {
				paginationPage++;
			} else if (go === '-1') {
				paginationPage--;
			}else{
				paginationPage = parseInt(go, 10);
			}
			$('.cdp').attr('actpage', paginationPage);
			});
		};

		// Video Button JS
		$('#play-video').on('click', function(e){
			e.preventDefault();
			$('#video-overlay').addClass('open');
			$("#video-overlay").append('<iframe width="860" height="513" src="https://www.youtube.com/embed/q5jEY92Amgw" frameborder="0" allowfullscreen></iframe>');
		});
		$('.video-overlay, .video-overlay-close').on('click', function(e){
			e.preventDefault();
			close_video();
		});
		$(document).keyup(function(e){
			if(e.keyCode === 27) { close_video(); }
		});
		function close_video() {
			$('.video-overlay.open').removeClass('open').find('iframe').remove();
		};
		// End Video Button JS
		
		// Client Slider Sec-Home Page
		$('.carousel').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 300,
			nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-caret-right"></i></div>',
			prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fas fa-caret-left"></i></div>',
			
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			}]
		});
			
		$('.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
			console.log(currentSlide);
		});

		// End Client Slider Sec-Home Page

		$('.customer-logos').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			}]
		});

		//Slick Carousel Controllers
		$(".testimonial-reel").slick({
			centerMode: true,
			centerPadding: "40px",
			dots: false,
			slidesToShow: 1,
			infinite: true,
			arrows: false,
			lazyLoad: "ondemand",
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 2,
				centerMode: false
				}
			},
			{
				breakpoint: 767,
				settings: {
				slidesToShow: 1
				}
			}
			]
		});

		// POPPUP GALLERY JS CODE
		$('.popup-gallery').magnificPopup({
			delegate: 'a', // child items selector, by clicking on it popup will open
			type: 'image'
			// other options
		});
		// END POPPUP GALLERY JS CODE


		$('.gallery-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		infinite: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		asNavFor: '.gallery-slider-nav'
	  	});
	  	$('.gallery-slider-nav').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.gallery-slider-for',
		dots: false,
		arrows: false,
		centerMode: false,
		vertical: true,
		infinite: true,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 3,
				centerMode: false,
				infinite: true,
				centerMode: false,
				vertical: false,
			  }
			},
			{
			  breakpoint: 510,
			  settings: {
				slidesToShow: 2,
				centerMode: false,
				infinite: true,
				centerMode: false,
				vertical: false,
			  }
			}
	  
		  ]
		  });
		  
		  // What We Do Popoup Video
		  $('.play-btn').magnificPopup({
			type:'iframe',
			iframe: {
	
			  patterns: {
			   youtube: {
				  index: 'youtube.com/',
				id: 'v=', 
				src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
			},
			  },
			  srcAction: 'iframe_src', 
			}
		});

		// CounterUp sec about us page
		$('#count-box').animationCounter({
			start: 0,
			end:2000,
			step: 60,
			delay:100,
			txt: '+'
		  });
		  $('#count-box2').animationCounter({
			start: 2,
			end:500,
			step: 10,
			delay:100,
		  });
		  $('#count-box3').animationCounter({
			start: 0,
			end: 4000,
			step: 100,
			delay: 100
		  });
		  $('#count-box4').animationCounter({
			start: 0,
			end: 100,
			step: 1,
			delay: 100,
			txt: '%'
		  });


		//   Branding sec about us page
	
		$('.brand_slider').slick({
			dots: false,
			arrows:false,
			infinite: true,
			speed: 600,
			autoplay:true,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
			]
		});

		//   Client Review


		$('.client_slider').slick({
			item:1,
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow:1,
			slidesToScroll: 1,
			arrows:true,
			autoplay:true,
			nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-arrow-right"></i></div>',
			prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fas fa-arrow-left"></i></div>',
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});
		
		//   Wow js
		new WOW().init();


		$('.variable-width').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: true,
			dots: false,
			pauseOnHover: true,
			nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-arrow-right"></i></div>',
			prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fas fa-arrow-left"></i></div>',
			responsive: [
				{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}, 
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},{
				breakpoint: 520,
				settings: {
					slidesToShow: 1
				}
			}]
		});


		jQuery('.faq-heading').click(function(e){
			e.preventDefault();
			if (!jQuery(this).hasClass('active')) {
				jQuery('.faq-heading').removeClass('active');
				jQuery('.faq-content').slideUp(500);
				jQuery(this).addClass('active');
				jQuery(this).next('.faq-content').slideDown(500);
			}
			else if (jQuery(this).hasClass('active')) {
				jQuery(this).removeClass('active');
				jQuery(this).next('.faq-content').slideUp(500);
			}
		});
	

		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="fas fa-angle-double-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE
	});

			// Testimonial Animation JS
			$(document).ready(function(){
				$('.pp-quote').click(function(){
				$('.pp-quote').removeClass("active");
				$(this).addClass("active");
			});
			});
			$(document).ready(function(){
		
			// hide-top
	
			$('.li-quote-1').click(function(e){ 
				e.stopPropagation();
				$(".show").addClass('hide-top');
				$(".hide-top").removeClass('show');
				$('.quote-text-1').addClass('show');
				$('.quote-text-1').removeClass('hide-bottom');             
			});
	
			$('.li-quote-2').click(function(e){ 
				e.stopPropagation();
				$(".show").addClass('hide-top');
				$(".hide-top").removeClass('show');
				$('.quote-text-2').addClass('show');             
				$('.quote-text-2').removeClass('hide-bottom');
			});
	
			$('.li-quote-3').click(function(e){ 
				e.stopPropagation();
				$(".show").addClass('hide-top');
				$(".hide-top").removeClass('show');         
				$('.quote-text-3').addClass('show');             
				$('.quote-text-3').removeClass('hide-bottom');
			});
			$('.li-quote-4').click(function(e){ 
				e.stopPropagation();
				$(".show").addClass('hide-top');
				$(".hide-top").removeClass('show');      
				$('.quote-text-4').addClass('show');             
				$('.quote-text-4').removeClass('hide-bottom');
			});
			$('.li-quote-5').click(function(e){ 
				e.stopPropagation();
				$(".show").addClass('hide-top');
				$(".hide-top").removeClass('show');      
				$('.quote-text-5').addClass('show');             
				$('.quote-text-5').removeClass('hide-bottom');
			});
			$('.li-quote-6').click(function(e){ 
				e.stopPropagation();
				$(".show").addClass('hide-top');
				$(".hide-top").removeClass('show');      
				$('.quote-text-6').addClass('show');             
				$('.quote-text-6').removeClass('hide-bottom');
			});
			$('.li-quote-7').click(function(e){ 
				e.stopPropagation();
				$(".show").addClass('hide-top');
				$(".hide-top").removeClass('show');      
				$('.quote-text-7').addClass('show');             
				$('.quote-text-7').removeClass('hide-bottom');
			});
			$('.li-quote-8').click(function(e){ 
				e.stopPropagation();
				$(".show").addClass('hide-top');
				$(".hide-top").removeClass('show');      
				$('.quote-text-8').addClass('show');             
				$('.quote-text-8').removeClass('hide-bottom');
			});
				
		
		});
		$(document).ready(function(){
		
			// hide-top
	
			$('.li-quote-1').click(function(e){ 
				e.stopPropagation();
				$(".look").addClass('hide-dp-top');
				$(".hide-dp-top").removeClass('look');
				$('.dp-name-1').addClass('look');
				$('.dp-name-1').removeClass('hide-dp-bottom');             
			});
	
			$('.li-quote-2').click(function(e){ 
				e.stopPropagation();
				$(".look").addClass('hide-dp-top');
				$(".hide-dp-top").removeClass('look');
				$('.dp-name-2').addClass('look');
				$('.dp-name-2').removeClass('hide-dp-bottom');             
			});
	
			$('.li-quote-3').click(function(e){ 
				e.stopPropagation();
				$(".look").addClass('hide-dp-top');
				$(".hide-dp-top").removeClass('look');
				$('.dp-name-3').addClass('look');
				$('.dp-name-3').removeClass('hide-dp-bottom');             
			});
			$('.li-quote-4').click(function(e){ 
				e.stopPropagation();
				$(".look").addClass('hide-dp-top');
				$(".hide-dp-top").removeClass('look');
				$('.dp-name-4').addClass('look');
				$('.dp-name-4').removeClass('hide-dp-bottom');             
			});
			
			$('.li-quote-5').click(function(e){ 
				e.stopPropagation();
				$(".look").addClass('hide-dp-top');
				$(".hide-dp-top").removeClass('look');
				$('.dp-name-5').addClass('look');
				$('.dp-name-5').removeClass('hide-dp-bottom');             
			});
			
			$('.li-quote-6').click(function(e){ 
				e.stopPropagation();
				$(".look").addClass('hide-dp-top');
				$(".hide-dp-top").removeClass('look');
				$('.dp-name-6').addClass('look');
				$('.dp-name-6').removeClass('hide-dp-bottom');             
			});
			$('.li-quote-7').click(function(e){ 
				e.stopPropagation();
				$(".look").addClass('hide-dp-top');
				$(".hide-dp-top").removeClass('look');
				$('.dp-name-7').addClass('look');
				$('.dp-name-7').removeClass('hide-dp-bottom');             
			});
			$('.li-quote-8').click(function(e){ 
				e.stopPropagation();
				$(".look").addClass('hide-dp-top');
				$(".hide-dp-top").removeClass('look');
				$('.dp-name-8').addClass('look');
				$('.dp-name-8').removeClass('hide-dp-bottom');             
			});
				
		
		});
			// End Testimonial Animation JS

			var tabs =  $(".tabs li a");
			tabs.click(function() {
				var terms = this.hash.replace('/','');
				tabs.removeClass("active");
				$(this).addClass("active");
				$("#terms").find('.price').hide();
				$(terms).fadeIn(200);
			});


			// MIXITUP JS CODE
			var mixer = mixitup('#shorting');

			

    
}(jQuery));

