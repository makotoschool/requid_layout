$(function(){
//ナビゲーションボタンclickの世界たち
/*
	$('#b1').click(function(){
		var top = $('#box1').offset().top;
		$('body,html').animate({scrollTop:top},1000,'swing');
		return false;	
	});
	$('#b2').click(function(){
		//#box2のドキュメント上部からの距離を取得
		var top = $('#box2').offset().top;
		$('body,html').animate({scrollTop:top},1000,'swing');
		return false;	
	});
	$('#b3').click(function(){
		var top = $('#box3').offset().top;
		$('body,html').animate({scrollTop:top},1000,'swing');
		return false;	
	});
	$('#b4').click(function(){
		var top = $('#box4').offset().top;
		$('body,html').animate({scrollTop:top},1000,'swing');
		return false;	
	});
	$('#b5').click(function(){
		var top = $('#box5').offset().top;
		$('body,html').animate({scrollTop:top},1000,'swing');
		return false;	
	});
*/
/*
linkmove('#b1','#box1');
linkmove('#b2','#box2');
linkmove('#b3','#box3');
linkmove('#b4','#box4');
linkmove('#b5','#box5');
*/
//関数呼び出し部分をさらに楽したい
for(i=1;i<=5;i++){
//eval()をつかう
linkmove(eval("'#b"+i+"'"),eval("'#box"+i+"'"));
}
function linkmove(id,target){
	$(id).click(function(){
			var top = $(target).offset().top;
			$('body,html').animate({scrollTop:top},1000,'swing');
			return false;	
	});
}


});