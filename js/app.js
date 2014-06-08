$(document).ready(function(){

	$(window).scroll(function() {
		if($(window).scrollTop()>700){		
			// $("#header").show();
			$("#header").css({"position":"fixed"});
			$("#header").css({"top":"0px"});
		}else{
			$("#header").css({"position":"absolute"});
			$("#header").css({"top":"700px"});	
		}		
	});

	$.fn.scrollTo = function( target, options, callback ){
	  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
	  var settings = $.extend({
	    scrollTarget  : target,
	    offsetTop     : 50,
	    duration      : 500,
	    easing        : 'swing'
	  }, options);
	  return this.each(function(){
	    var scrollPane = $(this);
	    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
	    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
	    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
	      if (typeof callback == 'function') { callback.call(this); }
	    });
	  });
	}

	$("#home").click(function(){
		$('body').scrollTo(0);
	});

	$("#research").click(function(){
		$('body').scrollTo(800);
	});

	$("#branding").click(function(){
		$('body').scrollTo(1600);
	});

	$("#tactical").click(function(){
		$('body').scrollTo(2400);
	});

});