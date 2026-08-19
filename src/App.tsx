import './app.css'
import { useState, useEffect } from 'react'


import FiltroTexto from './components/app/buscador';
import ProductosInfo from './components/app/DatosProductos';
import type { Productos } from './type';
import { DataApi } from './service/DataApi';
import { DataApiNormalice } from './normalice/DataApi-Normalice';
import Carrito from './components/app/carrito';
import { DialogModal } from './components/app/DialogModal';

function App() {
  const [datos, setDatos] = useState<Productos[]>([])
  const [filtroNombre, setFiltroNombre] = useState("");

  const [carrito, setCarrito] = useState<Productos[]>([]);

  useEffect(() => {

    const apiData = async () => {
      try {
        const dataApiNormalice = await DataApiNormalice(await DataApi())
        setDatos(dataApiNormalice);
      } catch (error) {
        console.log("Fallo de la petición: " + error);
      }
    }
    apiData();
  }, []);

  let datosFiltrados =
    datos.filter(productos => productos.title.toLowerCase().includes(filtroNombre.toLowerCase()));

  const handleCar = (p: Productos) => {
    console.log(p);
    setCarrito(prev => [...prev, p]);
    console.log(carrito);
  }

  const handlCarDelete = (id: number) => {
    setCarrito(prev => prev.filter(carId => carId.id !== id))
  }
  return (
    <>
      <div className='bg-gray-100'>
        <div className='grid grid-cols-20'>
          <div className='col-span-19'>
            <FiltroTexto onFiltroChange={setFiltroNombre} />
          </div>
          <div className='col-span-1 flex justify-center  items-center'>
            <DialogModal nameButton="Ver carrito" titleModal="Carrito">
              <Carrito carritoDatos={carrito} eliminar={handlCarDelete}></Carrito>
              
            </DialogModal> 
          </div>
        </div>

        <ProductosInfo datosProductos={datosFiltrados} handleCar={handleCar} />
      </div>

    </>
  )
}

export default App
