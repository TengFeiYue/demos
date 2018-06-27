/**
 * Created by 15066 on 2016/12/20.
 */
var manage={};
manage.init=function(){
    //企业信息管理
        //切换
    shine.detailTab($('.manageEsInfoList ul li'),$(".manageEsInfoCon"),'active');
        //企业信息管理上传头像
    manage.manageShow();
        //企业信息管理企业联系人
    manage.esCatPerson();
        //企业信息管理删除确认
    // manage.deleteData();

    //我的收藏
        //我的收藏材料收藏批量删除
   /* manage.batchDe($('.sBatchDel'),$(".flagLabel"));
    manage.batchDe($('.sBatchDel2'),$(".flagLabel2"));
    manage.batchDe($('.sBatchDel3'),$(".flagLabel3"));*/
        //我的收藏添加备注
    manage.addRemark();
        //我的收藏排序
    manage.clnSort();
        //我的收藏制品收藏鼠标经过table;
    manage.clnTable($(".stuffCollection tbody tr"),'active');
    manage.clnTable($(".glassCollectionTable tbody tr"),'active');

    //我的物性表通用多个切换
    manage.comMyTab($(".EsClnFilterData ul li"),'.accordWith','.accordWithConTab','active');
    manage.comMyTab($(".EsClnFilter ul li"),'.accordWith','.accordWithConTab','active');



    //我的物性库  物性对比
        //限制字符长度超出显示省略号
    shine.ellipsis($('.myDataDetail p'),29);
        //我的物性对比鼠标经过table;
    manage.clnTable($(".myDataContrast tbody tr"),'active');
        //我上传的物性筛选；
    shine.toggleFn($(".myUpDataFilter ul li"),'active');

    //申请人管理
    manage.clnTable($(".commonMgTb tbody tr"),'active');


    //新建应用案例联动菜单
    manage.buildCaseMenu();
        //新建应用案例点击展开收起;
    manage.upDown();


    //相册管理页面
        //相册管理  上传照片弹出层
    manage.uploadPic();
        //相册管理  创建企业相册弹出层
    manage.createAlbum();
        //删除相册确认框
   
   
    manage.deleteAlbum($(".albumDelete"),$(".confirmDelete"),'.commonAlbumParents',function(){
    	var id = $("#deleteId").val();
    	deleteInfo(id);
//    	$.ajax({
//			type : "POST",
//			url : "deleteAlbumInfo.shtml",
//			data : {
//				id : id
//			},
//			dataType : "JSON",
//			success : function(data) {
//				alert(data.msg);
//				window.location.reload();
//			}
//		});
    });

    //主营产品管理
        //主营产品管理  发布材料添加条件
    manage.addCondition();
        //填写规格级别展开收起
    shine.openClose($(".mgArgTitle a"),$(".mgArgCon"));

        //主营产品管理  新增标签
    manage.addLabelBuild();

        //新增交货地
    manage.addPlace();

        //主营产品管理材料分类弹出层联动菜单
        //manage.sectionClass();
    shine.detailTab($('.mgIndexDflList ul li'),$(".mgIndexDflCon"),'active');
        //主营产品管理材料分类弹出层
    manage.sectionClassMask();



};
$(document).ready(manage.init);
//企业信息管理经过显示
manage.manageShow=function(){
    var oHead=$('.EsUploadHead');
    var oLoad=$('.EsUpload');
    oHead.hover(function(){
        oLoad.show();
    },function(){
        oLoad.hide();
    })
};
//企业信息管理企业联系人
manage.esCatPerson=function(){
    var oTr=$('.EsCatPersonTable tbody tr');
    oTr.hover(function(){
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active');
    })
};
//确认删除模板
manage.deleteStr=function(){
    var str='<div class="dialog-window login-window loginPublishCase">' +
        '<div class="dialog-header">' +
        '<h3>确认删除</h3>' +
        '<a class="dialog-close-ic logn-close deleteClose"></a>' +
        '</div>' +
        '<div class="hd loginCon">' +
        '<p class="pleaseP">您确认要删除吗？删除之后将不可恢复！</p>' +
        '<div class="perfectButton perfectButtonInfo">' +
        '<button class="perfectButtonSub DeleteBtn">确认</button><button class="perfectButtonCancel cancelBtn">取消</button>' +
        '</div>' +
        '</div>' +
        '</div>';
    return str;
};
//企业信息管理删除确认
manage.deleteData=function(fn){
    var eBtn=$('.commonDeteleBtn');
    var oParent=$('.confirmDelete');


    eBtn.on('click',function(){
        var _this=$(this);
        var str=manage.deleteStr();
        oParent.html(str);
        oParent.show();

        var oConfirmBtn=$('.DeleteBtn');
        var oCancelBtn=$('.cancelBtn');
        var oClose=$('.deleteClose');

        oConfirmBtn.on('click',function(){
            fn&&fn(_this);
            _this.parents('tr').remove();
            oParent.html('');
            oParent.hide();
        });

        oCancelBtn.on('click',function(){
            oParent.html('');
            oParent.hide();
        });
        oClose.on('click',function(){
            oParent.html('');
            oParent.hide();
        })
    });

};
//我的收藏材料收藏批量删除
manage.batchDe=function(obj1,obj2,fn){
    var oParent=$('.confirmDelete');
    obj1.on('click',function(){
        var oCheckInput=obj2.filter(".checked");
        var len=obj2.filter(".checked").length;
        if(len){
            var str=manage.deleteStr();
            oParent.html(str);
            oParent.show();
            var oConfirmBtn=$('.DeleteBtn');
            var oCancelBtn=$('.cancelBtn');
            var oClose=$('.deleteClose');

            oConfirmBtn.on('click',function(){
                fn&&fn();
                oCheckInput.each(function(){
                    $(this).parents('tr').remove();
                });
                oParent.html('');
                oParent.hide();
            });
            oCancelBtn.on('click',function(){
                oParent.html('');
                oParent.hide();
            });
            oClose.on('click',function(){
                oParent.html('');
                oParent.hide();
            })

        }else{
            return false;
        }

    })

};
//我的收藏添加备注
manage.addRemark=function(){
    var sBtn=$(".glassCase a");
    var oConfirm=$(".glassSub");
    sBtn.on('click',function(){
        $(this).parent().hide();
        $(this).parent().siblings('.glassRemarksCon').show();
        return false;
    });
    oConfirm.on('click',function(){

        var oDy=$(this).parents('tr').find('.dynamicText');
        var str=$(this).parents('tr').find('.glassText').val();
        str= $.trim(str);
        if(str.length){
            oDy.html('备注:'+ str +'');
        }else{
            return false;
        }
        $(this).parents('tr').find('.glassText').val('');
        $(this).parent().hide();
        $(this).parent().siblings('.glassCase').show();
    });
    $(document).on('click',function(){
        $('.glassRemarksCon ').hide();
        $(".glassCase ").show();
    });
    $(".glassRemarksCon").on('click',function(){
        return false;
    })
};
//我的收藏排序
manage.clnSort=function(){
    var aSpan=$('.glassSort span');
    aSpan.on('click',function(){
        var oParent=$(this).parents('tr');
        //alert(oParent.index());
        $(this).parents('tr').siblings('tr:first').before(oParent);
    })
};

//我的收藏制品收藏鼠标经过table;
manage.clnTable=function(obj,sClass){
    obj.each(function(i,item){
        $(this).hover(function(){
            $(this).addClass(sClass);
        },function(){
            $(this).removeClass(sClass);
        })
    });
};

//新建应用案例联动菜单
manage.buildCaseMenu=function(){

	hoverDelete();
    
    var oFirstUl=$("#buildFirstLabel");
    var oTable=$('#buildSecondTable');
    var $tr='';

    //第二级数据
    oFirstUl.find('li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.buildFlagTr').remove();
        $('.newBuildTr').remove();
        
        var catid = $(this).attr('name');
        $.ajax({
			type : "POST",
			url : "getAppCat.shtml",
			data :{"parentId":catid},
			dataType : "JSON",
			success : function(data) {
				 for(var j=0;j<data.length;j++){
					 if((j)%6 === 0){
			                $tr=$('<tr class="buildFlagTr"></tr>');
			                oTable.append($tr);
			         }
					 var sTd=$('<td class="js_more"><a href="javascript:void(0)" name="'+ data[j].id +'">'+ data[j].categoryName +'</a></td>');
					 $tr.append(sTd);
					 
				 }
			}
		});
    });

    //第三级数据
    oTable.delegate('.js_more a','click',function(){
    	var _this=$(this);
        var aParent=$(this).parent();
        var _index=aParent.index();
      
        $('.newBuildTr').remove();
        var oTr=$(this).parents('tr');
        var str3='';
        var oParentTr='';
        
        var sName=$(this).attr('name');
        $.ajax({
			type : "POST",
			url : "getAppBasic.shtml",
			data :{"appcategoryId":sName},
			dataType : "JSON",
			success : function(data) {
				for(var k=0;k<data.length;k++){
					str3=str3+'<li data-id="'+ data[k].id +'">'+data[k].appName+'</li>';
		        }
				oParentTr ='<tr class="newBuildTr"><td colspan="6"><div class="newBuildIn"><i></i><ul class="hd newBuildInCon">'+ str3 +'</ul></div></td></tr>';
		        $(oTr).after($(oParentTr));
		        
		        var oI=$(".newBuildIn i");
		        var sLi=$('.newBuildInCon li');
		        
		        var sLeft=_index*aParent.innerWidth()+(_this.innerWidth()-oI.innerWidth())/2;
		        oI.css('left',sLeft); 
		        
		        sLi.hover(function(){
		            $(this).addClass('active').siblings().removeClass('active');
		        });
		        
		        sLi.on('click',function(){
		            var _this=$(this);
		            var oFieldLi=$('.newBuildFieldList ul li');
		            var sHtml=_this.html();
		            var data_id = _this.attr("data-id");
		            for(var i=0;i<oFieldLi.length;i++){
		                if(sHtml==oFieldLi.eq(i).find('a').html()){
		                    return
		                }
		            }
		            _this.parents('.newBuildField').find(".newBuildAdd").before('<li data-id="'+ data_id +'"><a href="javascript:void(0)">'+ sHtml +'</a><i></i></li>')

		            hoverDelete();
		        })
			}
        });	
      
    });
//    鼠标经过和删除标签；
    function hoverDelete(){
        var oSField=$('.newBuildFieldHover ul li');
        oSField.hover(function(){
            $(this).addClass('active');
        },function(){
            $(this).removeClass('active');
        });
        //删除标签
        oSField.find('i').on('click',function(){
            $(this).parents('li').remove();
        })
    }
    //输入框贴标签
    var oSubmit=$('.buildBtn');
    var oText=$(".buildText");
    oSubmit.on('click',function(){
    	var sTime=new Date().getTime();
        var sVal=oText.val();
        sVal= $.trim(sVal);
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/g;
        if(sVal.length>10||!reg.test(sVal)){
        	shine.commonPageTips({
		        width:'500',
		        sClass:'error',
		        tips:'请输入字母汉字数字且长度不能超过10！'
		    });
        	return false;
        }else{
        	$('.newBuildFieldList').find(".newBuildAdd").before('<li data-id="'+ sTime +'"><a href="javascript:void(0)">'+ sVal +'</a><i></i></li>')
            oText.val('');
            hoverDelete();
        }
    })
};

//新建应用案例点击展开收起;
manage.upDown=function(){
    var oCon=$(".newBuildFieldCon");
    var sBtn=$(".newBuildAdd a");


    sBtn.on('click',function(){
        oCon.slideDown(function(){
            sBtn.parent().hide();
        })
    });
    oCon.find('.stop').on('click',function(){
        oCon.slideUp(function(){
            sBtn.parent().show();
        })
    })
};


//相册管理  上传照片弹出层
manage.uploadPic=function(){
    var oBtn=$(".eUploadAlbumBtn");
    var oMask=$(".commonMask");
    var oCon=$(".evenAlbumPic");
    var oClose=$(".closeAlbumMask");
    var oCancel=$(".albumCancel");

    oBtn.on('click',function(){
        oMask.show();
        oCon.show();
    });
    oClose.on('click',function(){
        oMask.hide();
        oCon.hide();
    });
    oCancel.on('click',function(){
        oMask.hide();
        oCon.hide();
        return false;
    })
};
//相册管理  创建企业相册弹出层
manage.createAlbum=function(){
    var oBtn=$(".eCreateAlbumBtn");
    var oMask=$(".commonMask");
    var oCon=$(".evenCreateAlbum");
    var oClose=$(".closeAlbumMask");
    var oCancel=$(".albumEsCancel");

    oBtn.on('click',function(){
        oMask.show();
        oCon.show();
    });
    oClose.on('click',function(){
        oMask.hide();
        oCon.hide();
    });
    oCancel.on('click',function(){
        oMask.hide();
        oCon.hide();
        return false;
    })
};
//删除相册确认框
manage.deleteAlbum=function(obj1,obj2,oparents,fn){

    obj1.on('click',function(){
        var _this=$(this);
        var str=manage.deleteStr();
        obj2.html(str);
        obj2.show();

        var oConfirmBtn=$('.DeleteBtn');
        var oCancelBtn=$('.cancelBtn');
        var oClose=$('.deleteClose');

        oConfirmBtn.on('click',function(){
        	if(fn){
        		fn();
        	}
        	if(oparents){
        		_this.parents(oparents).remove();
        	}
            obj2.html('');
            obj2.hide();
        });

        oCancelBtn.on('click',function(){
        	obj2.html('');
        	obj2.hide();
        });
        oClose.on('click',function(){
        	obj2.html('');
        	obj2.hide();
        })
    });

};

//主营产品管理  发布材料添加条件
manage.addCondition=function(){
    var oInfoAdd=$('.sMgAddBtn');
    oInfoAdd.bind('click',function(){
        if($('.mgPubAddContent').length>10){
            return;
        }
        $('.mgPubAddContent:last').after('<div class="hd mgPubMaterialCon mgPubAddContent"><input type="text" class="mgAddInput" placeholder="请输入新条件"/><input type="text" class="mgPubNormalInput" placeholder="请输入新增条件内容"/><a href="javascript:void(0)" class="mgAddCondition sMgDeleteBtn">删除</a></div>');
        $(".sMgDeleteBtn").on('click',function(){
            $(this).parents('.mgPubAddContent').remove();
        })
    });

};

//主营产品管理  新增标签
manage.addLabelBuild=function(){
    var sBtn=$(".eAddLabelBtn");
    var i=0;
    sBtn.on('click',function(){
        i++;
        var sClass="createInput"+i;
        $(this).hide();
        var sHtml='<li ><input type="text"  class="'+sClass+'" value=""/><i></i></li>';
        $(this).before(sHtml);

        $("."+sClass).blur(function(){
            var sVal=$(this).val();
            sVal= $.trim(sVal);
            if(sVal.length){
                var sWidth=manage.inputChangeWidth(sVal);

                $(this).css("width",sWidth);
                $(this).attr('disabled','true');
                $(this).siblings('i').show();
                sBtn.show();
            }else{
                return false;
            }

        });

        $(".newLabelBuild ul li i").on('click',function(){
            $(this).parent().remove();
        })


    })
};
//文本框根据内容改变宽度
manage.inputChangeWidth=function(text){
        var sensor = $('<pre>'+ text +'</pre>').css({display: 'none'});
        $('body').append(sensor);
        var width = sensor.width();
        sensor.remove();
        return width;
};
//新增交货地
manage.addPlace=function(){
    var sBtn=$(".sAddPlaceBtn");
    var oCon=$(".mgMainPlaceCon");
    var oStop=oCon.find('.stop');
    var oConfirm=oCon.find('span');
    var oProvince=$("#province");
    var oCity=$("#city");
    
    
    var aLi=$(".placeDelivery ul li");
    aLi.hover(function(){
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active')
    });

    aLi.find('i').on('click',function(){
        $(this).parent().remove();
    })

    sBtn.on('click',function(){
        var _this=$(this);
        oCon.slideDown(function(){
            _this.hide();
            oConfirm.on('click',function(){
                var sPic=oProvince.val();
                sPic= $.trim(sPic);
                var sCity=oCity.val();
                sCity= $.trim(sCity);
                if(sPic.length&&sCity.length){
                    var sPlace=sPic+sCity;
                    var sHtml='<li><a href="javascript:void(0)">'+ sPlace +'</a><i></i></li>';
                    _this.before(sHtml);
                    oProvince.val('');
                    oCity.html("<option>--请选择城市--</option>");


                    var aLi=$(".placeDelivery ul li");
                    aLi.hover(function(){
                        $(this).addClass('active');
                    },function(){
                        $(this).removeClass('active')
                    });

                    aLi.find('i').on('click',function(){
                        $(this).parent().remove();
                    })



                }else{
                    return false;
                }
            })
        });
    });
    oStop.on('click',function(){
        oCon.slideUp(function(){
            sBtn.show();
        });
    });


};

//主营产品管理材料分类弹出层联动菜单

manage.sectionClass=function(){
    var _oneLevel=[
        {"name":"1","data":"橡塑原料"},
        {"name":"2","data":"化工助剂"}
    ];
    var _twoLevel={
        "1":[
            {"name":"1_1","data":"橡塑原料"},
            {"name":"1_2","data":"橡塑原料"},
            {"name":"1_3","data":"橡塑原料"},
            {"name":"1_4","data":"橡塑原料"},
            {"name":"1_5","data":"橡塑原料"},
            {"name":"1_6","data":"橡塑原料"},
            {"name":"1_7","data":"橡塑原料"}
        ],
        "2":[
            {"name":"2_1","data":"化工助剂"},
            {"name":"2_2","data":"化工助剂"},
            {"name":"2_3","data":"化工助剂"},
            {"name":"2_4","data":"化工助剂"},
            {"name":"2_5","data":"化工助剂"},
            {"name":"2_6","data":"化工助剂"}
        ]
    };
    var _threeLevel={
        "1_1":["橡塑原料","橡塑原料","橡塑原料","橡塑原料","橡塑原料"],
        "1_2":["化工助剂","化工助剂","化工助剂","化工助剂","化工助剂"],
        "1_3":["化工助剂","化工助剂","化工助剂","化工助剂","化工助剂"],
        "1_4":["尾灯","尾灯","尾灯","尾灯","尾灯"],
        "1_5":["车灯","车灯","车灯","车灯","车灯"],
        "1_6":["尾灯","尾灯","尾灯","尾灯","尾灯"],
        "1_7":["尾灯","尾灯","尾灯","尾灯","尾灯"],
        "2_1":["车灯","车灯","车灯","车灯","车灯"],
        "2_2":["尾灯","尾灯","尾灯","尾灯","尾灯"],
        "2_3":["车灯","车灯","车灯","车灯","车灯"],
        "2_4":["尾灯","尾灯","尾灯","尾灯","尾灯"],
        "2_5":[],
        "2_6":["尾灯","尾灯","尾灯","尾灯","尾灯"]
    };


    var oUl1=$("#mgIndexSectionUl1");
    var oUl2=$("#mgIndexSectionUl2");
    var oUl3=$("#mgIndexSectionUl3");
    var str1='';
    for(var i=0;i<_oneLevel.length;i++){
        str1+='<li name="'+  _oneLevel[i].name +'"><a href="javascript:void(0)">'+ _oneLevel[i].data +'</a><i></i></li>'
    }
   // oUl1.html(str1);


   /* oUl1.find('li').on('click',function(){
        var sName=$(this).attr('name');
        $(this).addClass('active').siblings().removeClass('active');
        if(_twoLevel[sName].length){
            var str2='';
            $(".mgIndexSection3").hide();
            $(".mgIndexSection2").show();

            for(var j=0;j<_twoLevel[sName].length;j++){
                str2+='<li name="'+ _twoLevel[sName][j].name +'"><a href="javascript:void(0)">'+ _twoLevel[sName][j].data +'</a><i></i></li>'
            }
            oUl2.html(str2);
        }else{
            $(".mgIndexSection3").hide();
            $(".mgIndexSection2").hide();
            return false;
        }
    });*/


    /*oUl2.delegate('li','click',function(){
        var sName=$(this).attr('name');
        $(this).addClass('active').siblings().removeClass('active');

        if(_threeLevel[sName].length){
            var str3='';
            $(".mgIndexSection3").show();
            console.log(_threeLevel[sName].length);
            for(var k=0;k<_threeLevel[sName].length;k++){
                str3+='<li><a href="javascript:void(0)">'+ _threeLevel[sName][k] +'</a></li>';
            }
            oUl3.html(str3);
        }else{
            $(".mgIndexSection3").hide();
            return false;
        }
    });*/
    /*oUl3.delegate('li','click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });*/

};

//主营产品管理材料分类弹出层
manage.sectionClassMask=function(){
    var sBtn=$(".eventBuilt");
    var oCon=$(".eventMgIndexSorts");
    var oClose=$(".closeAlbumMask");
    var oMask=$(".commonMask");

    sBtn.on('click',function(){
        manage.sectionClass();
        oMask.show();
        oCon.show();
    });
    oClose.on('click',function(){
        $(".mgIndexSection3").hide();
        $(".mgIndexSection2").hide();
        oMask.hide();
        oCon.hide();
    })
};

//我的物性表通用多个切换
manage.comMyTab=function(obj,oParents,oChild,active){
    obj.on('click',function(){
        $(this).addClass(active).siblings().removeClass(active);
        var _index=$(this).index();
        $(this).parents(oParents).find(oChild).hide();
        $(this).parents(oParents).find(oChild).eq(_index).show();
    })
};