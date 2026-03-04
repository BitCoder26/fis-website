document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const postcode = document.getElementById("id_postcode").value;
    const postcodeRegex = new RegExp('^([A-Z]{1,2}\\d[A-Z\\d]? ?\\d[A-Z]{2}|GIR ?0A{2})$', 'mi')
    function isValidPostcode(value) {
    return postcodeRegex.test(value.trim().toUpperCase());
    }



    if (postcode==''||!isValidPostcode(postcode)) {
        alert("Not a valid Postcode");
    return;
    }

    fetch('https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=' + postcode)
        .then(response => response.json())
        .then(response => {
                if (!response || response.length === 0) {
                    alert("Postcode not found!");
                    return;
                }
                document.getElementById("latitude").value = response[0].lat;
                document.getElementById("longitude").value = response[0].lon;
                form.submit();
        });
    .catch(error =>{
        alert("Error fetching postcode!")
        console.error(error);
    })
});