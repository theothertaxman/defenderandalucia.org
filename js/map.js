data = [
  {'city': 'Sevilla', 'lat': 37.389091, 'lon': -5.984459},
  {'city': 'Écija', 'lat': 37.540930, 'lon': -5.079950},
  {'city': 'Jerez', 'lat': 36.686530, 'lon': -6.137180},
  {'city': 'Sanlúcar de Barrameda', 'lat': 36.778820, 'lon': -6.354200},
  {'city': 'Alcalá de Guadaira', 'lat': 37.338330, 'lon': -5.844030},
  {'city': 'Huelva', 'lat': 37.261421, 'lon': -6.944722},
  {'city': 'Paterna del Campo', 'lat': 37.420960, 'lon': -6.401430},
  {'city': 'Huétor Tájar', 'lat': 37.194630, 'lon': -4.047140},
  {'city': 'Granada', 'lat': 37.176479, 'lon': -3.597940},
  {'city': 'Lebrija', 'lat': 36.919570, 'lon': -6.078360},
  {'city': 'Dos Hermanas', 'lat': 37.283180, 'lon': -5.922240},
  {'city': 'Cenes de la Vega', 'lat': 37.159309, 'lon': -3.537520},
  {'city': 'Salobreña', 'lat': 36.746231, 'lon': -3.587070},
  {'city': 'La Carolina', 'lat': 38.274681, 'lon': -3.615410},
  {'city': 'El Ejido', 'lat': 36.775110, 'lon': -2.812730},
  {'city': 'Benalmádena', 'lat': 36.595260, 'lon': -4.573360},
  {'city': 'Lanjarón', 'lat': 36.918060, 'lon': -3.480490},
]


var the_map = L.map('map').setView([37.3, -4.4], 8);


L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(the_map);

var RedStarIcon = L.icon({
  iconUrl: '../img/redstar.png',
  iconSize: [45, 37],
  shadowUrl: 'my-icon-shadow.png',
});

data.forEach(d => {
  let marker = L.marker([d.lat, d.lon], {
    icon: RedStarIcon
  }).addTo(the_map);
  marker.bindTooltip('<h3>'+d.city+'</h3>');
  // let circle = L.circle([d.lat, d.lon], {
  //     color: 'red',
  //     fillColor: '#f03',
  //     fillOpacity: 0.7,
  //     radius: d.dimension * 1500
  // }).addTo(the_map);
  // circle.bindTooltip(d.city);
});
