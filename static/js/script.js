//  1- setting the token
//  2- creating the map
//  3- adding controls,
//  like-- marker on cliCK, Search locations, Get user location(GPS), A → B route(Directions)

const TOKEN = "YOUR_MAPBOX_TOKEN"; // Replace with your actual Mapbox access token
mapboxgl.accessToken = TOKEN;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard',
    center: [77.5946, 12.9716], //[longitude,latitude] currently- bangalore
    zoom: 12
});

// 3 → world
// 10 → city
// 15 → street

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());
map.addControl(new mapboxgl.ScaleControl());

const searchBox = document.getElementById('searchbox');
searchBox.accessToken = TOKEN;
searchBox.mapboxgl = mapboxgl;
searchBox.marker = true;        // drops a pin on the result
searchBox.bindMap(map);         // This line links the search component with your map instance. it connects the search box to your map so results automatically appear on it

// When user picks a result — fly to that location
searchBox.addEventListener('retrieve', (e) => {
  const feature = e.detail;
  const [lng, lat] = feature.geometry.coordinates;

  map.flyTo({
    center: [lng, lat],
    zoom: 14,
    speed: 1.5
  });
});

let marker;

map.on('click', function(e){

    console.log('Clicked:', e.lngLat);

    if(marker){         //remove old marker
        marker.remove();
    }

    marker= new mapboxgl.Marker()  //new marker
        .setLngLat(e.lngLat)   //marker appear here
        .addTo(map);       //render the marker

    map.flyTo({
        center: e.lngLat,
        zoom: 17,
        speed: 1.5
    });

});

const locate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
});

map.addControl(locate);

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
});

map.addControl(directions, 'top-left');