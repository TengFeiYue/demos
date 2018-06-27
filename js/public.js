// JavaScript Document
var obj={};
obj.init =function(){
	common.bgFunc($(".select-result-data tbody tr:odd"),'bg');//表格奇数行添加背景色
	//common.checkFunc($(".checkInput"),$(".checkLabel"),"result");//复选框
//    obj.openOrClose($(".place-name-box .open"),$(".place-name-box ul"),'收起','46px','hover');//地区展开收起、选择
	
	obj.radioCheck();//搜索单选选中状态及内容
	obj.businessMore();//搜索结果页更多按钮
	obj.dataShow("pro-data-open","right",["展开","收起"],'high-con');//性能数据显示隐藏
    obj.toggleFunc($(".offer-list-box .sort-arrow-icon"));//价格库存排序
	obj.toggleFunc($(".mainp-sort-priceic"));//价格库存排序
	common.current($(".price-sort a"),'hover');
	
	obj.enterpriseTab($(".apply-area-box .meterial"),$(".meterial-box .apply-area"),$(".enterprise-con"));//企业库应用领域与材料分类切换
	obj.enterpriseOver(); //企业库应用领域/材料分类列表经过交互
	obj.enterpriseAdress(); //企业库地区选择
	obj.openArrow($(".mpl-arrow-open"),$(".checked-slidebox"));//颜填料单选整个内容收起展开
	obj.supplierBtn($(".mpl-supplier-btn"),"hide-box",$(".active-result-list"),$(".enterprise-sort .onelevel"));//颜填料拆分合并供应商
	
	obj.RowBtn($(".mrl-tabbtn a"),$(".mrl-relevantbtn .relebox"),"hover",$(".active-result-list"),$(".enterprise-sort .onelevel"));//原料按牌号/供应商
	obj.dialog($(".material-upbtn button"),$(".logn-close"),$(".login-dialog-bg"));//材料库上传登录弹出窗
	};
	
$(document).ready(obj.init);

//弹出窗
obj.dialog = function(objBtn,closeBtn,bg){
	//objBtn元素按钮,closeBtn关闭按钮,bg弹出的半透明背景
	objBtn.click(function(){
		bg.show();
	});
	closeBtn.click(function(){
		bg.hide();
	});
};

//原料按牌号/供应商
obj.RowBtn = function(btn,relevantbtn,hover,Cont,listTab){
	btn.click(function(){
		var index = $(this).index();
		$(this).addClass(hover).siblings().removeClass(hover);
		Cont.hide().eq(index).show();
		relevantbtn.hide().eq(index).show();
		listTab.eq(0).trigger("click");	
	});
	
};


//拆分合并供应商
obj.supplierBtn = function(btn,hover,Cont,listTab){
	btn.click(function(){
		var index = $(this).index();
		$(this).addClass(hover).siblings().removeClass(hover);
		Cont.hide().eq(index).show();
		listTab.eq(0).trigger("click");	
	});
	
};

//点击展开收起
obj.openArrow = function(arrow,objCont){
	arrow.click(function(){
		if($(this).hasClass("hover")){
				objCont.stop(false, true).slideDown();
				$(this).removeClass("hover");
			}else{
				objCont.stop(false, true).slideUp();
				$(this).addClass("hover");
		};
			
	});
};

//交替式tab交换
obj.enterpriseTab = function(Btn1,Btn2,Cont){

	Btn1.click(function(){
		$(this).parent().hide().siblings().show();
		Cont.hide().eq(1).show();	
		
	});
	
	Btn2.click(function(){
		$(this).parent().hide().siblings().show();
		Cont.hide().eq(0).show();	
		
	});
	

};

//企业库应用领域/材料分类列表经过交互
obj.enterpriseOver = function(){
//	$(".apply-list-area ul li").hover(function(){
//		$(this).find('.absApplyContent').show();
//	},function(){
//		$(this).find('.absApplyContent').hide();
//	})

	var oLi=$(".apply-list-area ul li");
	var timer=null;
	$(".showMoreItem").on('click',function(){
		$(this).siblings('.absApplyContent').show('fast')
	});
	oLi.on('mouseleave',function(){
		var _this=$(this);
		_this.find('.absApplyContent').hide('slow');
	})
};

//搜索结果更多选择
obj.businessMore = function(){
	var dataStr=0;
	$(".high-con-two-box .list-two-con li").click(function(){
			
			if($(this).hasClass("hover")){
					$(this).removeClass("hover");
					if($(this).attr("data-name") == dataStr){
						$(this).removeAttr("data-name");
						}
				}else{
					$(this).addClass("hover");
					if($(this).attr("data-name") == undefined){
						$(this).attr("data-name",dataStr);
						}else{
							$(this).attr("data-name",dataStr-1);
							}
					
				}
			if(!$(this).parents(".right").hasClass("choice-box")){
					var $title = $(this).parents(".high-con").find(".left p").attr("data-title");
					checked($(this),$(this).parent(),$title);
				}
			
		});
	//多选按钮
	$(".high-con-two-box .select-btn").click(function(){
		  dataStr++;
		  var $rightBox = $(this).prev(".right");
		  $(this).hide();
		  $rightBox.addClass("choice-box").parents(".high-con").addClass("bl-hover");
	})
		
	//确定按钮
	$(".high-con-two-box .sure").click(function(){
			
			show($(this));
			var $title = $(this).parents(".high-con").find(".left p").attr("data-title");
			var $ul = $(this).parent().siblings(".list-two-con");
			checked($(this),$ul,$title);
			
	});
	
	//取消按钮
	$(".high-con-two-box .cancel").click(function(){
			show($(this));
			var $li = $(this).parents(".right").find("ul li");
			$li.each(function(){
                if( $(this).attr("data-name")==dataStr){
					$(this).removeClass("hover").removeAttr("data-name");
					}
				for(var i=0;i<dataStr;i++){
					if($(this).attr("data-name")==i){
						$(this).addClass("hover");
						$(this).attr("data-name",dataStr);
					}
				}
            });
	});
	//显示选择全部内容	
	function show($this){
		$this.parents(".high-con").removeClass("bl-hover").find(".right").removeClass("choice-box").next(".select-btn").show();
		}
	function checked($this,$Ul,$title){
		var $str = "";
		var $span ="";
		var $curSpan="";
		$Ul.find("li").each(function(){
			
			if($(this).hasClass("hover")){
				$curSpan=$(this).html();
				$span = $span+$str+$curSpan;
				$str = '、';
				$(this).attr("data-name",dataStr);
				}else{
					$(this).removeAttr("data-name");
					}
			
			
			});	
		
		obj.currentCheckedCon($title,$span);
	};
	
	//单选更多按钮	
	$(".high-con-box .select-btn").click(function(){
		var $rightBox = $(this).siblings(".right");
		var $contHeight = $rightBox.find(".list-two-con").height();
		var starH = '30px';
		if(parseInt($contHeight)<40){
			$contHeight=starH ;
		};
		$(this).addClass("hover");
		if($(this).hasClass("click")){
				$(this).removeClass("click").find("span").html("更多").attr("class","open-icon");
				$rightBox.css({'height':starH}).parents(".high-con").removeClass("bl-hover");
			
			}else{
				$(this).addClass("click").find("span").html("收起").attr("class","close-icon");
				$rightBox.css({'height':$contHeight}).parents(".high-con").addClass("bl-hover");
				
			}
		});
		
	;
		
	//品名下更多
	
	$(".product-name .select-btn")	.click(function(){
		if($(this).hasClass("hover")){
				$(this).removeClass("hover").find("span").html("收起").attr('class','close-icon');
				$(this).siblings(".hd").slideDown().parents(".high-con-one").addClass("bl-hover");
			}else{
				$(this).addClass("hover").find("span").html("更多").attr('class','open-icon');
				$(this).siblings(".hd").slideUp().parents(".high-con-one").removeClass("bl-hover");
			}
	})
	
	
	//品名字母点击状态
	$(".list-tab li").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var $conPar = $(this).parents(".high-con-one");
		if($conPar.hasClass("bl-hover")){
			}else{
				$conPar.addClass("bl-hover").find(".hd").slideDown().siblings(".select-btn").removeClass("hover").find("span").html("收起");
				}
		});
	
	
}
	
//搜索单选选中内容
obj.radioCheck = function(){
	
	common.current($(".radio-con li"),'hover');//高级搜索单选添加当前状态
	$(".radio-con li").click(function(){
		var $spanCon = $(this).html();
		var $thisTitle = $(this).parents(".high-con").find(".left p").attr("data-title");
		obj.currentCheckedCon($thisTitle,$spanCon);
		});
	}



//搜索头部选中信息显示
obj.currentCheckedCon = function($title,$span){
	
		var $html = '<li>'+$title+'：<span class="font-organe">'+$span+'</span>'+'<a data-title='+$title+' class="close"></a>';
		var $li = $(".high-checked-cont ul li");
		var $staue;
		var index;
		if($span !=""){
			$(".pro-data-title-box").find(".hide-box").show();
			if($li.length == 0){
				$(".high-checked-cont ul").append($html);
				}else{
					$(".high-checked-cont ul li").each(function() {
						index = $(this).index();
						var $thisTil = $(this).find("a").attr("data-title");
						if( $thisTil.indexOf($title)==0){
								$staue = true;
								return false;
							}else{
								$staue = false;
								}
						
					  });
					if($staue){
							$(".high-checked-cont ul li").eq(index).find("span").html($span);
						}else{
							$(".high-checked-cont ul").append($html);
							}
				}
			}else{
				$li.each(function(){
					var $curTi = $(this).find("a").attr("data-title");
					if($curTi == $title){
						$(this).find("a").trigger("click");
						}
					});
				
				}
	   //多选面包屑关闭按钮
		$(".high-checked-cont .close").click(function(){
				var $til = $(this).attr("data-title");
				if(parseInt($(this).parents("ul").find("li").length) == 1){
					$(this).parents(".pro-data-title-box").find(".curadress .arrow").hide();
					}
				$(this).parent("li").remove();
				$(".high-con").each(function() {
                    var $title = $(this).find(".left p").attr("data-title");
					if($title == $til){
						$(this).find(".choice-con").find("li").removeClass("hover").removeAttr("data-name");
						return false;
						}
					
                });
				
		  });
	};
		

//显示隐藏
obj.dataShow = function(btn,contbox,word,parsent){
	$("."+btn).click(function(){
		if($(this).hasClass("hover")){
				$(this).removeClass("hover").find("span").attr("class","open-icon").html(word[0]);
				$(this).siblings("."+contbox).stop(false,true).slideUp().parents("."+parsent).removeClass("bl-hover");
			}else{
				$(this).addClass("hover").find("span").attr("class","close-icon").html(word[1]);
				$(this).siblings("."+contbox).stop(false,true).slideDown().parents("."+parsent).addClass("bl-hover");
			}
		});
		
	}

//企业库地区展开收起
obj.enterpriseAdress = function(){
	var datastr = 0;
	var oneLevel = $(".enterprise-sort").find(".onelevel");
	var adressArea = $(".enterprise-sort").find(".adress-area-box");
	var allArea = adressArea.find(".all-area");
	var areaCon = adressArea.find(".adress-area-list");
	var areaList = areaCon.find("li");
	var Html='地区';
	
	oneLevel.click(function(){
		oneLevel.removeClass("hover");
		$(this).addClass("hover");
		var next = $(this).siblings(".adress-area-box");
		if(next.length>0){
			$(this).addClass("borderbn");
			next.stop(false,true).slideDown();
			}else{
				
				areaClose();
				}
	});

	//所有地区
	allArea.click(function(){
		$(this).addClass("hover").siblings(".adress-area-list").find("li").removeClass("hover");
	});
	
	//选择单个地区
	areaList.click(function(){
		allArea.removeClass("hover");
		if($(this).hasClass("hover")){
			$(this).removeClass("hover");
		}else{
			$(this).addClass("hover");
		};
	});
	
	//确定按钮
	$(".area-btn .surebtn").click(function(){
		
		if(allArea.hasClass("hover")){
			//选择所有地区情况
				Html = allArea.text();
				allArea.attr("data-degree",datastr);
		  }else{
			 //选择单个地区
				allArea.removeAttr("data-degree");
				var n=0;
				
				if(areaCon.find(".hover").length>0){
					//有单个选择的情况
					areaList.each(function(){
						if($(this).hasClass("hover")){
							if(n == 0){
								Html = $(this).text()+'...';
								n++;
								};
							 $(this).attr("data-degree",datastr);
						}else{
							$(this).removeAttr("data-degree");
						}
					});
				}else{
					//所有地区和单个地区均为选择的情况
					Html='地区';
				};
				
				
		  };
	
		$(this).parents(".adress-area").find(".onelevel").html(Html);
		areaClose();
	});
	
	//取消按钮
	$(".area-btn .cancelbtn").click(function(){
		if(allArea.hasClass("hover")){
				if(allArea.attr("data-degree") != 0){
					allArea.removeClass("hover");
				};
			
		}else{
				areaList.each(function(){
					if($(this).hasClass("hover") &&$(this).attr("data-degree") != 0){
						
							$(this).removeClass("hover");
							
						};
				});
				
		}
		areaClose();
	})
	
	//离开收起
	$(".adress-area").mouseleave(function(){
		//areaClose();
		$(".area-btn .cancelbtn").trigger("click");
		
	});
	
	//地区关闭函数
	function areaClose(){
		adressArea.hide();
		oneLevel.removeClass("borderbn");
	};
		

};

//地区展开收起、选择
obj.openOrClose = function($btn,$conBox,$word,minHeight,hover,fn){
	//$btn触发按钮,$conBox展开父级,$word触发按钮文本内容,hover触发按钮状态
	var $curWord = $btn.find("span").html();
	var num = Math.ceil($conBox.find("li").length/9);
	maxHeight = $conBox.find("li").height()*num+16*num;
	$btn.click(function(){
		if($(this).hasClass("hover")){
				$conBox.stop(false,true).animate({'height':minHeight});
				$(this).removeClass("hover").find("span").html($curWord).attr('class','open-icon');
			}else{
				$conBox.stop(false,true).animate({'height':maxHeight});
				$(this).addClass("hover").find("span").html($word).attr('class','close-icon');
			}
		});
	$conBox.find("li").click(function(){
		var index = $(this).index();
		if($(this).hasClass("hover")){
				$(this).removeClass("hover");
		}else{
				if(index == 0){
					$(this).addClass(hover).siblings("li").removeClass(hover);
				}else{
						$(this).addClass(hover).siblings("li:first").removeClass(hover);
				};
		
		};
		fn&&fn();
	});
};

//模拟toggle事件
obj.toggleFunc = function(obj){
	obj.click(function(){
		if($(this).hasClass("hover")){
				//第二次点击
				$(this).removeClass("hover");
			}else{
				//第一次点击
				$(this).addClass("hover");
				}
		
		});
	};


		$(function() { 
		  $('img').each(function() {
			  $('img').error(function(){
		            $(this).attr('src', "http://106.14.92.11:8099/images/default.jpg");
		         });
		   });
		});

























