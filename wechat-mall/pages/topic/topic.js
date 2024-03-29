var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var app = getApp()
Page({
    data: {
        // text:"这是一个页面"
        topicList: [],
        page: 1,
        size: 10,
        count: 0,
        scrollTop: 0,
        showPage: false,
        img_url:app.globalData.img_url,
        totalPages:0,
        currentPage:0
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        this.getTopic();

    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
    nextPage: function (event) {
      console.log();
        var that = this;
        if (this.data.currentPag<= this.data.totalPages) {
            return true;
        }

        
        that.setData({
            "page": parseInt(that.data.currentPage) + 1
        });

        this.getTopic();
        
    },
    getTopic: function(){
       
        let that = this;
         that.setData({
            scrollTop: 0,
            showPage: false,
            topicList: []
        });
        // 页面渲染完成
        wx.showToast({
            title: '加载中...',
            icon: 'loading',
            duration: 2000
        });

        util.request(api.TopicList, { page: that.data.page, size: that.data.size }).then(function (res) {
          if (res.errno === 0) {

            that.setData({
              scrollTop: 0,
              topicList: res.data.data,
              showPage: true,
              count: res.data.count,
              totalPages:res.data.totalPages,
              currentPage:res.data.currentPage
            });
          }
          wx.hideToast();
        });
        
    },
    prevPage: function (event) {
        if (this.data.page <= 1) {
            return false;
        }

        var that = this;
        that.setData({
            "page": parseInt(that.data.page) - 1
        });
        this.getTopic();
    }
})