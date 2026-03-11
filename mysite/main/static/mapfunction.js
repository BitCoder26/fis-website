const search = document.getElementById('search');
const result= document.getElementById('result');
const currentMarkers = [];


const map = L.map("map").setView([0,0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (const m of bdata){
    const marker = L.marker([m.latitude, m.longitude]).addTo(map)
    marker.bindPopup(
    m.email + "<br>" + m.phone + "<br>" + m.address + "<br>" + m.postcode + "<br>" + m.description
    );
    currentMarkers.push(marker);
    }

document.getElementById('search').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') {
        return;
    }

    const location = search.value.trim();

    const postcodeRegex = new RegExp('^([A-Z]{1,2}\\d[A-Z\\d]? ?\\d[A-Z]{2}|GIR ?0A{2})$', 'mi')

    function isValidPostcode(value) {
    return postcodeRegex.test(value.trim().toUpperCase());
    }



    if (location==''||!isValidPostcode(location)) {
        result.innerHTML = "Not a valid Postcode";
    return;
    }

    fetch('https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=' + location)
        .then(response => response.json())
        .then(response => {
            setResult(response, location);
        });


});

function setResult(response, location) {
    result.innerHTML = "";
    for (const marker of currentMarkers) {
        map.removeLayer(marker);
    }
    if (response.length == 0){
        result.innerHTML = "We couldn't locate: " + location ;
        return;
        }

    result.innerHTML = 'Showing MyFoodX Neighbourhood locations near to: ' + location;
    const position = new L.LatLng(response[0].lat, response[0].lon);
    currentMarkers.push(new L.circle(position, {radius : 3000}).addTo(map));
    map.flyTo(position, 12.8);
}