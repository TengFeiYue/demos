/**
 * Created by 15066 on 2016/11/8.
 */
var common={};

common.init=function(){
	 common.checkFunc($(".checkInput"),$(".checkLabel"),"result");//复选框
    //初始化所有输入框焦点状态
    common.inputState($('.inputState'));
    common.backToTop($('.backtotop'));
    common.downList();//下拉框
	//common.collectFunc();//收藏状态变更;
    //图片预览
    common.perfectPicView();
    //发布材料弹出层全选
    common.pubSel($('.selTotal'),$(".subInputSel"));
    common.pubSel($('.selTotal2'),$(".subInputSel2"));
    common.pubSel($('.selTotal3'),$(".subInputSel3"));
	common.pageCenter();//页码居中

    //邮件发送
    //common.emailSend();
};
$(document).ready(common.init);
//页码居中
common.pageCenter = function(){
	$(".page-box").css({'margin-left':-0.5*$(".page-box").width()-5});
};
	
//经过显示当前区块下内容，离开隐藏；
common.menu=function(obj1,sClass,obj2){
    obj1.hover(function(){
        $(this).addClass(sClass).siblings().removeClass(sClass);
        $(this).find(obj2).show()
    },function(){
        $(this).removeClass(sClass);
        $(this).find(obj2).hide()
    })
};
//点击添加当前状态
common.current = function($obj,hover){
    $obj.click(function(){
        $(this).addClass(hover).siblings().removeClass(hover);
    });
};
//循环添加属性
common.addAttr=function(array1,array2,attr){
    var size=array2.size();
    for(var i=0;i<size;i++){
        var kind=attr+i;
        array1.eq(i).attr("id",kind);
        array2.eq(i).attr("name",kind);
        array2.eq(i).attr("for",kind);
    }
};

//给偶数行添加背景
common.bgFunc = function($obj,bg){
	$obj.addClass(bg);
	};
//复选款
common.checkFunc = function(array1,array2,attr){
    //绑定id,name,for属性；
    this.addAttr(array1,array2,attr);
    //添加样式
    array2.bind('click',function() {
        var radioId = $(this).attr('name');
        if($(this).hasClass("checked")){
        	 
            $(this).removeClass("checked").siblings(".checkInputBox[type='checkbox']").removeAttr('checked').end().siblings('#' + radioId).removeAttr('checked');

        }else{
            $(this).addClass("checked").siblings(".checkInputBox[type='checkbox']").attr('checked', 'checked').end().siblings('#' + radioId).attr('checked', 'checked');

        }
    })
};

//模拟下拉框
common.downList=function(){
    $(".selectCon").each(function(){
        var value=$(this).find('li').eq(0).html();
        var dataId=$(this).find('li').eq(0).attr('data-id');
        $(this).siblings().html(value)
        $(this).siblings().attr('data-id',dataId);
    });
    common.downListFunc();
};
common.downListFunc = function(){
    var oSelect=$(".selectCon li");
    var oIndustry=$(".industry").find("a");
    oIndustry.click(function(){
        $(this).siblings(".selectCon").show();
    });
    oSelect.hover(function(){
        oSelect.removeClass("hover");
        $(this).addClass("hover")
    },function(){});
    oSelect.click(function(){
        var sVal=$(this).html();
        var dataId=$(this).attr('data-id');
        $(this).parent().siblings().html(sVal);
        $(this).parent().siblings().attr('data-id',dataId);
        

        $(this).parent().hide();
    });
    $(document).click(function(e){
        e = window.event || e;
        var obj = e.srcElement || e.target;
        var s=obj.className;
        if(obj.className=="select"){
            $(".selectCon").hide();
            $(obj).siblings(".selectCon").show();
        }
        else{
            $(".selectCon").hide();
        }
    });
};



//滚动条会顶部
common.backToTop = function(obj){
    obj.click(function(){
        $('html, body').animate({scrollTop:0}, 200);
    });
};
//点击展开收起；
common.fnOpen=function(obj1,obj2,obj3,fn){

    obj1.each(function(n){
        $(this).bind("click", function(){
        	fn&&fn();
            var _this=$(this);
            obj2.eq(n).slideDown(function(){
                fnDown(n,_this);
            });
        })
    });
    obj3.each(function(n){
        $(this).bind("click", function(){
            obj2.eq(n).slideUp(function(){
                fnUp(n,obj1)
            });
        })
    });
};

function fnDown(index,obj){
    $('.levelCategory .box .absLine').eq(index).css('borderColor','#eb3e2f');
    obj.parent().css('display','none');
}
function fnUp(index,obj1){
    $('.levelCategory .box .absLine').eq(index).css('borderColor','#0bb393');

    obj1.eq(index).parent().css('display','block');
}

// 经过添加类移除类
common.hoverLabel=function(obj,sClass){
    obj.hover(function(){
        $(this).addClass(sClass);
    },function(){
        $(this).removeClass(sClass);

    })
};
//输入框获得失去焦点的状态
common.inputState=function(obj){
    obj.each(function(){
        var vDefault=this.value;
        $(this).focus(function(){
            if($(this).val()==vDefault){
                $(this).val("");
            }
        });
        $(this).blur(function(){
            if($(this).val()==""){
                $(this).val(vDefault);
            }
        })
    });
};
//图片预览
common.perfectPicView=function(){
    var oBtn=$(".perfectPicView span");
    var oMask=$(".viewMask");
    var oCon=$(".viewPiCCon");
    var oClose=$('.commonMaskClose');
    var oViewImg=$(".viewPiCCon img");

    oBtn.bind('click',function(){
        var oSrc=$(this).siblings().attr('src');
        oViewImg.attr('src',oSrc);
        oCon.show();
        oCon.css('marginTop',-oCon.outerHeight()/2);
        oMask.show();
    });
    oClose.bind('click',function(){
        oCon.hide();
        oMask.hide();
    })
};

//发布材料弹出层全选
common.pubSel=function(obj1,obj2,fn){
    var oTotal=obj1.find('label');
    var aSub=obj2.find('label').filter('.totalLabel');

    oTotal.bind('click',function(){
        if($(this).hasClass('checked')){
            aSub.addClass('checked')
        }else{
            aSub.removeClass('checked')
        }
        fn&&fn();
    })
};
//邮件发送
common.emailSend=function(){
    // var oSendBtn=$(".eMailSendBtn");
    var oMask=$(".emailMask");
    var oCon=$(".emailSendMask");
    var oClose=$(".emailClose");

    oMask.show();
    oCon.show();
    /*oSendBtn.bind('click',function(){
        oMask.show();
        oCon.show();
    });*/

    oClose.bind('click',function(){
        oMask.hide();
        oCon.hide();
    });

    //邮件发送验证
    //common.checkEmail();
};


//邮件发送验证
common.checkEmail=function(fn){
    var oReceiver=$(".receiverPerson");
    var oEmailForm=$(".emailForm");
    //收件人邮箱
    oReceiver.blur(function(){
        checkEmail()
    });

    oEmailForm.submit(function(){
        if(checkEmail()){
            var sVal = $(".receiverPerson").val();
            fn&&fn(sVal);
            return false;
        }else{
            return false;
        }
    });
        //检查邮箱
    function checkEmail(){
        var oValue1=oReceiver.val();
        if(check_mail(oValue1)){
            successState(oReceiver);
            return true;
        }else{
            errorState(oReceiver);
            return false;
        }
    }

    //成功状态
    function successState(obj){
        obj.siblings('p').hide();
        obj.siblings('i').removeClass('error');
        obj.siblings('i').addClass('success');
    }
    //失败状态
    function errorState(obj){
        obj.siblings('p').show();
        obj.siblings('i').removeClass('success');
        obj.siblings('i').addClass('error');
        obj.siblings('i').show();
    }
    //验证邮箱
    function check_mail(str){
        var regex=new RegExp("^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$");
        return regex.test(str);
    }

};













