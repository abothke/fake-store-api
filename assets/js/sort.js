export { sortBy };

const sortBy = () => {
    let sortInput = document.querySelector("#sort").value;
    let products = document.querySelectorAll(".products .product");
    let order;

    products.forEach((product) => {
        let productPrice = parseFloat(product.querySelector("#price").innerText).toFixed(0);
        if (sortInput == "low") {
            order = productPrice;
        } else {
            order = -productPrice;
        }
        product.style.order = order;
    });
}