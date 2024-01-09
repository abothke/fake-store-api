import { liveSearch } from "./livesearch.js";
import { sortBy } from "./sort.js";
let fetchUrl

const fetchProducts = (category) => {
    console.log(category)
if (category == "all"){
    fetchUrl = "https://fakestoreapi.com/products"
} else if (category == "electronics") {
    fetchUrl = "https://fakestoreapi.com/products/category/electronics"
} else if (category == "jewelery"){
    fetchUrl = "https://fakestoreapi.com/products/category/jewelery"
} else if (category == "mens-clothing"){
    fetchUrl = "https://fakestoreapi.com/products/category/men's%20clothing"
} else if (category == "womens-clothing"){
    fetchUrl = "https://fakestoreapi.com/products/category/women's%20clothing"
}
fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector("main").innerHTML = "";
        const products = data;
        const productContainer = document.createElement("div");
        productContainer.classList.add("products");
        products.forEach((product) => {
            productContainer.innerHTML += `
            <div class="product">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" />
                    <h3>${product.title}</h3>
                    </div>
                <div class="product-info">
                    <p>Price: <span id="price">${product.price}</span> EUR</p>
                    <button>Add to cart</button>
                </div>
            </div>
            `;
        });
        document.querySelector("main").appendChild(productContainer);
    });
}
    fetchProducts("all")
    
    

    document.querySelector("#electronics").addEventListener("click", () => fetchProducts("electronics"))
    document.querySelector("#jewelery").addEventListener("click", () => fetchProducts("jewelery"))
    document.querySelector("#mens-clothing").addEventListener("click", () => fetchProducts("mens-clothing"))
    document.querySelector("#womens-clothing").addEventListener("click", () => fetchProducts("womens-clothing"))