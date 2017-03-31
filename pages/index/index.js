//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //motto: '功能列表',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  OnShareAppMessage:function(){
    return {
      title:'我的好伙伴',
      desc:'最全的小助手',
      path:'pages/index?id=123'
    }
  }
})
