var time_delay=null;
var BrowseVer=0
$(document).ready(function(){
	$("#more .btnmore").mouseenter(function(){
		$(this).parent().find(".morebox").fadeIn(300)
	})
	$("#more").mouseleave(function(){	$(this).find(".morebox").fadeOut(300)})
	
	$(".btn_backtop").on("click",function(){
		$("html,body").animate({scrollTop:0},1000)
		
	})
	
	$.fn.scroll_({arrows:false,mouseWheelSpeed: 30,verticalGutter:15});
	setTimeout(function(){$('#Introduction .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})},100)

	/*播放视频*/		 
	$("#btn_play").one("click",function(){
		var videourl=$(this).attr("data-file")	
		var autoplay=$(this).attr("data-autoplay")	
		var playobj=$(this).attr("data-playobj")
		if ($(playobj).length==0) return false;
		
		if (videourl)
		{
			
		var w=$(playobj).outerWidth()
		var h=$(playobj).outerHeight()
			
		var writehtml='<object class id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+w+'" height="'+h+'">'
			writehtml+='<param name="movie" value="flash/Flvplayer.swf">'
			writehtml+='<param name="quality" value="high">'
			writehtml+='<param value="transparent" name="wmode">'
			writehtml+='<param name="allowFullScreen" value="true">'
			writehtml+='<param name="FlashVars" value="vcastr_file='+videourl+'&BufferTime=3&IsAutoPlay='+autoplay+'">'
			writehtml+='<embed src="flash/Flvplayer.swf" wmode="Opaque" allowfullscreen="true" flashvars="vcastr_file='+videourl+'&IsAutoPlay='+autoplay+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>'
			writehtml+='</object>'
			
			$(this).stop(true,false).animate({opacity: 0}, 500,function(){$(playobj).html(writehtml)})
		}
		
		
	})	
	
	
	
	
		if ($("#playBanner").length>0)
		{
				$("#playBanner").Xslider({
					speed: 700, 
					space: 3000,
					auto: true, //自动滚动
					affect:'scrollx',
					ctag: 'div'
				});
		}
	
		if ($("#zhiye_play").length>0)
		{
				$("#zhiye_play").Xslider({
					speed: 1200, 
					space: 3000,
					auto: true, //自动滚动
					affect:'fade',
					ctag: 'div'
				});
		}
	
		if ($("#GamePhotoPlay").length>0)
		{
				$("#GamePhotoPlay").Xslider({
					speed: 1200, 
					space: 3000,
					auto: true, //自动滚动
					affect:'fade',
					ctag: 'div'
				});
		}
		
		//登录器下载	
		$(".DownloadList li").bind('mouseenter',function(){
					var self=$(this)
					clearTimeout(time_delay)	
					time_delay=setTimeout(function(){
								if(!self.is(":animated"))
								{
									self.addClass("hover");
									self.stop(true,false).animate({"padding-left":"10"}, 200);
								}
					},100)
				
			}).bind('mouseleave',function(){
				   clearTimeout(time_delay)	
							var self=$(this)
							if (self.is(".hover"))
							{		
									self.stop(true,false).animate({"padding-left":"0"}, 200);
									self.removeClass("hover");
							}
			})
			
	 //自定义AD
	 $(".adbox").GameHover("#ffe099",2,0,1);
	$(".adbox").bind('mouseenter',function(){
				var self=$(this)
				clearTimeout(time_delay)	
				time_delay=setTimeout(function(){
							if(!self.is(":animated"))
							{
								self.addClass("hover");
								
								var self_img=self.find("img")
								var self_txt=self.find(".txt strong")
								self_txt.stop(true,false).animate({"font-size":"28px"}, 200);
								self_img.stop(true,false).animate({"opacity":0.6,"margin-left":"-10%","margin-top":"-10%","width":"130%","height":"130%" },700);
								
							}
				},100)
			
		}).bind('mouseleave',function(){
			   clearTimeout(time_delay)	
						var self=$(this)
						if (self.is(".hover"))
						{		
							var self_img=self.find("img")
							var self_txt=self.find(".txt strong")
								self_txt.stop(true,false).animate({"font-size":"31px"}, 200);
								self_img.stop(true,false).animate({"opacity":1,"margin-left":"0","margin-top":"0","width":"100%","height":"100%"},700);									
								self.removeClass("hover");
						}
		})
		
 
	 
	$("#PhotoGundong").jcarousellite_gundong({btn:1,list:".PhotoList li","visible":5,"auto":2500,"speed":300})		
	
	
	
		$(".photolist3 li,.PhotoList li").bind('mouseenter',function(){
					var self=$(this)
					time_delay=setTimeout(function(){
								if(!self.is(":animated"))
								{
									self.addClass("star_animate");
									var img=self.find("img")
									
									img.stop(true,false).animate({"opacity":0.6}, 500);
									self.stop(true,false).animate({"margin-top":"-8px"}, 500);
								}
						
					},100)
				
			}).bind('mouseleave',function(){
				    clearTimeout(time_delay)	
							var self=$(this)
							if (self.is(".star_animate"))
							{		
									self.removeClass("star_animate");
									var img=self.find("img")
									img.stop(true,false).animate({"opacity":1}, 500);
									self.stop(true,false).animate({"margin-top":"0"}, 500);
							}
			})			
			
	
	
	
	
	
	
	
	$("#Video").bind('mouseenter',function(){
				var self=$(this).find("img");
				time_delay=setTimeout(function(){
							if(!self.is(":animated"))
							{
								self.addClass("star_animate");
								self.stop(true,false).animate({"opacity":0.6}, 500);
							}
					
				},100)
			
		}).bind('mouseleave',function(){
				clearTimeout(time_delay)	
						var self=$(this).find("img")
						if (self.is(".star_animate"))
						{		
								self.removeClass("star_animate");
								self.stop(true,false).animate({"opacity":1}, 500);
						}
		})
		
			
	if ($("img.lazy").length>0)
	{
			$("img.lazy").lazyload({
				threshold : -30,
				effect : "fadeIn"
			});	
	}
	
				

})


//选项卡切换
		$.fn.Tab=function(config){
			var self=$(this);
			var select_=0;
			var classname=config.labselect.replace(".","")
			if (self.length==0) return false;
			if (self.find(config.lilab).length==0) return false;
			
			
			self.each(function(index, element) {
							
				self=$(this);
						
						if (self.find(config.labselect).length==0) 
						{self.find(config.lilab+":eq(0)").addClass(classname);}
						self.find(config.lilab).each(function(index, element) {
							if (!$(this).is(config.labselect))
							{
								self.siblings(config.Tabname+":eq("+index+")").hide();
							}
						});
						
						self.find(config.lilab).bind(config.labaction+".action",function(){
							
							var index=$(this).index();
							if(self.siblings(config.Tabname+":visible").is(":animated")){ 
							return false;
							
							}

							
							if ($(this).is(config.labselect)) return false;
							var index2=$(this).siblings(config.labselect).index()
							$(this).addClass(classname).siblings().removeClass(classname);
							
							config.animate(index,index2,config.animatename)
							return config.labaction=="click"?   false :  true;
						})
						
						config.animate=function(index,index2,active){
							
							switch (active)
							{
								case "fade":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);
								break;
								case "scroll_x":
									self.parent().css({"position":"relative","overflow":"hidden"});
									var selfs=self.siblings(config.Tabname+":visible")
									var dr="100%",dr2="100%"
									if (index2>index)
									{
										dr="100%";
										dr2="-100%"
									}
									else
									{
										dr="-100%";
										dr2="100%"
									}
									var top=selfs.position().top
									
									
									if (config.mode=="delay")		
									{
									//当前渐隐
									selfs
									.css({"position":"relative","width":"100%"})
									.stop(true,false)
									.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"static","left":"auto","opacity":1,"display":"none"}
												)}
											)
									setTimeout(function(){
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"static"})	
														
												})
									},config.animateTime)		
								
									}
									
									else
									{
										
											selfs
											.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top})
											.stop(true,false)
											.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"}
												)}
											)
									
									
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"relative"})	
														
												})
									}
								break;
								
								
								case "none":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").show();
								break;	
								
							}
							
							
						}


            });

		}



//悬停效果
	$.fn.GameHover=function(bordercolors,width,margin,jiaocuo){
		var time_delay=null;
		var self=$(this)
		if (self.length==0) return false;
		
		var writehtml="<span class='line_top'></span><span class='line_right'></span><span class='line_bom'></span><span class='line_left'></span>"
		self.each(function(index, element) {
            $(this).append(writehtml)
			var line_top=$(this).find(".line_top");
			var line_right=$(this).find(".line_right");
			var line_bom=$(this).find(".line_bom");
			var line_left=$(this).find(".line_left");
			var bordercolor=bordercolors
			if (jiaocuo==1)
			{
				jiaocuo=margin;
			}
			else
			{
				jiaocuo=0;
			}
			line_top.css({"position":"absolute","left":jiaocuo,"top":margin,"height":width+"px",width:0,"overflow":"hidden","line-height":0,"font-size":0,"background":bordercolor});
			line_right.css({"position":"absolute","right":margin,"top":jiaocuo,"width":width+"px",height:0,"overflow":"hidden","line-height":0,"font-size":0,"background":bordercolor});
			line_bom.css({"position":"absolute","right":jiaocuo,"bottom":margin,"height":width+"px",width:0,"overflow":"hidden","line-height":0,"font-size":0,"background":bordercolor});
			line_left.css({"position":"absolute","left":margin,"bottom":jiaocuo,"width":width+"px",height:0,"overflow":"hidden","line-height":0,"font-size":0,"background":bordercolor});
        });
		
	
		var line_top,line_right,line_bom,line_left,txt_right;
		self.bind('mouseenter',function(){
					var selfs=$(this);
					line_top=selfs.find(".line_top");
					line_right=selfs.find(".line_right");
					line_bom=selfs.find(".line_bom");
					line_left=selfs.find(".line_left");
					txt_right=selfs.find(".txt_right")
					
					time_delay=setTimeout(function(){
								if(!selfs.is(":animated"))
								{
									
									selfs.addClass("star_animate");
									var easing={ duration:500,easing:'easeInOutCirc' };
									line_top.stop(true,false).animate({"width":"100%"}, easing);
									line_bom.stop(true,false).animate({"width":"100%"}, easing);
									line_right.stop(true,false).animate({"height":"100%"}, easing);
									line_left.stop(true,false).animate({"height":"100%"}, easing);
									txt_right.stop(true,false).animate({"left":"250"}, 500);
								}
						
					},100)
				
			}).bind('mouseleave',function(){
				    clearTimeout(time_delay)	
							var selfs=$(this);
							if (selfs.is(".star_animate"))
							{		
									selfs.removeClass("star_animate");
								
									var easing={ duration:800,easing:'easeInOutCirc' };
									line_top.stop(true,false).animate({"width":"0%"}, easing);
									line_bom.stop(true,false).animate({"width":"0%"}, easing);
									line_right.stop(true,false).animate({"height":"0%"}, easing);
									line_left.stop(true,false).animate({"height":"0%"}, easing);
									txt_right.stop(true,false).animate({"left":"10"}, 500);
							}
			})	
	
		
		
	}
//滚动
		$.fn.jcarousellite_gundong=function(options ){
			var self=$(this);
			if (self.length==0) return false;
			var items=options.list,config;
			if (self.find(items).length<=options.visible) 
			{
				var width=self.find(options.list).parent().outerWidth()
				self.css({"margin":"0 auto","width":width})
			return false;	
			}
			else
			{
				var liobj=self.find(options.list)
				var width=liobj.outerWidth()
				var margin=parseInt(liobj.css("margin-left"))+parseInt(liobj.css("margin-right"));
				width+=margin
				self.css({"margin":"0 auto","width":width*options.visible})
			}
			self.css("overflow","visible");
			
			if (self.find(items).is("div"))
			{
				self.find(items).wrap("<li></li>");
				self.find(items).parent().wrapAll("<ul class='templist'></ul>");		
				items=".templist li"
			}
			self.find(items).parent().wrapAll('<div class="jCarouselLite"></div>').parent().wrapAll('<div class="gundong"></div>');
			
			
			if (options.btn!=0)
			{
				self.find(".gundong").append('<span class="clear"></span><a href="javascript:;"  class="move_right"><span></span></a><a href="javascript:;" class="move_left disabled" ><span></span></a>')
			}
			
			self.find(".gundong").each(function(index){
				
				config={
							btnPrev: $(this).find(".move_left:eq("+index+")"),
							btnNext: $(this).find(".move_right:eq("+index+")"),
							visible:1,
							auto: 2500 ,
							speed: 300
						}	
				if (options.btn==0)		
				{
					$.extend(config, {btnPrev:null,btnNext:null});							
				}
				$.extend(config, options);
				$(this).find(".jCarouselLite:eq("+index+")").jCarouselLite(config);	
			})
		}
		
	
//加载滚动条
$.fn.scroll_=function(config){
	var scrollobj=$("[data-scroll]")
	if (scrollobj.length==0) return false;
	scrollobj.each(function(index, element) {
			var self=$(this)
			if (self.length==0)  return false;
			
			var h=parseInt(self.attr("data-scroll-height")),
				w=parseInt(self.attr("data-scroll-width")),
				color=self.attr("data-scroll-color");
				self.css({"width":"100%"});
				self.wrap('<div class="container1" style="width:'+w+'px"></div>').wrap('<div class="div_scroll"></div>');
				self.parents('.div_scroll').css({height:h}).scroll_absolute(config)	
				self.find("img").load(function(){self.parents('.div_scroll').scroll_absolute(config);})
			
			if (typeof(color)!="undefined")
			{setTimeout(function(){self.parents(".container1").find(".scroll_drag").css({"background":color})},500);}
	});
}



//弹窗口
function show(file,width,height)
{	
	$("#window").empty().remove();
	$("body").append('<div id="window"><div id="float_window"><iframe src="'+file+'" style="width:'+width+';height:'+height+';background-color:transparent;overflow:hidden;" scrolling="no" frameborder="0" allowtransparency="true" id="popupFrame" name="popupFrame" width="100%" height="100%"></iframe><span class="closewindow"></span></div></div>')
	$("#window").css("height",$(window).height()).show()
	$("#float_window").css({"width":width,"height":height,"margin-left":"-"+parseInt(width/2)+"px","margin-top":"-"+parseInt(height/2)+"px"})
	$(".closewindow").unbind("click");
	$(".closewindow").bind("click",function(){$("#window").empty().remove();})
}

//关闭窗口
function closewindow(){$("#window").empty().remove();}					
					
	
	