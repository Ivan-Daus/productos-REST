import { useState, useEffect } from 'react'
import './app.css'
import type { Productos } from './components/app/interfaces/interfaces';

import FiltroTexto from './components/app/buscador';
import ProductosInfo from './components/app/DatosProductos';


function App() {
  const [datos, setDatos] = useState<Productos[]>([])
  const [filtroNombre,setFiltroNombre] = useState ("");
  
  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(`Error http: ${response.status}`)
        const data = await response.json();
        console.log(data);
        setDatos(data);
      } catch (error) {
        
      }
    }

    apiData();
  }, []);

  let datosFiltrados = 
  datos.filter(productos => productos.title.toLowerCase().includes(filtroNombre.toLowerCase()) );
  
  return (
    <>  
        <div className='bg-gray-100'>
          <FiltroTexto onFiltroChange={setFiltroNombre}></FiltroTexto>
          <ProductosInfo datosProductos={datosFiltrados}></ProductosInfo>
        </div>
        
    </>
  )
}

export default App
