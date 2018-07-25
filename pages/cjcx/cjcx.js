var app=getApp();
var cj=null;//存放成绩
var xn=new Array
var cjfl={
  di1:[],
  di2: [],
  di3: [],
  di4: [],
  di5: [],
  di6: []
}
Page({

  data: {
    grxx:null,//个人信息
    xq:"大一上学期",
    xn: ["大一上学期", "大一下学期", "大二上学期", "大二下学期", "大三上学期","大三下学期"],//学年
    index:0,
    table:false,
    xqfs:[],//第一学期,
    css:'data',//控制CSS样式
    font_color:"",
    zhezhao:false//控制这招层是否显示
  },
  onLoad: function () {
  },
  onReady: function () {
    this.cj()
  },
  //切换学期
  table_qh:function(e){
      var that=this;
      that.setData({
        table:!(that.data.table)
      })
  },
  table_pd:function(e){
    console.log(e)
    var that=this;
    that.setData({
      xq:e.currentTarget.dataset.text,
      table:false
    })
   that.YearJudgment()
  },
  //成绩处理
  cj:function(){
    var that=this;
    that.setData({
      grxx: app.grxx
    })
    var xh=app.grxx.xh;
    xh = xh.slice(0, 2);
    cj=app.grcj;
    console.log(cj)
    xn[0] = "20" + "" + parseInt(xh) + "" + "-" + "20" + "" + (parseInt(xh)+1) + ""+"-"+"1"
    xn[1] = "20" + "" + parseInt(xh) + "" + "-" + "20" + "" + (parseInt(xh)+1) + ""+"-"+"2"
    xn[2] = "20" + "" + (parseInt(xh)+1) + "" + "-" + "20" + "" + (parseInt(xh)+2) + ""+"-"+"1"
    xn[3] = "20" + "" + (parseInt(xh)+1) + "" + "-" + "20" + "" + (parseInt(xh)+2) + ""+"-"+"2" 
    xn[4] = "20" + "" + (parseInt(xh)+2) + "" + "-" + "20" + "" + (parseInt(xh)+3) + ""+"-"+"1"
    xn[5] = "20" + "" + (parseInt(xh)+2) + "" + "-" + "20" + "" + (parseInt(xh)+3) + ""+"-"+"2"
    for(var i=0;i<cj.length;i++){
      if(cj[i].xnxqdm==xn[0]){
        cjfl.di1.push(cj[i])
      }
      if (cj[i].xnxqdm == xn[1]) {
        cjfl.di2.push(cj[i])
      }
      if (cj[i].xnxqdm == xn[2]) {
        cjfl.di3.push(cj[i])
      }
      if (cj[i].xnxqdm == xn[3]) {
        cjfl.di4.push(cj[i])
      }
      if (cj[i].xnxqdm == xn[4]) {
        cjfl.di5.push(cj[i])
      }
      if (cj[i].xnxqdm == xn[5]) {
        cjfl.di6.push(cj[i])
      }
    }
    that.YearJudgment()
  },
  //判断年份把数据绑定到前端数据
  YearJudgment:function(){
    var that=this;
    switch(that.data.xq){
      case '大一上学期': console.log(cjfl.di1);
          that.setData({
            xqfs: cjfl.di1
          })
       break;
      case '大一下学期': console.log(cjfl.di2);
        that.setData({
          xqfs: cjfl.di2
        })
       break;
      case '大二上学期': console.log(cjfl.di3);
        that.setData({
          xqfs: cjfl.di3
        });
         break;
      case '大二下学期': console.log(cjfl.di4);
        that.setData({
          xqfs: cjfl.di4
        });
       break;
      case '大三上学期': console.log(cjfl.di5);
        that.setData({
          xqfs: cjfl.di5
        });
       break;
      case '大三下学期': console.log(cjfl.di6);
        that.setData({
          xqfs: cjfl.di6
        });
       break;
    }
    console.log(that.data.xqfs)
    if(that.data.xqfs.length>=8){
        that.setData({
          css:"data1"
        })
    }
    else{
      that.setData({
        css: "data"
      })
    }
    if (that.data.xqfs.length<=0){
      that.setData({
        zhezhao: true
      })
    }
    else {
      that.setData({
        zhezhao: false
      })
    }
  },
  //渲染数据
  xiangxi:function(e){
    console.log(e)
    var datasj=e.currentTarget.dataset.text
    app.fs=datasj;
    wx.navigateTo({
      url: '../cjfl/cjfl'
    })
  }
})