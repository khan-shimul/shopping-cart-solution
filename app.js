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

    calculateTotal()
}

function getQuantity(product) {
    const quantityInput = document.getElementById(product + '-number');
    const quantity = parseInt(quantityInput.value);
    return quantity;
    // console.log(quantity)
}

// calculate subtotal
function calculateTotal() {
    const phoneTotal = getQuantity('phone') * 1219;
    const caseTotal = getQuantity('case') * 59
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    // update total on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
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
