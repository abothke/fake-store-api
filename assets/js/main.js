fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const products = data;
        const productContainer = document.createElement("div");
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
        document.body.appendChild(productContainer);

    });