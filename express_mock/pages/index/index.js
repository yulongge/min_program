//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '菜单列表',
    toEat: "猜饭",
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindMenuTap: function() {
    wx.navigateTo({
      url: '../menu/menu'
    })
  },
  bindToEatTap: function () {
    wx.navigateTo({
      url: '../toeat/toeat'
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
  }
})
