// =============================================================================
// JS/ING-MAIN.JS
// -----------------------------------------------------------------------------
// Theme specific functions.
// =============================================================================


jQuery(document).ready(function($) {

	"use strict";


  // Cart shoiping open list
  $(".shipping-calculator-button").on('click', function(e) {
            e.preventDefault();
            $(".shipping-calculator-form").slideToggle("slow");
        });

  //
  // Prevent default behavior of various toggles.
  //

  $('.fightclub-btn-navbar, .fightclub-btn-widgetbar, a[href="#"]').on('click', function(e) {
    e.preventDefault();
  });


  //
  // Video Background Hack
  //
  setTimeout(function(){$('#big-video-wrap').trigger('resize');}, 300)

  //
  // Select
  //
  var select = $('select');
  if (typeof(select) != "undefined" && select !== null) {
  	select.select2();
  	select.on("select2:selecting", function(e) {
  		var change_val = $(this).find(":selected").text();
	  	select.select2();
  	});
  }


  //
  // Input Number
  //

	$('input[type=number]').iLightInputNumber({
	    mobile: false
	});

	//
	// Search Focus
	//

	$('.fightclub-navbar-search').on('click', function() {
		  $('.fightclub-search-bar').addClass('in');
		  $('.fightclub-search-bar .search-query').focus();
		  return false;
	});

	$('.fightclub-woo-navbar-search').on('click', function() {
		  $('.fightclub-woo-search-bar').addClass('in');
		  $('.fightclub-woo-search-bar .search-query').focus();
		  return false;
	});

	$('.fightclub-searchform-overlay-inner').on('click', function(e) {
	    if ($(e.target).closest(".search-query").length === 0) {
	        $('.fightclub-search-bar').removeClass('in');
	        $('.fightclub-woo-search-bar').removeClass('in');
	    }
	    return false;
	});

  /*=========HEADER CART MENU==========*/

	$(".header-cart").on('click', function(e) {
		$(".header-cart .amount-cart").slideToggle();
		e.stopPropagation();
	});
	$('body').on('click', function(event) {
		$(".header-cart .amount-cart").slideUp();
	});

  //
  // Scroll to the bottom of the slider.
  //

  $('.fightclub-slider-revolution-container.above .fightclub-slider-scroll-bottom').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.fightclub-slider-revolution-container.above').outerHeight()
    }, 850, 'easeInOutExpo');
  });

  $('.fightclub-slider-revolution-container.below .fightclub-slider-scroll-bottom').on('click', function(e) {
    e.preventDefault();
    if (!$('body').hasClass('transparent-header')) {
    	var $mastheadHeight   = $('.masthead').outerHeight();
    } else {
	    var $mastheadHeight   = 0;
    }
    var $navbarFixedTopHeight = $('.fightclub-navbar-fixed-top-active .fightclub-navbar').outerHeight();
    var $sliderAboveHeight    = $('.fightclub-slider-revolution-container.above').outerHeight();
    var $sliderBelowHeight    = $('.fightclub-slider-revolution-container.below').outerHeight();
    var $heightSum            = $mastheadHeight + $sliderAboveHeight + $sliderBelowHeight - $navbarFixedTopHeight;
    $('html, body').animate({
      scrollTop: $heightSum
    }, 850, 'easeInOutExpo');
  });


  //
  // Apply appropriate classes for the fixed-top navbar.
  //

  var $window     = $(window);
  var $this       = $(this);
  var $body       = $('body');
  var $navbar     = $('.fightclub-navbar');
  var $navbarWrap = $('.fightclub-navbar-fixed-top-active .fightclub-navbar-wrap');

    if ( $body.hasClass('fightclub-boxed-layout-active') && $body.hasClass('fightclub-navbar-fixed-top-active') && $body.hasClass('admin-bar') ) {
      $window.scroll(function() {
        var $adminbarHeight = $('#wpadminbar').outerHeight();
        var $menuTop        = $navbarWrap.offset().top - $adminbarHeight;
        var $current        = $this.scrollTop();
        if ($current >= $menuTop) {
          $navbar.addClass('fightclub-navbar-fixed-top fightclub-container-fluid max width');
        } else {
          $navbar.removeClass('fightclub-navbar-fixed-top fightclub-container-fluid max width');
        }
      });
    } else if ( $body.hasClass('fightclub-navbar-fixed-top-active') && $body.hasClass('admin-bar') ) {
      $window.scroll(function() {
        var $adminbarHeight = $('#wpadminbar').outerHeight();
        var $menuTop        = $navbarWrap.offset().top - $adminbarHeight;
        var $current        = $this.scrollTop();
        if ($current >= $menuTop) {
          $navbar.addClass('fightclub-navbar-fixed-top');
        } else {
          $navbar.removeClass('fightclub-navbar-fixed-top');
        }
      });
    } else if ( $body.hasClass('fightclub-boxed-layout-active') && $body.hasClass('fightclub-navbar-fixed-top-active') ) {
      $window.scroll(function() {
        var $menuTop = $navbarWrap.offset().top;
        var $current = $this.scrollTop();
        if ($current >= $menuTop) {
          $navbar.addClass('fightclub-navbar-fixed-top fightclub-container-fluid max width');
        } else {
          $navbar.removeClass('fightclub-navbar-fixed-top fightclub-container-fluid max width');
        }
      });
    } else if ( $body.hasClass('fightclub-navbar-fixed-top-active') ) {
      $window.scroll(function() {
        var $menuTop = $navbarWrap.offset().top;
        var $current = $this.scrollTop();
        if ($current >= $menuTop) {
          $navbar.addClass('fightclub-navbar-fixed-top');
        } else {
          $navbar.removeClass('fightclub-navbar-fixed-top');
        }
      });
    }

	//Dynamic menu

	if ( $body.hasClass('fightclub-navbar-dynamic-active') && $body.hasClass('admin-bar')) {

	    var $window     = $(window);
	  	var $this       = $(this);
	  	var $body       = $('body');
		var $lastScrollTop = 0;
		var $navbar     = $('.fightclub-navbar');
		var $navbarWrap = $('.fightclub-navbar-dynamic-active .fightclub-navbar-wrap');

		$(window).scroll(function(event){
			var $adminbarHeight = $('#wpadminbar').outerHeight();
	        var $menuTop = $navbarWrap.offset().top - $adminbarHeight;
	        var $current = $this.scrollTop();
	        if ($current >= $menuTop) {
	          $navbar.addClass('fightclub-navbar-fixed-top');
	          $navbarWrap.addClass('fightclub-fixed-navbar-activated');
	        } else {
	          $navbar.removeClass('fightclub-navbar-fixed-top');
	          $navbarWrap.removeClass('fightclub-fixed-navbar-activated');
	        }

		   if ($current > $lastScrollTop && $current > $navbar.height() ){
		       $navbar.addClass('uppinned-header');
		   } else {
		       $navbar.removeClass('uppinned-header');
		   }
		   $lastScrollTop = $current;
		});

		if ( $body.hasClass('fightclub-boxed-layout-active')) {
			$navbar.addClass('fightclub-container-fluid max width');
		}

	} else if ( $body.hasClass('fightclub-navbar-dynamic-active') ) {

	    var $window     = $(window);
	  	var $this       = $(this);
	  	var $body       = $('body');
		var $lastScrollTop = 0;
		var $navbar     = $('.fightclub-navbar');
		var $navbarWrap = $('.fightclub-navbar-dynamic-active .fightclub-navbar-wrap');

		$(window).scroll(function(event){

	        var $menuTop = $navbarWrap.offset().top;
	        var $current = $this.scrollTop();
	        if ($current >= $menuTop) {
	          $navbar.addClass('fightclub-navbar-fixed-top');
	          $navbarWrap.addClass('fightclub-fixed-navbar-activated');
	        } else {
	          $navbar.removeClass('fightclub-navbar-fixed-top');
	          $navbarWrap.removeClass('fightclub-fixed-navbar-activated');
	        }

		   if ($current > $lastScrollTop && $current > $navbar.height() * 2 ){
		       $navbar.addClass('uppinned-header');
		   } else {
		       $navbar.removeClass('uppinned-header');
		   }
		   $lastScrollTop = $current;
		});

		if ( $body.hasClass('fightclub-boxed-layout-active')) {
			$navbar.addClass('fightclub-container-fluid max width');
		}

	}



 	/*=========MegaMenu===================*/

 	function megaMenuAlign() {
	 	var navbarInner = $('.fightclub-navbar-inner');

	 	if (navbarInner.length) {

	 		var contentWidth = navbarInner.width();
		 	var bodytWidth = $('body').width();
			var menuWidth = $('.fightclub-megamenu-wrapper').width();

			if($('.fightclub-megamenu-wrapper').hasClass('fightclub-megamenu-fullwidth')) {
			 	$('.fightclub-megamenu-wrapper').each(function(){
			 		$(this).find('.fightclub-megamenu-holder').css('width',contentWidth);
			 		var leftPos = $(this).parent().offset();
			 		if ($('body').hasClass('fightclub-navbar-centered-active') && !$('body').hasClass('demo-fixed-top-menu')) {
			 			var alignLeft = leftPos.left - (bodytWidth - contentWidth)/2;
			 		} else {
				 		var alignLeft = leftPos.left + 2 - (bodytWidth - contentWidth)/2;
			 		}
			 		$(this).css('left',- alignLeft);
			 	});
			} else {
				$('.fightclub-megamenu-wrapper').each(function(){
					var leftPos = $(this).parent().offset();
					var menuParentWidth = $(this).parent().width();

						//var alignRight = (bodytWidth + menuParentWidth) - leftPos.left - (bodytWidth - contentWidth)/2;

						var alignRight = bodytWidth - leftPos.left - menuParentWidth - (bodytWidth - contentWidth)/2 + 1;


					$(this).css('right',- alignRight);
				});
			}

		 } else {
			 return false;
		 }

 	}

 	megaMenuAlign();

 	$(window).resize(function(){ megaMenuAlign(); });

	  function linkUpdateStyle() {
		  $('.fightclub-navbar a[href*=\\#]:not([href=\\#])').each(function(){
			  $(this).parent().removeClass('current-menu-item');
			  if ($(this).attr('href') == window.location.href) {
				   $(this).parent().addClass('current-menu-item');
			  }
		  });
	  }
	  linkUpdateStyle();

	 $('.fightclub-navbar a[href*=\\#]:not([href=\\#])').on('click', function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	      	$(this).closest('.sub-menu').find('a').parent().removeClass('current-menu-item');
	      	$(this).parent().addClass('current-menu-item');
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	      }
	    }
	  });

  /* Forms Validation */
function formValidation(form) {
  "use strict";

  var error = {};

  if(form) {
    form.find('.form_item').each(function(){
      var $th = $(this);

      if( $th.val() != '' ) {
        if( $th.attr('type') == 'email' ) {
          var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          if( !emailReg.test( jQuery.trim($th.val()) ) ) {
            error[$th.attr('id')] = 'not_email';
          }
        }
      } else {
        error[$th.attr('id')] = 'empty';
      }

    });
  }
  return error;
}

/* Validation Errors */
function showErrors(form, errors) {
  "use strict";
  var error_message = ''
  for(var i in errors) {
    var form_item = form.find($('#'+i)),
      form_item_name = form_item.attr('name').replace('_', ' ');

    form_item.addClass('error');
    if( errors[i] == 'empty' )
      error_message += '<div class="error">Field '+form_item_name+' is required</div>';
    else
      error_message += '<div class="error">You entered an invalid email</div>';
  }
  if( form.find('.error_block').length > 0) {
    form.find('.error_block').html(error_message);
  } else {
    form.find('.form_results').html('<div class="error_block">'+error_message+'</div>');
  }
}

    /* Form Submiting */
  $('.form_submit').on('click', function(){
    "use strict";
    var form = $(this).parents('form');
    form.find('.form_item').removeClass('error');
    form.find('.error_block').remove();
    var post_data;
    var errors = formValidation(form),
      output;
    if( Object.keys(errors).length > 0 ) {
      showErrors(form, errors);
    } else {
      $('.form_results').addClass('loading');
      if(form.attr('id') == 'contacts_form') {
          post_data = {
                'name'     : $('input[name=name]').val(),
                'email'    : $('input[name=email]').val(),
                'subject'  : $('input[name=subject]').val(),
                'message'  : $('textarea[name=message]').val()
            };

            //Ajax post data to server
            jQuery.post('contacts.php', post_data, function(response){

              $("#contacts_form .form_results").removeClass('loading');

                if(response.type == 'error'){ //load json data from server and output message
                    output = '<div class="error_block">'+response.text+'</div>';
                } else{
                    output = '<div class="success">'+response.text+'</div>';
                    //reset values in all input fields
                    $("#contacts_form .form_item").val('');
                }
                form.find('.form_row').slideUp();
                form.find(".form_results").hide().html(output).slideDown();
            }, 'json');
        } else {
          post_data = {
                'subscribe_email': $('input[name=subscribe_email]').val(),
            };
            jQuery.post('subscribe.php', post_data, function(response){

                output = '<div class="success">'+response.text+'</div>';
                //reset values in all input fields
                $("#contacts_form .form_item").val('');
                form.find('.form_row').slideUp();
                form.find(".form_results").hide().html(output).slideDown();
            }, 'json');
        }

    }
    return false;
  });


	  /*==========Coming Soon Page Vertical Align============*/
	  function soonAlign(){
		  var bogyHeight = $('body').height();
		  var contentHeight = $('.comingsoon-block .fightclub-column').height();
		  var kompHeight = (bogyHeight - contentHeight)/2;
		  if (kompHeight <= 70) { kompHeight = 70 };
		  $('.comingsoon-block .fightclub-column').css('margin-top',kompHeight);
	  }
	  soonAlign();


	//Transparent Navbar
	if ( $body.hasClass('fightclub-alt-header-active') ) {
		var headerHeight = -1 * $('.masthead').outerHeight() - 1;
		$('.masthead').css('margin-bottom',headerHeight);
		var scrollTop = 0;
		$(window).scroll(function(event){
		   var pos = $(this).scrollTop();
		   if (pos > 0) {
		       if (!$body.hasClass('fightclub-navbar-static-active')) {
			   		$body.removeClass('fightclub-alt-header-active');
			   	}
		   } else {
		   	   $body.addClass('fightclub-alt-header-active');
		   }
		});

	}

});

;(function ($) {

    $.fn.iLightInputNumber = function (options) {

        var inBox = '.input-number-box',
            newInput = '.input-number',
            moreVal = '.input-number-more',
            lessVal = '.input-number-less';

        this.each(function () {

            var el = $(this);
            $('<div class="' + inBox.substr(1) + '"></div>').insertAfter(el);
            var parent = el.find('+ ' + inBox);
            parent.append(el);
            var classes = el.attr('class');
            parent.append('<input class="' + newInput.substr(1) + '" type="text">');
            el.hide();
            var newEl = el.next();
            newEl.addClass(classes);
            var attrValue;

            function setInputAttr(attrName) {
                if (el.attr(attrName)) {
                    attrValue = el.attr(attrName);
                    newEl.attr(attrName, attrValue);
                }
            }

            setInputAttr('value');
            setInputAttr('placeholder');
            setInputAttr('min');
            setInputAttr('max');
            setInputAttr('step');

            parent.append('<div class=' + moreVal.substr(1) + '></div>');
            parent.append('<div class=' + lessVal.substr(1) + '></div>');

        }); //end each

        var value,
            step;

        var interval = null,
            timeout = null;

            function ToggleValue(input) {
                input.val(parseInt(input.val(), 10) + d);
            }

            $('body').on('mousedown', moreVal, function () {
                var el = $(this);
                var input = el.siblings(newInput);
                moreValFn(input);
                timeout = setTimeout(function(){
                    interval = setInterval(function(){ moreValFn(input); }, 50);
                }, 200);

            });

            $('body').on('mousedown', lessVal, function () {
                var el = $(this);
                var input = el.siblings(newInput);
                lessValFn(input);
                timeout = setTimeout(function(){
                    interval = setInterval(function(){ lessValFn(input); }, 50);
                }, 200);
            });

            $(moreVal +', '+ lessVal).on("mouseup mouseout", function() {
                clearTimeout(timeout);
                clearInterval(interval);
            });

            function moreValFn(input){
                var max = input.attr('max');
                checkInputAttr(input);
                var newValue = value + step;
                if (newValue > max) {
                    newValue = max;
                }
                changeInputsVal(input, newValue);
            }

            function lessValFn(input){
                var min = input.attr('min');
                checkInputAttr(input);
                var newValue = value - step;
                if (newValue < min) {
                    newValue = min;
                }
                changeInputsVal(input, newValue);
            }

            function changeInputsVal(input, newValue){
                input.val(newValue);
                var inputNumber = input.siblings(this);
                inputNumber.val(newValue);
            }

            function checkInputAttr(input) {
                if (input.attr('value')) {
                    value = parseFloat(input.attr('value'));
                } else if (input.attr('placeholder')) {
                    value = parseFloat(input.attr('placeholder'));
                }
                if (!( $.isNumeric(value) )) {
                    value = 0;
                }
                if (input.attr('step')) {
                    step = parseFloat(input.attr('step'));
                } else {
                    step = 1;
                }
            }

            $(newInput).change(function () {
                var input = $(this);
                var value = parseFloat(input.val());
                var min = input.attr('min');
                var max = input.attr('max');
                if (value < min) {
                    value = min;
                } else if (value > max) {
                    value = max;
                }
                if (!( $.isNumeric(value) )) {
                    value = '';
                }
                input.val(value);
                input.siblings(this).val(value);
            });

            $(newInput).keydown(function(e){
                var input = $(this);
                var k = e.keyCode;
                if( k == 38 ){
                    moreValFn(input);
                }else if( k == 40){
                    lessValFn(input);
                }
            });
    };
})(jQuery);


// =============================================================================
// ISOTOPE.JS
// =============================================================================

(function(e,t,n){"use strict";var r=e.document,i=e.Modernizr,s=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},o="Moz Webkit O Ms".split(" "),u=function(e){var t=r.documentElement.style,n;if(typeof t[e]=="string")return e;e=s(e);for(var i=0,u=o.length;i<u;i++){n=o[i]+e;if(typeof t[n]=="string")return n}},a=u("transform"),f=u("transitionProperty"),l={csstransforms:function(){return!!a},csstransforms3d:function(){var e=!!u("perspective");if(e){var n=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),r="@media ("+n.join("transform-3d),(")+"modernizr)",i=t("<style>"+r+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),s=t('<div id="modernizr" />').appendTo("html");e=s.height()===3;s.remove();i.remove()}return e},csstransitions:function(){return!!f}},c;if(i)for(c in l)i.hasOwnProperty(c)||i.addTest(c,l[c]);else{i=e.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var h=" ",p;for(c in l){p=l[c]();i[c]=p;h+=" "+(p?"":"no-")+c}t("html").addClass(h)}if(i.csstransforms){var d=i.csstransforms3d?{translate:function(e){return"translate3d("+e[0]+"px, "+e[1]+"px, 0) "},scale:function(e){return"scale3d("+e+", "+e+", 1) "}}:{translate:function(e){return"translate("+e[0]+"px, "+e[1]+"px) "},scale:function(e){return"scale("+e+") "}},v=function(e,n,r){var i=t.data(e,"isoTransform")||{},s={},o,u={},f;s[n]=r;t.extend(i,s);for(o in i){f=i[o];u[o]=d[o](f)}var l=u.translate||"",c=u.scale||"",h=l+c;t.data(e,"isoTransform",i);e.style[a]=h};t.cssNumber.scale=!0;t.cssHooks.scale={set:function(e,t){v(e,"scale",t)},get:function(e,n){var r=t.data(e,"isoTransform");return r&&r.scale?r.scale:1}};t.fx.step.scale=function(e){t.cssHooks.scale.set(e.elem,e.now+e.unit)};t.cssNumber.translate=!0;t.cssHooks.translate={set:function(e,t){v(e,"translate",t)},get:function(e,n){var r=t.data(e,"isoTransform");return r&&r.translate?r.translate:[0,0]}}}var m,g;if(i.csstransitions){m={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[f];g=u("transitionDuration")}var y=t.event,b=t.event.handle?"handle":"dispatch",w;y.special.smartresize={setup:function(){t(this).bind("resize",y.special.smartresize.handler)},teardown:function(){t(this).unbind("resize",y.special.smartresize.handler)},handler:function(e,t){var n=this,r=arguments;e.type="smartresize";w&&clearTimeout(w);w=setTimeout(function(){y[b].apply(n,r)},t==="execAsap"?0:100)}};t.fn.smartresize=function(e){return e?this.bind("smartresize",e):this.trigger("smartresize",["execAsap"])};t.Isotope=function(e,n,r){this.element=t(n);this._create(e);this._init(r)};var E=["width","height"],S=t(e);t.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1};t.Isotope.prototype={_create:function(e){this.options=t.extend({},t.Isotope.settings,e);this.styleQueue=[];this.elemCount=0;var n=this.element[0].style;this.originalStyle={};var r=E.slice(0);for(var i in this.options.containerStyle)r.push(i);for(var s=0,o=r.length;s<o;s++){i=r[s];this.originalStyle[i]=n[i]||""}this.element.css(this.options.containerStyle);this._updateAnimationEngine();this._updateUsingTransforms();var u={"original-order":function(e,t){t.elemCount++;return t.elemCount},random:function(){return Math.random()}};this.options.getSortData=t.extend(this.options.getSortData,u);this.reloadItems();this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var a=this;setTimeout(function(){a.element.addClass(a.options.containerClass)},0);this.options.resizable&&S.bind("smartresize.isotope",function(){a.resize()});this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(e){var t=this.options.itemSelector,n=t?e.filter(t).add(e.find(t)):e,r={position:"absolute"};n=n.filter(function(e,t){return t.nodeType===1});if(this.usingTransforms){r.left=0;r.top=0}n.css(r).addClass(this.options.itemClass);this.updateSortData(n,!0);return n},_init:function(e){this.$filteredAtoms=this._filter(this.$allAtoms);this._sort();this.reLayout(e)},option:function(e){if(t.isPlainObject(e)){this.options=t.extend(!0,this.options,e);var n;for(var r in e){n="_update"+s(r);this[n]&&this[n]()}}},_updateAnimationEngine:function(){var e=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),t;switch(e){case"css":case"none":t=!1;break;case"jquery":t=!0;break;default:t=!i.csstransitions}this.isUsingJQueryAnimation=t;this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var e=this.usingTransforms=this.options.transformsEnabled&&i.csstransforms&&i.csstransitions&&!this.isUsingJQueryAnimation;if(!e){delete this.options.hiddenStyle.scale;delete this.options.visibleStyle.scale}this.getPositionStyles=e?this._translate:this._positionAbs},_filter:function(e){var t=this.options.filter===""?"*":this.options.filter;if(!t)return e;var n=this.options.hiddenClass,r="."+n,i=e.filter(r),s=i;if(t!=="*"){s=i.filter(t);var o=e.not(r).not(t).addClass(n);this.styleQueue.push({$el:o,style:this.options.hiddenStyle})}this.styleQueue.push({$el:s,style:this.options.visibleStyle});s.removeClass(n);return e.filter(t)},updateSortData:function(e,n){var r=this,i=this.options.getSortData,s,o;e.each(function(){s=t(this);o={};for(var e in i)!n&&e==="original-order"?o[e]=t.data(this,"isotope-sort-data")[e]:o[e]=i[e](s,r);t.data(this,"isotope-sort-data",o)})},_sort:function(){var e=this.options.sortBy,t=this._getSorter,n=this.options.sortAscending?1:-1,r=function(r,i){var s=t(r,e),o=t(i,e);if(s===o&&e!=="original-order"){s=t(r,"original-order");o=t(i,"original-order")}return(s>o?1:s<o?-1:0)*n};this.$filteredAtoms.sort(r)},_getSorter:function(e,n){return t.data(e,"isotope-sort-data")[n]},_translate:function(e,t){return{translate:[e,t]}},_positionAbs:function(e,t){return{left:e,top:t}},_pushPosition:function(e,t,n){t=Math.round(t+this.offset.left);n=Math.round(n+this.offset.top);var r=this.getPositionStyles(t,n);this.styleQueue.push({$el:e,style:r});this.options.itemPositionDataEnabled&&e.data("isotope-item-position",{x:t,y:n})},layout:function(e,t){var n=this.options.layoutMode;this["_"+n+"Layout"](e);if(this.options.resizesContainer){var r=this["_"+n+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:r})}this._processStyleQueue(e,t);this.isLaidOut=!0},_processStyleQueue:function(e,n){var r=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",s=this.options.animationOptions,o=this.options.onLayout,u,a,f,l;a=function(e,t){t.$el[r](t.style,s)};if(this._isInserting&&this.isUsingJQueryAnimation)a=function(e,t){u=t.$el.hasClass("no-transition")?"css":r;t.$el[u](t.style,s)};else if(n||o||s.complete){var c=!1,h=[n,o,s.complete],p=this;f=!0;l=function(){if(c)return;var t;for(var n=0,r=h.length;n<r;n++){t=h[n];typeof t=="function"&&t.call(p.element,e,p)}c=!0};if(this.isUsingJQueryAnimation&&r==="animate"){s.complete=l;f=!1}else if(i.csstransitions){var d=0,v=this.styleQueue[0],y=v&&v.$el,b;while(!y||!y.length){b=this.styleQueue[d++];if(!b)return;y=b.$el}var w=parseFloat(getComputedStyle(y[0])[g]);if(w>0){a=function(e,t){t.$el[r](t.style,s).one(m,l)};f=!1}}}t.each(this.styleQueue,a);f&&l();this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(e){this["_"+this.options.layoutMode+"Reset"]();this.layout(this.$filteredAtoms,e)},addItems:function(e,t){var n=this._getAtoms(e);this.$allAtoms=this.$allAtoms.add(n);t&&t(n)},insert:function(e,t){this.element.append(e);var n=this;this.addItems(e,function(e){var r=n._filter(e);n._addHideAppended(r);n._sort();n.reLayout();n._revealAppended(r,t)})},appended:function(e,t){var n=this;this.addItems(e,function(e){n._addHideAppended(e);n.layout(e);n._revealAppended(e,t)})},_addHideAppended:function(e){this.$filteredAtoms=this.$filteredAtoms.add(e);e.addClass("no-transition");this._isInserting=!0;this.styleQueue.push({$el:e,style:this.options.hiddenStyle})},_revealAppended:function(e,t){var n=this;setTimeout(function(){e.removeClass("no-transition");n.styleQueue.push({$el:e,style:n.options.visibleStyle});n._isInserting=!1;n._processStyleQueue(e,t)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(e,t){this.$allAtoms=this.$allAtoms.not(e);this.$filteredAtoms=this.$filteredAtoms.not(e);var n=this,r=function(){e.remove();t&&t.call(n.element)};if(e.filter(":not(."+this.options.hiddenClass+")").length){this.styleQueue.push({$el:e,style:this.options.hiddenStyle});this._sort();this.reLayout(r)}else r()},shuffle:function(e){this.updateSortData(this.$allAtoms);this.options.sortBy="random";this._sort();this.reLayout(e)},destroy:function(){var e=this.usingTransforms,t=this.options;this.$allAtoms.removeClass(t.hiddenClass+" "+t.itemClass).each(function(){var t=this.style;t.position="";t.top="";t.left="";t.opacity="";e&&(t[a]="")});var n=this.element[0].style;for(var r in this.originalStyle)n[r]=this.originalStyle[r];this.element.unbind(".isotope").undelegate("."+t.hiddenClass,"click").removeClass(t.containerClass).removeData("isotope");S.unbind(".isotope")},_getSegments:function(e){var t=this.options.layoutMode,n=e?"rowHeight":"columnWidth",r=e?"height":"width",i=e?"rows":"cols",o=this.element[r](),u,a=this.options[t]&&this.options[t][n]||this.$filteredAtoms["outer"+s(r)](!0)||o;u=Math.floor(o/a);u=Math.max(u,1);this[t][i]=u;this[t][n]=a},_checkIfSegmentsChanged:function(e){var t=this.options.layoutMode,n=e?"rows":"cols",r=this[t][n];this._getSegments(e);return this[t][n]!==r},_masonryReset:function(){this.masonry={};this._getSegments();var e=this.masonry.cols;this.masonry.colYs=[];while(e--)this.masonry.colYs.push(0)},_masonryLayout:function(e){var n=this,r=n.masonry;e.each(function(){var e=t(this),i=Math.ceil(e.outerWidth(!0)/r.columnWidth);i=Math.min(i,r.cols);if(i===1)n._masonryPlaceBrick(e,r.colYs);else{var s=r.cols+1-i,o=[],u,a;for(a=0;a<s;a++){u=r.colYs.slice(a,a+i);o[a]=Math.max.apply(Math,u)}n._masonryPlaceBrick(e,o)}})},_masonryPlaceBrick:function(e,t){var n=Math.min.apply(Math,t),r=0;for(var i=0,s=t.length;i<s;i++)if(t[i]===n){r=i;break}var o=this.masonry.columnWidth*r,u=n;this._pushPosition(e,o,u);var a=n+e.outerHeight(!0),f=this.masonry.cols+1-s;for(i=0;i<f;i++)this.masonry.colYs[r+i]=a},_masonryGetContainerSize:function(){var e=Math.max.apply(Math,this.masonry.colYs);return{height:e}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(e){var n=this,r=this.element.width(),i=this.fitRows;e.each(function(){var e=t(this),s=e.outerWidth(!0),o=e.outerHeight(!0);if(i.x!==0&&s+i.x>r){i.x=0;i.y=i.height}n._pushPosition(e,i.x,i.y);i.height=Math.max(i.y+o,i.height);i.x+=s})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0};this._getSegments();this._getSegments(!0)},_cellsByRowLayout:function(e){var n=this,r=this.cellsByRow;e.each(function(){var e=t(this),i=r.index%r.cols,s=Math.floor(r.index/r.cols),o=(i+.5)*r.columnWidth-e.outerWidth(!0)/2,u=(s+.5)*r.rowHeight-e.outerHeight(!0)/2;n._pushPosition(e,o,u);r.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(e){var n=this;e.each(function(e){var r=t(this);n._pushPosition(r,0,n.straightDown.y);n.straightDown.y+=r.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={};this._getSegments(!0);var e=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(e--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(e){var n=this,r=n.masonryHorizontal;e.each(function(){var e=t(this),i=Math.ceil(e.outerHeight(!0)/r.rowHeight);i=Math.min(i,r.rows);if(i===1)n._masonryHorizontalPlaceBrick(e,r.rowXs);else{var s=r.rows+1-i,o=[],u,a;for(a=0;a<s;a++){u=r.rowXs.slice(a,a+i);o[a]=Math.max.apply(Math,u)}n._masonryHorizontalPlaceBrick(e,o)}})},_masonryHorizontalPlaceBrick:function(e,t){var n=Math.min.apply(Math,t),r=0;for(var i=0,s=t.length;i<s;i++)if(t[i]===n){r=i;break}var o=n,u=this.masonryHorizontal.rowHeight*r;this._pushPosition(e,o,u);var a=n+e.outerWidth(!0),f=this.masonryHorizontal.rows+1-s;for(i=0;i<f;i++)this.masonryHorizontal.rowXs[r+i]=a},_masonryHorizontalGetContainerSize:function(){var e=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:e}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(e){var n=this,r=this.element.height(),i=this.fitColumns;e.each(function(){var e=t(this),s=e.outerWidth(!0),o=e.outerHeight(!0);if(i.y!==0&&o+i.y>r){i.x=i.width;i.y=0}n._pushPosition(e,i.x,i.y);i.width=Math.max(i.x+s,i.width);i.y+=o})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0};this._getSegments();this._getSegments(!0)},_cellsByColumnLayout:function(e){var n=this,r=this.cellsByColumn;e.each(function(){var e=t(this),i=Math.floor(r.index/r.rows),s=r.index%r.rows,o=(i+.5)*r.columnWidth-e.outerWidth(!0)/2,u=(s+.5)*r.rowHeight-e.outerHeight(!0)/2;n._pushPosition(e,o,u);r.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(e){var n=this;e.each(function(e){var r=t(this);n._pushPosition(r,n.straightAcross.x,0);n.straightAcross.x+=r.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}};t.fn.imagesLoaded=function(e){function u(){e.call(n,r)}function a(e){var n=e.target;if(n.src!==s&&t.inArray(n,o)===-1){o.push(n);if(--i<=0){setTimeout(u);r.unbind(".imagesLoaded",a)}}}var n=this,r=n.find("img").add(n.filter("img")),i=r.length,s="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",o=[];i||u();r.bind("load.imagesLoaded error.imagesLoaded",a).each(function(){var e=this.src;this.src=s;this.src=e});return n};var x=function(t){e.console&&e.console.error(t)};t.fn.isotope=function(e,n){if(typeof e=="string"){var r=Array.prototype.slice.call(arguments,1);this.each(function(){var n=t.data(this,"isotope");if(!n){x("cannot call methods on isotope prior to initialization; attempted to call method '"+e+"'");return}if(!t.isFunction(n[e])||e.charAt(0)==="_"){x("no such method '"+e+"' for isotope instance");return}n[e].apply(n,r)})}else this.each(function(){var r=t.data(this,"isotope");if(r){r.option(e);r._init(n)}else t.data(this,"isotope",new t.Isotope(e,this,n))});return this}})(window,jQuery);


/*
 * Isotope custom layout mode that extends masonry in order to work with percentage-sized columns
 */
(function(l,e){e.extend(e.Isotope.prototype,{_sloppyMasonryReset:function(){var b=this.element.width(),d=this.options.sloppyMasonry&&this.options.sloppyMasonry.columnWidth||this.$filteredAtoms.outerWidth(!0)||b;this.sloppyMasonry={cols:Math.round(b/d),columnWidth:d};b=this.sloppyMasonry.cols;for(this.sloppyMasonry.colYs=[];b--;)this.sloppyMasonry.colYs.push(0)},_sloppyMasonryLayout:function(b){var d=this,c=d.sloppyMasonry;b.each(function(){var b=e(this),a=Math.round(b.outerWidth(!0)/c.columnWidth),
a=Math.min(a,c.cols);if(1===a)d._sloppyMasonryPlaceBrick(b,c.colYs);else{var f=c.cols+1-a,h=[],k,g;for(g=0;g<f;g++)k=c.colYs.slice(g,g+a),h[g]=Math.max.apply(Math,k);d._sloppyMasonryPlaceBrick(b,h)}})},_sloppyMasonryPlaceBrick:function(b,d){for(var c=Math.min.apply(Math,d),e=0,a=0,f=d.length;a<f;a++)if(d[a]===c){e=a;break}this._pushPosition(b,this.sloppyMasonry.columnWidth*e,c);c+=b.outerHeight(!0);f=this.sloppyMasonry.cols+1-f;for(a=0;a<f;a++)this.sloppyMasonry.colYs[e+a]=c},_sloppyMasonryGetContainerSize:function(){return{height:Math.max.apply(Math,
this.sloppyMasonry.colYs)}},_sloppyMasonryResizeChanged:function(){return!0}})})(this,this.jQuery);
