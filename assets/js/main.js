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
                    <p>Price: ${product.price}</p>
                    <button>Add to cart</button>
                </div>
            </div>
            `;
        });
        document.querySelector("main").appendChild(productContainer);
    });

    const liveSearch = () =>{
        let searchInput = document.querySelector("#search-bar").value.toLowerCase();
        let products = document.querySelectorAll(".products .product");
        products.forEach((product) => {
            let productTitle = product.querySelector("h3").innerText.toLowerCase();
            if(productTitle.includes(searchInput)){
                product.style.display = "none";
            }else{
                product.style.display = "block";
            }
        });
    } 
    
    document.querySelector("#search-bar").addEventListener("keyup", liveSearch);