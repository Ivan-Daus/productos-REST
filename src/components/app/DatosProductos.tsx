import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '../ui/button';
import { useState } from 'react';

import type { ProductosInfoProps } from '../../type';
import styles from './MyComponent.module.css';

export default function ProductosInfo({ datosProductos, handleCar }: ProductosInfoProps) {

    const [cardActiva, setCardActiva] = useState<number[]>([]);

    const cambiarColor = (id: number) => {
        console.log(cardActiva);
        setCardActiva(prev =>
            prev.includes(id)
                ? prev.filter(cardId => cardId !== id) // quitar
                : [...prev, id] // agregar
        );
    }

    return (
        <>

            <div className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 bg-zinc-300 p-3 gap-3'>
                {
                    datosProductos.map((p) =>
                        <div key={p.id} className='col-span-4 md:col-span-3 xl:grid-cols-4'>
                            <Card className={` rounded-xl shadow-lg border border-gray-200 hover:border-gray-500 p-4 transition-shadow hover:shadow-md
                        
                        ${cardActiva.includes(p.id) ? "bg-green-600" : "bg-gray-50"}`} >
                                <CardHeader className="border rounded-xl border-zinc-400 py-3 transition-shadow hover:shadow-md">
                                    <CardTitle className='text-center'>{p.title}  </CardTitle>
                                </CardHeader>
                                <CardContent >
                                    <div className="border rounded-xl border-zinc-400 p-3 transition-shadow hover:shadow-md">
                                        <img className={styles.cardImg} src={p.image} width={250} alt="" />
                                    </div>
                                    <p className="border rounded-xl border-zinc-400 p-3 shadow m-3">Precio: $ {p.price}</p>
                                    <CardDescription className="">
                                        <ScrollArea className="h-24 w-full rounded-md border p-2 transition-shadow hover:shadow-md">
                                            <p className="text-sm text-gray-600 px-3">
                                                {p.description}
                                            </p>
                                        </ScrollArea>
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    {/* <Button onClick={() => cambiarColor(p.id)} >Accion</Button> */}
                                    <Button onClick={() => handleCar(p)} className='w-full'>Agregar al carrito</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    )
                }

            </div>
        </>

    )

}