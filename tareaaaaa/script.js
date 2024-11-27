// Carrito inicial vacío
let cart = [];

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
    // Selecciona la cantidad del producto
    const quantity = parseInt(event.target.previousElementSibling.value);

    // Añade el producto al carrito
    cart.push({ name: productName, price: productPrice, quantity: quantity });

    // Actualiza el carrito en la interfaz
    updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');

    // Vacía la lista del carrito antes de agregar los elementos
    cartItems.innerHTML = '';

    // Recorre los productos en el carrito y actualiza la lista
    let totalAmount = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        // Agrega el elemento a la lista
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price} x ${item.quantity} = $${itemTotal}`;
        cartItems.appendChild(li);
    });

    // Muestra el total de la compra
    total.innerText = `Total: $${totalAmount}`;
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    updateCart();
}

// Función para mostrar promociones
function showPromotions() {
    alert("¡Estas son nuestras promociones actuales!\n\n" + getPromotionsMessage());
}

// Función para obtener el mensaje de promociones
function getPromotionsMessage() {
    let message = "";
    promotions.forEach((promotion) => {
        message += `${promotion.message}\n`;
    });
    return message;
}

// Función para comparar y obtener promoción
function compare() {
    let totalAmount = 0;
    cart.forEach((item) => {
        totalAmount += item.price * item.quantity;
    });

    // Aplica la promoción correspondiente
    let promotionType = getPromotionType();
    applyPromotion(promotionType);

    // Muestra el mensaje de agradecimiento y el total de la compra
    alert(`¡Gracias por tu compra! Tu pago es de $${totalAmount}`);
}

// Función para obtener el tipo de promoción correspondiente
function getPromotionType() {
    // Lógica para determinar el tipo de promoción correspondiente
    // ...
    return "sedan"; // Por defecto, se aplica la promoción para sedanes
}

// Función para aplicar la promoción correspondiente
function applyPromotion(type) {
    let discount = 0;
    let promotionMessage = "";

    switch (type) {
        case 'sedan':
            promotionMessage = "Buy 1 Get 1 Free on Sedans!";
            // Logic to add sedans to cart
            break;
        case 'suv':
            discount = 0.10; // 10% off
            promotionMessage = "10% Off on SUVs!";
            break;
        case 'luxury':
            discount = 5000; // $5,000 off
            promotionMessage = "$5,000 Off on Luxury Cars!";
            break;
        case 'truck':
            promotionMessage = "Free Shipping on All Trucks!";
            break;
        case 'firstTime':
            discount = 0.15; // 15% off promotionMessage = "15% Off for First-Time Buyers!";
            break;
        case 'electric':
            discount = 2000; // $2,000 off
            promotionMessage = "$2,000 Off on Electric Vehicles!";
            break;
        case 'sports':
            discount = 0.20; // 20% off
            promotionMessage = "20% Off on Sports Cars for Club Members!";
            break;
    }

    // Aplica la promoción al carrito
    cart.forEach((item) => {
        if (item.type === type) {
            item.price -= item.price * discount;
        }
    });

    updateCart();
    alert(promotionMessage);
}

let promotions = [
    {
        type: 'sedan',
        discount: 0,
        message: '¡Compra 1 y llévate 1 gratis en sedanes!'
    },
    {
        type: 'suv',
        discount: 0.10,
        message: '¡10% de descuento en SUVs!'
    },
    {
        type: 'luxury',
        discount: 5000,
        message: '¡$5,000 de descuento en autos de lujo!'
    },
    {
        type: 'truck',
        discount: 0,
        message: '¡Envío gratis en todos los camiones!'
    },
    {
        type: 'firstTime',
        discount: 0.15,
        message: '¡15% de descuento para compradores por primera vez!'
    },
    {
        type: 'electric',
        discount: 2000,
        message: '¡$2,000 de descuento en vehículos eléctricos!'
    },
    {
        type: 'sports',
        discount: 0.20,
        message: '¡20% de descuento en autos deportivos para miembros del club!'
    }
];