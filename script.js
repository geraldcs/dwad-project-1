function main() {
    function init() {
        let map = initMap();

        let resultLayer = L.layerGroup();
        resultLayer.addTo(map);

        window.addEventListener('DOMContentLoaded', function () {
            document.querySelector('#search-button').addEventListener('click', async function () {
                resultLayer.clearLayers();
                let entry = document.querySelector('#search-entry').ariaValueMax;
                let center = map.getBounds().getCenter();
                let data = await find(center.lat, center.lng, entry);

                document.querySelector('#results').innerHTML = '';

                for (let results of data.results) {
                    searchResult(map, results, resultLayer);
                }

            });

            document.querySelector('#search-button-toggle').addEventListener('click', function () {
                let searchBar = document.querySelector('#search-bar');
                let display = searchBar.style.display;
                if (!display || display == 'none') {
                    searchBar.style.display = 'block';
                } else {
                    searchBar.style.display = 'none';
                }
            })
        });
        let navItems = document.querySelectorAll('li.nav-item');
        for (let items of navItems) {
            items.style.cursor = 'pointer';
        }
    }
    init();
}
main();