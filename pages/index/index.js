Page({
  data: {
    imgs: [
      '/img/shouji.jpg',
      '/img/xiangji.jpg',
      '/img/xiangjiao1.jpg',
      '/img/caomei1.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 2500,
  },
  shuma: function(){
    console.log('数码');
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: "/pages/shuma/shuma"
    })
  },
  fushi: function(){
    console.log('服饰');
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: "/pages/search/search"
    });
    wx.showToast({
      title: '成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  canyin: function(){
    console.log('餐饮');
    wx.showModal({
      title: '提示',
      content: '模态弹窗',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
            url: "/pages/search/search"
          });
        } else {
          console.log('用户点击取消')
        }

      }
    })
  },
  lingshi: function(){
    console.log('零食');
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: "/pages/search/search"
    })
  }

})