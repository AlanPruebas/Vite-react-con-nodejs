import axios from 'axios';
import {useState} from 'react';
function App() {
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    });
    
    function leeProducto(e) {
        guardarProducto({
            ...producto, [e.target.name]:e.target.value
        });
    };

    async function insertaProducto(){
        const resultado = await
        axios.post('http://localhost:3001/productos', producto);
    };
    return (
        <>
        <h2>Nuevo Producto</h2>
        <form onSubmit={insertaProducto}>
            <div>
                <label>Nombre:</label>
                <input
                    type='text'
                    name='nombre'
                    placeholder='Nombre Producto'
                    onChange={leeProducto}
                />
            </div>
            <div>
                <label>Precio:</label>
                <input
                    type='numbre'
                    name='precio'
                    placeholder='Precio'
                    min= "0.00"
                    onChange={leeProducto}
                />
            </div>
            <button type='submit'>Guardar</button>
        </form>
        </>
    );
}

export default App;