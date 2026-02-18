const search = document.getElementById('search');
const results= document.getElementById('results');
const currentMarkers = [];

const map = L.map("map").setView([0,0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('search').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') {
        return;
    }

    const location = search.value.trim();

    if (location=='') {
    return;
    }
    fetch('https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=' + location)
        .then(response => response.json())
        .then(responseList => {
            setResults(responseList);
        });
});

function setResults(responseList) {
    results.innerHTML = "";
    for (const marker of currentMarkers) {
        map.removeLayer(marker);
    }
    for (const result of responseList) {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'list-group-item-action');
        li.innerHTML = JSON.stringify({
            displayName: result.display_name,
            lat: result.lat,
            lon: result.lon
        }, undefined, 2);
        li.addEventListener('click', (event) => {
            for(const child of results.children) {
                child.classList.remove('active');
            }
            event.target.classList.add('active');
            const clickedData = JSON.parse(event.target.innerHTML);
            const position = new L.LatLng(clickedData.lat, clickedData.lon);
            map.flyTo(position, 10);
        })
        const position = new L.LatLng(result.lat, result.lon);
        currentMarkers.push(new L.marker(position).addTo(map));
        results.appendChild(li);
    }
}