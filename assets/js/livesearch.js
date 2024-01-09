export { liveSearch };

const liveSearch = () =>{
    let searchInput = document.querySelector("#sort").value;
    console.log(searchInput);
    let products = document.querySelectorAll(".products .product");
    products.forEach((product) => {
        let productTitle = product.querySelector("h3").innerText.toLowerCase();
        if(productTitle.includes(searchInput)){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }
    });
}