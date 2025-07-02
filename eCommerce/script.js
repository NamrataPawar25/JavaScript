const products = [
    {
        id: 1,
        name: "Shrug",
        description: "Women Casual Solid Regular Shrug",
        category: "women",
        price: 499,
        image: "https://m.media-amazon.com/images/I/5169zshcD7L.jpg",
    },
    {
        id: 2,
        name: "Men's Shirt",
        description: "Formy cool blue luxury satin cotton shirt",
        category: "Men's",
        price: 799,
        image:
            "https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP5180.jpg?v=1685610639",
    },
    {
        id: 3,
        name: "Jacket ",
        description:
            "Women’s jackets come in a wide variety of styles designed to suit every occasion.",
        Category: "Women",
        price: 799,
        image:
            "https://i5.walmartimages.com/asr/615808ac-253f-44cd-a69e-8d8d9fd47e91.27de1643230b368f4b426a731eb1e3b3.jpeg",
    },
    {
        id: 4,
        name: "Jacket",
        description: "Men Jacket for Summer",
        category: "Men",
        price: 899,
        image: "https://m.media-amazon.com/images/I/41Z2ahq2rWL.jpg",
    },
    {
        id: 5,
        name: "Saree",
        description: "Janasya-Womens-Ethnic-Paithani-Unstitched saree",
        category: "women",
        price: 4000,
        image: "https://m.media-amazon.com/images/I/81LE4e6CViL._SY741_.jpg",
    },
    {
        id: 6,
        name: "Saree",
        description: "Pure Soft Silk With gold jari",
        category: "Women",
        price: 1626,
        image:
            "https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/mor-bangadi-paithani-silk-handloom-saree-1545.jpg",
    },
    {
        id: 7,
        name: "T-Shirt",
        description:
            "KOTTY Women's Solid Slim Fit T-Shirt - Classic Round Neck, Stretchable Cotton Tee",
        category: "women",
        price: 266,
        image: "https://m.media-amazon.com/images/I/61hLb3DSS4L._SY741_.jpg",
    },
    {
        id: 8,
        name: "T-shirt",
        description: "Cotrasen Men's T-Shirts Cotton Short Sleeve T Shirts for Men",
        category: "Men",
        price: 699,
        image: "https://m.media-amazon.com/images/I/81S+B6F1WnL._AC_SX569_.jpg",
    },
    {
        id: 9,
        name: "Saree",
        description: "Pink Span Cotton Jacquard Woven Saree",
        category: "Women",
        price: 2499,
        image:
            "https://i.pinimg.com/736x/4a/b9/52/4ab952a8d036a66c047c91350b2b17a5.jpg",
    },
    {
        id: 10,
        name: "Nike T-Shirt",
        description:
            "Fabric Description : Single Jersey - Classic, lightweight jersey fabric comprising 100% cotton.",
        category: "Women",
        price: 504,
        image: "https://m.media-amazon.com/images/I/61nchBK4y5L._SY741_.jpg",
    },
    {
        id: 11,
        name: "Frock",
        description: "kids gray shirt with blue paint and cap fancy dress",
        category: "Kids Wear",
        price: 500,
        image: "https://liandli.in/cdn/shop/files/LICD120_1_-min.jpg?v=1696415763",
    },
    {
        id: 12,
        name: "T-Shirt",
        description: "Kids clothes style new arrivals shops",
        category: "Kids Wear",
        price: 1000,
        image: "https://blog.g3fashion.com/wp-content/uploads/2019/06/47cdcaadb9795e4f38c8b301fc5bce02-e1593673517920.jpg",
    },
];

const cart = []
function localSaveCart(cartFromLocal = cart) {
    localStorage.setItem("cart", JSON.stringify(cartFromLocal))
}

function localGetCart() {
    return JSON.parse(localStorage.getItem("cart"))
}

function localSaveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function localGetProducts() {
    return JSON.parse(localStorage.getItem("products"))
}


const addproductsElmt = document.querySelector("#addproducts");
const cartLengthElmt = document.querySelector("#cartLength");

function addToCart(p_id) {
    console.log(p_id);
    index = products.findIndex((p) => p.id == p_id);
    console.log(index);
    prod_cart = products[index];
    cartFromLocal = localGetCart()
    cartFromLocal.push(prod_cart)

    // cartbyProdByFind= products.find((p)=>p.id==p_id)
    // console.log("cartbyProdByFind", cartbyProdByFind);
    // cart.push(cartbyProdByFind)

    cartLength = cartFromLocal.length
    cartLengthElmt.textContent = cartLength
    console.log(cart);
    localSaveCart(cartFromLocal)
    renderCart()
}

function renderProducts(productsRender = products) {
    // const productsRender = localGetProducts()

    addproductsElmt.innerHTML = productsRender.map((product, index) => `
    <div class="col-12 col-md-6 col col-lg-3 mt-5 mb-3">
        <div class="card h-100 d-flex flex-column text-center" style="max-width: 540px;">
            <a href="#"><img src=${product.image} class="card-img-top rounded" alt="..." style="width: 304px; height: 300px;"></a>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text"><small class="text-muted">Price: ₹ ${product.price}</small></p>
                <a href="#" class="btn btn-primary d-block mx-auto mt-auto" onclick="addToCart(${product.id})" style="width: 150px;">
                Add to Cart
                </a>
            </div>
        </div>
    </div>
`).join("")
}

const cartTableElmt = document.querySelector("#cartTable")
function renderCart() {
    const cartFromLocal = localGetCart()
    console.log("cartFromLocal",cartFromLocal);
    cartTableElmt.innerHTML = cartFromLocal.map((p,i) => `
    <tr>
      <th scope="row">${i+1}</th>
      <td>${p.name}</td>
      <td>${p.price}</td>
      <td><button class="btn btn-danger" onclick="removeFromCart(${i})">Remove from cart</button>
</td>
    </tr>
`).join("")
cartLengthElmt.textContent = cartFromLocal.length;
}

function removeFromCart(index) {
    let cartFromLocal = localGetCart();
    cartFromLocal.splice(index, 1);
    localSaveCart(cartFromLocal);   
    renderCart();                   
}


window.addEventListener("DOMContentLoaded", () => {
const v1 = localGetCart()
const v2 = localGetProducts()
  if(!v1 || !v2){
  localSaveProducts();
  localSaveCart();
  }
  if (addproductsElmt) {
    renderProducts();
  }
  if (cartTableElmt) {
    renderCart();
  }else {
    cartLengthElmt.textContent = v1.length;
  }
});