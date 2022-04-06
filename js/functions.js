/** *************Function JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1)Function for home 2 and home 3 Effects
	2)Function for Home 5 parallax
	3)Product Slider
	4)Range Slider
	5)Insta Feeds 
	6)Map Function
	7)Contact Form 
	8)Loader
	9)Masonry Function
	10)Closing Menu
	11)Load More Button
	12)Use Strict
	13)Init Functions
	14)Light Box
	15)Menu Init Functions
	16)Slider Init Functions
	17)Portfolio Init Functions
	18)Widget Calling Init Functions
	19)Testimonials 
	20)Sliders Functions
	21)Light Box Slider
	22)Folio Slider
	23)Document Resize
	24)Document OnReady 
	25)Document OnLoad 
 ** ***************************************/

var $ = jQuery.noConflict();
	// home_3 home_2 Effects
		$(function() {
				if($("body").hasClass("home_2") || $("body").hasClass("home_3")){
				// detect if IE : from http://stackoverflow.com/a/16657946		
				var ie = (function(){
					var undef,rv = -1; // Return value assumes failure.
					var ua = window.navigator.userAgent;
					var msie = ua.indexOf('MSIE ');
					var trident = ua.indexOf('Trident/');

					if (msie > 0) {
						// IE 10 or older => return version number
						rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
					} else if (trident > 0) {
						// IE 11 (or newer) => return version number
						var rvNum = ua.indexOf('rv:');
						rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
					}

					return ((rv > -1) ? rv : undef);
				}());


				// disable/enable scroll (mousewheel and keys) from http://stackoverflow.com/a/4770179					
				// left: 37, up: 38, right: 39, down: 40,
				// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
				var keys = [32, 37, 38, 39, 40], wheelIter = 0;

				function preventDefault(e) {
					e = e || window.event;
					if (e.preventDefault)
					e.preventDefault();
					e.returnValue = false;  
				}

				function keydown(e) {
					for (var i = keys.length; i--;) {
						if (e.keyCode === keys[i]) {
							preventDefault(e);
							return;
						}
					}
				}

				function touchmove(e) {
					preventDefault(e);
				}

				function wheel(e) {
					// for IE 
					//if( ie ) {
						//preventDefault(e);
					//}
				}

				function disable_scroll() {
					window.onmousewheel = document.onmousewheel = wheel;
					document.onkeydown = keydown;
					document.body.ontouchmove = touchmove;
				}

				function enable_scroll() {
					window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;  
				}

				var docElem = window.document.documentElement,
					scrollVal,
					isRevealed, 
					noscroll, 
					isAnimating,
					container = document.getElementById( 'container' );
					trigger = container.querySelector( 'button.trigger' );
					

				function scrollY() {
					return window.pageYOffset || docElem.scrollTop;
				}
				
				function scrollPage() {
					scrollVal = scrollY();
					
					if( noscroll && !ie ) {
						if( scrollVal < 0 ) return false;
						// keep it that way
						window.scrollTo( 0, 0 );
					}

					if( classie.has( container, 'notrans' ) ) {
						classie.remove( container, 'notrans' );
						return false;
					}

					if( isAnimating ) {
						return false;
					}
					
					if( scrollVal <= 0 && isRevealed ) {
						toggle(0);
					}
				
					else if( scrollVal > 0 && !isRevealed ){
						toggle(1);
					}
				}
				function windowWidth() {
					var winWidth = $(window).width();
					if( winWidth > 736 ) {
						toggle(0);
						window.addEventListener( 'scroll', scrollPage );
					}
					else {
						enable_scroll();
						window.removeEventListener( 'scroll', scrollPage );
					}
				}
				function toggle( reveal ) {
					isAnimating = true;
					
					if( reveal ) {
						classie.add( container, 'modify' );
					}
					else {
						noscroll = true;
						disable_scroll();
						classie.remove( container, 'modify' );
					}

					// simulating the end of the transition:
					setTimeout( function() {
						isRevealed = !isRevealed;
						isAnimating = false;
						if( reveal ) {
							noscroll = false;
							enable_scroll();
						}
					}, 600 );
				}

				// refreshing the page...
				var pageScroll = scrollY();
				noscroll = pageScroll === 0;
				
				disable_scroll();
				
				if( pageScroll ) {
					isRevealed = true;
					classie.add( container, 'notrans' );
					classie.add( container, 'modify' );
				}
				
				window.addEventListener( 'scroll', scrollPage );
				trigger.addEventListener( 'click', function() { toggle( 'reveal' ); } );
				window.addEventListener( 'resize', function() { windowWidth(); } );
				if(window.addEventListener){
						window.addEventListener('load',windowWidth,false); //W3C
					}
					else{
						window.attachEvent('onload',windowWidth); //IE
					}
				}
				
		});
		// Home_5 page: parallax
		if($("body").hasClass("home_5")){
		if ($('.index_4')) {
			$('#nav .button1').click(function() {
				$('#nav .but').each(function() {
					$(this).removeClass('active');
				});
				$(this).addClass('active');
				$.scrollTo($('#parallaxBlock1'), 1000);
				return false;
			});
			$('#nav .button2').click(function() {
				$.scrollTo($('#parallaxBlock2'), 1000);
				$('#nav .but').each(function() {
					$(this).removeClass('active');
				});
				$(this).addClass('active');
				return false;
			});
			$('#nav .button3').click(function() {
				$.scrollTo($('#parallaxBlock3'), 1000);
				$('#nav .but').each(function() {
					$(this).removeClass('active');
				});
				$(this).addClass('active');
				return false;
			});
			$('#nav .button4').click(function() {
				$.scrollTo($('#parallaxBlock4'), 1000);
				$('#nav .but').each(function() {
					$(this).removeClass('active');
				});
				$(this).addClass('active');
				return false;
			});
			$('#nav .button5').click(function() {
				$.scrollTo($('#parallaxBlock5'), 1000);
				$('#nav .but').each(function() {
					$(this).removeClass('active');
				});
				$(this).addClass('active');
				return false;
			});
			$('#nav .button6').click(function() {
				$.scrollTo($('#parallaxBlock6'), 1000);
				$('#nav .but').each(function() {
					$(this).removeClass('active');
				});
				$(this).addClass('active');
				return false;
			});

			 //.parallax(xPosition, speedFactor, outerHeight) ?????:
			$('#parallaxBlock1').parallax("-50%", -0.1);
			$('#parallaxBlock2').parallax("50%", 0.1);
			$('#parallaxBlock3').parallax("-50%", -0.1);
			$('#parallaxBlock4').parallax("50%", 0.1);
			$('#parallaxBlock5').parallax("50%", -0.1);
			$('#parallaxBlock6').parallax("50%", 0.3);
		}
		}

		/*========== Product Slider start ================*/

		if( $('.deatailed_master').length > 0 ){
		var slider = new MasterSlider();
			slider.control('arrows'); 
			slider.control('thumblist' , {autohide:false ,dir:'h',arrows:false, align:'bottom', width:170, height:200, margin:false, space:30});
			slider.setup('product_slider' , {
				width:570,
				height:698,
				space:false,
				view:'slide',
		});
		}
		/*========== Product Slider end =====================*/
	

	/*===================== range slider start ==========================*/

	  $(function() {
		if($( "#slider-range" ).length>0){
			$( "#slider-range" ).slider({
			  range: true,
			  min: 0,
			  max: 999,
			  values: [ 0, 800 ],
			  slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			  }
			});
			
			$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
		}
	  });
	 
	  
	  
	/*===================== range slider end ==========================*/
	
		$("#spy").click(function() { $('html, body').animate({ scrollTop: $("#work-section").offset().top }, 2000); });
	
	/*===================== Instafeeds ==========================*/
		if($(".social-instafeeds").length){
			$('.social-instafeeds').instagramLite({
				accessToken: '10225225.1677ed0.c17f46c9a5e34d71a6ddf9b9855b23b4',
				clientID: '199554eb34504658a4770d2859b5a583',
				urls: true,
				limit: 8,
				load_more: '.il-foodnetwork-load-more',
				success: function() {
				
					/*console.log('The request was successful!');*/
				},
				error: function(errorCode, errorMessage) {
				
					console.log('There was an error');
				
					if(errorCode && errorMessage) {
				
						alert(errorCode +': '+ errorMessage);
					
					}
				}
			});
		}
		$(function() {
			if($( ".style-tab" ).length>0){
			$( "#tab-1,#tab-2,#tab-3,#tab-4,#tab-5,#tab-6" ).tabs({ show: { effect: "fade", duration: 400 } });
			}
		});
	
	
	/*===================== Map ==========================*/
	function initialize(obj) {
		var lat = $('#'+obj).attr("data-lat");
		var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = '';
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom"));

		var styles = [
			{
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 36
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 55
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 8
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					},
					{
						"weight": 1.2
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 19
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			}
		];
		
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
	
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
			scrollwheel: false,
			mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		};
		 var companyImage = new google.maps.MarkerImage('images/pin.png',
			new google.maps.Size(100,100),
			new google.maps.Point(0,0),
			new google.maps.Point(10,60)
		);
		map = new google.maps.Map(document.getElementById(obj), mapOptions);
	
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: companyImage
		});
		
	}
	
	if($('#map-canvas-contact').length==1){
		initialize('map-canvas-contact');
	};
	/* Quick Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
		  event.preventDefault();
		  var mydata = $("form").serialize();
		  
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {

					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");					
						$("#input_name").val("");
						$("#input_email").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();				
					}				
				},
				error: function(xhr, textStatus, errorThrown) {
					//alert(textStatus);
				}
			});
			return false;
			$('#contact-form').attr("action", "saveQuery").submit();
		});
		
		$(document).on('scroll', function() {
			if( $(this).scrollTop() >= 50 ) {
				$(document).off('scroll');
				 MasonryPortfolio();
			}
			
		});
	
	/*===================== Masonary Function==========================*/
	function MasonryPortfolio() {	
	
		if( $('#portfolio-wrap').length > 0 ){	
		
			var $container = $('#portfolio');
			if( $('.home_2').length > 0 ){
				$container.isotope({
				  itemSelector: '.grid-item',
				  gutter:0,
				  layoutMode: 'fitRows',
				  transitionDuration: "0.5s"
				});
			}else{
				$container.isotope({
				  itemSelector: '.grid-item',
				  gutter:0,
				  transitionDuration: "0.5s"
				});  
			}			
			$('#filters a').on('click',function(){
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				/*$container.isotope({ filter: selector });		*/
				$container.isotope({ filter: selector });		
				return false;
			});
			
			
			$(document).scroll(function () {
				if($('.auto-construct').length > 0 ){
					var y = $(this).scrollTop();
					var t = $('#portfolio').offset().top + $('#portfolio').height() - window.innerHeight;
					if (y > t) {
						$('#portfolio').removeClass('auto-construct');
					} 
				}
				
			});
			
			$(window).on( 'resize', function () {
				
				var winWidth = window.innerWidth;
				columnNumb = 1;			
				var attr_col = $('#portfolio').attr('data-col');
					
				if (winWidth >= 1466) {
					
					$('#portfolio-wrap').css( {width : 1170  + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : 100 + '%'});
					$('#portfolio-wrap.no-gutter').css( {margin : 'auto'});					
					var portfolioWidth = $('#portfolio-wrap').width();
				
					var postWidth;
					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 3;
						
					postWidth = Math.floor(portfolioWidth / columnNumb);
					$container.find('.grid-item').each(function () { 
						$('.grid-item').css( { 
							width : postWidth - 30 + 'px',
							height : postWidth * 1.370 - 30 + 'px',
							margin : 15 + 'px' 
						});
						$('.grid-item.tall').css( {
							height : postWidth * 1.550 - 30 + 'px'  
						});
						$('.grid-item.normal').css( {
							height : postWidth * 1.550 - 30 + 'px'  
						});
						$('.home_2 .grid-item').css( { 
							width : postWidth * 1.03 - 30 + 'px',
							height : 'auto',
							margin : 15 + 'px' 
						});
						$('.grid-item.wide').css( {
							width : postWidth * 1.936 - 20 + 'px',  
							height : 'auto'  
						});
						$('.grid-item.min-wide').css( {
							width : postWidth * 1.53 - 30 + 'px',
							height : 'auto'    
						});
						$('.grid-item.small-wide').css( {
							width : postWidth * 1.464 - 30 + 'px',
							height : 'auto'   
						});
						$('.grid-item.tall-wide').css( {
							width : postWidth * 3 - 30 + 'px',
							height : 'auto'   
						});
						$('.grid-item.medium').css( { 
							width : postWidth * 1 - 30 + 'px',
							height : 'auto',
							margin : 15 + 'px' 
						});
						
					});
					
					
				} else if (winWidth >= 1200) {
					
					$('#portfolio-wrap').css( {width : 1170  + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : 1170  + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
								
					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 3;
					
					postWidth = Math.floor(portfolioWidth / columnNumb);			
					$container.find('.grid-item').each(function () { 
						$('.grid-item').css( { 
							width : postWidth - 30 + 'px',
							height : postWidth * 1.370 - 30 + 'px',
							margin : 15 + 'px' 
						});
						$('.grid-item.tall').css( {
							height : postWidth * 1.600 - 30 + 'px'  
						});
						$('.grid-item.normal').css( {
							height : postWidth * 1.550 - 30 + 'px'  
						});
							$('.home_2 .grid-item').css( { 
							width : postWidth * 1.03 - 30 + 'px',
							height : 'auto',
							margin : 15 + 'px' 
						});
						$('.grid-item.wide').css( {
							width : postWidth * 1.936 - 20 + 'px',  
							height : 'auto'  
						});
						$('.grid-item.min-wide').css( {
							width : postWidth * 1.53 - 30 + 'px',
							height : 'auto'    
						});
						$('.grid-item.small-wide').css( {
							width : postWidth * 1.464 - 30 + 'px',
							height : 'auto'   
						});
						$('.grid-item.tall-wide').css( {
							width : postWidth * 3 - 30 + 'px',
							height : 'auto'   
						});
						$('.grid-item.medium').css( { 
							width : postWidth * 1 - 30 + 'px',
							height : 'auto',
							margin : 15 + 'px' 
						});
						
					});
					
					
				} else if (winWidth >= 768) {
					
					$('#portfolio-wrap').css( {width : 100  + '%'});
					$('#portfolio-wrap.no-gutter').css( {width : 100  + '%'});			
					var portfolioWidth = $('#portfolio-wrap').width();
								
					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 3;
					
					postWidth = Math.floor(portfolioWidth / columnNumb);			
					$container.find('.grid-item').each(function () { 
						$('.grid-item').css( { 
							width : postWidth - 20 + 'px',
							height : postWidth * 1.500 - 20 + 'px',
							margin : 10 + 'px' 
						});
						$('.grid-item.tall').css( {
							height : postWidth * 1.600 - 20 + 'px'  
						});
						$('.grid-item.normal').css( {
							height : postWidth * 1.550 - 20 + 'px'  
						});
						$('.home_2 .grid-item').css( { 
							width : postWidth * 1.03 - 30 + 'px',
							height : 'auto',
							margin : 15 + 'px' 
						});
						$('.grid-item.wide').css( {
							width : postWidth * 1.93 - 20 + 'px',  
							height : 'auto'  
						});
						$('.grid-item.min-wide').css( {
							width : postWidth * 1.53 - 30 + 'px',
							height : 'auto'    
						});
						$('.grid-item.small-wide').css( {
							width : postWidth * 1.464 - 30 + 'px',
							height : 'auto'   
						});
						$('.grid-item.tall-wide').css( {
							width : postWidth * 3 - 30 + 'px',
							height : 'auto'   
						});
						$('.grid-item.medium').css( { 
							width : postWidth * 1 - 30 + 'px',
							height : 'auto',
							margin : 15 + 'px' 
						});
						
					});
					
					
				} else if (winWidth < 767 && winWidth > 481) {
					
					$('#portfolio-wrap').css( {width : 100  + '%'});
					$('#portfolio-wrap.no-gutter').css( {width : 100  + '%'});
					
					var portfolioWidth = $('#portfolio-wrap').width(),
					
					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb);			
					$container.find('.grid-item').each(function () { 
						$('.grid-item').css( { 
							width : postWidth - 20 + 'px',
							height : postWidth * 1.600 - 20 + 'px',
							margin : 10 + 'px' 
						});
						$('.grid-item.tall').css( {
							height : postWidth * 1.750 - 20 + 'px'  
						});
						$('.grid-item.normal').css( {
							height : postWidth * 1.700 - 20 + 'px'  
						});
						$('.home_2 .grid-item').css( { 
							width : postWidth * 1.03 - 30 + 'px',
							height : 'auto',
							margin : 15 + 'px' 
						});
						$('.grid-item.wide').css( {
							width : postWidth * 1.93 - 20 + 'px',  
							height : 'auto'  
						});
						$('.grid-item.min-wide').css( {
							width : postWidth * 1.53 - 30 + 'px',
							height : 'auto'    
						});
						$('.grid-item.small-wide').css( {
							width : postWidth * 1.464 - 30 + 'px',
							height : 'auto'   
						});
						$('.grid-item.tall-wide').css( {
							width : postWidth * 2 - 30 + 'px',
							height : 'auto'   
						});
						$('.grid-item.medium').css( { 
							width : postWidth * 1 - 30 + 'px',
							height : 'auto',
							margin : 15 + 'px' 
						});
						
					});
					
					
				} else if (winWidth <= 480) {
					$('#portfolio-wrap').css( {width : 100  + '%'});
					$('#portfolio-wrap.no-gutter').css( {width : 100  + '%'});
					
					var portfolioWidth = $('#portfolio-wrap').width(),
					
					columnNumb = 1;
					postWidth = Math.floor(portfolioWidth / columnNumb);			
					$container.find('.grid-item').each(function () { 
						$('.grid-item').css( { 
							width : postWidth - 20 + 'px',
							height : postWidth * 1.500 - 20 + 'px',
							margin : 10 + 'px' 
						});
						$('.grid-item.tall').css( {
							height : postWidth * 1.650 - 20 + 'px'  
						});
						$('.grid-item.normal').css( {
							height : postWidth * 1.600 - 20 + 'px'  
						});
												
						$('.grid-item.wide').css( {
							width : postWidth * 1.93 - 20 + 'px',  
							height : 'auto'  
						});
						
						$('.grid-item.min-wide').css( {
							width : postWidth * 1.53 - 30 + 'px',
							height : 'auto'    
						});
						$('.grid-item.small-wide').css( {
							width : postWidth * 1.464 - 30 + 'px',
							height : 'auto'   
						});
						$('.grid-item.tall-wide').css( {
							width : postWidth * 2 - 30 + 'px',
							height : 'auto'   
						});
						$('.grid-item.medium').css( { 
							width : postWidth * 1 - 30 + 'px',
							height : 'auto',
							margin : 15 + 'px' 
						});
						$('.home_2 .grid-item.wide').css( {
							width : postWidth - 20 + 'px',
							height : 'auto',
							margin : 10 + 'px' 							
						});
						$('.home_2 .grid-item').css( { 
							width : postWidth - 20 + 'px',
							height : 'auto',
							margin : 10 + 'px' 
						});
						$('.home_2 .grid-item.tall-wide').css( {
							width : postWidth - 20 + 'px',
							height : 'auto',
							margin : 10 + 'px'   
						});
						
					});
	
				}
				return columnNumb;
				
			
			}).resize();
		
			$("#all").click();	
			
			if (window.innerWidth >= 1466) {
					if($('.auto-construct').length > 0 ){		
						$('.grid-item').each(function(i){
							$(this).css({'opacity':0, 'margin-top':180 + 'px', 'margin-bottom':80 + 'px'});	
							
							if($('.auto-construct').length > 0 ){		
								$(this).appear(function() {							
									$(this).delay(i*200).animate({'opacity':1, 'margin-top':10 + 'px', 'margin-bottom':10 + 'px'},700,'easeOutSine');
								});
							}					
							
						});
					}
				} else if (window.innerWidth > 1024) {
					if($('.auto-construct').length > 0 ){		
						$('.grid-item').each(function(i){
							$(this).css({'opacity':0, 'margin-top':180 + 'px', 'margin-bottom':80 + 'px'});	
							
							if($('.auto-construct').length > 0 ){		
								$(this).appear(function() {							
									$(this).delay(i*200).animate({'opacity':1, 'margin-top':10 + 'px', 'margin-bottom':10 + 'px'},700,'easeOutSine');
								});
							}					
							
						});
					}
				}
			}
	}/*End MasonryPortfolio*/
	

	$.fn.inlineStyle = function (prop) {
		return this.prop("style")[$.camelCase(prop)];
	};

	$.fn.doOnce = function( func ) {
		this.length && func.apply( this );
		return this;
	}

	$.extend($.infinitescroll.prototype,{
		_setup_portfolioinfiniteitemsloader: function infscr_setup_portfolioinfiniteitemsloader() {
			var opts = this.options,
				instance = this;
			// Bind nextSelector link to retrieve
			$(opts.nextSelector).click(function(e) {
				if (e.which == 1 && !e.metaKey && !e.shiftKey) {
					e.preventDefault();
					instance.retrieve();
				}
			});
			// Define loadingStart to never hide pager
			instance.options.loading.start = function (opts) {
				opts.loading.msg
					.appendTo(opts.loading.selector)
					.show(opts.loading.speed, function () {
						instance.beginAjax(opts);
					});
			}
		},
		_showdonemsg_portfolioinfiniteitemsloader: function infscr_showdonemsg_portfolioinfiniteitemsloader () {
			var opts = this.options,
				instance = this;
			//Do all the usual stuff
			opts.loading.msg
				.find('img')
				.hide()
				.parent()
				.find('div').html(opts.loading.finishedMsg).animate({ opacity: 1 }, 2000, function () {
					$(this).parent().fadeOut('normal');
				});
			//And also hide the navSelector
			$(opts.navSelector).fadeOut('normal');
			// user provided callback when done
			opts.errorCallback.call($(opts.contentSelector)[0],'done');
		}
	});
	
	var YODA = YODA || {};
				   
	/*--------------------------------------------------
	Load more button
	---------------------------------------------------*/
	$(document).on('click', '.lode-more', function(){
		$("div").removeClass("hidden");
		MasonryPortfolio();
		$(this).hide();
		$('.portfolio-wrap').append('<span class="no-more">no more projects</span>')
		return false;
	});	
/*===================== Initialization Of Function ==========================*/	
(function($){

    // USE STRICT
    "use strict";

    YODA.initialize = {

        init: function(){

            YODA.initialize.responsiveClasses();
            YODA.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
            YODA.initialize.stickyElements();
            YODA.initialize.goToTop();
            YODA.initialize.fullScreen();
            YODA.initialize.verticalMiddle();
            YODA.initialize.lightbox();
            YODA.initialize.resizeVideos();
            YODA.initialize.imageFade();
            YODA.initialize.pageTransition();
            YODA.initialize.dataStyles();
            YODA.initialize.dataResponsiveHeights();

            $('.fslider').addClass('preloader2');

        },

        responsiveClasses: function(){
            var jRes = jRespond([
                {
                    label: 'smallest',
                    enter: 0,
                    exit: 479
                },{
                    label: 'handheld',
                    enter: 480,
                    exit: 767
                },{
                    label: 'tablet',
                    enter: 768,
                    exit: 991
                },{
                    label: 'laptop',
                    enter: 992,
                    exit: 1199
                },{
                    label: 'desktop',
                    enter: 1200,
                    exit: 10000
                }
            ]);
            jRes.addFunc([
                {
                    breakpoint: 'desktop',
                    enter: function() { $body.addClass('device-lg'); },
                    exit: function() { $body.removeClass('device-lg'); }
                },{
                    breakpoint: 'laptop',
                    enter: function() { $body.addClass('device-md'); },
                    exit: function() { $body.removeClass('device-md'); }
                },{
                    breakpoint: 'tablet',
                    enter: function() { $body.addClass('device-sm'); },
                    exit: function() { $body.removeClass('device-sm'); }
                },{
                    breakpoint: 'handheld',
                    enter: function() { $body.addClass('device-xs'); },
                    exit: function() { $body.removeClass('device-xs'); }
                },{
                    breakpoint: 'smallest',
                    enter: function() { $body.addClass('device-xxs'); },
                    exit: function() { $body.removeClass('device-xxs'); }
                }
            ]);
        },

        imagePreload: function(selector, parameters){
            var params = {
                delay: 250,
                transition: 400,
                easing: 'linear'
            };
            $.extend(params, parameters);

            $(selector).each(function() {
                var image = $(this);
                image.css({visibility:'hidden', opacity: 0, display:'block'});
                image.wrap('<span class="preloader" />');
                image.one("load", function(evt) {
                    $(this).delay(params.delay).css({visibility:'visible'}).animate({opacity: 1}, params.transition, params.easing, function() {
                        $(this).unwrap('<span class="preloader" />');
                    });
                }).each(function() {
                    if(this.complete) $(this).trigger("load");
                });
            });
        },

        verticalMiddle: function(){
            if( $verticalMiddleEl.length > 0 ) {
                $verticalMiddleEl.each( function(){
                    var element = $(this),
                        verticalMiddleH = element.outerHeight();

                    if( element.parents('#slider').length > 0 ) {
                        if( $header.hasClass('transparent-header') && ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) ) {
                            verticalMiddleH = verticalMiddleH - 70;
                            if( $slider.next('#header').length > 0 ) { verticalMiddleH = verticalMiddleH + 100; }
                        }
                    }

                    if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') ) {
                        if( element.parents('.full-screen').length && !element.parents('.force-full-screen').length ){
                            element.css({ position: 'relative', top: '0', width: 'auto', marginTop: '0', padding: '60px 0' }).addClass('clearfix');
                        } else {
                            element.css({ position: 'absolute', top: '50%', width: '100%', marginTop: -(verticalMiddleH/2)+'px' });
                        }
                    } else {
                        element.css({ position: 'absolute', top: '50%', width: '100%', marginTop: -(verticalMiddleH/2)+'px' });
                    }
                });
            }
        },

        stickyElements: function(){
            if( $siStickyEl.length > 0 ) {
                var siStickyH = $siStickyEl.outerHeight();
                $siStickyEl.css({ marginTop: -(siStickyH/2)+'px' });
            }

            if( $dotsMenuEl.length > 0 ) {
                var opmdStickyH = $dotsMenuEl.outerHeight();
                $dotsMenuEl.css({ marginTop: -(opmdStickyH/2)+'px' });
            }
        },

        goToTop: function(){
            $goToTopEl.click(function() {
                $('body,html').stop(true).animate({scrollTop:0},400);
                return false;
            });
        },

        goToTopScroll: function(){
            if( $body.hasClass('device-lg') || $body.hasClass('device-md') || $body.hasClass('device-sm') ) {
                if($window.scrollTop() > 450) {
                    $goToTopEl.fadeIn();
                } else {
                    $goToTopEl.fadeOut();
                }
            }
        },

        fullScreen: function(){
            var videoHeight = $window.height();
			var menuHeight =  $("#header-wrap").height();
			var videoHei = videoHeight - menuHeight;
			$('.html_video_container').css('height', videoHei); 
			if( $fullScreenEl.length > 0 ) {
                $fullScreenEl.each( function(){
                    var element = $(this),
                        scrHeight = $window.height();
                    if( element.attr('id') == 'slider' ) {
                        var sliderHeightOff = $slider.offset().top;
                        scrHeight = scrHeight - sliderHeightOff;
                        if( $('#slider.with-header').next('#header:not(.transparent-header)').length > 0 && ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) ) {
                            var headerHeightOff = $header.outerHeight();
                            scrHeight = scrHeight - headerHeightOff;
                        }
                    }
                    if( element.parents('.full-screen').length > 0 ) { scrHeight = element.parents('.full-screen').height(); }

                    if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') ) {
                        if( !element.hasClass('force-full-screen') ){ scrHeight = 'auto'; }
                    }

                    element.css('height', scrHeight);
                    if( element.attr('id') == 'slider' && !element.hasClass('canvas-slider-grid') ) { if( element.has('.swiper-slide') ) { element.find('.swiper-slide').css('height', scrHeight); } }
				});
            }
        },

        maxHeight: function(){
            if( $commonHeightEl.length > 0 ) {
                $commonHeightEl.each( function(){
                    var parentEl = $(this),
                        maxHeight = 0;
                    parentEl.children('[class^=col-]').each(function() {
                        var element = $(this).children('div');
                        if( element.hasClass('max-height') ){
                            maxHeight = element.outerHeight();
                        } else {
                            if (element.outerHeight() > maxHeight)
                            maxHeight = element.outerHeight();
                        }
                    });

                    parentEl.children('[class^=col-]').each(function() {
                        $(this).height(maxHeight);
                    });
                });
            }
        },

        testimonialsGrid: function(){
            if( $testimonialsGridEl.length > 0 ) {
                if( $body.hasClass('device-sm') || $body.hasClass('device-md') || $body.hasClass('device-lg') ) {
                    var maxHeight = 0;
                    $testimonialsGridEl.each( function(){
                        $(this).find("li > .testimonial").each(function(){
                           if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
                        });
                        $(this).find("li").height(maxHeight);
                        maxHeight = 0;
                    });
                } else {
                    $testimonialsGridEl.find("li").css({ 'height': 'auto' });
                }
            }
        },
		/*===================== Light Box ==========================*/
        lightbox: function(){
            var $lightboxImageEl = $('[data-lightbox="image"]'),
                $lightboxGalleryEl = $('[data-lightbox="gallery"]'),
                $lightboxIframeEl = $('[data-lightbox="iframe"]'),
                $lightboxAjaxEl = $('[data-lightbox="ajax"]'),
                $lightboxAjaxGalleryEl = $('[data-lightbox="ajax-gallery"]');

            if( $lightboxImageEl.length > 0 ) {
                $lightboxImageEl.magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    fixedContentPos: true,
                    mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
                    image: {
                        verticalFit: true
                    }
                });
            }

            if( $lightboxGalleryEl.length > 0 ) {
                $lightboxGalleryEl.each(function() {
                    var element = $(this);

                    if( element.find('a[data-lightbox="gallery-item"]').parent('.clone').hasClass('clone') ) {
                        element.find('a[data-lightbox="gallery-item"]').parent('.clone').find('a[data-lightbox="gallery-item"]').attr('data-lightbox','');
                    }

                    element.magnificPopup({
                        delegate: 'a[data-lightbox="gallery-item"]',
                        type: 'image',
                        closeOnContentClick: true,
                        closeBtnInside: false,
                        fixedContentPos: true,
                        mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
                        image: {
                            verticalFit: true
                        },
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                        }
                    });
                });
            }

            if( $lightboxIframeEl.length > 0 ) {
                $lightboxIframeEl.magnificPopup({
                    disableOn: 600,
                    type: 'iframe',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }

            if( $lightboxAjaxEl.length > 0 ) {
                $lightboxAjaxEl.magnificPopup({
                    type: 'ajax',
                    closeBtnInside: false,
                    callbacks: {
                        ajaxContentAdded: function(mfpResponse) {
                            YODA.widget.loadFlexSlider();
                            YODA.initialize.resizeVideos();
                            YODA.widget.masonryThumbs();
                        },
                        open: function() {
                            $body.addClass('ohidden');
                        },
                        close: function() {
                            $body.removeClass('ohidden');
                        }
                    }
                });
            }

            if( $lightboxAjaxGalleryEl.length > 0 ) {
                $lightboxAjaxGalleryEl.magnificPopup({
                    delegate: 'a[data-lightbox="ajax-gallery-item"]',
                    type: 'ajax',
                    closeBtnInside: false,
                    gallery: {
                        enabled: true,
                        preload: 0,
                        navigateByImgClick: false
                    },
                    callbacks: {
                        ajaxContentAdded: function(mfpResponse) {
                            YODA.widget.loadFlexSlider();
                            YODA.initialize.resizeVideos();
                            YODA.widget.masonryThumbs();
                        },
                        open: function() {
                            $body.addClass('ohidden');
                        },
                        close: function() {
                            $body.removeClass('ohidden');
                        }
                    }
                });
            }
        },

        resizeVideos: function(){
            if ( $().fitVids ) {
                $("#content,#footer,#slider:not(.revslider-wrap),.landing-offer-media,.portfolio-ajax-modal").fitVids({
                    customSelector: "iframe[src^='http://www.dailymotion.com/embed']",
                    ignore: '.no-fv'
                });
            }
        },

        imageFade: function(){
            $('.image_fade').hover( function(){
                $(this).filter(':not(:animated)').animate({opacity: 0.8}, 400);
            }, function() {
                $(this).animate({opacity: 1}, 400);
            });
        },

        blogTimelineEntries: function(){
            $('.post-timeline.grid-2').find('.entry').each( function(){
                var position = $(this).inlineStyle('left');
                if( position == '0px' ) {
                    $(this).removeClass('alt');
                } else {
                    $(this).addClass('alt');
                }
                $(this).find('.entry-timeline').fadeIn();
            });
        },

        pageTransition: function(){
            if( !$body.hasClass('no-transition') ){
                var animationIn = $body.attr('data-animation-in'),
                    animationOut = $body.attr('data-animation-out'),
                    durationIn = $body.attr('data-speed-in'),
                    durationOut = $body.attr('data-speed-out'),
                    loaderStyle = $body.attr('data-loader'),
                    loaderStyleHtml = '';

                if( !animationIn ) { animationIn = 'fadeIn'; }
                if( !animationOut ) { animationOut = 'fadeOut'; }
                if( !durationIn ) { durationIn = 1500; }
                if( !durationOut ) { durationOut = 800; }

                if( loaderStyle == '2' ) {
                    loaderStyleHtml = '<div class="css3-spinner-flipper"></div>';
                } else if( loaderStyle == '3' ) {
                    loaderStyleHtml = '<div class="css3-spinner-double-bounce1"></div><div class="css3-spinner-double-bounce2"></div>';
                } else if( loaderStyle == '4' ) {
                    loaderStyleHtml = '<div class="css3-spinner-rect1"></div><div class="css3-spinner-rect2"></div><div class="css3-spinner-rect3"></div><div class="css3-spinner-rect4"></div><div class="css3-spinner-rect5"></div>';
                } else if( loaderStyle == '5' ) {
                    loaderStyleHtml = '<div class="css3-spinner-cube1"></div><div class="css3-spinner-cube2"></div>';
                } else if( loaderStyle == '6' ) {
                    loaderStyleHtml = '<div class="css3-spinner-scaler"></div>';
                }

                $wrapper.animsition({
                    inClass : animationIn,
                    outClass : animationOut,
                    inDuration : Number(durationIn),
                    outDuration : Number(durationOut),
                    linkElement : '#primary-menu ul li a:not([target="_blank"]):not([href^=#])',
                    loading : true,
                    loadingParentElement : 'body',
                    loadingClass : 'css3-spinner',
                    loadingHtml : '',
                    unSupportCss : [
                                     'animation-duration',
                                     '-webkit-animation-duration',
                                     '-o-animation-duration'
                                   ],
                    overlay : false,
                    overlayClass : 'animsition-overlay-slide',
                    overlayParentElement : 'body'
                });
            }
        },

        topScrollOffset: function() {
            var topOffsetScroll = 0;

            if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !YODA.isMobile.any() ) {
                if( $header.hasClass('sticky-header') ) {
                    if( $pagemenu.hasClass('dots-menu') ) { topOffsetScroll = 100; } else { topOffsetScroll = 144; }
                } else {
                    if( $pagemenu.hasClass('dots-menu') ) { topOffsetScroll = 140; } else { topOffsetScroll = 184; }
                }

                if( !$pagemenu.length ) {
                    if( $header.hasClass('sticky-header') ) { topOffsetScroll = 100; } else { topOffsetScroll = 140; }
                }
            } else {
                topOffsetScroll = 40;
            }

            return topOffsetScroll;
        },

        defineColumns: function( element ){
            var column = 4;

            if( element.hasClass('portfolio-full') ) {
                if( element.hasClass('portfolio-3') ) column = 3;
                else if( element.hasClass('portfolio-5') ) column = 5;
                else if( element.hasClass('portfolio-6') ) column = 6;
                else column = 4;

                if( $body.hasClass('device-sm') && ( column == 4 || column == 5 || column == 6 ) ) {
                    column = 3;
                } else if( $body.hasClass('device-xs') && ( column == 3 || column == 4 || column == 5 || column == 6 ) ) {
                    column = 2;
                } else if( $body.hasClass('device-xxs') ) {
                    column = 1;
                }
            } else if( element.hasClass('masonry-thumbs') ) {
                if( element.hasClass('col-2') ) column = 2;
                else if( element.hasClass('col-3') ) column = 3;
                else if( element.hasClass('col-5') ) column = 5;
                else if( element.hasClass('col-6') ) column = 6;
                else column = 4;
            }

            return column;
        },

        setFullColumnWidth: function( element ){

            if( element.hasClass('portfolio-full') ) {
                var columns = YODA.initialize.defineColumns( element );
                var containerWidth = element.width();
                if( containerWidth == ( Math.floor(containerWidth/columns) * columns ) ) { containerWidth = containerWidth - 1; }
                var postWidth = Math.floor(containerWidth/columns);
                if( $body.hasClass('device-xxs') ) { var deviceSmallest = 1; } else { var deviceSmallest = 0; }
                element.find(".portfolio-item").each(function(index){
                    if( deviceSmallest == 0 && $(this).hasClass('wide') ) { var elementSize = ( postWidth*2 ); } else { var elementSize = postWidth; }
                    $(this).css({"width":elementSize+"px"});
                });
            } else if( element.hasClass('masonry-thumbs') ) {
                var columns = YODA.initialize.defineColumns( element ),
                    containerWidth = element.innerWidth(),
                    windowWidth = $window.width();
                if( containerWidth == windowWidth ){
                    containerWidth = windowWidth*1.004;
                    element.css({ 'width': containerWidth+'px' });
                }
                var postWidth = (containerWidth/columns);

                postWidth = Math.floor(postWidth);

                if( ( postWidth * columns ) >= containerWidth ) { element.css({ 'margin-right': '-1px' }); }

                element.children('a').css({"width":postWidth+"px"});

                var bigImageNumber = element.attr('data-big');
                if( bigImageNumber ) { bigImageNumber = Number(bigImageNumber) - 1; }
                var firstElementWidth = element.find('a:eq(0)').outerWidth();

                element.isotope({
                    masonry: {
                        columnWidth: firstElementWidth
                    }
                });

                if( $.isNumeric( bigImageNumber ) ) {
                    var t = setTimeout( function(){
                        element.find('a:eq('+bigImageNumber+')').css({ width: firstElementWidth*2 + 'px' });
                        element.isotope('layout');
                    }, 1000 );
                }
            }

        },

        aspectResizer: function(){
            var $aspectResizerEl = $('.aspect-resizer');
            if( $aspectResizerEl.length > 0 ) {
                $aspectResizerEl.each( function(){
                    var element = $(this),
                        elementW = element.inlineStyle('width'),
                        elementH = element.inlineStyle('height'),
                        elementPW = element.parent().innerWidth();
                });
            }
        },

        dataStyles: function(){
            var $dataStyleXxs = $('[data-style-xxs]'),
                $dataStyleXs = $('[data-style-xs]'),
                $dataStyleSm = $('[data-style-sm]'),
                $dataStyleMd = $('[data-style-md]'),
                $dataStyleLg = $('[data-style-lg]');

            if( $dataStyleXxs.length > 0 ) {
                $dataStyleXxs.each( function(){
                    var element = $(this),
                        elementStyle = element.attr('data-style-xxs');

                    if( $body.hasClass('device-xxs') ) {
                        if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
                    }
                });
            }

            if( $dataStyleXs.length > 0 ) {
                $dataStyleXs.each( function(){
                    var element = $(this),
                        elementStyle = element.attr('data-style-xs');

                    if( $body.hasClass('device-xs') ) {
                        if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
                    }
                });
            }

            if( $dataStyleSm.length > 0 ) {
                $dataStyleSm.each( function(){
                    var element = $(this),
                        elementStyle = element.attr('data-style-sm');

                    if( $body.hasClass('device-sm') ) {
                        if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
                    }
                });
            }

            if( $dataStyleMd.length > 0 ) {
                $dataStyleMd.each( function(){
                    var element = $(this),
                        elementStyle = element.attr('data-style-md');

                    if( $body.hasClass('device-md') ) {
                        if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
                    }
                });
            }

            if( $dataStyleLg.length > 0 ) {
                $dataStyleLg.each( function(){
                    var element = $(this),
                        elementStyle = element.attr('data-style-lg');

                    if( $body.hasClass('device-lg') ) {
                        if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
                    }
                });
            }
        },

        dataResponsiveHeights: function(){
            var $dataHeightXxs = $('[data-height-xxs]'),
                $dataHeightXs = $('[data-height-xs]'),
                $dataHeightSm = $('[data-height-sm]'),
                $dataHeightMd = $('[data-height-md]'),
                $dataHeightLg = $('[data-height-lg]');

            if( $dataHeightXxs.length > 0 ) {
                $dataHeightXxs.each( function(){
                    var element = $(this),
                        elementHeight = element.attr('data-height-xxs');

                    if( $body.hasClass('device-xxs') ) {
                        if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
                    }
                });
            }

            if( $dataHeightXs.length > 0 ) {
                $dataHeightXs.each( function(){
                    var element = $(this),
                        elementHeight = element.attr('data-height-xs');

                    if( $body.hasClass('device-xs') ) {
                        if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
                    }
                });
            }

            if( $dataHeightSm.length > 0 ) {
                $dataHeightSm.each( function(){
                    var element = $(this),
                        elementHeight = element.attr('data-height-sm');

                    if( $body.hasClass('device-sm') ) {
                        if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
                    }
                });
            }

            if( $dataHeightMd.length > 0 ) {
                $dataHeightMd.each( function(){
                    var element = $(this),
                        elementHeight = element.attr('data-height-md');

                    if( $body.hasClass('device-md') ) {
                        if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
                    }
                });
            }

            if( $dataHeightLg.length > 0 ) {
                $dataHeightLg.each( function(){
                    var element = $(this),
                        elementHeight = element.attr('data-height-lg');

                    if( $body.hasClass('device-lg') ) {
                        if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
                    }
                });
            }
        }

    };
	/*===================== Header Init Function ==========================*/
    YODA.header = {

        init: function(){

            YODA.header.superfish();
            YODA.header.menufunctions();
            YODA.header.fullWidthMenu();
            YODA.header.overlayMenu();
            YODA.header.stickyMenu();
            YODA.header.sideHeader();
            YODA.header.sidePanel();
            YODA.header.onePageScroll();
            YODA.header.onepageScroller();
            YODA.header.darkLogo();
            YODA.header.topsearch();
            YODA.header.topcart();
            YODA.header.splitmenu();

        },

        superfish: function(){

            if ( $().superfish ) {
                if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
                    $('#primary-menu ul ul, #primary-menu ul .mega-menu-content').css('display', 'block');
                    YODA.header.menuInvert();
                }

                $('body:not(.side-header) #primary-menu > ul, body:not(.side-header) #primary-menu > div > ul,.top-links > ul').superfish({
                    popUpSelector: 'ul,.mega-menu-content,.top-link-section',
                    delay: 250,
                    speed: 350,
                    animation: {opacity:'show'},
                    animationOut:  {opacity:'hide'},
                    cssArrows: false
                });

                $('body.side-header #primary-menu > ul').superfish({
                    popUpSelector: 'ul',
                    delay: 250,
                    speed: 350,
                    animation: {opacity:'show',height:'show'},
                    animationOut:  {opacity:'hide',height:'hide'},
                    cssArrows: false
                });
            }

        },

        menuInvert: function() {

            $('#primary-menu .mega-menu-content, #primary-menu ul ul').each( function( index, element ){
                var $menuChildElement = $(element);
                var windowWidth = $window.width();
                var menuChildOffset = $menuChildElement.offset();
                var menuChildWidth = $menuChildElement.width();
                var menuChildLeft = menuChildOffset.left;

                if(windowWidth - (menuChildWidth + menuChildLeft) < 0) {
                    $menuChildElement.addClass('menu-pos-invert');
                }
            });

        },

        menufunctions: function(){

            $( '#primary-menu ul li:has(ul)' ).addClass('sub-menu');
            $( '.top-links ul li:has(ul) > a' ).append( ' <i class="icon-angle-down"></i>' );
            $( '.top-links > ul' ).addClass( 'clearfix' );

            if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
                $('#primary-menu.sub-title > ul > li,#primary-menu.sub-title > div > ul > li').hover(function() {
                    $(this).prev().css({ backgroundImage : 'none' });
                }, function() {
                    $(this).prev().css({ backgroundImage : 'url("images/icons/menu-divider.png")' });
                });

                $('#primary-menu.sub-title').children('ul').children('.current').prev().css({ backgroundImage : 'none' });
                $('#primary-menu.sub-title').children('div').children('ul').children('.current').prev().css({ backgroundImage : 'none' });
            }

            if( YODA.isMobile.Android() ) {
                $( '#primary-menu ul li.sub-menu' ).children('a').on('touchstart', function(e){
                    if( !$(this).parent('li.sub-menu').hasClass('sfHover') ) {
                        e.preventDefault();
                    }
                });
            }

        },

        fullWidthMenu: function(){
            if( $body.hasClass('stretched') ) {
                if( $header.find('.container-fullwidth').length > 0 ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 120 }); }
                if( $header.hasClass('full-header') ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 60 }); }
            } else {
                if( $header.find('.container-fullwidth').length > 0 ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 120 }); }
                if( $header.hasClass('full-header') ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 80 }); }
            }
        },

        overlayMenu: function(){
            if( $body.hasClass('overlay-menu') ) {
                var overlayMenuItem = $('#primary-menu').children('ul').children('li'),
                    overlayMenuItemHeight = overlayMenuItem.outerHeight(),
                    overlayMenuItemTHeight = overlayMenuItem.length * overlayMenuItemHeight,
                    firstItemOffset = ( $window.height() - overlayMenuItemTHeight ) / 2;

                $('#primary-menu').children('ul').children('li:first-child').css({ 'margin-top': firstItemOffset+'px' });
            }
        },

        stickyMenu: function( headerOffset ){
            if ($window.scrollTop() > headerOffset) {
                if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !YODA.isMobile.any() ) {
                    $('body:not(.side-header) #header:not(.no-sticky)').addClass('sticky-header');
					$('.home_3').addClass('modify');
                    $('#page-menu:not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
                    if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
                    YODA.header.stickyMenuClass();
                } else if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm') ) {
                    $('body.sticky-responsive-menu #header').addClass('responsive-sticky-header');
                } else {
                    YODA.header.removeStickyness();
                }
            } else {
                YODA.header.removeStickyness();
            }
        },

        removeStickyness: function(){
            if( $header.hasClass('sticky-header') ){
                $('body:not(.side-header) #header:not(.no-sticky)').removeClass('sticky-header');
				$('.home_3').removeClass('modify');
				$('#page-menu:not(.dots-menu,.no-sticky)').removeClass('sticky-page-menu');
                $header.removeClass().addClass(oldHeaderClasses);
                $headerWrap.removeClass().addClass(oldHeaderWrapClasses);
                if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
                YODA.slider.swiperSliderMenu();
                YODA.slider.revolutionSliderMenu();
                var t=setTimeout(function(){ YODA.header.splitmenu(); },450);
            }
            if( $header.hasClass('responsive-sticky-header') ){
                $('body.sticky-responsive-menu #header').removeClass('responsive-sticky-header');
            }
        },

        sideHeader: function(){
            $("#header-trigger").click(function(){
                $('body.open-header').toggleClass("side-header-open");
                return false;
            });
        },

        sidePanel: function(){
            if( $body.hasClass('side-push-panel') ) {
                $("#side-panel-trigger,#side-panel-trigger-close").click(function(){
                    $('body.side-push-panel').toggleClass("side-panel-open");
                    return false;
                });
            }
        },

        onePageScroll: function(){
            $onePageMenuEl.find('a[data-href]').click(function(){
                var divScrollToAnchor = $(this).attr('data-href');

                if( $( divScrollToAnchor ).length > 0 ) {
                    var topOffsetScroll = YODA.initialize.topScrollOffset();

                    if( $onePageMenuEl.hasClass('no-offset') ) { topOffsetScroll = 0; }

                    $onePageMenuEl.find('li').removeClass('current');
                    $onePageMenuEl.find('a[data-href="' + divScrollToAnchor + '"]').parent('li').addClass('current');

                    $('html,body').stop(true).animate({
                        'scrollTop': $( divScrollToAnchor ).offset().top - topOffsetScroll
                    }, 1000, 'easeOutQuad');
                }

                return false;
            });
        },

        onepageScroller: function(){
            $onePageMenuEl.find('li').removeClass('current');
            $onePageMenuEl.find('a[data-href="#' + YODA.header.onePageCurrentSection() + '"]').parent('li').addClass('current');
        },

        onePageCurrentSection: function(){
            var currentOnePageSection = 'home';

            $pageSectionEl.each(function(index) {
                var h = $(this).offset().top;
                var y = $window.scrollTop();

                if( y + 150 >= h && y < h + $(this).height() && $(this).attr('id') != currentOnePageSection ) {
                    currentOnePageSection = $(this).attr('id');
                }
            });

            return currentOnePageSection;
        },

        darkLogo: function(){
            if( ( $header.hasClass('dark') || $body.hasClass('dark') ) && !$headerWrap.hasClass('not-dark') ) {
                if( defaultDarkLogo ){ defaultLogo.find('img').attr('src', defaultDarkLogo); }
                if( retinaDarkLogo ){ retinaLogo.find('img').attr('src', retinaDarkLogo); }
            } else {
                if( defaultLogoImg ){ defaultLogo.find('img').attr('src', defaultLogoImg); }
                if( retinaLogoImg ){ retinaLogo.find('img').attr('src', retinaLogoImg); }
            }
        },

        stickyMenuClass: function(){
            if( stickyMenuClasses ) { var newClassesArray = stickyMenuClasses.split(/ +/); } else { var newClassesArray = ''; }
            var noOfNewClasses = newClassesArray.length;

            if( noOfNewClasses > 0 ) {
                var i = 0;
                for( i=0; i<noOfNewClasses; i++ ) {
                    if( newClassesArray[i] == 'not-dark' ) {
                        $header.removeClass('dark');
                        $headerWrap.addClass('not-dark');
                    } else if( newClassesArray[i] == 'dark' ) {
                        $headerWrap.removeClass('not-dark force-not-dark');
                        if( !$header.hasClass( newClassesArray[i] ) ) {
                            $header.addClass( newClassesArray[i] );
                        }
                    } else if( !$header.hasClass( newClassesArray[i] ) ) {
                        $header.addClass( newClassesArray[i] );
                    }
                }
            }

        },

        topsocial: function(){
            if( $topSocialEl.length > 0 ){
                if( $body.hasClass('device-md') || $body.hasClass('device-lg') ) {
                    $topSocialEl.show();
                    $topSocialEl.find('a').css({width: 40});

                    $topSocialEl.find('.ts-text').each( function(){
                        var $clone = $(this).clone().css({'visibility': 'hidden', 'display': 'inline-block', 'font-size': '13px', 'font-weight':'bold'}).appendTo($body),
                            cloneWidth = $clone.innerWidth() + 52;
                        $(this).parent('a').attr('data-hover-width',cloneWidth);
                        $clone.remove();
                    });

                    $topSocialEl.find('a').hover(function() {
                        if( $(this).find('.ts-text').length > 0 ) {
                            $(this).css({width: $(this).attr('data-hover-width')});
                        }
                    }, function() {
                        $(this).css({width: 40});
                    });
                } else {
                    $topSocialEl.show();
                    $topSocialEl.find('a').css({width: 40});

                    $topSocialEl.find('a').each(function() {
                        var topIconTitle = $(this).find('.ts-text').text();
                        $(this).attr('title', topIconTitle);
                    });

                    $topSocialEl.find('a').hover(function() {
                        $(this).css({width: 40});
                    }, function() {
                        $(this).css({width: 40});
                    });

                    if( $body.hasClass('device-xxs') ) {
                        $topSocialEl.hide();
                        $topSocialEl.slice(0, 8).show();
                    }
                }
            }
        },

        topsearch: function(){

            $(document).on('click', function(event) {
                if (!$(event.target).closest('#top-search').length) { $body.toggleClass('top-search-open', false); }
                if (!$(event.target).closest('#top-cart').length) { $topCart.toggleClass('top-cart-open', false); }
                if (!$(event.target).closest('#page-menu').length) { $pagemenu.toggleClass('pagemenu-active', false); }
                if (!$(event.target).closest('#side-panel').length) { $body.toggleClass('side-panel-open', false); }
            });

            $("#top-search-trigger").click(function(e){
                $body.toggleClass('top-search-open');
                $topCart.toggleClass('top-cart-open', false);
                $( '#primary-menu > ul, #primary-menu > div > ul' ).toggleClass("show", false);
                $pagemenu.toggleClass('pagemenu-active', false);
                if ($body.hasClass('top-search-open')){
                    $topSearch.find('input').focus();
                }
                e.stopPropagation();
                e.preventDefault();
            });

        },

        topcart: function(){

            $("#top-cart-trigger").click(function(e){
                $pagemenu.toggleClass('pagemenu-active', false);
                $topCart.toggleClass('top-cart-open');
                e.stopPropagation();
                e.preventDefault();
            });

        },

        splitmenu: function(){

            if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && $header.hasClass('split-menu') ) {
                var element = $('#logo'),
                    logoWidth = defaultLogo.find('img').outerWidth(),
                    logoPosition = logoWidth/2,
                    menuPadding = logoPosition + 30;

                element.css({ 'margin-left': -logoPosition+'px' });

                $('#primary-menu').find('.menu-left').css({ 'padding-right': menuPadding+'px' });
                $('#primary-menu').find('.menu-right').css({ 'padding-left': menuPadding+'px' });
            }

        }

    };
	/*===================== Slider Init Function ==========================*/
    YODA.slider = {

        init: function() {

            YODA.slider.sliderParallax();
            YODA.slider.sliderElementsFade();
            YODA.slider.captionPosition();
			YODA.slider.folioParallax();
			YODA.slider.styleParallax();
			YODA.slider.aboutSection2();
			YODA.slider.aboutSec1();
			YODA.slider.aboutParallax();
		},

        sliderParallaxOffset: function(){
            var sliderParallaxOffsetTop = 0;
            var headerHeight = $header.outerHeight();
            if( $('body').hasClass('side-header') ) { headerHeight = 0; }
            if( $pageTitle.length > 0 ) {
                var pageTitleHeight = $pageTitle.outerHeight();
                sliderParallaxOffsetTop = pageTitleHeight + headerHeight;
            } else {
                sliderParallaxOffsetTop = headerHeight;
            }

            if( $slider.next('#header').length > 0 ) { sliderParallaxOffsetTop = 0; }

            return sliderParallaxOffsetTop;
        },

        sliderParallax: function(){
            if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !YODA.isMobile.any() ) {
                var parallaxOffsetTop = YODA.slider.sliderParallaxOffset();
                if ( $body.hasClass('home_1') && $window.scrollTop() > parallaxOffsetTop) {
                    $sliderParallaxEl.css({ 'transform' : 'translateY('+ (($window.scrollTop()-parallaxOffsetTop) / 1.5 ) +'px)' });
                    $('.slider-parallax .slider-caption,.ei-title').css({ 'transform' : 'translateY(-'+ (($window.scrollTop()-parallaxOffsetTop) / 7 ) +'px)' });
                } else {
                    $('.slider-parallax,.slider-parallax .slider-caption,.ei-title').css({ 'transform' : 'translateY(0)' });
                }
            } else {
                $('.slider-parallax,.slider-parallax .slider-caption,.ei-title').css({ 'transform' : 'translateY(0)' });
            }
        },

        sliderElementsFade: function(){
            if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !YODA.isMobile.any() ) {
                var parallaxOffsetTop = YODA.slider.sliderParallaxOffset();
                if( $slider.length > 0 ) {
                    if( $header.hasClass('transparent-header') || $('body').hasClass('side-header') ) { var tHeaderOffset = 100; } else { var tHeaderOffset = 0; }
                    $sliderParallaxEl.find('#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next').css({'opacity':( ( 100 + ( $slider.offset().top + parallaxOffsetTop + tHeaderOffset ) - $window.scrollTop() ) ) /90});
                }
            } else {
                $sliderParallaxEl.find('#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next').css({'opacity': 1});
            }
        },
		folioParallax: function() {
		$('.folio-bg').each(function(){
            var pos = $(this).offset().top;
            var scrolled = $(window).scrollTop();
            $('.folio-bg').css('top', -(scrolled * 0.06) + 'px');        
        });
		 
		},
		styleParallax: function() {
		$('.style-parallax').each(function(){
            var pos = $(this).offset().top;
            var scrolled = $(window).scrollTop();
            $('.style-parallax').css('bottom', (scrolled * 0.12) + 'px');        
        });
		 
		},
		aboutSec1: function() {
		$('.about-sec1').each(function(){
            var pos = $(this).offset().top;
            var scrolled = $(window).scrollTop();
            $('.about-sec1').css('top', -(scrolled * 0.025) + 'px');        
        });
		 
		},
		aboutSection2:  function() {
		$('.sec-2').each(function(){
            var pos = $(this).offset().top;
            var scrolled = $(window).scrollTop();
            $('.sec-2').css('bottom', -(scrolled * 0.05) + 'px');        
        });
		 
		},
		
		aboutParallax: function() {
		$('.about-parallax').each(function(){
            var pos = $(this).offset().bottom;
            var scrolled = $(window).scrollTop() -90;
            $('.about-parallax').css('bottom', (scrolled * 0.3) + 'px');
			
		});
		$('.home-about-parallax').each(function(){
            var pos = $(this).offset().bottom;
            var scrolled = $(window).scrollTop() -90;
			$('.home-about-parallax').css('background-position-y', (scrolled * 0.6) + '%');
		});
    
		},
		
        captionPosition: function(){
            $slider.find('.slider-caption').each(function(){
                var scapHeight = $(this).outerHeight();
                var scapSliderHeight = $slider.outerHeight();
                if( $(this).parents('#slider').prev('#header').hasClass('transparent-header') && ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) ) {
                    if( $(this).parents('#slider').prev('#header').hasClass('floating-header') ) {
                        $(this).css({ top: ( scapSliderHeight + 160 - scapHeight ) / 2 + 'px' });
                    } else {
                        $(this).css({ top: ( scapSliderHeight + 100 - scapHeight ) / 2 + 'px' });
                    }
                } else {
                    $(this).css({ top: ( scapSliderHeight - scapHeight ) / 2 + 'px' });
                }
            });
        },

        swiperSliderMenu: function(){
            if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
                var activeSlide = $slider.find('.swiper-slide.swiper-slide-visible');
                YODA.slider.headerSchemeChanger(activeSlide);
            }
        },

        revolutionSliderMenu: function(){
            if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
                var activeSlide = $slider.find('.current-sr-slide-visible');
                YODA.slider.headerSchemeChanger(activeSlide);
            }
        },

        headerSchemeChanger: function( activeSlide ){
            if( activeSlide.length > 0 ) {
                if( activeSlide.hasClass('dark') ){
                    $('#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)').addClass('dark');
                    $('#header.transparent-header.sticky-header,#header.transparent-header.semi-transparent.sticky-header,#header.transparent-header.floating-header.sticky-header').removeClass('dark');
                    $headerWrap.removeClass('not-dark');
                } else {
                    if( $body.hasClass('dark') ) {
                        activeSlide.addClass('not-dark');
                        $('#header.transparent-header:not(.semi-transparent,.floating-header)').removeClass('dark');
                        $('#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)').find('#header-wrap').addClass('not-dark');
                    } else {
                        $('#header.transparent-header:not(.semi-transparent,.floating-header)').removeClass('dark');
                        $headerWrap.removeClass('not-dark');
                    }
                }
                YODA.header.darkLogo();
            }
        },

        owlCaptionInit: function(){
            if( $owlCarouselEl.length > 0 ){
                $owlCarouselEl.each( function(){
                    var element = $(this);
                    if( element.find('.owl-dot').length > 0 ) {
                        element.find('.owl-controls').addClass('with-carousel-dots');
                    }
                });
            }
        }

    };
	/*===================== Portfolio Function ==========================*/
    YODA.portfolio = {

        init: function(){

            YODA.portfolio.ajaxload();

        },

        portfolioDescMargin: function(){
            var $portfolioOverlayEl = $('.portfolio-overlay');
            if( $portfolioOverlayEl.length > 0 ){
                $portfolioOverlayEl.each(function() {
                    var element = $(this);
                    if( element.find('.portfolio-desc').length > 0 ) {
                        var portfolioOverlayHeight = element.outerHeight();
                        var portfolioOverlayDescHeight = element.find('.portfolio-desc').outerHeight();
                        if( element.find('a.left-icon').length > 0 || element.find('a.right-icon').length > 0 || element.find('a.center-icon').length > 0 ) {
                            var portfolioOverlayIconHeight = 40 + 20;
                        } else {
                            var portfolioOverlayIconHeight = 0;
                        }
                        var portfolioOverlayMiddleAlign = ( portfolioOverlayHeight - portfolioOverlayDescHeight - portfolioOverlayIconHeight ) / 2
                        element.find('.portfolio-desc').css({ 'margin-top': portfolioOverlayMiddleAlign });
                    }
                });
            }
        },

        arrange: function(){
            YODA.initialize.setFullColumnWidth( $portfolio );
            $('#portfolio.portfolio-full').isotope('layout');
        },

        ajaxload: function(){
            $('.portfolio-ajax .portfolio-item a.center-icon').click( function(e) {
                var portPostId = $(this).parents('.portfolio-item').attr('id');
                if( !$(this).parents('.portfolio-item').hasClass('portfolio-active') ) {
                    YODA.portfolio.loadItem(portPostId, prevPostPortId);
                }
                e.preventDefault();
            });
        },

        newNextPrev: function( portPostId ){
            var portNext = YODA.portfolio.getNextItem(portPostId);
            var portPrev = YODA.portfolio.getPrevItem(portPostId);
            $('#next-portfolio').attr('data-id', portNext);
            $('#prev-portfolio').attr('data-id', portPrev);
        },

        loadItem: function( portPostId, prevPostPortId, getIt ){
            if(!getIt) { getIt = false; }
            var portNext = YODA.portfolio.getNextItem(portPostId);
            var portPrev = YODA.portfolio.getPrevItem(portPostId);
            if(getIt == false) {
                YODA.portfolio.closeItem();
                $portfolioAjaxLoader.fadeIn();
                var portfolioDataLoader = $('#' + portPostId).attr('data-loader');
                $portfolioDetailsContainer.load(portfolioDataLoader, { portid: portPostId, portnext: portNext, portprev: portPrev },
                function(){
                    YODA.portfolio.initializeAjax(portPostId);
                    YODA.portfolio.openItem();
                    $portfolioItems.removeClass('portfolio-active');
                    $('#' + portPostId).addClass('portfolio-active');
                });
            }
        },

        closeItem: function(){
            if( $portfolioDetails && $portfolioDetails.height() > 32 ) {
                $portfolioAjaxLoader.fadeIn();
                $portfolioDetails.find('#portfolio-ajax-single').fadeOut('600', function(){
                    $(this).remove();
                });
                $portfolioDetails.removeClass('portfolio-ajax-opened');
            }
        },

        openItem: function(){
            var noOfImages = $portfolioDetails.find('img').length;
            var noLoaded = 0;

            if( noOfImages > 0 ) {
                $portfolioDetails.find('img').on('load', function(){
                    noLoaded++;
                    var topOffsetScroll = YODA.initialize.topScrollOffset();
                    if(noOfImages === noLoaded) {
                        $portfolioDetailsContainer.css({ 'display': 'block' });
                        $portfolioDetails.addClass('portfolio-ajax-opened');
                        $portfolioAjaxLoader.fadeOut();
                        var t=setTimeout(function(){
                            YODA.widget.loadFlexSlider();
                            YODA.initialize.lightbox();
                            YODA.initialize.resizeVideos();
                            YODA.widget.masonryThumbs();
                            $('html,body').stop(true).animate({
                                'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
                            }, 900, 'easeOutQuad');
                        },500);
                    }
                });
            } else {
                var topOffsetScroll = YODA.initialize.topScrollOffset();
                $portfolioDetailsContainer.css({ 'display': 'block' });
                $portfolioDetails.addClass('portfolio-ajax-opened');
                $portfolioAjaxLoader.fadeOut();
                var t=setTimeout(function(){
                    YODA.widget.loadFlexSlider();
                    YODA.initialize.lightbox();
                    YODA.initialize.resizeVideos();
                    YODA.widget.masonryThumbs();
                    $('html,body').stop(true).animate({
                        'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
                    }, 900, 'easeOutQuad');
                },500);
            }
        },

        getNextItem: function( portPostId ){
            var portNext = '';
            var hasNext = $('#' + portPostId).next();
            if(hasNext.length != 0) {
                portNext = hasNext.attr('id');
            }
            return portNext;
        },

        getPrevItem: function( portPostId ){
            var portPrev = '';
            var hasPrev = $('#' + portPostId).prev();
            if(hasPrev.length != 0) {
                portPrev = hasPrev.attr('id');
            }
            return portPrev;
        },

        initializeAjax: function( portPostId ){
            prevPostPortId = $('#' + portPostId);

            $('#next-portfolio, #prev-portfolio').click( function() {
                var portPostId = $(this).attr('data-id');
                $portfolioItems.removeClass('portfolio-active');
                $('#' + portPostId).addClass('portfolio-active');
                YODA.portfolio.loadItem(portPostId,prevPostPortId);
                return false;
            });

            $('#close-portfolio').click( function() {
                $portfolioDetailsContainer.fadeOut('600', function(){
                    $portfolioDetails.find('#portfolio-ajax-single').remove();
                });
                $portfolioDetails.removeClass('portfolio-ajax-opened');
                $portfolioItems.removeClass('portfolio-active');
                return false;
            });
        }

    };
	/*===================== Widget Init ==========================*/
    YODA.widget = {

        init: function(){

            YODA.widget.parallax();
			YODA.widget.heroParallax();
		    YODA.widget.animations();
            YODA.widget.youtubeBgVideo();
            YODA.widget.toggles();
            YODA.widget.accordions();
            YODA.widget.counter();
            YODA.widget.roundedSkill();
            YODA.widget.progress();
            YODA.widget.flickrFeed();
            YODA.widget.instagramPhotos( '36286274.b9e559e.4824cbc1d0c94c23827dc4a2267a9f6b', 'b9e559ec7c284375bf41e9a9fb72ae01' );
            YODA.widget.dribbbleShots();
            YODA.widget.textRotater();
            YODA.widget.linkScroll();
            YODA.widget.extras();

        },

        parallax: function(){
            if( !YODA.isMobile.any() ){
                $.stellar({
                    horizontalScrolling: false,
                    verticalOffset: 150,
                    responsive: true
                });
            } else {
                $parallaxEl.addClass('mobile-parallax');
            }
        },
		
		heroParallax: function heroParallax() {

			var page_title = $('body');
				var block_intro = page_title.find('.hero');
				if( block_intro.length > 0 ) var block_intro_top = block_intro.offset().top;	
			$( window ).scroll(function() {
				var current_top = $(document).scrollTop(); 
				var hero_height = $('.hero').height();
				if( $('.hero').hasClass('parallax-hero')){			  
					block_intro.css('top', (current_top*0.7));			
				}
				if( $('.hero').hasClass('static-hero')){			  
					block_intro.css('top', (current_top*1));			
				}
				if( $('.hero').hasClass('opacity-hero')){				 
					block_intro.css('opacity', (1 - current_top/hero_height*1));
				}
			});

		},
		
		
		
		animations: function(){
            var $dataAnimateEl = $('[data-animate]');
            if( $dataAnimateEl.length > 0 ){
                if( $body.hasClass('device-lg') || $body.hasClass('device-md') || $body.hasClass('device-sm') ){
                    $dataAnimateEl.each(function(){
                        var element = $(this),
                            animationDelay = element.attr('data-delay'),
                            animationDelayTime = 0;

                        if( animationDelay ) { animationDelayTime = Number( animationDelay ) + 500; } else { animationDelayTime = 500; }

                        if( !element.hasClass('animated') ) {
                            element.addClass('not-animated');
                            var elementAnimation = element.attr('data-animate');
                            element.appear(function () {
                                setTimeout(function() {
                                    element.removeClass('not-animated').addClass( elementAnimation + ' animated');
                                }, animationDelayTime);
                            },{accX: 0, accY: -120},'easeInCubic');
                        }
                    });
                }
            }
        },
		loaderAnimation: function(){
           $(".pre-loader").delay(100).fadeOut("slow"); 
        },
        loadFlexSlider: function(){
            
		/* ==========================================================================
		Testimonials Slider
		========================================================================== */
		$('.owl-testimonials').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: false,
			lazyLoad: true,
			autoPlay: true,
			autoPlayTimeout:1000,
			autoPlayHoverPause: true,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			singleItem : false,
			itemsScaleUp : false,
			pagination: true,
			navigation: false
		});

		$('.portfolio-next').click(function () {
			$('.owl-testimonials').trigger('owl.next');
		});
		$('.portfolio-prev').click(function () {
			$('.owl-testimonials').trigger('owl.prev');
		});
		
		/* ==========================================================================
		client Slider
		========================================================================== */
		$('.owl-client').owlCarousel({
			items: 4,
			loop: true,
			nav: true,
			dots: false,
			lazyLoad: true,
			autoPlay:true,
			autoPlayTimeout:1000,
			autoPlaySpeed:1000,
			autoPlayHoverPause:true,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [980,2],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,2],
			singleItem : false,
			itemsScaleUp : false,
			pagination: false,
			navigation: false
		});

		$('.portfolio-next').click(function () {
			$('.owl-client').trigger('owl.next');
		});
		$('.portfolio-prev').click(function () {
			$('.owl-client').trigger('owl.prev');
		});
		/* ==========================================================================
		Testimonials Slider
		========================================================================== */
		$('.owl-testimonials-home5').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: false,
			lazyLoad: true,
			autoplay: true,
			autoplayHoverPause: true,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			singleItem : false,
			itemsScaleUp : false,
			pagination: true,
			navigation: false
		});

		$('.portfolio-next').click(function () {
			$('.owl-testimonials').trigger('owl.next');
		});
		$('.portfolio-prev').click(function () {
			$('.owl-testimonials').trigger('owl.prev');
		});
		/* ==========================================================================
		LightBox Slider
		========================================================================== */
		$('.owl-lightbox').owlCarousel({
			items: 3,
			loop: true,
			nav: true,
			dots: false,
			lazyLoad: true,
			autoplay: true,
			autoplayHoverPause: true,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [980,3],
			itemsTablet: [768,3],
			itemsTabletSmall: false,
			itemsMobile : [479,2],
			singleItem : false,
			itemsScaleUp : false,
			pagination: false,
			navigation: false
		});

		$('.portfolio-next').click(function () {
			$('.owl-lightbox').trigger('owl.next');
		});
		$('.portfolio-prev').click(function () {
			$('.owl-lightbox').trigger('owl.prev');
		});
		
		/* ==========================================================================
		folio Slider
		========================================================================== */
		$('.owl-folio').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: false,
			lazyLoad: true,
			autoplay: true,
			mouseDrag: 	false, 
			touchDrag: 	false,
			autoplayHoverPause: true,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			singleItem : false,
			itemsScaleUp : false,
			pagination: false,
			navigation: false
		});

		$('.portfolio-next').click(function () {
			$('.owl-folio').trigger('owl.next');
		});
		$('.portfolio-prev').click(function () {
			$('.owl-folio').trigger('owl.prev');
		});
		/* ==========================================================================
		folio-main Slider
		========================================================================== */
		$('.owl-folio-main').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: false,
			lazyLoad: true,
			autoplay: true,
			autoplayHoverPause: true,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			singleItem : false,
			itemsScaleUp : false,
			pagination: false,
			navigation: false
		});

		$('.portfolio-next').click(function () {
			$('.owl-folio-main').trigger('owl.next');
		});
		$('.portfolio-prev').click(function () {
			$('.owl-folio-main').trigger('owl.prev');
		});
		/* ==========================================================================
		folio-2 Slider
		========================================================================== */
		$('.owl-folio-2').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: true,
			lazyLoad: true,
			autoplay: true,
			autoplayHoverPause: true,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			singleItem : false,
			itemsScaleUp : false,
			pagination: true,
			navigation: false
		});

		
		},
        /* ==========================================================================
		 Youtube Viedo 
		========================================================================== */
		youtubeBgVideo: function(){
            if( $youtubeBgPlayerEl.length > 0 ){
                $youtubeBgPlayerEl.each( function(){
                    var element = $(this),
                        ytbgVideo = element.attr('data-video'),
                        ytbgMute = element.attr('data-mute'),
                        ytbgRatio = element.attr('data-ratio'),
                        ytbgQuality = element.attr('data-quality'),
                        ytbgOpacity = element.attr('data-opacity'),
                        ytbgContainer = element.attr('data-container'),
                        ytbgOptimize = element.attr('data-optimize'),
                        ytbgLoop = element.attr('data-loop'),
                        ytbgVolume = element.attr('data-volume'),
                        ytbgStart = element.attr('data-start'),
                        ytbgStop = element.attr('data-stop'),
                        ytbgAutoPlay = element.attr('data-autoplay'),
                        ytbgFullScreen = element.attr('data-fullscreen');

                    if( ytbgMute == 'false' ) { ytbgMute = false; } else { ytbgMute = true; }
                    if( !ytbgRatio ) { ytbgRatio = '16/9'; }
                    if( !ytbgQuality ) { ytbgQuality = 'hd720'; }
                    if( !ytbgOpacity ) { ytbgOpacity = 1; }
                    if( !ytbgContainer ) { ytbgContainer = 'self'; }
                    if( ytbgOptimize == 'false' ) { ytbgOptimize = false; } else { ytbgOptimize = true; }
                    if( ytbgLoop == 'false' ) { ytbgLoop = false; } else { ytbgLoop = true; }
                    if( !ytbgVolume ) { ytbgVolume = 1; }
                    if( !ytbgStart ) { ytbgStart = 0; }
                    if( !ytbgStop ) { ytbgStop = 0; }
                    if( ytbgAutoPlay == 'false' ) { ytbgAutoPlay = false; } else { ytbgAutoPlay = true; }
                    if( ytbgFullScreen == 'true' ) { ytbgFullScreen = true; } else { ytbgFullScreen = false; }

                    element.mb_YTPlayer({
                        videoURL: ytbgVideo,
                        mute: ytbgMute,
                        ratio: ytbgRatio,
                        quality: ytbgQuality,
                        opacity: ytbgOpacity,
                        containment: ytbgContainer,
                        optimizeDisplay: ytbgOptimize,
                        loop: ytbgLoop,
                        vol: ytbgVolume,
                        startAt: ytbgStart,
                        stopAt: ytbgStop,
                        autoplay: ytbgAutoPlay,
                        realfullscreen: ytbgFullScreen,
                        showYTLogo: false,
                        showControls: false
                    });
                });
            }
        },
		/* ==========================================================================
		Toggles
		========================================================================== */
        toggles: function(){
            $(".togglec").hide();
            $(".togglet").click(function(){
                $(this).toggleClass("toggleta").next(".togglec").slideToggle(300);
                return true;
            });
        },
		/* ==========================================================================
		Accordian
		========================================================================== */
        accordions: function(){
            var $accordionEl = $('.accordion');
            if( $accordionEl.length > 0 ){
                $accordionEl.each( function(){
                    var $accElement = $(this);
                    var accElementState = $accElement.attr('data-state');

                    $accElement.find('.acc_content').hide();

                    if( accElementState != 'closed' ) {
                        $accElement.find('.acctitle:first').addClass('acctitlec').next().show();
                    }

                    $accElement.find('.acctitle').click(function(){
                        if( $(this).next().is(':hidden') ) {
                            $accElement.find('.acctitle').removeClass('acctitlec').next().slideUp("normal");
                            $(this).toggleClass('acctitlec').next().slideDown("normal");
                        }
                        return false;
                    });
                });
            }
        },
		/* ==========================================================================
		Counter
		========================================================================== */
        counter: function(){
            var $counterEl = $('.counter:not(.counter-instant)');
            if( $counterEl.length > 0 ){
                $counterEl.each(function(){
                    var element = $(this);
                    var counterElementComma = $(this).find('span').attr('data-comma');
                    if( !counterElementComma ) { counterElementComma = false; } else { counterElementComma = true; }
                    if( $body.hasClass('device-lg') || $body.hasClass('device-md') ){
                        element.appear( function(){
                            YODA.widget.runCounter( element, counterElementComma );
                        },{accX: 0, accY: -120},'easeInCubic');
                    } else {
                        YODA.widget.runCounter( element, counterElementComma );
                    }
                });
            }
        },

        runCounter: function( counterElement,counterElementComma ){
            if( counterElementComma == true ) {
                counterElement.find('span').countTo({
                    formatter: function (value, options) {
                        value = value.toFixed(options.decimals);
                        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        return value;
                    }
                });
            } else {
                counterElement.find('span').countTo();
            }
        },

        roundedSkill: function(){
            var $roundedSkillEl = $('.rounded-skill');
            if( $roundedSkillEl.length > 0 ){
                $roundedSkillEl.each(function(){
                    var element = $(this);

                    var roundSkillSize = element.attr('data-size');
                    var roundSkillAnimate = element.attr('data-animate');
                    var roundSkillWidth = element.attr('data-width');
                    var roundSkillColor = element.attr('data-color');
                    var roundSkillTrackColor = element.attr('data-trackcolor');

                    if( !roundSkillSize ) { roundSkillSize = 140; }
                    if( !roundSkillAnimate ) { roundSkillAnimate = 2000; }
                    if( !roundSkillWidth ) { roundSkillWidth = 8; }
                    if( !roundSkillColor ) { roundSkillColor = '#0093BF'; }
                    if( !roundSkillTrackColor ) { roundSkillTrackColor = 'rgba(0,0,0,0.04)'; }

                    var properties = {roundSkillSize:roundSkillSize, roundSkillAnimate:roundSkillAnimate, roundSkillWidth:roundSkillWidth, roundSkillColor:roundSkillColor, roundSkillTrackColor:roundSkillTrackColor};

                    if( $body.hasClass('device-lg') || $body.hasClass('device-md') ){
                        element.css({'width':roundSkillSize+'px','height':roundSkillSize+'px'}).animate({opacity: '0'}, 10);
                        element.appear( function(){
                            if (!element.hasClass('skills-animated')) {
                                element.css({opacity: '1'});
                                YODA.widget.runRoundedSkills( element, properties );
                                element.addClass('skills-animated');
                            }
                        },{accX: 0, accY: -120},'easeInCubic');
                    } else {
                        YODA.widget.runRoundedSkills( element, properties );
                    }
                });
            }
        },

        runRoundedSkills: function( element, properties ){
            element.easyPieChart({
                size: Number(properties.roundSkillSize),
                animate: Number(properties.roundSkillAnimate),
                scaleColor: false,
                trackColor: properties.roundSkillTrackColor,
                lineWidth: Number(properties.roundSkillWidth),
                lineCap: 'square',
                barColor: properties.roundSkillColor
            });
        },
		/* ==========================================================================
		Progress Bar
		========================================================================== */
        progress: function(){
            var $progressEl = $('.progress');
            if( $progressEl.length > 0 ){
                $progressEl.each(function(){
                    var element = $(this),
                        skillsBar = element.parent('li'),
                        skillValue = skillsBar.attr('data-percent');

                    if( $body.hasClass('device-lg') || $body.hasClass('device-md') ){
                        element.appear( function(){
                            if (!skillsBar.hasClass('skills-animated')) {
                                element.find('.counter-instant span').countTo();
                                skillsBar.find('.progress').css({width: skillValue + "%"}).addClass('skills-animated');
                            }
                        },{accX: 0, accY: -120},'easeInCubic');
                    } else {
                        element.find('.counter-instant span').countTo();
                        skillsBar.find('.progress').css({width: skillValue + "%"});
                    }
                });
            }
        },

        flickrFeed: function(){
            var $flickrFeedEl = $('.flickr-feed');
            if( $flickrFeedEl.length > 0 ){
                $flickrFeedEl.each(function() {
                    var element = $(this),
                        flickrFeedID = element.attr('data-id'),
                        flickrFeedCount = element.attr('data-count'),
                        flickrFeedType = element.attr('data-type'),
                        flickrFeedTypeGet = 'photos_public.gne';

                    if( flickrFeedType == 'group' ) { flickrFeedTypeGet = 'groups_pool.gne'; }
                    if( !flickrFeedCount ) { flickrFeedCount = 9; }

                    element.jflickrfeed({
                        feedapi: flickrFeedTypeGet,
                        limit: Number(flickrFeedCount),
                        qstrings: {
                            id: flickrFeedID
                        },
                        itemTemplate: '<a href="{{image_b}}" title="{{title}}" data-lightbox="gallery-item">' +
                                            '<img src="{{image_s}}" alt="{{title}}" />' +
                                      '</a>'
                    }, function(data) {
                        YODA.initialize.lightbox();
                    });
                });
            }
        },
		/* ==========================================================================
		Insta Photos
		========================================================================== */
        instagramPhotos: function( c_accessToken, c_clientID ){
            var $instagramPhotosEl = $('.instagram-photos');
            if( $instagramPhotosEl.length > 0 ){
                $.fn.spectragram.accessData = {
                    accessToken: c_accessToken,
                    clientID: c_clientID
                };

                $instagramPhotosEl.each(function() {
                    var element = $(this),
                        instaGramUsername = element.attr('data-user'),
                        instaGramTag = element.attr('data-tag'),
                        instaGramCount = element.attr('data-count'),
                        instaGramType = element.attr('data-type');

                    if( !instaGramCount ) { instaGramCount = 9; }

                    if( instaGramType == 'tag' ) {
                        element.spectragram('getRecentTagged',{
                            query: instaGramTag,
                            max: Number( instaGramCount ),
                            size: 'medium',
                            wrapEachWith: ' '
                        });
                    } else if( instaGramType == 'user' ) {
                        element.spectragram('getUserFeed',{
                            query: instaGramUsername,
                            max: Number( instaGramCount ),
                            size: 'medium',
                            wrapEachWith: ' '
                        });
                    } else {
                        element.spectragram('getPopular',{
                            max: Number( instaGramCount ),
                            size: 'medium',
                            wrapEachWith: ' '
                        });
                    }
                });
            }
        },

        dribbbleShots: function(){
            var $dribbbleShotsEl = $('.dribbble-shots');
            if( $dribbbleShotsEl.length > 0 ){
                $dribbbleShotsEl.each(function() {
                    var element = $(this),
                        dribbbleUsername = element.attr('data-user'),
                        dribbbleCount = element.attr('data-count'),
                        dribbbleList = element.attr('data-list'),
                        dribbbleType = element.attr('data-type');

                    if( !dribbbleCount ) { dribbbleCount = 9; }

                    if( dribbbleType == 'follows' ) {
                        $.jribbble.getShotsThatPlayerFollows( dribbbleUsername , function (followedShots) {
                            var html = [];
                            $.each(followedShots.shots, function (i, shot) {
                                html.push('<a href="' + shot.url + '" target="_blank">');
                                html.push('<img src="' + shot.image_teaser_url + '" ');
                                html.push('alt="' + shot.title + '"></a>');
                            });
                            element.html(html.join(''));
                        }, {page: 1, per_page: Number(dribbbleCount)});
                    } else if( dribbbleType == 'user' ) {
                        $.jribbble.getShotsByPlayerId( dribbbleUsername , function (playerShots) {
                            var html = [];
                            $.each(playerShots.shots, function (i, shot) {
                                html.push('<a href="' + shot.url + '" target="_blank">');
                                html.push('<img src="' + shot.image_teaser_url + '" ');
                                html.push('alt="' + shot.title + '"></a>');
                            });
                            element.html(html.join(''));
                        }, {page: 1, per_page: Number(dribbbleCount)});
                    } else if( dribbbleType == 'list' ) {
                        $.jribbble.getShotsByList( dribbbleList , function (listDetails) {
                            var html = [];
                            $.each(listDetails.shots, function (i, shot) {
                                html.push('<a href="' + shot.url + '" target="_blank">');
                                html.push('<img src="' + shot.image_teaser_url + '" ');
                                html.push('alt="' + shot.title + '"></a>');
                            });
                            element.html(html.join(''));
                        }, {page: 1, per_page: Number(dribbbleCount)});
                    }
                });
            }
        },
		
        masonryThumbs: function(){
            var $masonryThumbsEl = $('.masonry-thumbs');
            if( $masonryThumbsEl.length > 0 ){
                $masonryThumbsEl.each( function(){
                    var masonryItemContainer = $(this);
                    YODA.widget.masonryThumbsArrange( masonryItemContainer );
                });
            }
        },

        masonryThumbsArrange: function( element ){
            YODA.initialize.setFullColumnWidth( element );
            element.isotope('layout');
        },

        notifications: function( element ){
            toastr.clear();
            var notifyElement = $(element),
                notifyPosition = notifyElement.attr('data-notify-position'),
                notifyType = notifyElement.attr('data-notify-type'),
                notifyMsg = notifyElement.attr('data-notify-msg'),
                notifyCloseButton = notifyElement.attr('data-notify-close');

            if( !notifyPosition ) { notifyPosition = 'toast-top-right'; } else { notifyPosition = 'toast-' + notifyElement.attr('data-notify-position'); }
            if( !notifyMsg ) { notifyMsg = 'Please set a message!'; }
            if( notifyCloseButton == 'true' ) { notifyCloseButton = true; } else { notifyCloseButton = false; }

            toastr.options.positionClass = notifyPosition;
            toastr.options.closeButton = notifyCloseButton;
            toastr.options.closeHtml = '<button><i class="icon-remove"></i></button>';

            if( notifyType == 'warning' ) {
                toastr.warning(notifyMsg);
            } else if( notifyType == 'error' ) {
                toastr.error(notifyMsg);
            } else if( notifyType == 'success' ) {
                toastr.success(notifyMsg);
            } else {
                toastr.info(notifyMsg);
            }

            return false;
        },

        textRotater: function(){
            if( $textRotaterEl.length > 0 ){
                $textRotaterEl.each(function(){
                    var element = $(this),
                        trRotate = $(this).attr('data-rotate'),
                        trSpeed = $(this).attr('data-speed'),
                        trSeparator = $(this).attr('data-separator');

                    if( !trRotate ) { trRotate = "fade"; }
                    if( !trSpeed ) { trSpeed = 1200; }
                    if( !trSeparator ) { trSeparator = ","; }

                    var tRotater = $(this).find('.t-rotate');

                    tRotater.Morphext({
                        animation: trRotate,
                        separator: trSeparator,
                        speed: Number(trSpeed)
                    });
                });
            }
        },

        linkScroll: function(){
            $("a[data-scrollto]").click(function(){
                var divScrollToAnchor = $(this).attr('data-scrollto');
                var topOffsetScroll = YODA.initialize.topScrollOffset();

                $('html,body').stop(true).animate({
                    'scrollTop': $( divScrollToAnchor ).offset().top - topOffsetScroll
                }, 750, 'easeOutQuad');

                return false;
            });
        },

        extras: function(){
            $('[data-toggle="tooltip"]').tooltip();
            $('#primary-menu-trigger,#overlay-menu-close').click(function() {
                $( '#primary-menu > ul, #primary-menu > div > ul' ).toggleClass("show");
                return false;
            });
			$('#primary-menu-trigger,#overlay-menu-close').click(function() {
                $( '#header-wrap' ).toggleClass("nav-height");
                return false;
            });
			$('#primary-menu-trigger,#overlay-menu-close').click(function() {
                $( '#primary-menu-trigger' ).toggleClass("icon_twister");
                return false;
            });
            $('#page-submenu-trigger').click(function() {
                $body.toggleClass('top-search-open', false);
                $pagemenu.toggleClass("pagemenu-active");
                return false;
            });
            $pagemenu.find('nav').click(function(e){
                $body.toggleClass('top-search-open', false);
                $topCart.toggleClass('top-cart-open', false);
            });
            if( YODA.isMobile.any() ){
                $body.addClass('device-touch');
            }
        }

    };

    YODA.isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (YODA.isMobile.Android() || YODA.isMobile.BlackBerry() || YODA.isMobile.iOS() || YODA.isMobile.Opera() || YODA.isMobile.Windows());
        }
    };

    YODA.documentOnResize = {

        init: function(){

            var t = setTimeout( function(){
                YODA.header.topsocial();
                YODA.header.fullWidthMenu();
                YODA.header.overlayMenu();
                YODA.initialize.fullScreen();
                YODA.initialize.verticalMiddle();
                YODA.initialize.maxHeight();
                YODA.initialize.testimonialsGrid();
                YODA.slider.captionPosition();
                YODA.portfolio.arrange();
                YODA.widget.masonryThumbs();
                YODA.initialize.dataStyles();
                YODA.initialize.dataResponsiveHeights();
            }, 500 );

        }

    };

    YODA.documentOnReady = {

        init: function(){
            YODA.initialize.init();
            YODA.header.init();
            if( $slider.length > 0 ) { YODA.slider.init(); }
            if( $portfolio.length > 0 ) { YODA.portfolio.init(); }
            YODA.widget.init();
            YODA.documentOnReady.windowscroll();
            YODA.documentOnReady.swipersliderinit();
			
			/*Smooth page scroll function*/
			var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
			var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
			var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
			var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
			
				if( $('.home_2').length == 0 && $('.home_3').length == 0  ){
					if((is_chrome)||(is_explorer)||(is_firefox)||(is_opera)){
						$.srSmoothscroll({
							step: 250,
							speed: 1000,
							ease: 'swing'
						});
					}
				}
        },
		swipersliderinit: function(){
				$('.la-anim-1').addClass('la-animate');
			
			var swiperSlider = new Swiper('.swiper-parent',{
				paginationClickable: false,
				slidesPerView: 1,
				grabCursor: true,
				loop: true,
				AutoPlay: true,
				speed: 1000,
				progress: true,
				onProgressChange: function(swiper){
					for (var i = 0; i < swiper.slides.length; i++){
						var slide = swiper.slides[i];
						var progress = slide.progress;
						var translate = progress*swiper.width;
						var opacity = 1 - Math.min(Math.abs(progress),1);
						slide.style.opacity = opacity;
					}
					
				},
				onTouchStart:function(swiper){
					for (var i = 0; i < swiper.slides.length; i++){
						swiper.setTransition(swiper.slides[i], 0);
					}
				},
				onSetWrapperTransition: function(swiper, speed) {
					for (var i = 0; i < swiper.slides.length; i++){
						swiper.setTransition(swiper.slides[i], speed);
					}
				},
				onSwiperCreated: function(swiper){
					$('[data-caption-animate]').each(function(){
						var $toAnimateElement = $(this);
						var toAnimateDelay = $(this).attr('data-caption-delay');
						var toAnimateDelayTime = 0;
						if( toAnimateDelay ) { toAnimateDelayTime = Number( toAnimateDelay ) + 1; } else { toAnimateDelayTime = 1; }
						if( !$toAnimateElement.hasClass('animated') ) {
							$toAnimateElement.addClass('not-animated');
							var elementAnimation = $toAnimateElement.attr('data-caption-animate');
							setTimeout(function() {
								$toAnimateElement.removeClass('not-animated').addClass( elementAnimation + ' animated');
							}, toAnimateDelayTime);
						}
					});
					YODA.slider.swiperSliderMenu();
						
						
				},
				onSlideChangeStart: function(swiper){
					$('[data-caption-animate]').each(function(){
						var $toAnimateElement = $(this);
						var elementAnimation = $toAnimateElement.attr('data-caption-animate');
						$toAnimateElement.removeClass('animated').removeClass(elementAnimation).addClass('not-animated');
					});
					YODA.slider.swiperSliderMenu();
					
				},
				onSlideChangeEnd: function(swiper){
					$('#slider').find('.swiper-slide').each(function(){
						if($(this).find('video').length > 0) { $(this).find('video').get(0).pause(); }
						if($(this).find('.yt-bg-player').length > 0) { $(this).find('.yt-bg-player').pauseYTP(); }
					});
					$('#slider').find('.swiper-slide:not(".swiper-slide-active")').each(function(){
						if($(this).find('video').length > 0) {
							if($(this).find('video').get(0).currentTime != 0 ) $(this).find('video').get(0).currentTime = 0;
						}
						if($(this).find('.yt-bg-player').length > 0) {
							$(this).find('.yt-bg-player').getPlayer().seekTo( $(this).find('.yt-bg-player').attr('data-start') );
						}
					});
					if( $('#slider').find('.swiper-slide.swiper-slide-active').find('video').length > 0 ) { $('#slider').find('.swiper-slide.swiper-slide-active').find('video').get(0).play(); }
					if( $('#slider').find('.swiper-slide.swiper-slide-active').find('.yt-bg-player').length > 0 ) { $('#slider').find('.swiper-slide.swiper-slide-active').find('.yt-bg-player').playYTP(); }

					$('#slider .swiper-slide.swiper-slide-active [data-caption-animate]').each(function(){
						var $toAnimateElement = $(this);
						var toAnimateDelay = $(this).attr('data-caption-delay');
						var toAnimateDelayTime = 0;
						if( toAnimateDelay ) { toAnimateDelayTime = Number( toAnimateDelay ) + 1; } else { toAnimateDelayTime = 1; }
						if( !$toAnimateElement.hasClass('animated') ) {
							$toAnimateElement.addClass('not-animated');
							var elementAnimation = $toAnimateElement.attr('data-caption-animate');
							setTimeout(function() {
								$toAnimateElement.removeClass('not-animated').addClass( elementAnimation + ' animated');
							}, toAnimateDelayTime);
						}
							
					});
					
					
				}
			});

			MasonryPortfolio();
			
		},
        windowscroll: function(){

            var headerOffset = $header.offset().top;
            var headerWrapOffset = $headerWrap.offset().top;

            $window.scroll( function(){

                YODA.initialize.goToTopScroll();
                $('body.open-header.close-header-on-scroll').removeClass("side-header-open");
                YODA.header.stickyMenu( headerWrapOffset );
                YODA.header.darkLogo();
                YODA.slider.sliderParallax();
                YODA.slider.sliderElementsFade();
				YODA.slider.folioParallax();
				YODA.slider.styleParallax();
				YODA.slider.aboutSection2();
				YODA.slider.aboutSec1();
				YODA.slider.aboutParallax();
				YODA.header.splitmenu();

            });
            $window.scrolled(function() {
                YODA.header.onepageScroller();
            });
        }

    };

    YODA.documentOnLoad = {

        init: function(){
            YODA.slider.captionPosition();
            YODA.slider.swiperSliderMenu();
            YODA.slider.revolutionSliderMenu();
            YODA.initialize.maxHeight();
            YODA.initialize.testimonialsGrid();
            YODA.initialize.verticalMiddle();
            YODA.portfolio.portfolioDescMargin();
            YODA.portfolio.arrange();
            YODA.widget.loadFlexSlider();
            YODA.widget.loaderAnimation();
            YODA.widget.masonryThumbs();
            YODA.slider.owlCaptionInit();
            YODA.header.topsocial();
        }
    };

    var $window = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $header = $('#header'),
        $headerWrap = $('#header-wrap'),
        oldHeaderClasses = $header.attr('class'),
        oldHeaderWrapClasses = $headerWrap.attr('class'),
        stickyMenuClasses = $header.attr('data-sticky-class'),
        defaultLogo = $('#logo').find('.standard-logo'),
        defaultLogoWidth = defaultLogo.find('img').outerWidth(),
        retinaLogo = $('#logo').find('.retina-logo'),
        defaultLogoImg = defaultLogo.find('img').attr('src'),
        retinaLogoImg = retinaLogo.find('img').attr('src'),
        defaultDarkLogo = defaultLogo.attr('data-dark-logo'),
        retinaDarkLogo = retinaLogo.attr('data-dark-logo'),
        $pagemenu = $('#page-menu'),
        $onePageMenuEl = $('.one-page-menu'),
        $portfolio = $('#portfolio'),
        $slider = $('#slider'),
        $sliderParallaxEl = $('.slider-parallax'),
        $pageTitle = $('#page-title'),
        $portfolioItems = $('.portfolio-ajax').find('.portfolio-item'),
        $portfolioDetails = $('#portfolio-ajax-wrap'),
        $portfolioDetailsContainer = $('#portfolio-ajax-container'),
        $portfolioAjaxLoader = $('#portfolio-ajax-loader'),
        prevPostPortId = '',
        $topSearch = $('#top-search'),
        $topCart = $('#top-cart'),
        $verticalMiddleEl = $('.vertical-middle'),
        $topSocialEl = $('#top-social').find('li'),
        $siStickyEl = $('.si-sticky'),
        $dotsMenuEl = $('.dots-menu'),
        $goToTopEl = $('#gotoTop'),
        $fullScreenEl = $('.full-screen'),
        $commonHeightEl = $('.common-height'),
        $testimonialsGridEl = $('.testimonials-grid'),
        $pageSectionEl = $('.page-section'),
        $owlCarouselEl = $('.owl-carousel'),
        $parallaxEl = $('.parallax'),
        $youtubeBgPlayerEl = $('.yt-bg-player'),
        $textRotaterEl = $('.text-rotater');

    $(document).ready( YODA.documentOnReady.init );
    $window.load( YODA.documentOnLoad.init );
    $window.on( 'resize', YODA.documentOnResize.init );

})($);