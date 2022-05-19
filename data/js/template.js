jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	loader();
	scroll_top();
});

//#############################
// ---------- LOADER ----------
//#############################

function loader() {
   "use strict";
   setTimeout(function () {
     $('#loader-wrapper').fadeOut();
   }, 1500);
};

//####################################
// ---------- SCROLLING TOP ----------
//####################################

function scroll_top(){
    "use strict";
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

};


//#############################
// ---------- ANIMATIONS ----------
//#############################

AOS.init({
  duration: 1300,
})

