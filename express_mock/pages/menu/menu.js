var util = require('../../utils/util.js')
Page({
  data: {
    menulist: []
  },
  onLoad: function () {
    var _this = this;
    wx.request({
      url: 'http://localhost:3000/menulist',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data, 'res');
        _this.setData({
          menulist: res.data
        })
      }
    })
  }
})