$(function(){
$('body').after('<p id="w-width">現在のブラウザの横幅は<span id="val"></span>px</p>');
$('#w-width').css({
					display:'inline-block',
					padding:'10px',
					color:'rgba(183,81,12,0.8)',
					position:'fixed',
					bottom:'120px',
					right:'40px',
					fontSize:'2.5rem'
					
					
					});

var w_width=$(window).width();
$('#val').text(w_width);

//リサイズの世界
$(window).resize(function(){
	var w_width=$(window).width();
	$('#val').text(w_width);
	var c_h=$('body,html').height();
	var w_h=$(window).height();
	if(c_h>w_h){
		$('#val').text(w_width + 17);
	}
	

});

});