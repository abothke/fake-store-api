import { liveSearch } from "./livesearch.js";
import { sortBy } from "./sort.js";
fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
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
                    <p>Price: <span id="price">${product.price}</span></p>
                    <button>Add to cart</button>
                </div>
            </div>
            `;
        });
        document.querySelector("main").appendChild(productContainer);
    });

    document.querySelector("#search-bar").addEventListener("keyup", liveSearch);
    document.querySelector("#sort").addEventListener("change", sortBy)