function main() {
    function init() {
        let map = initMap();

        let resultLayer = L.layerGroup();
        resultLayer.addTo(map);

        window.addEventListener('DOMContentLoaded', function () {
            document.querySelector('#searchButton').addEventListener('click', async function () {
                resultLayer.clearLayers();
                let entry = document.querySelector('#searchEntry').value;
                let center = map.getBounds().getCenter();
                // let data = await find(center.lat, center.lng, entry);

                document.querySelector('#results').innerHTML = '';

                // form validation
                if (entry.length == '0') {
                    let inputQuery = document.querySelector('#searchEntry');
                    inputQuery.placeholder = '*Please enter a location';
                    data = ''
                }
                else {
                    let data = await find(center.lat, center.lng, entry);
                    for (let results of data.results) {
                        searchResult(map, results, resultLayer);
                    }
                }


            });

        });
        let navItems = document.querySelectorAll('li.nav-item');
        for (let items of navItems) {
            items.style.cursor = 'pointer';
        }
        let magnifyingGlass = document.getElementById('searchButton');
        magnifyingGlass.addEventListener('mouseenter', function () {
            magnifyingGlass.style.cursor = 'pointer';
        });

        // load hotels
        let hotelBtn = document.querySelector('#hotelsButton');
        hotelBtn.addEventListener('click', async function () {
            resultLayer.clearLayers();
            center = map.getBounds().getCenter();
            data = await find(center.lat, center.lng, 'hotels');
            for (let results of data.results) {
                searchResult(map, results, resultLayer);
            }
        })
    }
    init();
}
main();