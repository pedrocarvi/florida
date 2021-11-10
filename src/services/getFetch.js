export const productos = [
    {id: 1, name: "Almendras", descripcion: "Almendras descripcion" , precio: 400, stock: "Disponible" , foto: "https://ichef.bbci.co.uk/news/640/cpsprodpb/5664/production/_90561122_almendras.jpg"},
    {id: 2, name: "Nueces", descripcion: "Nueces descripcion", precio: 450, stock: "Disponible" , foto: "https://vcm.emol.com/wp-content/uploads/2019/02/Nueces.jpg"},
    {id: 3, name: "Arvejas", descripcion: "Arvejas descripcion", precio: 300, stock: "Disponible" , foto: "https://biomac.com.ar/wp-content/uploads/2020/02/Arveja.jpg"},
    {id: 4, name: "Lentejas", descripcion: "Lentejas descripcion", precio: 320, stock: "Disponible" , foto: "https://celiacos.org/wp-content/uploads/2020/10/lentils-1024x1024.jpg"},
]

const getFetch = new Promise((resolve, reject) => {
    const condition = true;

    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    } else {
        setTimeout(() => {
            reject('404 not found')
        }, 2000);
    }
})

export default getFetch;