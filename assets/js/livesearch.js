export { liveSearch };

const liveSearch = () =>{
    let searchInput = document.querySelector("#search-bar").value.toLowerCase();
    let products = document.querySelectorAll(".products .product");
    console.log(searchInput);
    products.forEach((product) => {
        let productTitle = product.querySelector("h3").innerText.toLowerCase();
        if(productTitle.includes(searchInput)){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }
    });
}

document.querySelector("#search-bar").addEventListener("keyup", liveSearch)