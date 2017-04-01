//index.js
//获取应用实例
//http://blog.csdn.net/tycsbs/article/details/52690007?_t_t_t=0.7465108021865636 参考网址
var app = getApp()
Page( {

  data: {
    //默认未获取地址
    hasLocation: true    
  },
  onLoad:function(){
      var that = this
      wx.getLocation( {
      success: function( res ) {
        console.log( res )
        that.setData( {
          hasLocation: true,
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          }
        })
      }
    })
  },
  //获取经纬度
  getLocation: function(e) {    
    var that = this
    wx.getLocation( {
      success: function( res ) {
        console.log( res )
        that.setData( {
          hasLocation: true,
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          }
        })
      }
    })
  },
  //根据经纬度在地图上显示
  openLocation: function( e ) {
    var value = e.detail.value
    wx.openLocation( {
      longitude: Number( value.longitude ),
      latitude: Number( value.latitude )
    })
  }
})