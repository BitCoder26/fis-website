const container = document.getElementById('product-container');

// Filter elements
const nutriFilter = document.getElementById('nutriFilter');
const ecoFilter = document.getElementById('ecoFilter');
const novaFilter = document.getElementById('novaFilter');
const superFilter = document.getElementById('superFilter');

// Modal elements
const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

let productsData = [];

// Fetch JSON
fetch('food-data.json')
  .then(res => res.json())
  .then(data => {
      productsData = data.filter(p => p.nutriscore_grade && p.nutriscore_grade.toLowerCase() !== 'unknown');
      renderCards(productsData);
  })
  .catch(err => console.error(err));

// Function to render cards
function renderCards(products) {
    container.innerHTML = ''; // Clear previous

    products.forEach(product => {
        const prodDiv = document.createElement('div');
        prodDiv.classList.add('foodx100-card');

        // Add data attributes for filtering
        prodDiv.dataset.nutriscore = product.nutriscore_grade || '';
        prodDiv.dataset.ecoscore = product.environmental_score_grade || '';
        prodDiv.dataset.nova = product.nova_group || '';
        prodDiv.dataset.supermarket = product.supermarket || '';

        prodDiv.innerHTML = `
        <img src="${product.image_url || 'assets/icons/placeholder.png'}" alt="${product.product_name}" class="foodx100-image">
        <h3 class="foodx100-name">${product.product_name}</h3>
        <div class="foodx100-badges">
            <span class="foodx100-nutriscore">Nutriscore: ${product.nutriscore_grade}</span>
            <span class="foodx100-environmental">Ecoscore: ${product.environmental_score_grade || 'N/A'}</span>
            <span class="foodx100-nova">NOVA: ${product.nova_group || 'N/A'}</span>
        </div>
    `;

        // Click to open modal with all details
        prodDiv.addEventListener('click', () => {
            modalBody.innerHTML = `
                <h2>${product.product_name}</h2>
                <img src="${product.image_url || 'assets/icons/placeholder.png'}" class="foodx100-image">
                <p><b>Brands:</b> ${product.brands || 'N/A'}</p>
                <p><b>Nutriscore:</b> ${product.nutriscore_grade}</p>
                <p><b>Ecoscore:</b> ${product.environmental_score_grade || 'N/A'}</p>
                <p><b>NOVA Group:</b> ${product.nova_group || 'N/A'}</p>
                <p><b>Ingredients:</b> ${product.ingredients_text || 'N/A'}</p>
                <p><b>Quantity:</b> ${product.quantity || 'N/A'}</p>
                <p><b>Stores:</b> ${product.stores || 'N/A'}</p>
                <p><b>Categories:</b> ${product.categories || 'N/A'}</p>
            `;
            modal.style.display = 'block';
        });

        container.appendChild(prodDiv);
    });
}

// Close modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });

// Filter function
function applyFilters() {
    const nutriValue = nutriFilter.value;
    const ecoValue = ecoFilter.value;
    const novaValue = novaFilter.value;
    const superValue = superFilter.value;

    const cards = document.querySelectorAll('.foodx100-card');
    cards.forEach(card => {
        const nutri = card.dataset.nutriscore || '';
        const eco = card.dataset.ecoscore || '';
        const nova = card.dataset.nova || '';
        const sup = card.dataset.supermarket || '';

        let hide = false;
        if (nutriValue && nutri.toUpperCase() !== nutriValue.toUpperCase()) hide = true;
        if (ecoValue && eco.toUpperCase() !== ecoValue.toUpperCase()) hide = true;
        if (novaValue && nova.toString() !== novaValue) hide = true;
        if (superValue && sup.toString() !== superValue) hide = true;

        card.style.display = hide ? 'none' : 'flex';
    });
}

// Hook up filters
[nutriFilter, ecoFilter, novaFilter, superFilter].forEach(select => {
    select.addEventListener('change', applyFilters);
});