var shine={};
shine.init=function(){
	
    // 首页 index
        // 首页搜索
    shine.search();
//    shine.indexPlaceholder();
    shine.indexExit();
    common.menu($('.menu .list .listCon'),'active','.menuWrap');// banner的菜单栏
//    common.menu($('.programme .list .con'),'active','.details');// 材料应用解决方案
    //材料应用解决方案
    shine.slideLeft();
        // 阴影
    shine.indexShadow();
    // 上传物性表页面 PropertyUpload

        // 展开收起
    common.fnOpen($('.publicLevel .newAdd a'),$('.levelCategory .con'),$('.publicLevel .stop'));
        // 标签状态添加移除
    shine.labelState();

        // 添加说明         
    shine.addExplain();

        // table添加行删除行
    shine.paramTable();





    // 物性对比页面 PropertyContrast
        // 删除列
    shine.deleteTable();
        // 超出显示省略号
    shine.ellipsis($('.moreLine'),17);
        // 对比弹出
    shine.contrastMask();


    // 活动专区材料详情页面

        // 经过li更换对应的img图片
    shine.tabSrc();


    // 材料详情页
        // 切换
    shine.detailTab($('.tabNavs ul li'),$('.commodityCon .con'),'active');


    // 登录页面
        // 登录框验证登录
    shine.loginFn();


    // 企业入驻页面
        // 企业关联
    shine.settledCase();
        // 企业入驻关联申请弹出层
    shine.settledMask();

    // 完善企业信息页面

        // 完善企业信息 三证合一
    shine.perfectListSelect();


    // 企业库材料详情
        // 私信我
    shine.privateLetter();
    shine.ellipsis($('.companyPText'),30);

    // 关于企业
        // 关于企业展开收起
    shine.openClose($(".aEBaseInfoOpenBtn"),$(".aEBaseInfoCon"));
    shine.ellipsis($('.aEStyleTabCon p'),15);

    // 企业应用案列
        // 企业应用案列文字超出显示省略号
    shine.caseList();

    // 企业空间
        // 企业空间文字超出显示...更多
    shine.zoomMore();

        // 企业空间表格价格排序
    shine.sortFn();


    // 设置密码页面
        // 设置密码页面验证
    shine.registerPwd();

    // 材料列表页
        // table各行变色
    shine.tableColor($('.materialArgTable tbody'));
        // 点击添加移除类
    shine.toggleFn($('.materialTrueSel ul li'),'active');
        // 发布材料弹出层
    // shine.publishMask();
        // 发布材料联动菜单
    shine.linkage();
        // table各行变色
    shine.tableColor($('.materialPublishTd tbody'));

        // 通用下拉提示
    shine.selectCase($('.selectCaseLink'),$('.selectCaseCon'));


    // 登录弹出层
    // shine.loginMask();

    // 通用加入对比浮层
    shine.addContrast();

    // 管理中心

        // 初始化管理中心页面的最小高度；
    shine.initMinHeight();

    shine.manageMenu();





};

$(document).ready(shine.init);




//首页搜索
shine.search=function(){
    var oBtn=$(".searchP");
    var oCon=$(".searchHeaderCon");
    var oI=oBtn.find('i');
    var oStrong=oBtn.find('h4');
    var aList=$(".searchHeaderNav li");
    var aCon=$(".searchTabCon");
    var bBtn=true;

    oBtn.on('click',function(){
        if(bBtn){
        	oI.removeClass('searchIcon');
            oI.addClass('searchClose');
            oStrong.hide('slow');
            oCon.show('fast');
        }else{
        	 oI.removeClass('searchClose');
             oI.addClass('searchIcon');
             oStrong.show('slow');
             oCon.hide('fast');
        }
        bBtn=!bBtn;

        return false;
    });

    shine.detailTab(aList,aCon,'active');
    
//   oCon.on('click',function(){
//        return false;
//    });
//    $(document).on('click',function(){
//        oI.removeClass('searchClose');
//        oI.addClass('searchIcon');
//        oStrong.show('slow');
//        oCon.hide('fast');
//        bBtn=!bBtn;
//    })

};
//首页搜索placeholder


//首页经过显示退出内容
shine.indexExit=function(){
    $(".signOutIndex").hover(function(){
        $(this).find(".indexExit").stop().slideDown();
    },function(){
        $(this).find(".indexExit").stop().slideUp();
    });
};

//材料应用解决方案
shine.slideLeft=function(){
    var timer1=null;
    var timer2=null;
    $(".programme .list .commonA").hover(function(){
        var _this=$(this);
        timer1=setTimeout(function(){
            _this.find('.details').show();
            _this.find('.details').animate({left:0},200)
        },400)
    },function(){
        clearTimeout(timer1);
        $(this).find('.details').slideUp(function(){
            $(this).css('left','-1200px')
        });
    });
    $(".programme .list .commonB").hover(function(){
        var _this=$(this);
        timer2=setTimeout(function(){
            _this.find('.details').show();
            _this.find('.details').animate({left:-298},200)
        },400);
    },function(){
        clearTimeout(timer2);
        $(this).find('.details').slideUp(function(){
            $(this).css('left','-1200px')
        });
    })
};

// 首页导航阴影；
shine.indexShadow=function(){
    var oNav=$(".indexNav");
    var sHeight=$(".Combination").height();
    $(window).scroll(function(){
        var sTop=$(window).scrollTop();
        if(sTop>sHeight){
            oNav.addClass('shadowNav');
        }else{
            oNav.removeClass('shadowNav');
        }

    });
};

shine.deleteTable=function(){
    var oTable=document.getElementById('contrastTable');
    var oDelete=$('.contrastDelete').get();
    var oInt=$('.rowInt').get();
    // var oLong=$('.rowLong');
    var oFloat=$('.rowFloat').get();
    var length=oDelete.length;
    for(var i=0;i<length;i++){
        oDelete[i].onclick=function(){
            var index=this.parentNode.cellIndex;
            var len=index+3;
            var oA=document.createElement('a');
            var oThTitle=$('.ifTitle').get();
            var oDeleteIcon=$('.contrastDelete');
            oA.setAttribute('href','javascript:void(0)');
            oA.className='contrastAdd';
            oA.innerHTML='添加';
            var oTh=this.parentNode.parentNode;
            oTh.deleteCell(index);
            var oThAdd=document.createElement('th');
            oThAdd.appendChild(oA);
            oTh.appendChild(oThAdd);

            for(var j=0;j<oInt.length;j++){
                oInt[j].deleteCell(len-1);
                var size=oInt[0].cells.length;
                oInt[j].insertCell(oInt[j].cells.length);
            }
            for(var z=0;z<oFloat.length;z++){
                oFloat[z].deleteCell(len-2);
                oFloat[z].insertCell(oFloat[z].cells.length);
            }
            if(oThTitle.length==2){
                oDeleteIcon.remove();
            }
        }
    }
};

// 添加删除标签；
shine.labelState=function(){
	common.hoverLabel($('.CategoryDeleteLi li'),'active');
    // 点击添加标签
    $('.CategoryCon li').bind('click',function(){
    	var sAttr=$(this).attr('data-id')
        if($(this).hasClass('colsLabel')){
            return false;
        }else{
            if($(this).hasClass('active')){
                return
            }else{

                var value=$(this).find('a').html();

                $(this).parents('.box').find('.newAdd').before("<li data-id="+ sAttr +"><a href='javascript:void(0)'>"+ value +"</a><i></i></li>");

                common.hoverLabel($('.CategoryDeleteLi li'),'active');

                $(this).addClass('active');
            }
        }
    });
    // 输入框贴标签
    $('.colsLabel .submit').bind('click',function(){
        var value=$(this).siblings().val();
        var oData=new Date();
        var oTime=oData.getTime();
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/g;
        
        value=value.replace(/(^\s*)|(\s*$)/g, "");
        
        if(value=='请输入标签内容'||value.length>10||!reg.test(value)){
        	shine.commonPageTips({
		        width:'500',
		        sClass:'error',
		        tips:'请输入字母汉字数字且长度不能超过10！'
		    });
            return false;
        }
        else{
            $(this).parents('.box').find('.newAdd').before("<li data-id='"+ oTime +"'><a href='javascript:void(0)'>"+ value +"</a><i></i></li>");
            common.hoverLabel($('.CategoryDeleteLi li'),'active');
            $(this).siblings().val('');
        }
    });

    // 删除标签
    $('.CategoryDeleteLi').delegate('li i','click',function(){
        var text=$(this).siblings().html();
        var oA=$(this).parents('.box').find('.CategoryCon li a');

        for(var i=0;i<oA.length;i++){
            if(text==oA.eq(i).html()){
                oA.eq(i).parent().removeClass('active');
            }
        }
        $(this).parents('li').remove();
    });
};
shine.labelState2=function(){
	common.hoverLabel($('.CategoryDeleteLi li'),'active');
    // 点击添加标签
    $('.CategoryCon li').bind('click',function(){
    	var sAttr=$(this).attr('data-id')
        if($(this).hasClass('colsLabel')){
            return false;
        }else{
            if($(this).hasClass('active')){
                return
            }else{

                var value=$(this).find('a').html();

                $(this).parents('.box').find('.newAddBase').before("<li data-id="+ sAttr +"><a href='javascript:void(0)'>"+ value +"</a><i></i></li>");

                common.hoverLabel($('.CategoryDeleteLi li'),'active');

                $(this).addClass('active');
            }
        }
    });
    // 输入框贴标签
    $('.colsLabel .submit').bind('click',function(){
        var value=$(this).siblings().val();
        var oData=new Date();
        var oTime=oData.getTime();
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/g;
        
        value=value.replace(/(^\s*)|(\s*$)/g, "");
        
        if(value=='请输入标签内容'||value.length>10||!reg.test(value)){
        	shine.commonPageTips({
		        width:'500',
		        sClass:'error',
		        tips:'请输入字母汉字数字且长度不能超过10！'
		    });
            return false;
        }
//        if(value=='请输入标签内容'||value.length==0||!reg.test(value)){
//            return false;
//        }
        else{
            $(this).parents('.box').find('.newAddBase').before("<li data-id='"+ oTime +"'><a href='javascript:void(0)'>"+ value +"</a><i></i></li>");
            common.hoverLabel($('.CategoryDeleteLi li'),'active');
            $(this).siblings().val('');
        }
    });

    // 删除标签
    $('.CategoryDeleteLi').delegate('li i','click',function(){
        var text=$(this).siblings().html();
        var oA=$(this).parents('.box').find('.CategoryCon li a');

        for(var i=0;i<oA.length;i++){
            if(text==oA.eq(i).html()){
                oA.eq(i).parent().removeClass('active');
            }
        }
        $(this).parents('li').remove();
    });
};
// 添加说明
shine.addExplain=function(){
    var oInfoAdd=$('.levelInfo .InfoAdd');
    oInfoAdd.bind('click',function(){
        if($('.ieAdd').length>10){
            return;
        }
        $(this).parents('.levelInfo').find('li:last').before('<li class="ieAdd"><input class="fl titleInput inputState" value="请输入新条件"><input type="text"  class="aloneInput inputState" value="请输入新条件内容"/><a href="javascript:void(0)" class="commonInfoAdd infoDelete">删除</a></li>')
        common.inputState($('.inputState'));
    });
    $('.levelInfo').delegate('.infoDelete','click',function(){
        $(this).parents('li').remove();
    })
};

// table添加行删除行
shine.paramTable=function(){
    var aTbody=$('.paramTable table').find('tbody');
    var aAdd=$('.paramTableAdd');
    var aTitle=$('.paramTableTitle');

    aAdd.each(function(n){
        $(this).bind('click',function(){
        	var data_parent_id=$(this).parents('tbody').find('tr:first').attr('data-parent-id');
        	var data_parent_name=$(this).parents('tbody').find('tr:first').attr('data-parent-name');
        	
        	
            var Tr='<tr data-new-flag="new" data-id = "'+(new Date().getTime())+'" data-parent-id = "'+data_parent_id+'" data-parent-name = "'+data_parent_name+'"><td><input type="text" data-flag="t" data-id="txt" /></td><td><input type="text" data-flag="t" data-id="txt1"/></td><td><input type="text" data-flag="t" data-id="txt2" /></td><td><input type="text" data-flag="t" data-id="txt3"/></td><td><input type="text" data-flag="t" data-id="txt4"/></td><td><a href="javascript:void(0)" class="paramTableDelete">删除</a></td></tr>';
            aTbody.eq(n).append(Tr);
            var trLength=aTbody.eq(n).find('tr').length;
            aTitle.eq(n).attr('rowspan',trLength);
        });
    });

    aTbody.each(function(n){
        $(this).delegate('.paramTableDelete','click',function(){
            var trLength=$(this).parents('tbody').find('tr').length;
            aTitle.eq(n).attr('rowspan',trLength-1);
            $(this).parents('tr').remove();
        })
    })
};

// 活动专区放大镜
shine.activeEnlarge=function(){
    var oDemo=document.getElementById('demo');
    var oSmall=document.getElementById('small-box');
    var oMask=document.getElementById('mask');
    var oFloatBox=document.getElementById('float-box');
    var oBig=document.getElementById('big-box');
    var oImg=document.getElementById('bigImg');
    shine.enlarge(oDemo,oSmall,oMask,oFloatBox,oBig,oImg);
};
// 放大镜封装;
shine.enlarge=function(oWrap,oSmallBox,oMask,oFloat,oBigBox,oBigImg){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    window.onscroll=function(){
        scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    };
    oMask.onmouseover = function () {
        oFloat.style.display = "block";
        oBigBox.style.display = "block"
    };
    oMask.onmouseout = function () {
        oFloat.style.display = "none";
        oBigBox.style.display = "none"
    };
    oMask.onmousemove = function (ev) {

        var _event = ev || window.event;

        var left = _event.clientX - shine.posLeft(oWrap) - oSmallBox.offsetLeft - oFloat.offsetWidth / 2;
        var top = _event.clientY - shine.posTop(oWrap) - oSmallBox.offsetTop - oFloat.offsetHeight / 2+scrollTop;

        if (left < 0) {
            left = 0;
        } else if (left > (oMask.offsetWidth - oFloat.offsetWidth)) {
            left = oMask.offsetWidth - oFloat.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (oMask.offsetHeight - oFloat.offsetHeight)) {
            top = oMask.offsetHeight - oFloat.offsetHeight;
        }


        oFloat.style.left = left + "px";
        oFloat.style.top = top + "px";

        var percentX = left / (oMask.offsetWidth - oFloat.offsetWidth);
        var percentY = top / (oMask.offsetHeight - oFloat.offsetHeight);

        oBigImg.style.left = -percentX * (oBigImg.offsetWidth - oBigBox.offsetWidth) + "px";
        oBigImg.style.top = -percentY * (oBigImg.offsetHeight - oBigBox.offsetHeight) + "px";
    }
};
// 经过li更换对应的img图片
shine.tabSrc=function(){
    var aList=$('.detailMain_list ul li');
    var imgSrc=$(".commonSrc");
//    var src=["images/detailBig_01.jpg","images/detailBig_02.jpg","images/detailBig_01.jpg","images/detailBig_02.jpg"];

    aList.each(function(n){
        $(this).hover(function(){
            $(this).addClass('active').siblings().removeClass('active');
            
            var smallPic=$(this).find('img').attr('src');

            imgSrc.attr('src',smallPic);
        })
    });
};

// 获取最顶部的距离
shine.posTop=function(obj){
    var top=0;
    while(obj){
        top+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return top;
};
// 获取最左边的距离
shine.posLeft=function(obj){
    var left=0;

    while(obj){
        left+=obj.offsetLeft;
        obj=obj.offsetParent;
    }
    return left;
};
// 超出显示省略号
shine.ellipsis=function(obj,len){
    obj.each(function(){
        var sText=$(this).text();
        if(sText.length>=len){
            $(this).text(sText.substring(0,len)+'...');
        }else{
            $(this).text(sText);
        }
    });
};
// 对比弹出
shine.contrastMask=function(){
    var oMask=$('.contrastMask');
    var oMaskCon=$('.contrastPopup');

    $('.contrastTable').delegate('.contrastAdd','click',function(){
        oMask.css('display','block');
        oMaskCon.css('display','block');
    });
    $(".popupClose").bind('click',function(){
        oMask.css('display','none');
        oMaskCon.css('display','none');
    });

    $('.popupSectionTitle').delegate('ul li','click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
        // 重置
    $('.popReset').bind('click',function(){
        $('.selectCaseLink').each(function(n){
            var oText=$('.selectCaseCon').eq(n).find('ul li:first').html();
            $('.selectCaseLink').eq(n).html(oText);
        });
    })
};
// 通用下拉提示
shine.selectCase=function(obj,oCon){
    obj.each(function(n){
        $(this).bind('click',function(){
            oCon.css('display','none');
            oCon.eq(n).css('display','block');

            return false;
        })
    });
    oCon.each(function(n){
    	obj.eq(n).attr('data-id',oCon.eq(n).find('ul li').attr('data-id'));
        obj.eq(n).html(oCon.eq(n).find('ul li').html());
        $(this).bind('click',function(){
            return false;
        });
        $(this).find('ul li').bind('click',function(){
        	var sAttr=$(this).attr('data-id');
            var oText=$(this).html();
            obj.eq(n).attr('data-id',sAttr);
            obj.eq(n).html(oText);
            oCon.css('display','none');
        })
    });
    $(document).bind('click',function(){
        oCon.css('display','none');
    })
};

// tab切换
shine.detailTab=function(obj,obj2,sClass){
    obj.each(function(n){
        $(this).bind('click',function(){
            $(this).addClass(sClass).siblings().removeClass(sClass);
            obj2.css('display','none');
            obj2.eq(n).css('display','block');
        })
    })
};
// 登录框验证登录
shine.loginFn=function(){
    shine.detailTab($('.loginList li'),$('.loginForm'),'active');

    var regName = /^0?(13[0-9]|15[012356789]|18[0-9]|17[0-9])[0-9]{8}$/;

    // 密码登录
    var oPhone=$('.inputPhonePwd');
    var oPwd=$('.inputPwdPwd');
    var oCode=$(".verificationCodePwd");
    var oForm=$('.formSub');

        // 手机号
    oPhone.bind('blur',function(){
        checkPhone(oPhone);
    });
        // 密码框
    oPwd.bind('blur',function(){
        checkPwd(oPwd);
    });
        // 验证码
    oCode.bind('blur',function(){
        checkCode(oCode);
    });

    // 提交表单
    oForm.submit(function(){
        if(checkPhone(oPhone)&&checkPwd(oPwd)&&checkCode(oCode)){
            return true;
        }else{
            return false;
        }
    });


    // 手机登录
    var oPhoneMsg=$('.inputPhoneMsg');
    var oDynamic=$('.dynamicMsg');
    var oCodeMsg=$(".verificationMsg");
    var oFormMsg=$('.formSubMsg');
    var oBtn=$(".getPassword");
    var oLabel=$(".rememberLiLabel label");

        // 手机号
    oPhoneMsg.bind('blur',function(){
        checkPhone(oPhoneMsg);
    });
        // 验证码
    oCodeMsg.bind('blur',function(){
        checkCode(oCodeMsg);
    });
        // 动态密码
    oDynamic.bind('blur',function(){
        checkDynamic(oDynamic)
    });



    // 检测服务协议是否勾选；
    function checkLabel(){
        if(oLabel.hasClass('checked')){
            oLabel.parent().siblings('p').hide();
            return true;
        }
        else{
            oLabel.parent().siblings('p').show();
            return false;
        }

    }
        // 提交表单
    oFormMsg.submit(function(){
        if(checkPhone(oPhoneMsg)&&checkDynamic(oDynamic)&&checkCode(oCodeMsg)){
            return true;
        }else{
            return false;
        }
    });
        // 立即注册页面下一步验证
    $(".registerFormMsg").submit(function(){
        if(checkPhone(oPhoneMsg)&&checkDynamic(oDynamic)&&checkCode(oCodeMsg)&&checkLabel()){
            return true;
        }else{
            return false;
        }
    });

        // 检测手机号；
    function checkPhone(obj){
        var oValue=obj.val();
        if(regName.test(oValue)){
            obj.siblings('p').css('display','none');
            obj.siblings('i').css('display','none');
            obj.siblings('i').attr('class','');
            return true;
        }else{
            obj.siblings('p').css('display','block');
            obj.siblings('i').css('display','block');
            obj.siblings('i').addClass('error');
            return false;
        }
    }

        // 检测密码框
    function checkPwd(obj){
        var oValue=obj.val();
        if(oValue.length==0){
            obj.siblings('i').css('display','block');
            obj.siblings('i').addClass('error');
            obj.siblings('p').css('display','block');
            return false;
        }else{
            obj.siblings('i').css('display','none');
            obj.siblings('p').css('display','none');
            return true;
        }
    }

        // 检测验证码
    function checkCode(obj){
        var oText=obj.val();
        oText=oText.replace(/(^\s*)|(\s*$)/g, "");
        if(oText=='不区分大小写'||oText.length==0){
            obj.siblings('i').css('display','block');
            obj.siblings('i').addClass('error');
            obj.siblings('p').css('display','block');
            return false;
        }else{
            obj.siblings('i').css('display','none');
            obj.siblings('p').css('display','none');
            return true;
        }
    }
        // 检测动态密码
    function checkDynamic(obj){
        var oText=obj.val();
        if(oText=='请输入收到的动态密码'||oText.length==0){
            obj.siblings('i').css('display','block');
            obj.siblings('i').addClass('error');
            obj.siblings('p').css('display','block');
            return false;
        }else{
            obj.siblings('i').css('display','none');
            obj.siblings('p').css('display','none');
            return true;
        }
    }
};

// 企业入驻
shine.settledCase=function(){
    var oInput=$(".inputRelation");
    var oMatch=$('.settledMatch');
    var oVal=oInput.val();

    var oLi=$(".settledMatch ul li");

    oLi.each(function(){
        $(this).bind('click',function(){
            var sText=$(this).html();
            oInput.val(sText);
            oMatch.hide();
        })
    });
    $(document).bind('click',function(){
        oMatch.hide();
    })

};
// 企业入驻关联申请弹出层
shine.settledMask=function(){
    var oBtn=$(".labelRelationControl");
    var oMask=$('.settledMask');
    var oContainer=$(".applyRelationWrap");
    var oClose=$(".applyRelationClose");
    var oCancel=$(".applyRelationCancel");

    oBtn.bind('click',function(){
        oMask.show();
        oContainer.show();
    });
    oClose.bind('click',function(){
        oMask.hide();
        oContainer.hide();
    });
    oCancel.bind('click',function(){
        oMask.hide();
        oContainer.hide();
    })
};

// 完善企业信息 三证合一
shine.perfectListSelect=function(){
    var oBtn=$('.perfectListSelect a');
    var oUl=$(".perfectListSelect ul");
    var aLi=oUl.find('li');
    var oUpload=$(".perfectUpload");
    oBtn.bind('click',function(){
        oUl.show();
        return false;
    });
    aLi.each(function(n){
        $(this).bind('click',function(){
            var oText=$(this).html();
            oBtn.html(oText);
            oUpload.hide();
            if(oText=="三证分离"){
                oUpload.eq(1).show();
                aLi.html("三证合一")
            }else{
                oUpload.eq(0).show();
                aLi.html("三证分离")
            }
        })
    });
    $(document).bind('click',function(){
        oUl.hide();
    })
};
// 私信我html模板；
shine.privateTel=function(){
    var str='<div class="con">'+
                '<img src="../images/icon/privateLetter.png" alt=""/>'+
                '<p>私<br/>信<br/>我</p>'+
            '</div>'+
            '<div class="pleaseMessage  inMessage hide">'+
                '<h3 class="title">请您留言</h3>'+
                '<form action="#">'+
                    '<ul>'+
                        '<li>'+
                            '<textarea name="" id="" cols="30" rows="5"  value="请输入留言内容，我们会尽快与您联系。" onfocus="if (value ==\'请输入留言内容，我们会尽快与您联系。\'){value=\' \'}" onblur="if (value ==\' \'){value=\'请输入留言内容，我们会尽快与您联系。\'} ">请输入留言内容，我们会尽快与您联系。</textarea>'+
                        '</li>'+
                        '<li>'+
                            '<label for="" class="fl">姓名</label>'+
                            '<input type="text" value="最多20个字符" class="fr inputState"/>'+
                        '</li>'+
                        '<li>'+
                            '<label for="" class="fl">电话</label>'+
                            '<input type="text" value="请输入您的手机号" class="fr inputState"/>'+
                        '</li>'+
                        '<li>'+
                            '<label for="" class="fl">公司</label>'+
                            '<input type="text" value="请输入你的公司名称" class="fr inputState"/>'+
                        '</li>'+
                        '<li>'+
                            '<label for="" class="fl">邮箱</label>'+
                            '<input type="text" value="请输入合法的邮箱" class="fr inputState"/>'+
                        '</li>'+
                        '<li>'+
                            '<label for="" class="fl">域名</label>'+
                            '<a href="javascript:void(0)" class="fr domain">www.antsoo.com/changlai</a>'+
                        '</li>'+
                        '<li class="submitSend">'+
                            '<input type="button" value="发送"/>'+
                        '</li>'+
                    '</ul>'+
                '</form>'+
                '<span class="pleaseMessageClose"></span>'+
            '</div>'+
            '<div class="pleaseMessage pleaseMessageSuccess hide">'+
                '<h3 class="title">请您留言</h3>'+
                '<div class="successState">'+
                    '<img src="images/msgSuccess.png" alt=""/>'+
                    '<p>您的信息已传递成功！</p>'+
                    '<span>我们会尽快与您联系</span>'+
                    '<a href="javascript:void(0)">确定</a>'+
                '</div>'+
            '</div>';
    return str;
};
// 私信我
shine.privateLetter=function(){

    var oprivateCon=$('.privateLetter');
    var oprivateHtml=shine.privateTel();

    oprivateCon.html(oprivateHtml);


    fixPrivate();

    $(window).resize(function(){
        fixPrivate();
    });

    function fixPrivate(){
        var oPrivate=$(".privateLetter");
        var oWidth=oPrivate.outerWidth();
        var wWidth=document.documentElement.clientWidth||document.body.clientWidth;
        var wDis=(wWidth-1200)/2+(1200-oWidth);

        wDis=Math.floor(wDis);
        oPrivate.css('left',wDis);
    }

    // 显示私信内容

    var oCon=$(".privateLetter .con");
    var oMessage=$(".inMessage");
    var oClose=$(".pleaseMessageClose");


    oCon.bind('click',function(){
        oMessage.show();
    });
    oClose.bind('click',function(){
        oMessage.hide();
    })



};

// 关于企业展开收起
shine.openClose=function(obj1,obj2){
    var off=true;
    obj1.bind('click',function(){
        var _this=$(this);
        if(off){
            obj2.slideDown(function(){
                _this.html('收起');
                _this.removeClass('slideDown');
                _this.addClass('slideUp');
                off=!off;
            });
        }else{
            obj2.slideUp(function(){
                _this.html('展开');
                _this.removeClass('slideUp');
                _this.addClass('slideDown');
                off=!off;
            });
        }
    })
};

// 企业应用案列文字超出显示省略号
shine.caseList=function(){
    var oP=$(".enterpriseCaseList ul li p");
    shine.ellipsis(oP,48);
};

// 企业空间文字超出显示...更多

shine.zoomMore=function(){
    var oP=$(".omitText");
    var cid= $("#companyId").val();
    oP.each(function(){
        var sText=$(this).text();
        if(sText.length>=100){
            $(this).html(sText.substring(0,100)+'...'+'<a href="../companyAbout/companyInfo.shtml?companyId='+cid+'">更多>></a>');
        }else{
            $(this).html(sText+'<a href="../companyAbout/companyInfo.shtml?companyId='+cid+'">更多>></a>');
        }
    });
};
// 企业空间表格价格排序
shine.sortFn=function(){
    var oBtn=$(".sortTh");
    var flag=true;
    oBtn.bind("click",function(){
        if(flag){
            $(this).removeClass('sortUp');
            $(this).addClass('sortDown');
        }else{
            $(this).removeClass('sortDown');
            $(this).addClass('sortUp');
        }
        flag=!flag;

    })

};

// 设置密码页面验证
shine.registerPwd=function(){
    var oInt=$(".initPwdInput");
    var oRe=$(".reWriteInput");
    var oForm=$(".setPwdForm");
    var pwd = /^[a-zA-Z0-9_]{6,20}$/;

    oInt.blur(function(){
        checkInt();
    });
    oRe.blur(function(){
        checkRe();
    });

    function checkInt(){
        var intVal=oInt.val();
        if(pwd.test(intVal)){
            oInt.siblings('p').hide();
            oInt.siblings('p').removeClass('error');
            return true;
        }else{
            oInt.siblings('p').show();
            oInt.siblings('p').addClass('error');
            return false;
        }
    }
    function checkRe(){
        var intVal=oInt.val();
        var oreVal=oRe.val();

        if(oreVal!=intVal){
            oRe.siblings('p').show();
            oRe.siblings('p').addClass('error');
            return false;
        }else{
            oRe.siblings('p').hide();
            oRe.siblings('p').removeClass('error');
            return true;
        }
    }
    oForm.submit(function(){
        if(checkInt()&&checkRe()){
            return true;
        }else{
            return false;
        }
    });
};

// table各行变色
shine.tableColor=function(obj){
    obj.find('tr:odd').css('background','#fafafa')
};
// 点击添加移除类
shine.toggleFn=function(obj,sClass){
    obj.each(function(){
        $(this).bind('click',function(){
            $(this).addClass(sClass).siblings().removeClass(sClass)
        })
    })
};

// 联动菜单
shine.linkage=function(){
    var oUl1=$('.materialPublishSel1');
    var oUl2=$(".materialPublishSel2");
    var _oneLevel=[
        {"name":"1","data":"请选择分类"},
        {"name":"2","data":"请选择2"},
        {"name":"3","data":"请选择3"},
        {"name":"4","data":"请选择4"},
        {"name":"5","data":"请选择5"},
        {"name":"6","data":"请选择6"}
    ];
    var str1='';
    for(var i=0;i<_oneLevel.length;i++){
        str1=str1+"<li num='"+_oneLevel[i].name+"'>"+_oneLevel[i].data+"</li>"
    }
    oUl1.append(str1);


    var _twoLevel={
        "1":["选择分类","请选择分类1","请选择分类","请选择分类","请选择分类"],
        "2":["选择分类","请选择分类2","请选择分类","请选择分类","请选择分类"],
        "3":["选择分类","请选择分类3","请选择分类","请选择分类","请选择分类"],
        "4":["选择分类","请选择分类4","请选择分类","请选择分类","请选择分类"],
        "5":["选择分类","请选择分类5","请选择分类","请选择分类","请选择分类"],
        "6":["选择分类","请选择分类6","请选择分类","请选择分类","请选择分类"]
    };

    oUl1.find('li').bind('click',function(){
        var str2='';
        oUl2.children().remove();
        var _index=$(this).attr("num");
        var arrTwoLevel=_twoLevel[_index];
        for(var j=0;j<arrTwoLevel.length;j++){
            str2=str2+"<li>"+arrTwoLevel[j]+"</li>";
        }
        oUl2.append(str2);
        // 通用下拉提示
        shine.selectCase($('.selectCaseLink'),$('.selectCaseCon'));
    });


};

// 发布材料弹出层
shine.publishMask=function(){
    var oPub=$(".materialTruePub");
    var oCon=$(".materialPublish");
    var aLabel=oCon.find('.checkLabel');
    var oMask=$(".commonMask");
    var oClose=$(".materialPublishClose");
    var oCancel=$(".materialPublishParam").find('.btn-gray');

    // oPub.bind("click",function(){
        oMask.show();
        oCon.show();
    // });
    oClose.bind("click",function(){
        oMask.hide();
        oCon.hide();
    });
    oCancel.bind("click",function(){
        aLabel.removeClass('checked');
        oMask.hide();
        oCon.hide();
    })
};

// 管理中心
    // 初始化管理中心页面的最小高度；
shine.initMinHeight=function(){
    var oSection=$(".manageSection");
    setMinH();
    $(window).resize(function(){
        setMinH();
    });

    function setMinH(){
        var sHeight=$(window).height();
        var disHeight=sHeight-110;
        oSection.css('minHeight',disHeight);
    }

};
shine.manageMenu=function(){
    var oTitle=$(".manageMenuTitle");
    var oUl=$(".manageMenuUl");

    oTitle.each(function(i){
        $(this).on('click',function(){
            if($(this).find('a').hasClass('active')){
                return;
            }else{
                oTitle.find('a').removeClass('active');
                $(this).find('a').addClass('active');
                oUl.slideUp();
                $(this).siblings('.manageMenuUl').slideDown();
            }
        })
    });
};



// 登录弹出层模板
shine.loginStr1=function(){
    var str='<div class="dialog-window login-window loginWindow" >'+
                '<div class="dialog-header">'+
                    '<h3>您尚未登录</h3>'+
                    '<a class="dialog-close-ic logn-close loginClose"></a>'+
                '</div>'+
                '<div class="loginCon">'+
                    '<ul class="hd loginList">'+
                        '<li class="loginFirst active">'+
                            '<a href="javascript:void(0)">密码登录</a>'+
                        '</li>'+
                        '<li class="loginSecond">'+
                            '<a href="javascript:void(0)">短信登录</a>'+
                        '</li>'+
                    '</ul>'+
                    '<form action="" class="formSub">'+
                        '<div class="loginForm ">'+
                            '<ul>'+
                                '<li>'+
                                    '<input type="text" value="请输入手机号" class="inputState inputPhone inputPhonePwd" maxlength="11"/>'+
                                    '<span class="userNameIcon"></span>'+
                                    '<i></i>'+
                                    '<p class="loginCaseInfo">手机号格式输入有误</p>'+
                                '</li>'+
                                '<li>'+
                                    '<input type="password" placeholder="请输入密码" maxlength="20" class=" inputPwd inputPwdPwd"/>'+
                                    '<span class="userPwdIcon"></span>'+
                                    '<i></i>'+
                                    '<p class="loginCaseInfo">请输入密码</p>'+
                                '</li>'+
                                '<li class="clearFix verificationList">'+
                                    '<input class="inputState fl verificationCode verificationCodePwd" value="不区分大小写"/><img src="images/verificationCode.jpg" alt=""/><a href="javascript:void(0)"></a>'+
                                    '<i></i>'+
                                    '<p class="loginCaseInfo">请输入验证码</p>'+
                                '</li>'+
                                '<li class="clearFix rememberLi">'+
                                    '<div class="fl rememberMe">'+
                                        '<input type="checkbox" class="checkInput" ><label class="checkLabel checked" >记住我</label>'+
                                    '</div>'+
                                    '<div class="fr forgetSum">'+
                                        '<a href="javascript:void(0)" class="rememberLine">找回密码</a><a href="javascript:void(0)">免费注册</a>'+
                                    '</div>'+
                                '</li>'+
                                '<li class="loginLastList">'+
                                    '<input type="submit" value="登录" class="loginSubmit"/>'+
                                '</li>'+
                            '</ul>'+
                        '</div>'+
                    '</form>'+
                    '<form action="" class="formSubMsg">'+
                        '<div class="loginForm loginHide">'+
                            '<ul>'+
                                '<li>'+
                                    '<input type="text" value="请输入手机号" class="inputState inputPhone inputPhoneMsg" maxlength="11"/>'+
                                    '<span class="userNameIcon"></span>'+
                                    '<i></i>'+
                                    '<p class="loginCaseInfo">手机号格式输入有误</p>'+
                                '</li>'+
                                '<li class="shortMessage">'+
                                    '<input type="text" value="请输入收到的动态密码" class="inputState inputPwd dynamicPwd dynamicMsg"/>'+
                                    '<span class="userPwdIcon"></span>'+
                                    '<i></i>'+
                                    '<p class="loginCaseInfo">请输入动态密码</p>'+
                                    '<input  class="getPassword" value="获取密码" />'+
                                '</li>'+
                                '<li class="clearFix verificationList">'+
                                    '<input class="inputState fl verificationCode verificationMsg" value="不区分大小写"/><img src="images/verificationCode.jpg" alt=""/><a href="javascript:void(0)"></a>'+
                                    '<i></i>'+
                                    '<p class="loginCaseInfo">请输入验证码</p>'+
                                    '</li>'+
                                '<li class="clearFix rememberLi">'+
                                    '<div class="fl rememberMe">'+
                                        '<input type="checkbox" class="checkInput" ><label class="checkLabel checked" >记住我</label>'+
                                    '</div>'+
                                    '<div class="fr forgetSum">'+
                                        '<a href="javascript:void(0)">免费注册</a>'+
                                    '</div>'+
                                '</li>'+
                                '<li class="loginLastList">'+
                                    '<input type="submit" value="登录" class="loginSubmit"/>'+
                                '</li>'+
                            '</ul>'+
                        '</div>'+
                    '</form>'+
                '</div>'+
            '</div>';
    return str;
};
shine.loginStr=function(){
    var str='<div class="dialog-window login-window loginPublishCase" >'+
                '<div class="dialog-header">'+
                    '<h3>发布信息提示</h3>'+
                    '<a class="dialog-close-ic logn-close loginClose"></a>'+
                '</div>'+
                '<div class="hd loginCon">'+
                    '<p class="pleaseP">您还未登录系统，请先登录系统后再上传替代材料！</p>'+
                    '<div class="fr hd loginLink">'+
                        '<a href="javascript:void(0)" class="fl link">前往登录</a>'+
                        '<a href="javascript:void(0)" class="fl loginConcel">取消</a>'+
                    '</div>'+
                '</div>'+
            '</div>';

    return str;
};
// 发布信息提示模板
shine.publishStr=function(){
    var str='<div class="dialog-window login-window loginPublishCase" >'+
                '<div class="dialog-header">'+
                    '<h3>发布信息提示</h3>'+
                    '<a class="dialog-close-ic logn-close loginClose"></a>'+
                '</div>'+
                '<div class="hd loginCon">'+
                    '<p class="pleaseP">请先入驻antsoo.com,通过审核后您将拥有发布信息的权利！</p>'+
                    '<div class="fr hd loginLink">'+
                        '<a href="javascript:void(0)" class="fl link">前往企业入驻</a>'+
                        '<a href="javascript:void(0)" class="fl loginConcel">取消</a>'+
                    '</div>'+
                '</div>'+
            '</div>';

    return str;
};

// 登录弹出层
shine.loginMask=function(type){
    var sHtml=shine.loginStr();
    var oMask=$(".loginMask");
    var oBtn=$(".triggerLogin");
    var sPubHtml=shine.publishStr();

    // oBtn.on('click',function(){
       /*
		 * if("0"== type){ //登录 oMask.html(sHtml); oMask.show();
		 * common.inputState($('.inputState')); shine.loginFn();
		 * common.checkFunc($(".checkInput"),$(".checkLabel"),"result");//复选框
		 * }else
		 */
       if("1"== type){
            // 已登录未入驻未提交入驻申请
            oMask.html(sPubHtml);
            var oLink1=$(".loginLink .link");
            oLink1.attr('href',rootPath+'/companySettled/settled.shtml');
            oMask.show();
        }else if("2"== type){
            // 已登录未入驻已提交入驻申请
            oMask.html(sPubHtml);
            var oLink2=$(".loginLink .link");
            oLink2.attr('href',rootPath+'/companySettled/audit.shtml');
            oMask.show();
        }else if("3"== type){
            // 全部满足
            // oBtn.attr({'href':rootPath+'/companyMainProduct/index.shtml'});
        }
    // });
    oMask.delegate('.loginClose,.loginConcel','click',function(){
        oMask.hide();
        oMask.html('');
    });
};

// 通用加入对比浮层
shine.addContrast=function(){
    var oLabel=$('.comContrastLabel');
    var oCon=$(".eventContrast");
    var oFloat=$(".eventContrastShowBtn");
    var oHide=$(".eventHideBtn");
    var oList=$(".eventContrastListCon");
    var oClose=oList.find(".close");
    var oClear=$(".eventClear");
    var sHtml= '<p class="tip">继续添加</p>';
    oLabel.on('click',function(){
        var len=oLabel.filter(".checked").length;
        if(len){
            oCon.show();
            oFloat.hide();
            if(len>4){
                $(this).removeClass('checked');
            }
        }else{
            oCon.hide();
           oFloat.show();
        };
        
    });
    oHide.on('click',function(){
        oCon.hide();
        oFloat.show();
    });
    oFloat.on('click',function(){
        oCon.show();
        oFloat.hide();
    });
    oClose.on('click',function(){
        $(this).parents('li').html(sHtml);
    });
    oClear.on('click',function(){
        oList.find('li').html(sHtml);
        oLabel.removeClass('checked');
    })

};


shine.commonPageCase=function(option){
    var str='<div class="dialog-window login-window loginPublishCase">' +
        '<div class="dialog-header">' +
        '<h3>'+ option.title +'</h3>' +
        '<a class="dialog-close-ic logn-close commonPageClose"></a>' +
        '</div>' +
        '<div class="hd loginCon">' +
        '<p class="pleaseP">'+ option.con +'</p>' +
        '<div class="perfectButton perfectButtonInfo">'+
        '</div>' +
        '</div>' +
        '</div>';

    var oParents=$('<div class="dialog-bg login-dialog-bg show commonPageMask">'+ str +'</div>');
    $('body').append(oParents);
    $(".commonPageClose").on('click',function(){
        oParents.remove();
    })
};
shine.commonPageTips=function(option){
    var str='<div class="generalPageTipsMask">' +
                '<div class="generalPageTipsCon">' +
                    '<span class="'+option.sClass+'"></span><em>'+ option.tips +'</em>' +
                '</div>' +
            '</div>';

    $('body').append(str);
    var oCon=$('.generalPageTipsCon');
    oCon.css('width',option.width);
    oCon.css('marginLeft',-option.width/2-20);
    var oParent=$('.generalPageTipsMask');

    option.callback&&option.callback();
    setTimeout(function(){
        oParent.remove();
    },2000);
};





