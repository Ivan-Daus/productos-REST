import type { Productos, ProductosInfoProps } from './interfaces/interfaces';

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card"

import { Button } from '../ui/button';
import { useState } from 'react';
import Carrito from './carrito';


export default function ProductosInfo({datosProductos}:ProductosInfoProps) {
    const [carrito,setCarrito] = useState<Productos[]>([]);
    
    const [cardActiva,setCardActiva] = useState<number []>([]);
    
    const cambiarColor = (id:number)=>{
        console.log(cardActiva);
        setCardActiva(prev =>
        prev.includes(id)
            ? prev.filter(cardId => cardId !== id) // quitar
            : [...prev, id] // agregar
        );
    }
    const handleCar = (p:Productos)=>{
        console.log(p);
        setCarrito(prev => [...prev, p]);
        console.log(carrito);
    }
    const handlCarDelete = (id:number)=>{
        setCarrito(prev => prev.filter(carId => carId.id !== id)  )
    }

    return (
    <>  
        
        <Carrito carritoDatos={carrito} eliminar={handlCarDelete}></Carrito>

        <div className='flex flex-wrap  justify-around gap-3'>
            {
                datosProductos.map((p) =>
                    <div key={p.id} className=''>
                        <Card className = {`rounded-2xl shadow-lg border border-gray-200 p-4  ${  cardActiva.includes(p.id) ?  "bg-green-600":"bg-gray-50"   }`} >
                            <CardHeader>
                                <CardTitle>Producto:  {p.title}  </CardTitle>
                                <CardDescription>{p.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Precio:  {p.price}</p>
                                <img src={p.image} width={100} alt="" />
                            </CardContent>
                            <CardFooter>
                                <Button onClick={ () => cambiarColor(p.id)} >Accion</Button>
                                <Button onClick={ () => handleCar(p)} className='m-3 bg-blue-500'>Agregar carrito</Button>
                            </CardFooter>
                        </Card>
                    </div>
                )
            }
            
        </div>
    </>
    
    )

}