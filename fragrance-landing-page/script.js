// Product Data
const products = [
    {
        id: 1,
        name: 'Midnight Blossom',
        description: 'An enchanting blend of night-blooming jasmine, vanilla orchid, and warm amber. This mysterious fragrance unveils its complexity as the evening unfolds.',
        price: 129.99,
        image: 'assets/perfume1.jpg'
    },
    {
        id: 2,
        name: 'Ocean Breeze',
        description: 'Fresh notes of sea salt, bergamot, and coastal sage create a crisp, invigorating scent that captures the essence of a Mediterranean morning.',
        price: 109.99,
        image: 'assets/perfume2.jpg'
    },
    {
        id: 3,
        name: 'Royal Oud',
        description: 'A luxurious composition of rare oud wood, Bulgarian rose, and exotic spices. This regal fragrance embodies timeless sophistication.',
        price: 189.99,
        image: 'assets/perfume3.jpg'
    },
    {
        id: 4,
        name: 'Golden Santal',
        description: 'A warm embrace of Australian sandalwood, creamy vanilla, and white musk. Perfect for those who appreciate subtle yet lasting elegance.',
        price: 149.99,
        image: 'assets/perfume4.jpg'
    },
    {
        id: 5,
        name: 'Velvet Rose',
        description: 'Damascus rose petals, blackberry, and precious woods create an opulent fragrance that celebrates feminine grace and sophistication.',
        price: 159.99,
        image: 'assets/perfume5.jpg'
    },
    {
        id: 6,
        name: 'Citrus Paradise',
        description: 'Sparkling notes of Sicilian lemon, mandarin, and white florals deliver a bright, uplifting scent that embodies Mediterranean joy.',
        price: 119.99,
        image: 'assets/perfume6.jpg'
    }
];

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Add transition class
    document.documentElement.classList.add('theme-transition');
    
    // Set new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Remove transition class after animation completes
    setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
    }, 300);
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    // Initialize theme
    initializeTheme();
    
    // Set up theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Get the collection grid
    const collectionGrid = document.querySelector('.collection-grid');
    console.log('Collection Grid:', collectionGrid);
    
    if (!collectionGrid) {
        console.error('Collection grid not found!');
        return;
    }
    
    // Add products to the grid
    products.forEach((product, index) => {
        console.log('Creating product:', product.name);
        
        // Create product card
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.setProperty('--card-index', index); // Add index for staggered animations
        
        // Add product content
        card.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price}</div>
                <button class="cta-button">Add to Cart</button>
            </div>
        `;
        
        // Add to grid
        collectionGrid.appendChild(card);
        console.log('Added product:', product.name);
    });
    
    console.log('All products added');
});
