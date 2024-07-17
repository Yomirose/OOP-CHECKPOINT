class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
};

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }
};

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }

    displayCart() {
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
        } else {
            this.items.forEach(item => {
                console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.calculateTotalPrice().toFixed(2)}`);
            });
            console.log(`Total Cart Price: $${this.getTotal().toFixed(2)}`);
        }
    }
}


// Create products
const product1 = new Product(1, 'Laptop', 999.99);
const product2 = new Product(2, 'Smartphone', 499.99);
const product3 = new Product(3, 'Tablet', 299.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2);

// Display the cart again to see the changes
cart.displayCart();
