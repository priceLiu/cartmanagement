/// <reference path="/include/js/jquery/jquery-1.4.1-vsdoc.js" />
/// <reference path="/include/js/jquery/jquery.form.js" />
/// <reference path="/include/js/jquery/jquery.blockUI.js" />
/// <reference path="/include/js/jquery/jquery.cookie.js" />


/*
财付通违章代办
创建时间:2010-8-16
*/
var AppRootPath = ""; //应用所在根目录，""：网站根目录、"/XXX"：虚拟目录
var SelectTemp = '<div class="blank"></div><div ID="SelectDiv" class="gongxi"><p><img src="' + AppRootPath + '/images/loading2.gif" />违章信息正在查询中,请稍候……</p><div class="gongxi4"></div></div>';
var _posHeight = 21;
var AreaXml;

var NewCar = {
    //获取url参数
    queryString: function (item) {
        var sValue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"));
        return sValue ? sValue[1] : sValue;
    },

    //初始化省份信息
    InitProvince: function () {
        var tmp1 = "";
        var tmp2 = "";

        $("province", AreaXml).each(function () {
            if ($(this).attr("sp") != 2) {
                tmp1 += '<option value="' + $(this).attr("name") + '">' + $(this).attr("name") + '</option>';
            }

            tmp2 += '<option value="' + $(this).attr("abbr") + '">' + $(this).attr("abbr") + '</option>';
        });
        $("#Province").html(tmp1);
        $("#Abbr").html(tmp2);
        NewCar.ChangeProvince();
    },

    SetProvince: function (obj) {
        $("#SelectDivBody").empty().append('<div class="CityList"></div>');
        $("province", AreaXml).each(function () {
            $(".CityList").append("<a href=\"javascript:void(null)\" VID='" + $(this).attr("name") + "' VName='" + $(this).attr("name") + "'>" + $(this).attr("name") + "<\/a>");
        });

        $("#SelectDivBody").append('<div class="clear"></div>');
        $("#SelectDivBody").find('a').click(function () {
            var tmp2 = "";
            tmp2 = '<option value="' + $(this).attr("VName") + '">' + $(this).attr("VName") + '</option>';
            $("#province").html(tmp2);
            $("#SelectDiv").hide();
        });
        var offset = $(obj).offset();
        $('#SelectDivHead').text('选择省份');
        $("#SelectDiv").css({ "left": offset.left, "top": offset.top + 21 }).show();
    },


    SetVehicle: function (obj) {
        $("#SelectDivBody").empty().append('<div class="CityList"></div>');
        $("province", AreaXml).each(function () {
            $(".CityList").append("<a href=\"javascript:void(null)\" VID='" + $(this).attr("abbr") + "' VName='" + $(this).attr("abbr") + "'>" + $(this).attr("abbr") + "<\/a>");
        });

        $("#SelectDivBody").append('<div class="clear"></div>');
        $("#SelectDivBody").find('a').click(function () {
            var tmp2 = "";
            tmp2 = '<option value="' + $(this).attr("VName") + '">' + $(this).attr("VName") + '</option>';
            $("#Abbr").html(tmp2);
            $("#SelectDiv").hide();
            NewCar.ChangeProvince();
            NewCar.Keywords($(this).attr("VName"), 'A', true);
        });
        var offset = $(obj).offset();
        $('#SelectDivHead').text('选择车牌');
        $("#SelectDiv").css({ "left": offset.left, "top": offset.top + 21 }).show();
    },


    ChangeProvince: function () {
        ThisAbbr = $("province[name='" + $("#Province").val() + "']", AreaXml).attr("abbr");
        var CityName;
        var tmp1 = "";
        $("province[abbr='" + ThisAbbr + "']", AreaXml).find("city").each(function () {
            var ThisName = $(this).attr("name");
            tmp1 += '<option value="' + ThisName + '">' + ThisName + '</option>';
        });
        $("#City").html(tmp1);
        if ($("#Abbr").val() != ThisAbbr) {
            $("#City").show();
        }
        else {
            $("#City").show();  //IE6要先显示再隐藏，否则有时无法完全隐藏，属于IE6本身bug
            $("#City").hide();
        }
    },

    //修改车牌号
    ChangeVehicle: function (Vehicle) {
        Vehicle = Vehicle.toUpperCase();
        $("#FullVehicle").val(Vehicle);
        NewCar.Keywords(Vehicle.substring(0, 1), Vehicle.substring(1, 2), true);
    },

    //修改区域
    ChangeArea: function () {
        var tmp1 = $("province[name='" + $("#Province").val() + "']", AreaXml);
        var tmp2 = tmp1.find("city[name='" + $("#City").val() + "']");
        NewCar.Keywords(tmp1.attr("abbr"), tmp2.attr("abbr"), false);
    },

    //修改所需关键词
    Keywords: function (PAbbr, CAbbr, IfVehicle) {
        var VIN;
        var EIN;
        var Owner;
        var tmp1 = $("province[abbr='" + PAbbr + "']", AreaXml);
        var tmp2;
        if (tmp1.attr("sp") == 1) {
            tmp2 = tmp1.find("city");
        }
        else if (tmp1.attr("sp") == 2) {
            tmp1 = $("province[name='" + $("#Province").val() + "']", AreaXml);
            tmp2 = tmp1.find("city:eq(0)");
            $("#City").show();
        }
        else {
            tmp2 = tmp1.find("city[abbr='" + CAbbr + "']");
        }

        if (IfVehicle) {
            setTimeout(function () {
                $("#Province")[0].value = tmp1.attr("name");
                NewCar.ChangeProvince("#Province");
            }, 1);
            setTimeout(function () {
                $("#City")[0].value = tmp2.attr("name");
            }, 1);
        }
        setTimeout(function () {
            VIN = tmp2.attr("vin");
            EIN = tmp2.attr("ein");
            Owner = tmp2.attr("owner");

            if (VIN > 0) {
                if (VIN == 8) $("#VIN").next().text("请填写完整的车辆识别代号");
                else $("#VIN").next().text("请填写车辆识别代号后" + VIN + "位");
                $("#VIN").closest("span").show();
            }
            else {
                $("#VIN").val("").closest("span").hide();
            }

            if (EIN > 0) {
                if (EIN == 8) $("#EIN").next().text("请填写完整的发动机号码");
                else $("#EIN").next().text("请填写发动机号后" + EIN + "位");
                $("#EIN").closest("span").show();
            }
            else {
                $("#EIN").val("").closest("span").hide();
            }

            if (Owner > 0) {
                $("#OwnerName").closest("span").show();
            }
            else {
                $("#OwnerName").val("").closest("span").hide();
            }
        }, 2);
    },

    //搜索违章
    SearchViolation: function (Obj) {
        Top1.SetLoading('请稍候！正在为你查询...');
        if ($(Obj)[0].tagName.toLowerCase() == 'form') {
            $.cookie('CarInfo', encodeURI(
                $('#Abbr').val() + '^' +
                $('#Vehicle').val() + '^' +
                $('#Province').val() + '^' +
                $('#City').val() + '^' +
                $('#VIN').val() + '^' +
                $('#EIN').val()));
            if ($.cookie('ToponeUser') == null) {
                location.href = AppRootPath + '/Member/Login.aspx?ReturnUrl=' + encodeURI(location.href);
                return false;
            }
            $(Obj).ajaxSubmit({
                success: NewCar.DataProcess,
                dataType: "json"
            });
        }
        else {
            $.get($(Obj).attr('href'), { Ajax: 'True' }, NewCar.DataProcess, 'json');
        }
    },

    DataProcess: function (data) {
        if (data.error == 0) {
            window.location.href = data.message;
        }
        else {
            Top1.ClrLoading();
            var TmpStr = '<h3 style="font-size:12px;">{0}</h3><p style="margin-top:5px;"><a href="{2}">{1}</a></p>'.Format(data.message, "您也可以手工添加违章信息", "/UCenter/Order.aspx?act=add");
            Top1.SetLoading(TmpStr);
        }
    },

    //检查输入是否正确
    CheckInput: function () {
        $("#WzForm span").removeClass("fm-error");
        var regVehicle = /^([A-Z]{1})([a-zA-Z0-9]{3,5})$/
        if ($("#Vehicle").val().length < 6 || !regVehicle.test($("#Vehicle").val())) {
            $("#Vehicle").closest("span").addClass("fm-error");
            $("#Message").text("车牌号不完整，请检查");
            return false;
        }
        else if ($("#VIN").closest("span").css("display") != "none" && $("#VIN").val().length < 4) {
            $("#VIN").closest("span").addClass("fm-error");
            $("#Message").text("车架号不完整，请检查");
            return false;
        }
        else if ($("#EIN").closest("span").css("display") != "none" && $("#EIN").val().length < 4) {
            $("#EIN").closest("span").addClass("fm-error");
            $("#Message").text("发动机号不完整，请检查");
            return false;
        }

        if ($("#City").css("display") != "none") {
            $('#hid_City').val($("#City").val());
        }
        else {
            $('#hid_City').val("");
        }
        if ($("#OwnerName").closest("span").css("display") != "none") {
            $('#hid_OwnerName').val($("#OwnerName").val());
        }
        else {
            $('#hid_OwnerName').val("");
        }
        if ($("#VIN").closest("span").css("display") != "none") {
            $('#hid_VIN').val($("#VIN").val());
        }
        else {
            $('#hid_VIN').val("");
        }
        if ($("#EIN").closest("span").css("display") != "none") {
            $('#hid_EIN').val($("#EIN").val());
        }
        else {
            $('#hid_EIN').val("");
        }
        var SubmitUrl = AppRootPath + "/Handler/IsVerificationCodeValid.ashx?checkcode=" + $("#txtCheckCode").val();
        $.ajax({
            url: SubmitUrl, type: "get", dataType: "html", cache: false, ifModified: true, data: "", success: function (msg) {
                if (msg != "1") {
                    $("#Message").text("验证码错误");
                    return false;
                } else {
                    NewCar.LoadPage();
                    $("#WzForm").submit();
                }
            }
        });

        //return true;
    },
    LoadPage: function () {
        var Height = $(document).height();
        var Width = $(window).width();
        var stop = $(window).scrollTop();
        var topH = stop + parseInt(Height) / 6;
        $('body').append(SelectTemp);
        $('#SelectDiv').css({
            'top': topH + 'px',
            'left': '40%',
            'position': 'absolute',
            'margin': '0 auto',
            'BOTTOM': '35px',
            'CURSOR': 'pointer',
            'RIGHT': '0px',
            '_position': 'absolute',
            'padding-left': '20px',
            'padding-top': '15px',
            '_right': 'auto'
        }).show();
        var Height = $(document).height();
        var Width = $(window).width();
        $(".blank").width(Width).height(Height).fadeTo("slow", 0.5);
    },
    //取消订单
    CancelOrder: function (OrderNumber) {
        if (!confirm("确定要取消该订单吗？")) {
            return;
        }

        var strurl = AppRootPath + "/Handler/CancelOrder.ashx?ON=" + OrderNumber;
        $.ajax({
            url: strurl, type: "get", dataType: "html", cache: false, ifModified: true, data: "", success: function (msg) {
                if (msg == "1") {
                    alert("取消成功！");
                    location.href = AppRootPath + "/Member/OrderInquiry.aspx";
                }
                else {
                    alert(msg);
                }
            }
        });
    },
    //初始化
    Init: function () {
        $.get(AppRootPath + '/Config/Area.xml', { Time: new Date().getTime() }, function (data) {
            AreaXml = data;
            NewCar.InitProvince();
            if (Top1.UrlQueryStr('c') != null) {
                var City = decodeURI(Top1.UrlQueryStr('c'));
                var CityObj = $('city[name="' + City + '"]', AreaXml);
                var CityAbbr = CityObj.attr('abbr');
                var ProvinceAbbr = CityObj.closest('province').attr('abbr');
                if (CityObj.length > 0) {
                    if (CityAbbr != undefined) {
                        $('#Vehicle').val(CityAbbr);
                    }
                    $('#Abbr').val(ProvinceAbbr);
                }
            }
            $('#Vehicle').keyup();

        }, "xml");
    }
}