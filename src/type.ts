interface Rating {
    rate: number;
    count: number;
}
export interface DataApiTypeProps {
    id: number;
    title: string
    description: string;
    image: string;
    category: string;
    price: number;
    rating: Rating;
}

export  interface Productos {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
}

export interface ProductosInfoProps {
    datosProductos: Productos[];
    handleCar:(p: Productos) => void;
}

export interface CarritoProps {
    carritoDatos: Productos[];
    eliminar: (id: number) => void;
}
