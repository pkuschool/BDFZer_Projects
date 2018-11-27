var sender=prompt("请输入人名数据")
var imgres=prompt('请输入图片信息','rpkg.png')
var nme=prompt("请输入人名数据")
var nme=nme.split(',');
var hb=prompt("请输入数据");
var hb=hb.split(',');
var len=Number(hb.length);
var lb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,00,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var maxnmel=0;
var minnmel=0;
var min=hb[0];
var max=hb[0];
var ttl=0.0;
function de8(bytes) {
    var encoded = "";
    for (var i = 0; i < bytes.length; i++) {
        encoded += '%' + bytes[i].toString(16);
    }
    return decodeURIComponent(encoded);
}
function getQueryString(name) {
    var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}
function toDecimal2(x) {  
    var f = parseFloat(x);  
    if (isNaN(f)) {  
        return false;  
    }  
    var f = Math.round(x*100)/100;  
    var s = f.toString();  
    var rs = s.indexOf('.');  
    if (rs < 0) {  
        rs = s.length;  
        s += '.';  
    }  
    while (s.length <= rs + 2) {  
        s += '0';  
    }  
    return s;  
}  
for(i=0;i<len;i++){

    lb[i]=Number(hb[i]);
        if(min>lb[i]){
        min=lb[i];
        minnmel=i;
    }
    if(max<lb[i]){
        max=lb[i];
        maxnmel=i;
    }
    ttl=lb[i]+ttl;
}
var avg=ttl/len;

if(len==0){
    document.write('<div class="zhong" style="background-color:#d85940;" <br><img src='+imgres+' width="128" height="auto" width="100%" style="line-height: 80%"><br>'+"<span class='title' style='line-height: 200%;color: white'>"+ sender +"的红包</span><br>");
}else{
    document.write('<div class="zhong" style="background-color:#d85940"><br><img src='+imgres+' width="128" height="auto" width="100%" style="line-height: 80%"><br>'+"<span class='title' style='line-height: 200%;color: white'>"+ sender +"的红包</span><br>");

}
if(len>1){
    document.write("<h2 style='line-height:2.5em;'>"+len+"人瓜分了￥"+toDecimal2(ttl)+"<h2>");
    document.write("<p>手气王 <b>"+nme[maxnmel]+"</b> 竟领到了￥"+max+"</p>");
    document.write("<p>真非酋 <b>"+nme[minnmel]+"</b> 只领到了￥"+min+"</p>");
    document.write("<p>人均领到了￥"+toDecimal2(avg)+"</p>");
}else if(len==1){
    document.write("<h2 style='line-height:2.5em;'>总金额￥"+toDecimal2(ttl)+"<h2>");

}else{
    document.write("<h2>目前无人领取</h2>")
}

document.write('<br></div>');
if(len>1){
   document.write('<table><tr><strong><th class="name" style="font-size: 35px;">昵称</th><th class="marg"></th><th class="money" style="font-size: 35px;">金额</th></strong></tr>');
 
}
for(var i=0;i<len;i++){
    if(maxnmel==i&&len!=1){
        document.write("<tr style='color:goldenrod'><th class='name'><b>"+nme[i]+"</b></th><th class='marg'></th><th class='money'><b>￥"+lb[i]+"</b></th></tr>");
    }else if(minnmel==i&&len!=1){
        document.write("<tr style='color:darkred'><th class='name'><b>"+nme[i]+"</b></th><th class='marg'></th><th class='money'><b>￥"+lb[i]+"</b></th></tr>");

    }else{
            document.write("<tr style><th class='name'>"+nme[i]+"</th><th class='marg'></th><th class='money'>￥"+lb[i]+"</th></tr>");

    }
}
document.write("</table>")
