function updateQuantity(product, price, isadding) {
    const quantityInput = document.getElementById(product + '-number');
    let quantity = parseInt(quantityInput.value);
    if (isadding == true) {
        quantity = quantity + 1;
    }
    else if (quantity > 0) {
        quantity = quantity - 1;
    }
    quantityInput.value = quantity;
    // update total 
    const totalField = document.getElementById(product + '-total');
    totalField.innerText = quantity * price;
}

// quantiy increase and decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateQuantity('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateQuantity('phone', 1219, false)
})
document.getElementById('case-plus').addEventListener('click', function () {
    updateQuantity('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateQuantity('case', 59, false)
})
