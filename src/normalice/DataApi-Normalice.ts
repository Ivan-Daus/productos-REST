import { type DataApiTypeProps } from "../type";

export async function DataApiNormalice(dataApi: DataApiTypeProps[]) {
    
    return dataApi.map((p: any) => {
        return {
            id: p.id,
            title: p.title,
            category: p.category,
            image: p.image,
            rating: p.rating,
            description: p.description,
            price: p.price,
        }
    })
}