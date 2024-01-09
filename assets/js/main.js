import { liveSearch } from "./livesearch.js";
import { sortBy } from "./sort.js";
let fetchUrl


// Funktion zum Abrufen der Produkte aus der API
const fetchProducts = (category) => { 
if (category == "all"){ // Wenn die Kategorie "all" ist, wird die URL für alle Produkte gesetzt
    fetchUrl = "https://fakestoreapi.com/products"
} else if (category == "electronics") { // Wenn die Kategorie "electronics" ist, wird die URL für Elektronikprodukte gesetzt
    fetchUrl = "https://fakestoreapi.com/products/category/electronics"
} else if (category == "jewelery"){ // Wenn die Kategorie "jewelery" ist, wird die URL für Schmuckprodukte gesetzt
    fetchUrl = "https://fakestoreapi.com/products/category/jewelery"
} else if (category == "mens-clothing"){ // Wenn die Kategorie "mens-clothing" ist, wird die URL für Männerbekleidung gesetzt
    fetchUrl = "https://fakestoreapi.com/products/category/men's%20clothing"
} else if (category == "womens-clothing"){ // Wenn die Kategorie "womens-clothing" ist, wird die URL für Frauenbekleidung gesetzt
    fetchUrl = "https://fakestoreapi.com/products/category/women's%20clothing"
}
fetch(fetchUrl) //  Hier wird die URL abgerufen
    .then((response) => response.json()) // Hier wird die Antwort in JSON umgewandelt
    .then((data) => { // Hier wird die Antwort als data gespeichert
        document.querySelector("main").innerHTML = ""; // Hier wird der Inhalt des main-Elements geleert, damit die Produkte nicht an die bereits vorhandenen Produkte angehängt werden
        const products = data; // Hier wird die Antwort als products gespeichert
        const productContainer = document.createElement("div"); // Hier wird ein neues div-Element erstellt, in dem die Produkte angezeigt werden
        productContainer.classList.add("products"); // Hier wird der Klasse .products das neue div-Element hinzugefügt
        products.forEach((product) => { // Hier wird für jedes Produkt ein neues div-Element erstellt, in dem das Produkt angezeigt wird
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
        document.querySelector("main").appendChild(productContainer); // Hier wird das neue div-Element mit den Produkten an das main-Element angehängt
    });
}
    fetchProducts("all") // Hier wird die Funktion fetchProducts mit der Kategorie "all" aufgerufen, damit beim Laden der Seite alle Produkte angezeigt werden
 
    
    document.querySelector("#electronics").addEventListener("click", () => fetchProducts("electronics"))
    document.querySelector("#jewelery").addEventListener("click", () => fetchProducts("jewelery"))
    document.querySelector("#mens-clothing").addEventListener("click", () => fetchProducts("mens-clothing"))
    document.querySelector("#womens-clothing").addEventListener("click", () => fetchProducts("womens-clothing"))