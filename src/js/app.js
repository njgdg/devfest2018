$(document).ready(function(){
  function initMap (data) {
    if (!data) {
      data = {};
    }
    var map = $('#Map');

    var address = map.data('address');
    if (address) {
      data.lng = map.data('lng');
      data.lat = map.data('lat');
      data.address = address;
      data.title = map.data('title');
    }

    var lnglat=new AMap.LngLat(data.lng, data.lat);
    var mapObj=new AMap.Map("Map",{
      view: new AMap.View2D({
        center:lnglat,
        zoom:13,
        rotation:0
      }),
      lang:"zh_cn",
      scrollWheel: false
    });
    var marker = new AMap.Marker({
      map:mapObj, //将点添加到地图
      position:new AMap.LngLat(data.lng, data.lat),
      icon:" http://webapi.amap.com/images/0.png  ",//marker图标，直接传递地址url
      offset:new AMap.Pixel(-10,-35) //相对于基点的位置
    });

    var info = [];
    info.push("<div style=\"font-size:16px;line-height: 1.8\">"+ data.title);
    info.push("<div style=\"font-size:14px;\">"+ data.address +"</div></div>")

    var inforWindow = new AMap.InfoWindow({
      offset:new AMap.Pixel(0,-23),
      content:info.join("<br>"),
      size: new AMap.Size(320, 100)
    });
    AMap.event.addListener(marker,"click",function(e){
      inforWindow.open(mapObj,marker.getPosition());
    });
    inforWindow.open(mapObj,marker.getPosition());
  }

  // 地图
  initMap();
});
