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
//ʢ����ϷLOGO�ͺ���ý��LOGO
+'		<div class="SDGCOPYRIGHT-logo" style="width:220px;">'
+'			<a href="#" target="_blank" title="�ٷ���վ" ><img src="images/logo.png"></a>'
+'		</div>'


//��Ȩ������Ϣ
+'		<div class="SDGCOPYRIGHT-con">'


//ÿ����Ŀ���Լ��İ�Ȩ��
+'			<p>'
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">���Ʋ�����Ϸ �ܾ�������Ϸ ע�����ұ��� ������ƭ�ϵ� �ʶ���Ϸ���� ������Ϸ���� ������ʱ��</span>'
+'			</p>'

//��˾ͳһ�İ�Ȩ��
+'			<p>'
+'			</p>'
+'			<p class="SDGCOPYRIGHT-sdlogo">'
+'				<span class="SDGCOPYRIGHT-pr3">����վ��Ƽ�������<a href="https://www.1xlala.com" target="_blank" title="һ�ݶ������" > һ����̳</a>����������� �ܾ�����</span>'
+'			</p>'
+'		</div>'
//�Ҳ����羯��3��ͼ��
+'		<div class="SDGCOPYRIGHT-priv">'
+'			<a href="https://www.1xlala.com" class="SDGCOPYRIGHT-priv1" target="_blank"></a>'
+'			<span>'
+'			</span>'
+'		</div>'

+'	</div>'
+'</div>'

document.write(_sdgCopyrightHtml);
