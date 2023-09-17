// Get all chocolate checkboxes and quantity inputs
const checkboxes = document.querySelectorAll('.chocolate-checkbox');
const quantityInputs = document.querySelectorAll('.quantity-input');
const totalPriceElement = document.getElementById('total-price');
const selectedChocolatesList = document.getElementById('selected-chocolates');

// Add event listeners for checkboxes and quantity inputs
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        updateTotalPrice();
        updateSelectedChocolatesList(index);
        validateChocolatesCount();
    });
});

quantityInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        updateTotalPrice();
        updateSelectedChocolatesList(index);
        validateChocolatesCount();
    });
});
// Define an array to store the prices for each chocolate
const chocolatePrices = [180, 120,400];

// Function to update the total price
function updateTotalPrice() {
    let total = 0;
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const quantity = parseInt(quantityInputs[index].value);
            const price = chocolatePrices[index] || 0; // Use the price from the array
            total += quantity * price;
        }
    });
    totalPriceElement.textContent = total.toFixed(2);
}


// Function to update the selected chocolates list and calculate the total price
function updateSelectedChocolatesList() {
    // Clear the list
    selectedChocolatesList.innerHTML = '';
    
    // Iterate through the checkboxes to find selected chocolates
    checkboxes.forEach((checkbox, index) => {
        const quantity = parseInt(quantityInputs[index].value);
        if (quantity > 0) {
            const chocolateName = `Chocolate ${index + 1}`;
            const listItem = document.createElement('li');
            listItem.textContent = `${chocolateName} x${quantity}`;
            selectedChocolatesList.appendChild(listItem);
            // Automatically select the checkbox when quantity is > 0
            checkbox.checked = true;
        } else {
            // Deselect the checkbox when quantity is 0
            checkbox.checked = false;
        }
    });
    
    // Calculate and update the total price
    updateTotalPrice();
}

// Add event listeners for quantity inputs
quantityInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        updateSelectedChocolatesList();
    });
});

// Function to validate the total count of chocolates
function validateChocolatesCount() {
    let totalQuantity = 0;
    quantityInputs.forEach((input, index) => {
        const quantity = parseInt(input.value);
        totalQuantity += quantity;
    });
    
    if (totalQuantity > 8) {
        alert('Total quantity of chocolates cannot exceed 8.');
        // You can also disable checkboxes or prevent further input here.
    }
}
// Function to update the cart count
function updateCartCount() {
    let totalQuantity = 0;
    quantityInputs.forEach((input) => {
        const quantity = parseInt(input.value);
        totalQuantity += quantity;
    });
    document.getElementById('cart-count').textContent = totalQuantity;
}

// Add event listeners for checkboxes and quantity inputs
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        updateTotalPrice();
        updateSelectedChocolatesList(index);
        validateChocolatesCount();
        updateCartCount(); // Update cart count when checkboxes change
    });
});

quantityInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        updateTotalPrice();
        updateSelectedChocolatesList(index);
        validateChocolatesCount();
        updateCartCount(); // Update cart count when quantities change
    });
});

const cartButton = document.getElementById('cart-button');
const cartPopup = document.getElementById('cart-popup');
const closePopupButton = document.getElementById('close-popup');
const cartItemsList = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');

// Function to open the cart popup
function openCartPopup() {
    updateCartDetails(); // Update the cart details including the total price
    cartPopup.style.display = 'flex';
}

// Add event listener for the checkout button
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
    // Add your checkout logic here
    alert('Checkout button clicked. Add your checkout logic here.');
});

// Function to close the cart popup
function closeCartPopup() {
    cartPopup.style.display = 'none';
}

// Event listener for the cart button
cartButton.addEventListener('click', () => {
    openCartPopup();
    updateCartDetails();
});

// Event listener for the close button in the cart popup
closePopupButton.addEventListener('click', () => {
    closeCartPopup();
});

// Function to update the cart details in the popup
function updateCartDetails() {
    cartItemsList.innerHTML = ''; // Clear existing items
    
    checkboxes.forEach((checkbox, index) => {
        const quantity = parseInt(quantityInputs[index].value);
        if (quantity > 0) {
            const chocolateName = `Chocolate ${index + 1}`;
            const listItem = document.createElement('li');
            listItem.textContent = `${chocolateName} x${quantity}`;
            cartItemsList.appendChild(listItem);
        }
    });
    
    const total = parseFloat(totalPriceElement.textContent);
    cartTotalPrice.textContent = total.toFixed(2);
}

//check



