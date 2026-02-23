const mysql = require('mysql2');
const email = document.getElementById('email');
const password = document.getElementById('confirm_password');
const name = document.getElementByID('name')
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const postcode = document.getElementByID('postcode')
const type = document.getElementByID('type')
const description = document.getElementByID('description')

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'localsocietiesandevents'
});

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

function addSociety(name, email, phone, password, name, address, postcode, type, description) {
        var lat = response[0].lat;
        var lon = response[0].lon;
    try {
    connection.execute(
    "INSERT INTO businesses (name, email, phone, password, name, address, postcode, type, description, lat, lon) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    )
    }
}

