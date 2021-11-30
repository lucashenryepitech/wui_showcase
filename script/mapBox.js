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
                    case 'Traffic Jam':
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
                    case 'Public Transport':
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

/*
let arrayofpointTMPbeforDataBase = [
    {
        type: 'Pointer',
        comment: "EPITECH",
        geometry: {
        type: 'Troll',
        coordinates: [4.835066, 45.746261],
        },
    },
    {
        type: 'Pointer',
        comment: "tunel de la croix rousse fermé",
        geometry: {
        type: 'ClosedRoad',
        coordinates: [4.838146, 45.772644],
        },
    },
    {
        type: 'Pointer',
        comment: "il y a un incendit dans une poubelle",
        geometry: {
        type: 'Fire',
        coordinates: [4.842623, 45.757934],
        },
    },
    {
        type: 'Pointer',
        comment: "accident de la route",
        geometry: {
        type: 'Accident',
        coordinates: [4.858064, 45.763596],
        },
    },
    {
        type: 'Pointer',
        comment: "Greve SNCF",
        geometry: {
        type: 'TransportProblem',
        coordinates: [4.825483, 45.748288],
        },
    },
    {
        type: 'Pointer',
        comment: "marché de Caluire-et-Cuire",
        geometry: {
        type: 'Market',
        coordinates: [4.807788, 45.796966],
        },
    },
];

arrayofpointTMPbeforDataBase.forEach(function(item) {
    let el = document.createElement('div');
    switch (item.properties.type) { // select the right balise
        case 'Troll':
        el.className = 'markerTroll';
        break;
        case 'Fire':
        el.className = 'markerFire';
        break;
        case 'ClosedRoad':
        el.className = 'markerClosedRoad';
        break;
        case 'WorkInProgress':
        el.className = 'markerWorkInProgress';
        break;
        case 'Accident':
        el.className = 'markerAccident';
        break;
        case 'TransportProblem':
        el.className = 'markerTransportProblem';
        break;
        case 'Velo':
        el.className = 'markerVelo';
        break;
        case 'Market':
        el.className = 'markerMarket';
        break;
        case 'FleaMarket':
        el.className = 'markerFleaMarket';
        break;
        case 'TraficJam':
        el.className = 'markerTraficJam';
        break;
        case 'PickPocket':
        el.className = 'markerPickPocket';
        break;
        case 'Police':
        el.className = 'markerPolice';
        break;
        case 'FireFighter':
        el.className = 'markerFireFighter';
        break;
        case 'StreetArt':
        el.className = 'markerStreetArt';
        break;
    }
    new mapboxgl.Marker(el)
      .setLngLat(item.geometry.coordinates)
      .addTo(map);
  });

*/
