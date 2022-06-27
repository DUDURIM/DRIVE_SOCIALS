(function(jQuery) {

  "use strict";

  if(jQuery("#chart-map-column-04").length){
    const map = L.map('chart-map-column-04').setView([37.6649675476689, 126.75447863809043], 5);
     var statesData = {"type":"FeatureCollection","features":[]};
    
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = 
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileLayer = L.tileLayer(tileUrl, { attribution });

    function getColor(d) {
      return d > 1000 ? '#4d4d4d' :
             d > 500  ? '#595959' :
             d > 200  ? '#666666' :
             d > 100  ? '#737373' :
             d > 50   ? '#808080' :
             d > 20   ? '#999999' :
             d > 10   ? '#b3b3b3' :
                        '#cccccc';
  }
  function style(feature) {
      return {
          fillColor: getColor(feature.properties.density),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
      };
  }
  
  L.geoJson(statesData, {style: style}).addTo(map);

    tileLayer.addTo(map);

  var cloudy = L.icon({
    iconUrl: '../assets/images/weather/cloudy.png',
    iconSize:     [70, 70], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var day = L.icon({
    iconUrl: '../assets/images/weather/day.png',
    iconSize:     [70, 70], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var rainy = L.icon({
    iconUrl: '../assets/images/weather/rainy-1.png',
    iconSize:     [70, 70], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var snowy = L.icon({
    iconUrl: '../assets/images/weather/snowy-6.png',
    iconSize:     [70, 70], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var cloudy22 = L.icon({
    iconUrl: '../assets/images/weather/cloudy-day-1.png',
    iconSize:     [70, 70], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var thunder = L.icon({
    iconUrl: '../assets/images/weather/thunder.png',
    iconSize:     [70, 70], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([37.6649675476689, 126.75447863809043], {icon: cloudy}).addTo(map).bindPopup("Cloudy Day");
  L.marker([37.6649675476689, 124.75447863809043], {icon: day}).addTo(map).bindPopup("Sunny Day");
  L.marker([35.6649675476689, 126.75447863809043], {icon: rainy}).addTo(map).bindPopup("Heavy Rain");
  L.marker([37.6649675476689, 122.75447863809043], {icon: snowy}).addTo(map).bindPopup("Snowy");
  L.marker([37.6649675476689, 116.75447863809043], {icon: cloudy22}).addTo(map).bindPopup("Cloudy Sunny Day");
  L.marker([34.6649675476689, 126.75447863809043], {icon: thunder}).addTo(map).bindPopup("Thunder Strom");

    
  }

  })(jQuery);