// let sublista = document.querySelector(".sublista");


// sublista.classList.remove("sublista")

function masProductos() {
    let sublista = document.querySelector(".sublista");
    let spanBtn = document.getElementById("spanBtn");
    
    spanBtn.addEventListener("click", () => {
        sublista.classList.toggle("sublista")
    })
    
}
masProductos()
