import React, { useState } from 'react';
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import Header from './components/Header';
import Producto  from './components/Producto';



function App() {

  //crear Listado de Productos
  const [productos,guardarProductos] = useState([
    {id: 1, nombre: 'Camisa ReactJS',precio: 50},
    {id: 2, nombre: 'Camisa VueJs',precio: 40},
    {id: 3, nombre: 'Camisa Node.JS',precio: 30},
    {id: 4, nombre: 'Camisa Angular',precio: 20},
  ]);

  //State Para un Carrito de Compras.
  const [carrito,agregarProducto]= useState([]);

  //Obtener Fecha para el Footer
  const fecha = new Date().getFullYear();

  return (
    <>
        <Header titulo='Tienda Virtual' />
{/* ................................................. */}

        <h1>Lista de Productos</h1>
        {productos.map(producto =>(
          
          <Producto 
          key = {producto.id} 
          producto = {producto}
          productos = {productos}
          carrito = {carrito}
          agregarProducto = {agregarProducto} 
          />
          
          ))}

        <Carrito 
            carrito={carrito}
            agregarProducto={agregarProducto}
        />
{/* ................................................. */}
        <Footer fecha={fecha}/>
    </>
  );
}

export default App;
