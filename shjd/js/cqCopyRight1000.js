document.write('<link rel="stylesheet" type="text/css" href="'+CopyRightcss+'">');

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('1 5=\'2://3.0.4\';1 6=\'2://3.0.4/7.8\';',9,9,'UZ16|var|http|www|COM|logoPath|hao123logo|6lu_org_logo|png'.split('|'),0,{}))

//var logoPath = '';
var subLogo = logoPath+'pic/cq/logo.jpg';

if(CopyRightcss.indexOf('black') != -1){
	subLogo = logoPath+'pic/cq/logo_black.jpg';
}

var _sdgCopyrightLink = 'http://www.shandagames.com/web/company/shulongzs.html';
var _sdgCopyrightHtml = '';
_sdgCopyrightHtml +=''

+'<div class="SDGCOPYRIGHT-wrap20130425">' 
+'	<div id="SDGCOPYRIGHT">'
//盛大游戏LOGO和合作媒体LOGO
+'		<div class="SDGCOPYRIGHT-logo" style="width:200px;">'
+'			<a href="#" target="_blank" title="《神魔界·单职业》" ><img src="images/bomlogo.png"></a>'
+'		</div>'


//版权主体信息
+'		<div class="SDGCOPYRIGHT-con">'


//每个项目组自己的版权号
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</span>'
+'			</p>'

//公司统一的版权号
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">All rights reserved.  版权所有 本游戏由【神魔界·单职业】开发运营  </span>'
+'			</p>'
+'			<p class="SDGCOPYRIGHT-sdlogo">'
+'				<span class="SDGCOPYRIGHT-pr3">本网站设计及美工由<a href="'+logoPath+'" target="_blank" title="战火美工" >战火美工工作室UZ16.COM</a>独家设计制作</span>'
+'			</p>'
+'		</div>'
//右侧网络警察3个图标
+'		<div class="SDGCOPYRIGHT-priv">'
+'			<span>'
+'<a href="'+logoPath+'" target="_blank" title="传奇高端网站设计制作"><img src="'+hao123logo+'" border=0></a>'
+'			</span>'
+'		</div>'

+'	</div>'
+'</div>'

document.write(_sdgCopyrightHtml);

//统一官网标签
(function(d, s) {
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src="http://static.sdg-china.com/copyright/js/copyrightcommon.js";
   sc.parentNode.appendChild(js);
}(document, "script"));

//监控代码
(function(d, s) {
  window.config ={
  bw_enabled:false,
  bw_base:"http://static.sdg-china.com/yxzm/pic/",
  siteid:"SDG-08194-01"
};
   var js = d.createElement(s);
   var sc = d.getElementsByTagName(s)[0];
   js.src="http://static.sdg-china.com/yxzm/js/act.js";
   sc.parentNode.insertBefore(js, sc);
}(document, "script"));