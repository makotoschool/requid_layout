//ブラウザロードきっかけワールド
$(function(){
	$('#maintitle').text('井村真琴の実験場でーす').css({color:'#fff',
														fontSize:'3em',
														height:'4em',
														lineHeight:'4em',
														fontFamily:'serif',
														backgroundColor:'#0AB285',
														textAlign:'center'
														
														});
	var title = $('#maintitle').text();
	$('#box1').html('<h2><small>copyed →</small>'+ title + '</h2>').css({marginBottom:'10px'});	
	$('#box2').prepend('<h2>これはprependで足しました</h2>').append('<h2>これはappendで足しました</h2>');
	$('#box1').before('<div class="box" style="margin-bottom:10px"><h2>これの箱はbefore()で足しました</h2></div>').after('<div class="box"><h2>この箱はafter()で足しました</h2></div>');

	var w=$('#box3').css('width');
	var h=$('#box3').css('height');
	var bgcolor=$('#box3').css('background-color');
	$('#box3').html('<p id="vbox">この箱の幅は'+w+'<br>この箱の高さは'+h+'<br>この箱の背景色は'+bgcolor+'です</p>');
	$('#vbox').css({fontSize:'2em'});
	
	//hoverきっかけの世界
	$('#box3').hover(function(){
		//マウスオーバーした時
		$(this).css({backgroundColor:'red'});			
	
	
	},function(){
		//マウスが外れた時
		$(this).css({backgroundColor:''});
	
	});//end hover
	
$('#box4content').hide();
	//btn4をクリックした世界
	$('#btn4').click(function(){
		$('#box4content').fadeIn(2000,function(){
			$('#box4content').css({color:'red'});				
		
		});
	
	});	
	$('#btn4_2').click(function(){
		$('#box4content').fadeOut(1000,function(){
			$('#box4content').css({color:''});
		
		});
	
	});	
	
	$('#btn5_2').click(function(){
		$('#box5mini').animate({left:'+=100'},1000,'swing');

	});
	$('#btn5').click(function(){
		$('#box5mini').animate({left:'-=100'},1000,'swing');

	});
	

});//end jQuery

