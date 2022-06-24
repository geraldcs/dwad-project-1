function initMap() {
  let centerpoint = [7.1907, 125.4553];
  let map = L.map("map");
  map.setView(centerpoint, 11);

  let tileLayer = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <ahref="https://www.openstreetmap.org">OpenStreetMap<a> contributors, <ahref="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery(c) <a href="https://www.mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", //demo access token (shared by a lot of people)
    }
  ).addTo(map);

  return map;
}
