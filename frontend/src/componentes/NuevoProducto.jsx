import axios from 'axios';
import {useState} from 'react';
import './normalize.css'
import './app.css'

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
        axios.post('http://localhost:3001/productos/adi', producto);
    };
    return (
        <>
        <main className='caja-contenido col-9'>
            <h2>Nuevo Producto</h2>
            <form onSubmit={insertaProducto}>
                <div className='campo'>
                    <label>Nombre:</label>
                    <input
                        type='text'
                        name='nombre'
                        placeholder='Nombre Producto'
                        onChange={leeProducto}
                    />
                </div>
                <div className='campo'>
                    <label>Precio:</label>
                    <input
                        type='numbre'
                        name='precio'
                        placeholder='Precio'
                        min= "0.00"
                        onChange={leeProducto}
                    />
                </div>
                <button type='submit' className='btn btn-azul'>Guardar</button>
            </form>
        </main>
        </>
    );
}

export default App;