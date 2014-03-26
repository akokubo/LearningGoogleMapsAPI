/*global google */
/*jslint browser:true */
// 場所のデータ
var places = [
    { lat: 40.829575, lng: 140.741032, content: '<p><a href="http://www.aomori-kanko.or.jp/">アスパム</a><br>アスパムの入口にはパムパムくんの絵が！<br><img src="http://localchara.jp/data/character/80/4d346f6b6ad40.gif"></p>'},
    { lat: 40.828729, lng:  140.734693,  content: '<p>青森駅</p>'},
    { lat: 40.827057, lng: 140.735806, content: '<p>アウガ</p>'}
];

// マーカーの配列
var marker = [];

// 情報ウィンドウの配列
var infoWindow = [];

// マップの設定
var options = {
    zoom: 17, // 縮尺
    center: new google.maps.LatLng(40.828513, 140.737465), // 緯度と経度
    mapTypeId: google.maps.MapTypeId.ROADMAP // 地図の種類
};

// 地図を表示
var map = new google.maps.Map(
    document.getElementById('map'),
    options
);

// イベントハンドラを設定する関数
var addEventHandler = function (index) {
    'use strict';
    // マーカーをクリックしたら、情報ウィンドウを表示
    google.maps.event.addListener(
        marker[index],
        'click',
        function () {
            infoWindow[index].open(map, marker[index]);
        }
    );
};

var i;
for (i = 0; i < places.length; i += 1) {
    // マーカーを表示
    marker[i] = new google.maps.Marker({
        position: new google.maps.LatLng(
            places[i].lat,
            places[i].lng
        ), // 表示位置
        map: map // mapに表示
    });

    // 情報ウィンドウを用意
    infoWindow[i] = new google.maps.InfoWindow({
        content: places[i].content
    });

    // イベントハンドラを設定
    addEventHandler(i);
}
