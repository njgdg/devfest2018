var SPEAKERS_DATA = [
  {
    speakerName: '司马华鹏',
    speakerTitle: '南京硅基智能科技有限公司 董事长&CEO',
    speakerAvatar: './src/img/smhp.jpg',
    speakerDesc: '智能语音和机器视觉等交互技术（ASR，TTS，NLP，声纹识别等）的深度研发和商业场景应用推广。',
    topicName: '《基于DUI的人工智能交互革命》',
  },
  {
    speakerName: '冯晓雯',
    speakerTitle: 'Google 大中华区移动广告变现技术顾问',
    speakerAvatar: './src/img/fxw.jpg',
    speakerDesc: '在 Google 任职移动广告变现技术顾问, 运用广告产品和技术为开发者提供有效的广告变现产品和解决方案。移动广告变现相关产品和解决方案。',
    topicName: '《借助Firebase, 用数据为你的 App 变现做决策》',
  },
  {
    speakerName: '王晓亮',
    speakerTitle: '南京网眼 Technical Manager',
    speakerAvatar: './src/img/wxl.jpg',
    speakerDesc: '2011年毕业于南京大学，之后在趋势科技做安全网关的SaaS化。现供职于webeye，领导团队对公司数据进行处理与分析。专注大数据与机器学习。',
    topicName: '《大数据、机器学习在广告行业中的应用》',
  },
  {
    speakerName: '禹平',
    speakerTitle: '大数据架构师',
    speakerAvatar: './src/img/yp.jpg',
    speakerDesc: '途牛大数据技术总监，领添大数据架构师，专注大数据平台，k8s容器平台，数据服务与数据中间件。',
    topicName: '《领添基于k8s的devops实践》',
  },
  {
    speakerName: '任劲松',
    speakerTitle: 'Shein 前端架构师',
    speakerAvatar: './src/img/rjs.jpg',
    speakerDesc: '毕业于南京大学，专注前端架构、REACT、NODE等领域。',
    topicName: '《待定》',
  },
  {
    speakerName: '张轩',
    speakerTitle: '南京网眼 Google Cloud 云架构师',
    speakerAvatar: './src/img/zx.jpg',
    speakerDesc: '曾任苏宁云商云平台基础研发部技术经理，专注IT基础设施管理及云计算架构设计。',
    topicName: '《超越时代的Google Cloud技术与产品浅析》',
  },
  {
    speakerName: '郭蕾',
    speakerTitle: 'Google Growth Manager',
    speakerAvatar: './src/img/gl.jpg',
    speakerDesc: '就职于 Google, 任 Growth Manager。',
    topicName: '《待定》',
  },
  {
    speakerName: '林嵩',
    speakerTitle: '大陆首个机器学习方向谷歌开发者专家',
    speakerAvatar: './src/img/ls.jpg',
    speakerDesc: '大陆首个机器学习方向谷歌开发者专家，专注机器学习方向。',
    topicName: '《机器学习的移动端应用进展》',
  },
  {
    speakerName: 'Forest Li',
    speakerTitle: '南京知名公司核心部门研发经理',
    speakerAvatar: './src/img/fl.jpg',
    speakerDesc: '从事机器学习和人工智能十数年，长期在知名公司担任AI架构和研发工作。专注机器学习，人工智能。',
    topicName: '《待定》',
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
      scrollWheel: false,
      dragEnable: false
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
