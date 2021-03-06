//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies: [
      { url: 'http://p7b85tdui.bkt.clouddn.com/swiper1.png' },
      { url: 'http://p7b85tdui.bkt.clouddn.com/swiper2.png' },
      { url: 'http://p7b85tdui.bkt.clouddn.com/swiper3.png' },
    ] ,
    show:true,
    courseList:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    getApp().editTabBar();
    this.sendAjax(); 
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  sendAjax(){
    wx.request({
      url: app.globalData.serverUrl +'subject_list.php',
      data:{},
      success:(res)=>{
        if (res.statusCode == 200){
          this.setData({
            courseList:res.data
          })
        }
      }
    })
  },
  //跳到课程详情页
  goCourseDetail(e){
    console.log(e)
    let courseId = e.currentTarget.dataset.id;
    let title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../courseDetail/courseDetail?id=' + courseId+'&title='+title,
    })
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
