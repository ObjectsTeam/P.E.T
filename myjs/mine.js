$(function(){
		  		var foot_imgs = document.getElementsByClassName('foot_nav');
		  		var foot_jiahao = document.getElementsByClassName('foot_nav_jiahao');
		  		function normal(){
		  			foot_imgs[0].children[0].src = "../images/service_normal.png";
		  			foot_imgs[1].children[0].src = "../images/circle_normal.png";
		  			foot_imgs[2].children[0].src = "../images/mall_normal.png";
		  			foot_imgs[3].children[0].src = "../images/my_normal.png";
		  		}
		  		$('.foot_nav_jiahao>img').click(function(){
		  			normal();
		  		})
		  		foot_imgs[0].onclick = function(){
		  			normal();
		  			foot_imgs[0].children[0].src = "../images/service_select.png"
		  		}
		  		foot_imgs[1].onclick = function(){
		  			normal();
		  			foot_imgs[1].children[0].src = "../images/circle_select.png"
		  		}
		  		foot_imgs[2].onclick = function(){
		  			normal();
		  			foot_imgs[2].children[0].src = "../images/mall_select.png"
		  		}
		  		foot_imgs[3].onclick = function(){
		  			normal();
		  			foot_imgs[3].children[0].src = "../images/my_select.png"
		  		}
		  	})