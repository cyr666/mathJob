const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseId:'',
    brief:'',
    chapter:[],
    secondChapterId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // var name = res.data.name.slice(0, 8) + "...";
    this.setData({
      courseId: options.id
    })
    this.sendAjax()
  },
  sendAjax(){
    wx.request({
      url: app.globalData.serverUrl + 'subject_detail.php',
      data: {
        id: this.data.courseId
      },
      success: (res) => {
        console.log(res)
        if (res.statusCode == 200) {
          wx.setNavigationBarTitle({
            title: res.data.title,
          })
          this.setData({
            brief: res.data.brief,
            chapter: res.data.chapter
          })
        }
      }
    })
  },
  showSecond(e){
    let secondChapterId = e.currentTarget.dataset.id;
    this.setData({
      secondChapterId: secondChapterId
    })
  },
  hiddenSecond(){
    this.setData({
      secondChapterId: 0
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
    
  }
})