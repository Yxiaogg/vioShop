// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.eawsp.com/api/creditCard/getCreditCardImg', //仅为示例，并非真实的接口地址
      data: {
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"  //post
      },
      success: function (res) {
        if (res.data.code == 0) {
          console.log(res.data.data.data);
          that.setData({
            card: res.data.data.data
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/pages/user?id=123'
    }
  }
})