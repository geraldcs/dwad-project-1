function searchResult(map, result, resultLayer) {
    let latlng = [
        result.geocodes.main.latitude,
        result.geocodes.main.longitude,
    ];
    let markerResults = L.marker(latlng);

    markerResults.bindPopup(`
        <h1>${result.name}</h1>
    `)

    markerResults.addTo(resultLayer);

    let createResult = document.createElement('div');
    createResult.className = 'search-result';
    createResult.innerHTML = result.name;

    createResult.style.cursor = 'pointer';
    createResult.addEventListener('click', function() {
        map.flyTo(latlng, 15);
        markerResults.openPopup();
    })

    document.querySelector('#results').appendChild(createResult);
}