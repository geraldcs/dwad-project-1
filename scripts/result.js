function searchResult(map, result, resultLayer) {
    let latlng = [
        result.geocodes.main.latitude,
        result.geocodes.main.longitude,
    ];
    // custom icons
    let customIcons = L.icon({
        iconUrl: `${result.categories[0].icon.prefix}32${result.categories[0].icon.suffix}`,
        iconSize: [40, 90], 
        iconAnchor: [22, 54], 
        popupAnchor: [-3, -76]
      })
      let markerColor = document.querySelectorAll('.leaflet-marker-icon');
      for (let m of markerColor) {
        m.style.borderColor = 'black';
        m.style.filter = 'brightness(0)';
        m.style.filter = 'invert(43%) sepia(48%) saturate(636%) hue-rotate(78deg) brightness(86%) contrast(97%) drop-shadow(1px 1px 0 black)';
        
      }

    let markerResults = L.marker(latlng, {icon: customIcons});

    markerResults.bindPopup(`
    <h4 style="font-family: TeXGyreAdventor; font-weight: bold">${result.name}</h4>
    <p title="Give a rating!" style="font-size: 20px; margin-top: 0; margin-bottom: 0; cursor: pointer;" >
    <span onMouseOver="this.style.color='gold'" onMouseOut="this.style.color='gray' style="color: gray;">★</span>
    <span onMouseOver="this.style.color='gold'" onMouseOut="this.style.color='gray' style="color: gray;">★</span>
    <span onMouseOver="this.style.color='gold'" onMouseOut="this.style.color='gray' style="color: gray;">★</span>
    <span onMouseOver="this.style.color='gold'" onMouseOut="this.style.color='gray' style="color: gray;">★</span>
    <span onMouseOver="this.style.color='gold'" onMouseOut="this.style.color='gray' style="color: gray;">★</span>

     <span title="Add to bookmarks" style="cursor: pointer;">&#128278;</span></p>
        <h6 style="font-family: TeXGyreAdventor;">(${result.categories[0].name})</h6>
        <h6 style="font-family: TeXGyreAdventor; font-size: 15px">${result.location.formatted_address}</h6>
    `)

    markerResults.addTo(resultLayer);

    let createResult = document.createElement('div');
    createResult.className = 'searchResult';
    createResult.innerHTML = result.name;

    createResult.style.cursor = 'pointer';
    createResult.addEventListener('click', function() {
        map.flyTo(latlng, 15);
        markerResults.openPopup();
    })

    document.querySelector('#results').appendChild(createResult);
}