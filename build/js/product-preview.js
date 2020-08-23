jQuery(document).ready(function($) {


	$('.product-preview-btn').on('click', function() {
			$('body').append('<div id="product-preview-wrap" class="woocommerce"></div>');
			var url = $(this).attr('href');
			jQuery.ajax({
				type: "GET",
				url: url,
				cache: false,
				data: 'html',
				success: function(data){
					var title = $(data).find('.product_title').html();
					var images = $(data).find('.images').find('a').map(function(){return $(this).attr('href')}).get();
					var newImages = [];
					for (var i = 0; i < images.length; i++) {
					    newImages.push('<div class="prod-item"><img src="' + images[i] + '" alt=""></div>');
					}
					var summary = $(data).find('.summary.entry-summary').html();
					$('#product-preview-wrap').append('<div class="product-preview-inner"><div class="preview-images"><div class="preview-images-inner">'+newImages.join("")+'</div></div><div class="preview-summary"><h1 class="product_title entry-title">'+title+'</h1>'+summary+'<a href="'+url+'" class="learn-more ing-btn">Learn More</a></div><a href="#" class="preview-close">Close</a></div>');
				},
				error: function(){ },
				complete: function(){
					$('.preview-images-inner').slick({
						fade: true,
						infinite: false,
						dots:false
					});
					$('.preview-close').on('click', function() {
						$('#product-preview-wrap').remove();
						return false;
					});
				}
			});

		return false;
	});



});