
$().ready(function(){
	var ntdlq="https://pan.baidu.com/s/1c4bGf5m";
	var ntpatch="www.baidu1.com";
	var shjddlq="https://pan.baidu.com/s/1eSS8uFg";
	var shjdpatch="www.baidu3.com";
	var href5="www.baidu4.com";
	var href6="www.baidu5.com";
	$(".ntdlq").click(function(){
		$(".dj1").attr("href",ntdlq);
	})
	$(".ntpatch").click(function(){
		$(".ntpatch").attr("href",ntpatch);
	})
	$(".shjddlq").click(function(){
		$(".shjddlq").attr("href",shjddlq);
	})
	$(".shjdpatch").click(function(){
		$(".shjdpatch").attr("href",shjdpatch);
	})
	$(".dj5").click(function(){
		$(".dj5").attr("href","https://"+href5);
	})
	$(".dj6").click(function(){
		$(".dj6").attr("href","https://"+href6);
	})
})