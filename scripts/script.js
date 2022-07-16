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
            clearResults();
            center = map.getBounds().getCenter();
            data = await find(center.lat, center.lng, 'hotels');
            for (let results of data.results) {
                searchResult(map, results, resultLayer);
            }
        })

        // load restaurants
        let restaurantBtn = document.querySelector('#restaurantsButton');
        restaurantBtn.addEventListener('click', async function () {
            clearResults();
            center = map.getBounds().getCenter();
            data = await find(center.lat, center.lng, 'restaurants');
            for (let results of data.results) {
                searchResult(map, results, resultLayer);
            }
        })

        // load malls
        let mallBtn = document.querySelector('#mallsButton');
        mallBtn.addEventListener('click', async function () {
            clearResults();
            center = map.getBounds().getCenter();
            data = await find(center.lat, center.lng, 'malls');
            for (let results of data.results) {
                searchResult(map, results, resultLayer);
            }
        })

        // load cafes
        let cafeBtn = document.querySelector('#cafesButton');
        cafeBtn.addEventListener('click', async function () {
            clearResults();
            center = map.getBounds().getCenter();
            data = await find(center.lat, center.lng, 'cafes');
            for (let results of data.results) {
                searchResult(map, results, resultLayer);
            }
        })

        // load gyms
        let gymBtn = document.querySelector('#gymsButton');
        gymBtn.addEventListener('click', async function () {
            clearResults();
            center = map.getBounds().getCenter();
            data = await find(center.lat, center.lng, 'gyms');
            for (let results of data.results) {
                searchResult(map, results, resultLayer);
            }
        })

        // load clubs
        let clubBtn = document.querySelector('#clubsButton');
        clubBtn.addEventListener('click', async function () {
            clearResults();
            center = map.getBounds().getCenter();
            data = await find(center.lat, center.lng, 'clubs');
            for (let results of data.results) {
                searchResult(map, results, resultLayer);
            }
        })

        // load parks
        let parkBtn = document.querySelector('#parksButton');
        parkBtn.addEventListener('click', async function () {
            clearResults();
            center = map.getBounds().getCenter();
            data = await find(center.lat, center.lng, 'parks');
            for (let results of data.results) {
                searchResult(map, results, resultLayer);
            }
        })

        // clear results and markers
        function clearResults() {
            resultLayer.clearLayers();
            let resultName = document.querySelectorAll('.searchResult');
            for (res of resultName) {
                res.style.display = 'none';
            }
        }
    }
    init();
}
main();