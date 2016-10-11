
function showPreview(path){
	var factor = 0.75;
	var wh = $(window).prop("innerHeight");
	var ww = $(window).prop("innerWidth");
		
	var highlight = $("#highlight");
	var inner = $("#highlight").find(".inner");
	inner.children().remove();
	
	$("<img src=\"" + path + "\">").load(function(){
		var iw = this.width;
		var ih = this.height;
		
		var scale_x = 1.0;
		var scale_y = 1.0;
		
		if(iw > ww * factor)
			scale_x = ww * factor / iw;
		
		if(ih > wh * factor)
			scale_y = wh * factor / ih ;
		
		var scale = Math.min(scale_x,scale_y);
		
		var w = iw * scale;
		var h = ih * scale;
		
		
		inner.css({"top": (wh - h)*0.5-20, "left": (ww - w)*0.5-20,"width" : w+40, "height" : h+40});
		
		$(this).css({"width" : w, "height" : h});

		$(this).appendTo(inner);
		
		$(this).click(function(e){
			window.open(path, '_blank');
			e.stopPropagation;
			return false;
		});
		
		highlight.show();
	});
	
	
}

function updatePreview(){
	var img = $("#highlight").find("img");
	if(img != null && img.length > 0){
		var imgData = img[0];
		
	}
}