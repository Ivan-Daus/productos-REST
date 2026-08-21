import './app.css'
import { useState, useEffect } from 'react'

import Search from './components/app/Search';
import ProductInfo from './components/app/ProductInfo';
import type { ProductApi, ProductCar } from './type';
import { DataApi } from './service/DataApi';
import { DataApiNormalice } from './normalice/DataApi-Normalice';
import Carrt from './components/app/carrt';
import { DialogModal } from './components/app/DialogModal';

function App() {
  const [data, setData] = useState<ProductApi[]>([])
  const [filterName, setFilterName] = useState("");
  const [carrtProdcut, setCarrtProdcut] = useState<ProductCar[]>([]);

  useEffect(() => {
    const apiData = async () => {
      try {
        const dataApiNormalice = await DataApiNormalice(await DataApi())
        setData(dataApiNormalice);
      } catch (error) {
        console.log("Fallo de la petición: " + error);
      }
    }
    apiData();
  }, []);

  let dataFiler = data.filter(p => p.title.toLowerCase().includes(filterName.toLowerCase()));
  
  const handleAddCar = (p: ProductApi) => {
    const newCar = {
      ...p,
      idCar:crypto.randomUUID()
    }
    setCarrtProdcut(prev=>[...prev, newCar]);
  }
  
  const handlCarDelete = (id: string) => {
    setCarrtProdcut(prev => prev.filter(carId => carId.idCar !== id))
  }
  useEffect(()=>{
    if(!carrtProdcut) console.log(carrtProdcut);
  },[carrtProdcut])
  
  return (
    <>
      <div className='bg-gray-100'>
        <div className='grid grid-cols-5 xl:grid-cols-20'>
          <div className='col-span-5 xl:col-span-18'>
            <Search onFiltroChange={setFilterName} />
          </div>
          <div className='col-span-5 xl:col-span-2 mb-3 xl:mb-0 flex justify-center items-center'>
            <DialogModal nameButton={`Ver carrito ${carrtProdcut.length}`} titleModal="Carrito">
              <Carrt carrtData={carrtProdcut} deleteCarrt={handlCarDelete} />
            </DialogModal> 
          </div>
        </div>
        <ProductInfo dataProduct={dataFiler} handleAddCar={handleAddCar} />
      </div>
    </>
  )
}

export default App
