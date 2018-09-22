var SPEAKERS_DATA = [
  {
    speakerName: '储刘火',
    speakerTitle: '嵌入式与Android专家',
    speakerAvatar: './src/img/devfest2016.jpg',
    speakerDesc: '安徽工业大学本硕，嵌入式与Android开发6年，近4年专注于智能硬件、机器视觉与人工智能方向，地平线机器人ADAS产品负责人。爱挑战的运动型码农。',
    topicName: '《基于人工智能的ADAS应用》',
  },
  {
    speakerName: '储刘火',
    speakerTitle: '嵌入式与Android专家',
    speakerAvatar: './src/img/devfest2016.jpg',
    speakerDesc: '安徽工业大学本硕，嵌入式与Android开发6年，近4年专注于智能硬件、机器视觉与人工智能方向，地平线机器人ADAS产品负责人。爱挑战的运动型码农。',
    topicName: '《基于人工智能的ADAS应用》',
  },
  {
    speakerName: '储刘火',
    speakerTitle: '嵌入式与Android专家',
    speakerAvatar: './src/img/devfest2016.jpg',
    speakerDesc: '安徽工业大学本硕，嵌入式与Android开发6年，近4年专注于智能硬件、机器视觉与人工智能方向，地平线机器人ADAS产品负责人。爱挑战的运动型码农。',
    topicName: '《基于人工智能的ADAS应用》',
  },
  {
    speakerName: '储刘火',
    speakerTitle: '嵌入式与Android专家',
    speakerAvatar: './src/img/devfest2016.jpg',
    speakerDesc: '安徽工业大学本硕，嵌入式与Android开发6年，近4年专注于智能硬件、机器视觉与人工智能方向，地平线机器人ADAS产品负责人。爱挑战的运动型码农。',
    topicName: '《基于人工智能的ADAS应用》',
  },
  {
    speakerName: '储刘火',
    speakerTitle: '嵌入式与Android专家',
    speakerAvatar: './src/img/devfest2016.jpg',
    speakerDesc: '安徽工业大学本硕，嵌入式与Android开发6年，近4年专注于智能硬件、机器视觉与人工智能方向，地平线机器人ADAS产品负责人。爱挑战的运动型码农。',
    topicName: '《基于人工智能的ADAS应用》',
  },
  {
    speakerName: '储刘火',
    speakerTitle: '嵌入式与Android专家',
    speakerAvatar: './src/img/devfest2016.jpg',
    speakerDesc: '安徽工业大学本硕，嵌入式与Android开发6年，近4年专注于智能硬件、机器视觉与人工智能方向，地平线机器人ADAS产品负责人。爱挑战的运动型码农。',
    topicName: '《基于人工智能的ADAS应用》',
  },
  {
    speakerName: '储刘火',
    speakerTitle: '嵌入式与Android专家',
    speakerAvatar: './src/img/devfest2016.jpg',
    speakerDesc: '安徽工业大学本硕，嵌入式与Android开发6年，近4年专注于智能硬件、机器视觉与人工智能方向，地平线机器人ADAS产品负责人。爱挑战的运动型码农。',
    topicName: '《基于人工智能的ADAS应用》',
  },
  {
    speakerName: '储刘火',
    speakerTitle: '嵌入式与Android专家',
    speakerAvatar: './src/img/devfest2016.jpg',
    speakerDesc: '安徽工业大学本硕，嵌入式与Android开发6年，近4年专注于智能硬件、机器视觉与人工智能方向，地平线机器人ADAS产品负责人。爱挑战的运动型码农。',
    topicName: '《基于人工智能的ADAS应用》',
  },
  {
    speakerName: '储刘火',
    speakerTitle: '嵌入式与Android专家',
    speakerAvatar: './src/img/devfest2016.jpg',
    speakerDesc: '安徽工业大学本硕，嵌入式与Android开发6年，近4年专注于智能硬件、机器视觉与人工智能方向，地平线机器人ADAS产品负责人。爱挑战的运动型码农。',
    topicName: '《基于人工智能的ADAS应用》',
  }
];

$(document).ready(function() {
  var speakerTmpl = ['<div class="row speakers-wrap">'];
  var speakerModalTmpl = [];
  SPEAKERS_DATA.forEach(function(speaker, idx) {
    var target = 'speaker-' + idx;
    var speakerTrigger = '<div class="col-md-3">' +
      '<img data-toggle="modal" data-target=".'+ target +'" width="256" src="' + speaker.speakerAvatar + '" alt="' + speaker.speakerName + '">' +
      '<h4>' + speaker.speakerName + '</h4>' +
      '<p>' + speaker.speakerTitle + '</p>' +
      '<p><a href="javascript:;" data-toggle="modal" data-target=".'+ target +'">' + speaker.topicName + '</a></p>' +
      '<div>&nbsp;<br>&nbsp;</div>' +
      '</div>';
    var speakerModal = '<div class="modal fade '+ target +' speaker-modal" tabindex="-1" role="dialog">' +
      '<div class="modal-dialog modal-sm" role="document">' +
      '<div class="modal-content">' +
      '<img width="100%" src="'+ speaker.speakerAvatar +'" alt="'+ speaker.speakerName +'">' +
      '<h4>' + speaker.speakerName + '</h4>' +
      '<h5>'+ speaker.topicName +'</h5>' +
      '<p class="title">'+ speaker.speakerDesc +'</p>' +
      '</div>' +
      '</div>' +
      '</div>';
    speakerTmpl.push(speakerTrigger);
    if (idx !== 0 && (idx + 1) % 4 === 0 && (idx + 1) !== SPEAKERS_DATA.length) {
      speakerTmpl.push('</div><div class="row speakers-wrap">');
    }
    if ((idx + 1) === SPEAKERS_DATA.length) {
      speakerTmpl.push('</div>');
    }

    speakerModalTmpl.push(speakerModal);
  });
  $('#J-Speakers').html(speakerTmpl.join(''));
  $('body').append(speakerModalTmpl.join(''));

  function initMap(data) {
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

    var lnglat = new AMap.LngLat(data.lng, data.lat);
    var mapObj = new AMap.Map("Map", {
      view: new AMap.View2D({
        center: lnglat,
        zoom: 13,
        rotation: 0
      }),
      lang: "zh_cn",
      scrollWheel: false
    });
    var marker = new AMap.Marker({
      map: mapObj, //将点添加到地图
      position: new AMap.LngLat(data.lng, data.lat),
      icon: " http://webapi.amap.com/images/0.png  ",//marker图标，直接传递地址url
      offset: new AMap.Pixel(-10, -35) //相对于基点的位置
    });

    var info = [];
    info.push("<div style=\"font-size:16px;line-height: 1.8\">" + data.title);
    info.push("<div style=\"font-size:14px;\">" + data.address + "</div></div>")

    var inforWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(0, -23),
      content: info.join("<br>"),
      size: new AMap.Size(320, 100)
    });
    AMap.event.addListener(marker, "click", function(e) {
      inforWindow.open(mapObj, marker.getPosition());
    });
    inforWindow.open(mapObj, marker.getPosition());
  }

  // 地图
  initMap();
});
