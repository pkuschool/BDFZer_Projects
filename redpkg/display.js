var hb=[1.87,2.53,2.32,2.51,0.41,2.56,1.75,2.53,1.76,0.93,1.35,3.78,1.31];
var nme=["KingofAsgard","程培聪","零零壹","范维玅","Tommy Skywalker","李昊昌","膜法师","D.I.R&Shutdown&Diskpart&Ping","李驰","刘语辰","锡源","Kirito","杨瑞轩"]
var len=13;
var maxnmel=0;
var minnmel=0;
var min=hb[0];
var max=hb[0];
for(i=0;i<len;i++){
    if(min>hb[i]){
        min=hb[i];
        minnmel=i;
    }
    if(max<hb[i]){
        max=hb[i];
        maxnmel=i;
    }
}
for(var i=0;i<len;i++){
    if(maxnmel==i){
        document.write("<tr style='color:goldenrod'><th class='name'><b>"+nme[i]+"</b></th><th class='marg'></th><th class='money'><b>￥"+hb[i]+"</b></th></tr>");
    }else if(minnmel==i){
        document.write("<tr style='color:darkred'><th class='name'><b>"+nme[i]+"</b></th><th class='marg'></th><th class='money'><b>￥"+hb[i]+"</b></th></tr>");

    }else{
            document.write("<tr style><th class='name'>"+nme[i]+"</th><th class='marg'></th><th class='money'>￥"+hb[i]+"</th></tr>");

    }
}