export { sortBy };

const sortBy = () => {
    let sortInput = document.querySelector("#sort").value;
    let products = document.querySelectorAll(".products .product");
    let order;

    products.forEach((product) => {
        let productPrice = parseFloat(product.querySelector("#price").innerText).toFixed(0);
        if (sortInput == "low") {
            order = productPrice;
        } else if (sortInput == "high") {
            order = -productPrice;
        } else {
            order = 0;
        }
        product.style.order = order;
    });
}

document.querySelector("#sort").addEventListener("change", sortBy)