import { API_KEY } from "./config.js";


let map;

const mapStyles = [
    {
      featureType: "poi",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 37.76432910263944, lng: -122.44670030095159},
    zoom: 8,
    styles: mapStyles,
  });

  const markers = [[
    "Mario's Choice: FRESCA",
    37.76484303435829,
    -122.46434270593578,
    "img/custom_pin.svg",
    100,
    100
  ],
  [
    "Luigi's Choice: LIMON",
    37.7648515934807,
    -122.42224633155307,
    "img/custom_pin.svg",
    50,
    50
  ],
  [
    "Toad's Choice: SANGUCHON",
    37.75547031997654,
    -122.42053882282005,
    "img/custom_pin.svg",
    50,
    50
  ],
  [
    "Super Mario's Choice: Lomo Libre Cantina",
    37.76541404628794,
    -122.47796237815434,
    "img/custom_pin.svg",
    50,
    50
  ]
];
  for(let i = 0; i< markers.length; i++){
    const currentMarker = markers[i];
    const marker = new google.maps.Marker({
      position: {lat: currentMarker[1], lng: currentMarker[2] },
      map,
      title: currentMarker[0],
      icon: {
        url: currentMarker[3],
        scaledSize: new google.maps.Size(currentMarker[4],currentMarker[5]),
      },
      animation: google.maps.Animation.DROP
    });
  
    const infoWindow = new google.maps.InfoWindow({
      content: currentMarker[0],
    });
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
      });
  }
  

}

initMap();