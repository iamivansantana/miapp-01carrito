import React from 'react'

 const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre,precio,id}= producto;

    //Agregar producto al Carrito

    const seleccionaProducto = id =>{
        const producto = productos.filter(producto => 
            producto.id===id);
            agregarProducto([
            ...carrito,
            ...producto
        ]);
    }

    //Elimina Productos del Carrito
    const eliminaProductos = id =>{
        const productos = carrito.filter(producto => producto.id !== id);
        //Colocar Productos en el State
        agregarProducto(productos);
    }


    return (
        <div>
            <h2>{nombre}</h2> 
            <p>${precio}</p>
            
            {productos
            ?
            (
                <button 
                    type='button'
                    onClick={()=>seleccionaProducto(id)}
                >Comprar</button>
                )
                :
                (
                    <button 
                        type='button'
                        onClick={()=>eliminaProductos(id)}
                    >Eliminar</button>

                )
            }

        </div>
    )
}

export default Producto;

 