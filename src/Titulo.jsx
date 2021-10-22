export function Item() {
    return (
        <div>
            <h2> Hola soy item</h2>
        </div>
    )
}

export function Input() {
    return(
        <>
            <h2> Hola soy Input </h2>
            <input type="text" placeholder="Hola soy input" />
        </>
    )
}

export const Titulo = (props) => {

    const {nombre, apellido, mostrar} = props //destruct

    mostrar()

    return(
        <>
            <h2 id="miNombre"> {nombre} </h2>
            <p> {apellido} </p>
        </>
    )
}