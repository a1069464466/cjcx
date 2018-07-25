// pages/cjfl/cjfl.js
var app=getApp()
Page({
  data: {
      fs:"",//分数
      css:"",//控制PASS
      images:""//控制图片背景
  },
  onLoad: function () {
      this.adata()
  },
  //填充数据
  adata:function(){
    var that=this;
    that.setData({
      fs:app.fs
    });
    console.log(app.fs)
    console.log(this.data.fs);
    if(that.data.fs.cj<60){
        that.setData({
          css:"../../images/buhege.png",
          images: "../../images/xiong1.png"
        })
    }
    else {
      that.setData({
        css: "../../images/hege.png",
        images: "../../images/xiong2.png"
      })
    }
  }
})


