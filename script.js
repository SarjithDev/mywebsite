// Initialize cart
let cart = [];

// Function to add items to the cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartDisplay();
    alert(`${productName} has been added to your cart!`);
}

// Update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing cart items

    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    // Display total price
    const totalElement = document.createElement('div');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    cartItemsContainer.appendChild(totalElement);
}

// Checkout function
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Proceeding to checkout!');
        cart = []; // Clear cart after checkout
        updateCartDisplay();
    }
});

// Attach addToCart function to each product button
const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').textContent;
        const price = parseFloat(button.parentElement.querySelector('p').textContent.replace('$', ''));
        addToCart(productName, price);
    });
});
