// Sample product data
const products = [
    { id: 1, name: "iPhone 14", category: "phones", price: 799.99, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSB7s9msRWMuCfvQ8KcT2LseN-ulVN1p4PeY0ZOyzzgMkSutGD3heYtsOADzdu-df5fbB8Y_mjFypg-hd8LiV2543_r5xz7PCGadaLFTemcJyaDL1h9gkVF1dezaYrZ8hClV0Ae-KGn&usqp=CAc" },
    { id: 2, name: "Sony Headphones", category: "headphones", price: 199.99, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGKKz2aP6chTEjlRuGrNpmQO_B8lwfnHgL_h_ZCyTMaeMAOD3eaGQIfIFHhwfEwsHvTnxTGkIcpPm3tftjvs9jpQ_WiYPMVAMZnhvL7-R5SkRGaGHhIN4Z1Q0v__jlfRNRFec5oQ&usqp=CAc" },
    { id: 3, name: "AirPods Pro", category: "earpods", price: 249.99, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTv6wSH93vvTG50emzLyskXAbALjuSGE47_QunZhNP3GZ0W5hJp9rp86O_dG8eic0VfpJZo3iI28bNZ5vWtPs3ZCnyxc-2EgXRnqchXGeAhMEH5yLs5PQDF944kBlggU8dG3imnonVp1w&usqp=CAc" },
    { id: 4, name: "JBL Bluetooth Speaker", category: "bluetooth", price: 129.99, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRSxziL7VwSXKH5cN6D3BVNXTM8iCGOmb1PpSlVWZ6TxGM_tPj8sbUkLZIWVg5fkJJ-p9vaUb3mkUCZLxt-cD83iGFCxIcb1WY56AME2PXyKuMyuv6UZ8NE1svw1GZ_pUY6MqFMIA&usqp=CAc" },
    { id: 5, name: "Samsung Galaxy S22", category: "phones", price: 999.99, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3hmROYCtsHlN_M19gPse4hTmlKrvW7BHkFpp1go-VyWYW3uQ--DMGGQ0odDCwC2x_wUcvA9_GUfTpBKwZiCwPn4q2msJR6mKzxc5C_ShS0XSJ0JlP39hzT689Rqim-K5n6tbiiupinw&usqp=CAc" },
    { id: 6, name: "Beats Headphones", category: "headphones", price: 299.99, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRwxAVFoTRtNv6coOIJI1nY8pIovFq9VtcrZWC9rUorVYyVJVx_LdjZXsj6jnojairByKUgpsxdydWPHPuFSwUE03v556zfDoNsWunNFbhPL0ihk5oo1pDi5A" }
  ];
  
  // Function to display products
  function displayProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing products
  
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Display all products on page load
  displayProducts('all');
  
  // Add item to cart (cart count will be updated)
  let cart = [];
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    // Add product to the cart array
    if (product) {
      cart.push(product);
    }
  
    // Update cart count on the UI
    document.getElementById('cart-count').textContent = cart.length;
  
    // Optionally, you can log the cart contents for testing
    console.log(cart);
  }
  
  // Form submission for Connect With Us
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate sending the form data (e.g., via an API)
    setTimeout(() => {
      alert(`Thank you, ${name}. Your message has been sent!`);
      document.getElementById('contactForm').reset(); // Clear the form after submission
    }, 1000);
  });