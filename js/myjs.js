
	var va1="1";
	var va2="2";
	var va3="3";
	var va4="4";
	var va5="5";
	var va6="6";
$(function(){
	alert(va1)
	alert($("#urls>div:nth-of-type(1) a").attr("href"))
	$("#urls>div:nth-of-type(1) a").attr("href",va1);
	alert($("#urls>div:nth-of-type(1) a").attr("href"))
	$("#urls>div:nth-of-type(2) a").attr("href",va2);
	$("#urls>div:nth-of-type(3) a").attr("href",va3);
	$("#urls>div:nth-of-type(4) a").attr("href",va4);
	$("#urls>div:nth-of-type(5) a").attr("href",va5);
	$("#urls>div:nth-of-type(6) a").attr("href",va6);
})
