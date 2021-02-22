// pages/login/login.js

// 获取应用实例
const app = getApp()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		motto: 'Hello World',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// //获取视频context
		// const context = wx.createCameraContext()
		// //注册帧回调函数
		// const listener = context.onCameraFrame((frame) => {
		// 	//打印返回数据是否是一个ArrayBuffer，并且返回每一帧的大小
		// 	console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)
		// })
		// //启动监听
		// listener.start({
		// 	success: function () {
		// 		console.log("调用成功")
		// 	},
		// 	fail: function () {
		// 		console.log('调用失败')
		// 	},
		// 	complete: function () {
		// 		console.log('调用start')
		// 	}
		// })




		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},

	// 事件处理函数
	// bindViewTap() {
	// 	wx.navigateTo({
	// 		url: '../logs/logs'
	// 	})
	// },

	getUserInfo(e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	},
    
    // rt: function (e) {
	// 	console.log(e, 'e')
	// },

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