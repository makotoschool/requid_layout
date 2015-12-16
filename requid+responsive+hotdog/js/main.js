$(function(){
//ローディングメッセージを出す
/*
$('body').prepend('<div id="load"><i id="spin" class="fa fa-spinner fa-pulse"></i></div>');
$('#load').css({
			width:'100%',
			height:'100vh',
			position:'absolute',
			zIndex:100,
			backgroundColor:'#fff'
});
$('#spin').css({
			fontSize:'6rem',
			position:'absolute',
			top:'48%',
			left:'48%'
			

});
*/
//ホットドッグメニューを作る
$('.nav').prepend('<p id="hotdog"><i class="fa fa-bars"></i></p>');
	$('#hotdog').css({
					margin:0,
					backgroundColor:'#3D3737',
					color:'#fff',
					height:'40px',
					textAlign:'center',
					lineHeight:'40px',
					fontWeight:'bold',
					fontSize:'2em',
					cursor:'pointer'	
	}).hide();//普段は隠しておく

//ブラウザのウィンドウサイズを取得作戦
//表示する箱をつくる
$('.container').after('<p id="valbox">現在<span id="val"></span>pxです</p>');
	$('#valbox').css({
					position:'fixed',
					right:'50px',
					bottom:'30px',
					fontSize:'2.2em'
						
	});	


	//ブラウザをリサイズした時の世界
	$(window).resize(function(){
		var wsize=$(window).width()+17;	
		//$('#val').text(wsize);
		if(wsize <= 400){
			$('#hotdog').show();
			$('.nav ul').hide();
		}else{
			$('#hotdog').hide();
			$('.nav ul').show();
		}
	
	});
//リロードした時もホットドックメニュー作戦が実行されるように	
var wsize=$(window).width()+17;	
		//$('#val').text(wsize);
		if(wsize <= 400){
			$('#hotdog').show();
			$('.nav ul').hide();
		}else{
			$('#hotdog').hide();
			$('.nav ul').show();
		}

//ホットドッグメニューをクリックした世界
$('#hotdog').click(function(){
	$('.nav ul').slideToggle(1000);
});	


//上へ戻るボタン作戦
//ロードきっかけでボタンを登場
$('body').append('<p id="gotop">上へ戻る</p>');
$('#gotop').css({
			position:'fixed',
			bottom:100,
			right:20,
			backgroundColor:'rgba(242,41,148,0.8)',
			color:'#fff',
			padding:20,
			cursor:'pointer'
			}).hide();

//スクロール値を取得作戦
	//ブラウザスクロールの世界
	$(window).scroll(function(){
		var sval=$('body,html').scrollTop();
		$('#val').text(sval);
		
		if(sval>=800){
			$('#gotop').fadeIn();
		}else{
			$('#gotop').fadeOut();
		}
	});

//#gotopをclickした世界
	$('#gotop').click(function(){
		$('body,html').animate({scrollTop:0},1000,'swing');
	
	});

	
	

});//End jquery
