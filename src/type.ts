interface Rating {
    rate: number;
    count: number;
}
export interface ProductApi {
    id: number;
    title: string
    description: string;
    image: string;
    category: string;
    price: number;
    rating: Rating;
}
export  interface ProductCar extends ProductApi {
    idCar:string ;
}
export interface ProductInfoProps {
    dataProduct: ProductApi[];
    handleAddCar:(p: ProductApi) => void;
}
export interface CarrtProps {
    carrtData: ProductCar[];
    deleteCarrt: (id: string) => void;
}
