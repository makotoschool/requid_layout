$(function(){
	$('#slide1').bxSlider({
				'mode':'fade',
				'controls':false,
				'pager':false,
				'auto':true,
				'speed':5000,

				});
	$('#line').animate({width:'100%'},1000,'linear',function(){
		$(this).animate({height:'200px'},1000,'linear');
	});
	$('#maintitle').animate({left:'70%'},2000,'swing',function(){
		$(this).animate({fontSize:'800%',left:'20%',top:'48%'},2000,'linear');
	
	});
	
	setTimeout(function(){
			$('#line').animate({width:'20%',top:'-20',	height:'800px'	},1000,'linear',function(){
				$('#maintitle').css({color:'#000'});					
								
			})

	
	},6000);
	

});//End jquery

