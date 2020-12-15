// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locString: "点击选择位置",
    currentImage: "/src/static/p4.jpg",
    userName: "未加载"
  },

  locationC: function(){
    var that= this;
    wx.chooseLocation({
      success: function(res){
        that.setData({locString:res.address});
      }
    })
  },

  getImage: function(){
    var that = this;
    wx.chooseImage({
      count:9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res){
        that.setData({currentImage: res.tempFilePaths});
      }
    })
  },

  bindGetUserInfo: function(){
    var that = this;
    wx.getUserInfo({
      success: function(res){
        console.log(res);
        that.setData({userName: res.userInfo.nickName})
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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