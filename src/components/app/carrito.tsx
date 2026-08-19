
import type { CarritoProps } from "../../type";

export default function Carrito ({carritoDatos,eliminar}:CarritoProps){
    
    return (
        <>
            <div>
            <h1>Carrito</h1>
            {carritoDatos.map((p) => (
                <div key={p.id} className="border p-2 my-2">
                    <p>{p.title}</p>
                    <p>Precio: {p.price}</p>
                    <button className='bg-amber-500 p-2 rounded rounded-2' onClick={ () =>  eliminar(p.id)}>Eliminar</button>
                </div>
            ))}
            
        </div>
        </>
    );
}


