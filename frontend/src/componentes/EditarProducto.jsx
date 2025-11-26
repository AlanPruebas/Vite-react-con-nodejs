import axios from 'axios';
import {useState, useEffect} from 'react';
import './normalize.css'
import './app.css'

function App({id}) {
    console.log(id);
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: 0
    });

    function leeProducto(e) {
        guardarProducto({
            ...producto, [e.target.name]:e.target.value
        });
    };
    async function actualizaProducto(){
        const resultado = await
        axios.put(`http://localhost:3001/productos/${id}`, producto);
    };
    async function consultaProducto(){
        const resultado = await
        axios.get(`http://localhost:3001/productos/${id}`);
        guardarProducto(resultado.data);
    };
    useEffect(
        () => {
            consultaProducto();
        }, []
    );
    return (
        <>
        <main className='caja-contenido col-9'>
            <h2>Editar Producto</h2>
            <form onSubmit={actualizaProducto}>
            <div className='campo'>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre Producto"
                    value={producto.nombre}
                    onChange = {leeProducto}
                />
            </div>

            <div className='campo'>
            <label>Precio:</label>
            <input
                type='number'
                name='precio'
                placeholder='precio'
                min= "0.00"
                value={producto.precio}
                onChange={leeProducto}
            />
            </div>
            <button type="submit" className='btn btn-azul'>Guardar</button>
            </form>
        </main>
        </>
    );
}
export default App;