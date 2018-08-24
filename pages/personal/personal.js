const app = getApp();
Page({
  onLoad(){
    getApp().editTabBar(); 
  },
  buyCourseHis(){
    wx.navigateTo({
      url: '../courseHis/courseHis',
    })
  }
})