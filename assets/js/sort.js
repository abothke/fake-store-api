// Sortiere die Produkte nach Preis
export { sortBy };

const sortBy = () => {
    let sortInput = document.querySelector("#sort").value; // low, high, default
    let products = document.querySelectorAll(".products .product"); // Hier werden alle Produkte ausgewählt und als Array gespeichert
    let order; // Variable für die Sortierung um später die Reihenfolge der Produkte zu ändern, da wir ein Grid verwenden

    products.forEach((product) => {
        let productPrice = parseFloat(product.querySelector("#price").innerText).toFixed(0); // Hier wird der Preis jedes Produkts ausgelesen und in eine Zahl umgewandelt und auf 0 Nachkommastellen gerundet
        if (sortInput == "low") {
            order = productPrice; // Wenn der Wert des Select-Feldes "low" ist, wird die Variable order mit dem Preis des Produkts befüllt, damit das Grid die Produkte nach Preis sortiert (höhere Zahl = weiter unten)
        } else if (sortInput == "high") {
            order = -productPrice; // Wenn der Wert des Select-Feldes "high" ist, wird die Variable order mit dem negativen Preis des Produkts befüllt, damit das Grid die Produkte nach Preis sortiert (höhere Zahl = weiter oben)
        } else {
            order = 0; // Wenn der Wert des Select-Feldes "default" ist, wird die Variable order mit 0 befüllt, damit das Grid die Produkte nach der Reihenfolge im HTML sortiert. So stellen wir sicher, dass auch bei Auswahl von "Sort by" die Produkte in der ursprünglichen Reihenfolge angezeigt werden
        }
        product.style.order = order; // Hier wird die Variable order als Wert für die CSS-Eigenschaft "order" gesetzt, da wir ein Grid verwenden
    });
}

document.querySelector("#sort").addEventListener("change", sortBy)