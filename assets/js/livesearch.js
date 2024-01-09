// Live search function for the search bar

export { liveSearch };

const liveSearch = () =>{
    let searchInput = document.querySelector("#search-bar").value.toLowerCase(); // Hier wird der Wert des Input-Feldes ausgelesen und in Kleinbuchstaben umgewandelt, damit die Suche nicht case-sensitive ist
    let products = document.querySelectorAll(".products .product"); // Hier werden alle Produkte aus der Klasse .products ausgewählt und als Array gespeichert
    products.forEach((product) => {
        let productTitle = product.querySelector("h3").innerText.toLowerCase(); // Hier wird der Titel jedes Produkts ausgelesen und in Kleinbuchstaben umgewandelt, damit die Suche nicht case-sensitive ist
        if(productTitle.includes(searchInput)){ // Hier wird geprüft, ob der Titel des Produkts den Suchbegriff enthält
            product.style.display = "block"; // Wenn der Titel den Suchbegriff enthält, wird das Produkt angezeigt, indem die CSS-Eigenschaft "display" auf "block" gesetzt wird
        }else{
            product.style.display = "none"; // Wenn der Titel den Suchbegriff nicht enthält, wird das Produkt ausgeblendet, indem die CSS-Eigenschaft "display" auf "none" gesetzt wird
        }
    });
}

document.querySelector("#search-bar").addEventListener("keyup", liveSearch)