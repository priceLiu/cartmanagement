<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication1.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

</head>
<body>
    <form runat="server" id="WzForm" method="post" style="position: relative">
        <div class="index_banner_left" style="margin-top: 15px; padding-left: 68px;">
            <span>车辆类型：
                <select id="VehicleType" name="VehicleType" style="width: 100px;">
                    <option value="01">小型车
                    </option>
                    <option value="03">大型车
                    </option>
                    <option value="04">外籍汽车
                    </option>
                    <option value="05">两、三轮摩托车
                    </option>
                    <option value="06">境外摩托车
                    </option>
                    <option value="07">外籍摩托车
                    </option>
                    <option value="08">挂车
                    </option>
                    <option value="09">香港入出境车
                    </option>
                    <option value="10">澳门入出境车
                    </option>
                </select>
            </span>
            <span style="width: 326px; padding-left: 14px;">车牌号：
                <select id="Abbr" name="Abbr" onchange="$('#Vehicle').keyup();">
                    <option value="粤">粤
                    </option>
                    <option value="沪">沪
                    </option>
                    <option value="京">京
                    </option>
                    <option value="桂">桂
                    </option>
                    <option value="浙">浙
                    </option>
                    <option value="苏">苏
                    </option>
                    <option value="闽">闽
                    </option>
                    <option value="渝">渝
                    </option>
                    <option value="湘">湘
                    </option>
                    <option value="冀">冀
                    </option>
                    <option value="鲁">鲁
                    </option>
                    <option value="辽">辽
                    </option>
                    <option value="鄂">鄂
                    </option>
                    <option value="川">川
                    </option>
                    <option value="陕">陕
                    </option>
                    <option value="晋">晋
                    </option>
                    <option value="豫">豫
                    </option>
                    <option value="皖">皖
                    </option>
                    <option value="贵">贵
                    </option>
                    <option value="甘">甘
                    </option>
                    <option value="宁">宁
                    </option>
                    <option value="黑">黑
                    </option>
                    <option value="吉">吉
                    </option>
                    <option value="琼">琼
                    </option>
                    <option value="蒙">蒙
                    </option>
                    <option value="云">云
                    </option>
                    <option value="赣">赣
                    </option>
                </select>
                <input maxlength="8" id="Vehicle" name="Vehicle" value="A" class="CarInfoInput2" onkeyup="NewCar.ChangeVehicle($('#Abbr').val()+$('#Vehicle').val());" type="text" />
                <input id="FullVehicle" name="FullVehicle" value="粤B0WY15" type="hidden" />
            </span>
            <span>违章区域：
                <select id="Province" name="Province" onchange="NewCar.ChangeProvince(this); NewCar.ChangeArea();" style="width: 80px;">
                    <option value="广东省">广东省
                    </option>
                    <option value="上海市">上海市
                    </option>
                    <option value="北京市">北京市
                    </option>
                    <option value="浙江省">浙江省
                    </option>
                    <option value="江苏省">江苏省
                    </option>
                    <option value="福建省">福建省
                    </option>
                    <option value="重庆市">重庆市
                    </option>
                    <option value="湖南省">湖南省
                    </option>
                    <option value="河北省">河北省
                    </option>
                    <option value="山东省">山东省
                    </option>
                    <option value="辽宁省">辽宁省
                    </option>
                    <option value="湖北省">湖北省
                    </option>
                    <option value="四川省">四川省
                    </option>
                    <option value="陕西省">陕西省
                    </option>
                    <option value="山西省">山西省
                    </option>
                    <option value="河南省">河南省
                    </option>
                    <option value="安徽省">安徽省
                    </option>
                    <option value="贵州省">贵州省
                    </option>
                    <option value="甘肃省">甘肃省
                    </option>
                    <option value="宁夏">宁夏
                    </option>
                    <option value="黑龙江省">黑龙江省
                    </option>
                    <option value="吉林省">吉林省
                    </option>
                    <option value="海南省">海南省
                    </option>
                    <option value="内蒙古">内蒙古
                    </option>
                    <option value="云南省">云南省
                    </option>
                    <option value="江西省">江西省
                    </option>
                </select>
                <select style="display: none;" id="City" onchange="NewCar.ChangeArea();" name="City">
                    <option value="广州市">广州市
                    </option>
                    <option value="深圳市">深圳市
                    </option>
                    <option value="珠海市">珠海市
                    </option>
                    <option value="汕头市">汕头市
                    </option>
                    <option value="佛山市">佛山市
                    </option>
                    <option value="韶关市">韶关市
                    </option>
                    <option value="湛江市">湛江市
                    </option>
                    <option value="肇庆市">肇庆市
                    </option>
                    <option value="江门市">江门市
                    </option>
                    <option value="茂名市">茂名市
                    </option>
                    <option value="惠州市">惠州市
                    </option>
                    <option value="梅州市">梅州市
                    </option>
                    <option value="汕尾市">汕尾市
                    </option>
                    <option value="河源市">河源市
                    </option>
                    <option value="阳江市">阳江市
                    </option>
                    <option value="清远市">清远市
                    </option>
                    <option value="东莞市">东莞市
                    </option>
                    <option value="中山市">中山市
                    </option>
                    <option value="潮州市">潮州市
                    </option>
                    <option value="揭阳市">揭阳市
                    </option>
                    <option value="云浮市">云浮市
                    </option>
                    <option value="顺德">顺德
                    </option>
                    <option value="南海">南海
                    </option>
                    <option value="港澳入境车辆">港澳入境车辆
                    </option>
                </select>
                <input name="hid_City" id="hid_City" type="hidden" />
            </span>
            <span style="display: none;">车主姓名：
                <input id="OwnerName" name="OwnerName" type="text" />
            </span>
            <div>
            </div>
            <span>车身架号：
                <input id="VIN" name="VIN" type="text" />
                <label style="color: Red;">
                    请填写车辆识别代号后6位
                </label>
            </span>
            <div>
            </div>
            <span>发动机号：
                <input id="EIN" name="EIN" type="text" />
                <label style="color: Red;">
                    请填写发动机号后6位
                </label>
            </span>
            <span style="width: 286px; padding-left: 14px;">验证码：
                <input name="txtCheckCode" id="txtCheckCode" style="width: 80px;" type="text" />
                <asp:TextBox ID="txtCode" runat="server" style="width: 80px;" />
                <label>
                </label>
                <label id="chgImg">
                    <img id="ValidImg" src="/imgs/default.png" /></label>
            </span>
            <div>
            </div>
            <span class="index_banner_left3">
                <input value="违章查询" class="index_banner_left2" onclick="return NewCar.CheckInput();" type="button" />
                <label id="Message" style="color: Red;">
                </label>
            </span>

            <asp:Button runat="server" ID="btnPost" Text="submit" OnClick="btnPost_Click" />
        </div>
        <input name="hid_OwnerName" id="hid_OwnerName" type="hidden" />
        <input name="hid_VIN" id="hid_VIN" type="hidden" />
        <input name="hid_EIN" id="hid_EIN" type="hidden" />

        <div runat="server" id="divContent"></div>

    </form>
    <script src="http://code.jquery.com/jquery-1.9.1.js" type="text/javascript"></script>
    <script src="/scripts/newcar.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            SelectCity();
            $.get('/config/Area.xml', { Time: new Date().getTime() }, function (data) {
                AreaXml = data;
                NewCar.InitProvince();
                var VehicleType = '01';
                var Vehicle = 'B0wy15';
                var City = '深圳市';
                if (City != null && City != '') {
                    var CityObj = $('city[name="' + City + '"]', AreaXml);
                    var CityAbbr = CityObj.attr('abbr');
                    var ProvinceAbbr = CityObj.closest('province').attr('abbr');
                    if (CityObj.length > 0) {
                        $('#Vehicle').val(Vehicle);
                    }
                    $('#Abbr').val(ProvinceAbbr);
                }
                $('#Vehicle').keyup();
                $('#VehicleType').val(VehicleType);
            }, "xml");

            $("#ValidImg").attr("src", "http://wz.cheyooh.com/Tools/valid.aspx?" + Math.random());
            $("#chgImg").click(function () {
                $("#ValidImg").attr("src", "http://wz.cheyooh.com/Tools/valid.aspx?" + Math.random());
            });
        });

        function SelectCity() {
            $.get('/config/Area.xml', { Time: new Date().getTime() }, function (data) {//读取xml数据
                var AreaXml = data;
                var shengHtml = "";
                var j = 0;
                $("province", AreaXml).each(function () {
                    if ($(this).attr("sp") != 2) {
                        var ThisName = $(this).attr("name");
                        if (j < 14) {
                            shengHtml += "<a href='../WZ/AreaSearch.aspx?c=" + encodeURI(ThisName) + "'>" + ThisName.replace("省", "") + "</a>      ";
                        }
                    }
                    $("#p_sheng").html(shengHtml);
                });
            });

            var citys = "<strong>热门城市车辆违章查询：</strong><br />";
            citys += "<a href='../WZ/CitySearch.aspx?c=" + encodeURI("北京市") + "'>北京</a>、";
            citys += "<a href='../WZ/CitySearch.aspx?c=" + encodeURI("沈阳市") + "'>沈阳</a>、";
            citys += "<a href='../WZ/CitySearch.aspx?c=" + encodeURI("深圳市") + "'>深圳</a>、";
            citys += "<a href='../WZ/CitySearch.aspx?c=" + encodeURI("大连市") + "'>大连</a>、";
            citys += "<a href='../WZ/CitySearch.aspx?c=" + encodeURI("上海市") + "'>上海</a>、";
            citys += "<a href='../WZ/CitySearch.aspx?c=" + encodeURI("广州市") + "'>广州</a>、";
            citys += "<a href='../WZ/CitySearch.aspx?c=" + encodeURI("重庆市") + "'>重庆</a>、";
            citys += "<a href='../WZ/CitySearch.aspx?c=" + encodeURI("西安市") + "'>西安</a>、";
            citys += "<a href='../WZ/CitySearch.aspx?c=" + encodeURI("南京市") + "'>南京</a>";
            $("#p_shi").html(citys);
        }

    </script>
</body>
</html>
