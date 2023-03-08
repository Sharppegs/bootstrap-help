
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhcnBwZWdzIiwiYSI6ImNsOTJ1czJzNTFnbnAzbm10bnNmMTRoaHEifQ.wO9lWn4gV7asbQBtco9dxQ';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-1.133333, 52.633331], // starting position [lng, lat]
zoom: 15, // starting zoom
projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
map.setFog({}); // Set the default atmosphere style
});