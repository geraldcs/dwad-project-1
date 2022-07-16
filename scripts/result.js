function searchResult(map, result, resultLayer) {
    let latlng = [
        result.geocodes.main.latitude,
        result.geocodes.main.longitude,
    ];
    let markerResults = L.marker(latlng);

    markerResults.bindPopup(`
        <h4 style="font-family: TeXGyreAdventor; font-weight: bold">${result.name}</h4>
        <h6 style="font-family: TeXGyreAdventor;">${result.location.formatted_address}</h6>
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