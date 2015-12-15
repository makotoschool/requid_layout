$(function(){
//ホットドッグメニューを作る
	$('.nav').prepend('<p id="hotdog">三</p>');
	$('#hotdog').css({
					margin:0,
					backgroundColor:'#3D3737',
					color:'#fff',
					height:'40px',
					textAlign:'center',
					lineHeight:'40px',
					fontWeight:'bold',
					fontSize:'2em'	
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
var wsize=$(window).width();	




});//End jquery
