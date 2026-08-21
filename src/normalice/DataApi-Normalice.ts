import { type ProductApi } from "../type";

export async function DataApiNormalice(dataApi: ProductApi[]) {
    
    return dataApi.map((p: any) => {
        return {
            id: p.id || "no se encontro id",
            title: p.title  || "no se encontro title",
            category: p.category  || "no se encontro category",
            image: p.image  || "no se encontro image",
            rating: p.rating  || "no se encontro rating",
            description: p.description  || "no se encontro description",
            price: p.price  || "no se encontro price",
        }
    })
}