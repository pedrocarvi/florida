import hamburguerMenu from "./hamburguer.js"
import masProductos from "./productos.js"


document.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a")
    masProductos()
})
