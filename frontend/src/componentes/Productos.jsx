import axios from 'axios';
import { useState, useEffect } from "react";
import NuevoProducto from './NuevoProducto.jsx';
import EditarProducto from './EditarProducto.jsx';
import './app.css'
import './normalize.css'

function App() {
    const [productos, guardarProductos] = useState([]);
    const [id, setID] = useState([]);
    const [editar, setEditar] = useState(false);
    const [nuevo, setNuevo] = useState(false);

    async function consulta() {
        const resultado = await
        axios.get('http://localhost:3001/productos');
        guardarProductos(resultado.data);
    }

    useEffect(() => {
        consulta();
        }, []
    );

    async function eliminaProducto(id) {
        const resultado = await
        axios.delete(`http://localhost:3001/productos/${id}`);
        consulta();
    }

    if (editar) {
        return <EditarProducto id = {id}/>
    };

    if (nuevo) {
        return <NuevoProducto />
    };

    return (
        <>
        <main class="caja-contenido col-9">
            <h2>Lista de Productos</h2>
            <button onClick = {() => {setNuevo(true);}} className='btn-nuevo'>Nuevo Producto</button>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto) =>(
                            <tr key = {producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>Bs.{producto.precio}</td>
                            <td>
                                <button onClick = {() => {
                                setEditar(true);
                                setID(producto.id)
                                }} className='btn-editar'>Editar</button>

                                <button onClick = {() =>
                                eliminaProducto(producto.id)
                                } className='btn-eliminar'>Elimina</button>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
        
        </>
    )
}
export default App;