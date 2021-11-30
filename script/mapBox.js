mapboxgl.accessToken = 'pk.eyJ1IjoibWFnbmFzaWUiLCJhIjoiY2p2M3A1bTc5MXZiOTQ0bzQxMXQwcmw4aiJ9.bRtmeZ4gH_zvHEjNQJtP7g';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/magnasie/cjv3sr37j1k511fpjsu805oni', // map stylesheet
    center: [4.841806, 45.757463], // starting position lyon
    zoom: 10
    
});

GetAllWaypointsApi()

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showAccuracyCircle: false,
    })
);

async function GetAllWaypointsApi(){
  axios.get(` http://185.223.73.69:8080/retrieveallbalises `)
  .then(response => {
      response.data.features.forEach(element => {
          if (element.geometry.coordinates[0] <= 90 && 
            element.geometry.coordinates[0] >= -90 && 
            element.geometry.coordinates[1] <= 90 && 
            element.geometry.coordinates[1] >= -90) {
                let el = document.createElement('div');
                switch (element.properties.type) { // select the right balise
                    case 'Accident':
                    el.className = 'markerAccident';
                    break;
                    case 'Roadblocked':
                    el.className = 'markerClosedRoad';
                    break;
                    case 'TrafficJam':
                    el.className = 'markerTraficJam';
                    break;
                    case 'Bus':
                    el.className = 'markerBus';
                    break;
                    case 'CBus':
                    el.className = 'markerCBus';
                    break;
                    case 'Concert':
                    el.className = 'markerConcer';
                    break;
                    case 'Exhibition':
                    el.className = 'markerExhibition';
                    break;
                    case 'Fire':
                    el.className = 'markerFire';
                    break;
                    case 'Fireman':
                    el.className = 'markerFireFighter';
                    break;
                    case 'FleaMarket':
                    el.className = 'markerFleaMarket';
                    break;
                    case 'Funi':
                    el.className = 'markerFuni';
                    break;
                    case 'Protest':
                    el.className = 'markerManifestation';
                    break;
                    case 'Market':
                    el.className = 'markerMarket';
                    break;
                    case 'Metro':
                    el.className = 'markerMerto';
                    break;
                    case 'Other':
                    el.className = 'markerOther';
                    break;
                    case 'Pickpocket':
                    el.className = 'markerPickPocket';
                    break;
                    case 'Police':
                    el.className = 'markerPolice';
                    break;
                    case 'PublicTransport':
                    el.className = 'markerPublicTransit';
                    break;
                    case 'StreetArt':
                    el.className = 'markerStreetArt';
                    break;
                    case '':
                    el.className = 'markerTram';
                    break;
                    case 'Roadworks':
                    el.className = 'markerWorks';
                    break;
                    case 'New':
                    el.className = 'markerNew';
                    break;
                    default:
                    el.className = '';
                    break;

                }
                new mapboxgl.Marker(el)
                .setLngLat(element.geometry.coordinates)
                .addTo(this.map);
          }
      });
      return response.data.features;
  });
}
