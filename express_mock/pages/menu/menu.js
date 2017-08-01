var util = require('../../utils/util.js')
Page({
  data: {
    menulist: []
  },
  onLoad: function () {
    var _this = this;
    wx.request({
      url: 'http://localhost:3000/eatlist',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data.data, 'res');
        _this.setData({
          menulist: res.data.data.list
        })
      }
    })
  }
})