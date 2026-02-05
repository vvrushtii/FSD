// ===============================
// CART STATE (localStorage based)
// ===============================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===============================
// CONSTANT FEES
// ===============================
const SHIPPING_FEE = 5.99;
const TAX_FEE = 3.68;

// ===============================
// DOM ELEMENTS
// ===============================
const cartItemsContainer = document.getElementById("cartItems");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");
const cartSubtitle = document.getElementById("cartSubtitle");
const cartCountEl = document.getElementById("cartCount");

// ===============================
// UPDATE NAVBAR CART COUNT
// ===============================
function updateNavbarCount() {
    if (cartCountEl) {
        cartCountEl.innerText = cart.length;
    }
}

// ===============================
// RENDER CART
// ===============================
function renderCart() {
    cartItemsContainer.innerHTML = "";

    let subtotal = 0;

    if (cart.length === 0) {
        cartSubtitle.innerText = "0 items in your cart";
        subtotalEl.innerText = "$0.00";
        document.getElementById("shipping").innerText = "$0.00";
        document.getElementById("tax").innerText = "$0.00";
        totalEl.innerText = "$0.00";
        updateNavbarCount();
        return;
    }

    cartSubtitle.innerText = `${cart.length} item(s) in your cart`;

    cart.forEach((item, index) => {
        subtotal += item.price;

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(div);
    });

    const shipping = SHIPPING_FEE;
    const tax = TAX_FEE;
    const total = subtotal + shipping + tax;

    subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("shipping").innerText = `$${shipping.toFixed(2)}`;
    document.getElementById("tax").innerText = `$${tax.toFixed(2)}`;
    totalEl.innerText = `$${total.toFixed(2)}`;

    updateNavbarCount();
}

// ===============================
// REMOVE ITEM
// ===============================
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// ===============================
// LOAD CART ON PAGE LOAD
// ===============================
renderCart();