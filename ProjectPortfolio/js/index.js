var API_URL = "http://localhost:5000/api/shoppingcart/";

function onLoad() {
    var shoppingCart = getShoppingCart();
    console.log(shoppingCart);
}

function getShoppingCart() {
    $.get(API_URL, function(data) {
        console.log(data);
        return data;
    });
}

function saveShoppingCart(shoppingCart) {
    $.post(API_URL, $.toJSON(shoppingCart), function(data) {
        console.log(data);
        return data;
    });
}

function addItemToCart(item) {
    $.ajax({
        method: "PUT",
        url: API_URL,
        data: $.toJSON(item)
    });
}

class ShoppingCart {
    constructor(user) {
        this.user = user;
        this.items = [];
    }
}

class User {
    constructor(username) {
        this.username = username;
    }
}

class Item {
    constructor() {
        this.serialNumber = 0;
        this.name = "";
        this.description = "";
        this.price = 0.0;
    }
}