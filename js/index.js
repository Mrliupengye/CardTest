// JavaScript Document

function clickbtn1(){
	window.alert("中奖纪录");
}

function clickbtn2(){
	window.alert("活动规则");
}

window.onload = function(){
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var img = document.getElementById("img1");
	var json = {a:12,b:13};
	btn1.onmouseover = function(){
//		window.alert("in the 中奖纪录");
//        for(var i in json){
//			window.alert(i);
//            window.alert(json[i]);
//	    }

        btn1.style.opacity=1;
//		btn1.style.width="150px";
	}
	btn1.onmouseout = function(){
		btn1.style.opacity=0.5;
//		btn1.style.width="auto";
	}
	
	btn2.onmouseover = function(){
//		window.alert("in the 活动规则");
        btn2.style.opacity=1;
//		btn2.style.width="150px";
	}
	btn2.onmouseout = function(){
		btn2.style.opacity=0.5;
//		btn2.style.width="auto";
	}
	
	$(function(){
	    $(".select1 #car1").mouseenter(function(){
			$(this).find("img").animate({top:"-10%", opacity:"0"}, 500, function(){
				$(this).css({top:"50%"});
				$(this).animate({top:"25%", opacity:"1"},500)
			})
		})
	})
}
