const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseId:'',
    brief:'',
    chapter:[],
    secondChapterId:0,
    hidden:true
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
  /*处理用户登录 */
  handleLogin(e){
    let that = this;
    console.log(e)
    wx.login({
      success: function (res) {
        console.log(res)
        // console.log(res)
        // app.globalData.code = res.code
        // wx.getUserInfo({
        //   withCredentials: true,
        //   lang: '',
        //   success: function (res) {
        //     app.globalData.nickName = res.userInfo.nickName;
        //     app.globalData.avatarUrl = res.userInfo.avatarUrl;
        //     wx.request({
        //       url: app.globalData.serverUrl + 'piionee/industry/smallApp/beforeSign',
        //       data: {
        //         code: app.globalData.code,
        //       },
        //       success: (res) => {
        //         if (res.data.status == 0) {
        //           app.globalData.openid = res.data.openId;
        //           if (!res.data.is_user) {
        //             wx.request({
        //               url: app.globalData.serverUrl + 'piionee/industry/smallApp/sign',
        //               data: {
        //                 account: app.globalData.openid,
        //                 nickName: app.globalData.nickName,
        //                 cover: app.globalData.avatarUrl
        //               },
        //               success: (res) => {
        //                 if (res.data.status == 0) {
        //                   if (res.data.is_success) {
        //                     app.globalData.is_user = res.data.is_user;
        //                     app.globalData.user_id = res.data.user_id;
        //                     that.setData({
        //                       avatarUrl: app.globalData.avatarUrl,
        //                       nickName: app.globalData.nickName
        //                     })
        //                   }
        //                 }
        //               }
        //             })
        //           }
        //         }
        //       }
        //     })
        //   },
        //   fail: function (res) { console.log(res) },
        //   complete: function (res) { },
        // })

      }
    });
  },
  /*处理视频播放*/
  handlePlayVideo(e){
    console.log(e)
  } ,
  /*处理用户购买*/
  handleBuy(e) {
    if (!app.globalData.is_user) {
      this.setData({
        hidden: false
      })
    } else {
      
    }
  },
  confirm() {
    this.setData({
      hidden: true
    })
    wx.navigateTo({
      url: '../personal/personal',
    })
  },
  cancel() {
    this.setData({
      hidden: true
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