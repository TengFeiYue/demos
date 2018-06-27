import wepy from 'wepy'
import QQMapWX from './qqmap-wx-jssdk'

const location = {
  data:{
    city:'',
    lng:0,
    lat:0,
    province:'',
    area:''
  },
  getLocation(){
    return new Promise((resolve, reject) => {
      var that = this;
      var qqmapsdk = new QQMapWX({
        key: 'BFYBZ-FF73Q-FNK5G-GUK2J-5DUSO-6QBDJ' // 必填
      });
      var selectCity = wx.getStorageSync('getSeleCity');
      wx.getLocation({
        type: 'wgs84',
        success: function(res) {
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: function(addressRes) {
              that.data.city = selectCity == '' ? addressRes.result.address_component.city : selectCity;
              that.data.province = addressRes.result.address_component.province;
              that.data.lng = addressRes.result.location.lng;
              that.data.lat = addressRes.result.location.lat;
              that.data.area = addressRes.result.address_component.district;
              resolve(that.data);
            }
          })
        },
        fail:function(err){
            that.data.city = selectCity == '' ? '上海市' : selectCity;
            resolve(that.data);
        }
      })
    })

  }
}
export default location
