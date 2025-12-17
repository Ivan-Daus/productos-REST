export  interface Productos {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
}

export interface ProductosInfoProps {
    datosProductos: Productos[];
}

export interface CarritoProps {
    carritoDatos: Productos[];
    eliminar: (id: number) => void;
}
