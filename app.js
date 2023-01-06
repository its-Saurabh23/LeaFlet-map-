const map = L.map('map').setView([22.9074872, 79.07306671], 13);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';



const attribution = 
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Saurabh verma with ❤️';


const tiles = L.tileLayer(tileUrl,{attribution});
tiles.addTo(map);

const CLayer = L.circle([22.9074872, 79.07306671],{radius:20000,color:' coral',fillcolor:'greeen'});
CLayer.addTo(map)


const bounds=[[54.559322, -5.767822], [56.1210604, -3.021240]];
const rectangle = L.rectangle(bounds);
rectangle.addTo(map);


const Triangle = 
[
    [25.774, -80.19],
    [18.466, -66.118],
    [32.321, -64.757]
]
const ploygon =L.ploygon(Triangle);
ploygon.addTo(map)


const latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];
const ployline = L.ployline(latlngs)
ployline.addTo(map)


// const cMarker = L.circleMarker([])
// cMarker.addTo(map)

const  icon = L.icon({
    iconUrl:'pizza.png',
    iconsize:[80,60]
    
})

const marker = L.marker([18.920675412789807,72.82952788802635],{
    icon
})
marker.bindPopup('Normal message we can also pass the html message')

marker.addTo(map);