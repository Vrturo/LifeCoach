		var previewActions = function () {

	        var $this = jQuery(this);
	        var data = $this.data();

	        var params =  {
	            action          :  PP_DATA.ajaxAction,
	            id              :  data.id,
	            ajaxNonceValue  :  PP_DATA.ajaxNonce
	        }
	        if (jQuery('#portfolio-single-result').hasClass("html-ready")) {
	              jQuery('.singleImgwrapp, .single-content').fadeOut('slow');
	        }

	        ajaxPostRequest(params,function (resp) {

            	if (jQuery('#portfolio-single-result').hasClass("html-ready")) {
            		setTimeout(function(){jQuery('.portfolio-single-result-inner').html(resp.html).fadeIn('slow')}, 1000);
            	} else {
                	jQuery('#portfolio-single-result').addClass("html-ready").fadeIn('slow');
                	setTimeout(function(){jQuery('.portfolio-single-result-inner').html(resp.html).fadeIn('slow')}, 1000);
                }

				jQuery('body').css('overflow','hidden');

                setTimeout(function(){
                	jQuery('.nav-growpop a').on('click', previewActions);
					jQuery('.close-single-section').on('click', function() {
						jQuery('#portfolio-single-result').fadeOut('slow').removeClass("html-ready");
						jQuery('.portfolio-single-result-inner').html('');
						jQuery('body').css('overflow-y','auto');
					});
            	}, 1100);

	        });
	    };

	    var ajaxPostRequest = function (params,gg) {

			jQuery.post(PP_DATA.ajaxUrl, params, gg);

		}
