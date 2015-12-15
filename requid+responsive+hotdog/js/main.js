$(function(){
//ローディングメッセージを出す
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

//ホットドッグメニューを作る


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
		$('#val').text(wsize);
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
		$('#val').text(wsize);
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

});//End jquery
