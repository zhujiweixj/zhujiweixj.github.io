document.write('<link rel="stylesheet" type="text/css" href="'+CopyRightcss+'">');

var logoPath = '/static.sdg-china.com/copyright/';
//var logoPath = '';
var subLogo = logoPath+'pic/cq/logo.jpg';

if(CopyRightcss.indexOf('black') != -1){
	subLogo = logoPath+'pic/cq/logo_black.jpg';
}

var _sdgCopyrightLink = '/www.shandagames.com/web/company/shulongzs.html';
var _sdgCopyrightHtml = '';
_sdgCopyrightHtml +=''

+'<div class="SDGCOPYRIGHT-wrap20130425">' 
+'	<div id="SDGCOPYRIGHT">'
//盛大游戏LOGO和合作媒体LOGO
+'		<div class="SDGCOPYRIGHT-logo" style="width:220px;">'
+'			<a href="#" target="_blank" title="官方网站" ><img src="images/logo.png"></a>'
+'		</div>'


//版权主体信息
+'		<div class="SDGCOPYRIGHT-con">'


//每个项目组自己的版权号
+'			<p>'
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间</span>'
+'			</p>'

//公司统一的版权号
+'			<p>'
+'			</p>'
+'			<p class="SDGCOPYRIGHT-sdlogo">'
+'				<span class="SDGCOPYRIGHT-pr3">本网站设计及美工由<a href="https://www.1xlala.com" target="_blank" title="一休独家设计" > 一休论坛</a>独家设计制作 拒绝盗版</span>'
+'			</p>'
+'		</div>'
//右侧网络警察3个图标
+'		<div class="SDGCOPYRIGHT-priv">'
+'			<a href="https://www.1xlala.com" class="SDGCOPYRIGHT-priv1" target="_blank"></a>'
+'			<span>'
+'			</span>'
+'		</div>'

+'	</div>'
+'</div>'

document.write(_sdgCopyrightHtml);
