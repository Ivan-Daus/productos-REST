
import type { ProductosInfoProps } from './interfaces/interfaces';

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card"


export default function ProductosInfo({datosProductos}:ProductosInfoProps) {
    
    return (
    <>
        {
            datosProductos.map((p) =>
                <div key={p.id} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                    <Card className='rounded-2xl shadow-lg border border-gray-200 p-4'>
                        <CardHeader>
                            <CardTitle>Producto:  {p.title}  </CardTitle>
                            <CardDescription>{p.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Precio:  {p.price}</p>
                            <img src={p.image} width={100} alt="" />
                        </CardContent>
                        <CardFooter>
                            <button>Accion</button>
                        </CardFooter>
                    </Card>
                </div>
            )
        }
    </>
    
    )

}