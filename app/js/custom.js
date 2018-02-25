$(window).on('load',function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
		$("#drag").sortable({
	    	handle: ".widg_title",
	    	placeholder: "ui-state-highlight"
	    });
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	//
	$('select, input[type="checkbox"], input[type="radio"]').styler();

    //cont_tabs
    $('.widg_pane:first-child').addClass('active');
    $('.widg_tabs li:first-child').addClass('active');
    $('.widg_tabs li').click(function() {      
        var idx = $(this).index();  
        $(this).parents('.widg_item').find('.widg_pane').not($('.widg_pane').eq(idx)).removeClass('active');
        $(this).parents('.widg_item').find('.widg_pane').eq(idx).addClass('active');  
        $(this).parents('.widg_item').find('.widg_tabs li').not($(this)).removeClass('active');
        $(this).addClass('active');
    });

    //




    //widg_close
    $('.widg_close').on('click', function() {     
		$(this).parents('.widg_col').hide(300);
        return false;
    });

    //
    $(".cover-inp .t-inp").each(function(){
    	if ($(this).val() == "")        {
        	$(this).parent('.cover-inp').removeClass("filled");
    	}
    	else {
        	$(this).parent('.cover-inp').addClass("filled");
    	}
	});
	$(".cover-inp .t-inp").focus(function(){
		$(this).parent('.cover-inp').addClass("filled");
	});
	$(".cover-inp .t-inp").blur(function(){
    	if ($(this).val() == "")        {
        	$(this).parent('.cover-inp').removeClass("filled");
    	}
	});

	//
	$(document).on('click', function(event) {
	    if ($(event.target).closest(".header_user").length === 0) {
	        $('.header_user_opener').removeClass('open');
	        $('.header_user_drop').slideUp(300);
	        $('.overlay').removeClass('open_user');
	    }
	    if ($(event.target).closest(".header_info").length === 0) {
	        $('.header_info_opener').removeClass('open');
	        $('.header_info_drop').slideUp(300);
	        $('.overlay').removeClass('open_info');
	    }
	    if ($(event.target).closest(".header_search").length === 0) {
	        $('.header_search_opener').removeClass('open');
	        $('.header_search').removeClass('open');
	        $('.overlay').removeClass('open_search');
	        $('.search_res').hide();
	    }
	    if ($(event.target).closest(".header_hotif").length === 0) {
	        $('.header_hotif_opener').removeClass('open');
	        $('.header_hotif_drop').slideUp(300);
	        $('.overlay').removeClass('open_hotif');
	    }  
	    if ($(event.target).closest(".help_win_cov").length === 0) {
	        $('.help-win').hide(300);
	        $('.overlay').removeClass('open_help');
	    }
	});
	$('.header_user_opener').on('click', function() {     		
		if ($(this).hasClass('open')) {
			$('.overlay').removeClass('open_user');
		}
		else {
			$('.overlay').addClass('open_user');
		}
		$(this).toggleClass('open');
		$(this).next('.header_user_drop').stop().slideToggle(300);
    });
    

	//
	$('.header_info_opener').on('click', function() {     
		if ($(this).hasClass('open')) {
			$('.overlay').removeClass('open_info');
		}
		else {
			$('.overlay').addClass('open_info');
		}
		$(this).toggleClass('open');
		$(this).next('.header_info_drop').stop().slideToggle(300);
		$('.mobile-button').removeClass('open');
		$('.mobile-button-plus').removeClass('open');
		$('.sidebar').removeClass('open');
		$('.otpr-nav').removeClass('open');
		$('body').removeClass('hid');
    });

	$('.header_hotif_opener').on('click', function() {     
		if ($(this).hasClass('open')) {
			$('.overlay').removeClass('open_hotif');
		}
		else {
			$('.overlay').addClass('open_hotif');
		}
		$(this).toggleClass('open');
		$(this).next('.header_hotif_drop').stop().slideToggle(300);
		$('.mobile-button').removeClass('open');
		$('.mobile-button-plus').removeClass('open');
		$('.sidebar').removeClass('open');
		$('.otpr-nav').removeClass('open');
		$('body').removeClass('hid');
    });

	//.header_search_opener
	$('.header_search_opener').on('click', function() {     
		if ($(this).hasClass('open')) {
			$('.overlay').removeClass('open_search');
		}
		else {
			$('.overlay').addClass('open_search');
		}
		$(this).addClass('open');
		$(this).parent('.header_search').addClass('open');
		$('.search-inp').focus();
		$('.mobile-button').removeClass('open');
		$('.mobile-button-plus').removeClass('open');
		$('.sidebar').removeClass('open');
		$('.otpr-nav').removeClass('open');   
		$('body').removeClass('hid');
    });

	//mobile-button
	$('.mobile-button').on('click', function() {     
		$(this).toggleClass('open');
		$('.sidebar').toggleClass('open');
		$('body').toggleClass('hid');
		$('.mobile-button-plus').removeClass('open');
		$('.otpr-nav').removeClass('open');
	});
	$('.mobile-button-plus').on('click', function() {     
		$('.overlay').toggleClass('open_sideplus');
		$(this).toggleClass('open');
		$('.otpr-nav').toggleClass('open');
		$('.mobile-button').removeClass('open');
		$('.sidebar').removeClass('open');
		$('body').removeClass('hid');
	});

	$('.btn_help').on('click', function() {     
		$('.help-win').show(300);
		$('.overlay').addClass('open_help');
		return false;
    });
    $('.help_close').on('click', function() {     
		$('.help-win').hide(300);
		$('.overlay').removeClass('open_help');  
		return false;
    });

    $('.search-inp').on('keyup blur', function() {
	    if($(".search-inp").prop('', this.value.length === 0)){
	        $('.search_res').show();
	    }
	    else {
	    	$('.search_res').hide();
	    }
	});
	
	$('.aside_toggle').on('click', function() {     
		$(this).toggleClass('sm-side');
		$('.sidebar').toggleClass('sm-side');
		$('.content').toggleClass('sm-side');
		$('.otpr-nav').toggleClass('sm-side');
	});

	//.widg_opener
	$('.widg_opener').on('click', function() {     
		$(this).parents('.widg_item').toggleClass('hide');
		return false;
    });

    //
	$.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
	$("#datepicker").datepicker({ dateFormat: 'd MM yy' });

	//
	svg4everybody({});

	$('.quest_accord_title').on('click', function(){
		$(this).parent().toggleClass('active');
	});

});

//

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid > 767) {		
		$(".scroll").mCustomScrollbar({
	    	mouseWheel:{ preventDefault: true },
			axis:"y",
			advanced:{autoExpandHorizontalScroll:true},
			scrollInertia: 0,
			callbacks:{
		        onScroll:function(){
		            $(this).removeClass('end');
		        },
		        onTotalScroll:function(){
		            $(this).addClass('end');
		        }
		    }
	    });
	}
	else {
		$('.scroll').mCustomScrollbar("destroy");
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);

