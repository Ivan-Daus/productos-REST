import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import type { CarrtProps } from "../../type"

export default function Carrt({ carrtData, deleteCarrt }: CarrtProps) {
    // 1. Agrupamos los elementos duplicados por p.id
    const productsGrouped = carrtData.reduce((acc, product) => {
        const exist = acc.find(item => item.id === product.id);
        
        if (exist) {
            exist.amount += 1;
        } else {
            // Guardamos una copia con cantidad = 1 y conservamos un idCar para borrarlo
            acc.push({ ...product, amount: 1 });
        }

        return acc;
    }, [] as Array<typeof carrtData[0] & { amount: number }>);

    return (
        <div>
            <ScrollArea className="h-150 w-full p-2">
                {productsGrouped.length === 0 ? (
                    <p className="text-center text-muted-foreground py-4">Carrito vacío</p>
                ) : (
                    productsGrouped.map((p) => (
                        <div key={p.id} className="grid grid-cols-6 border p-2 my-2 bg-zinc-100 rounded-lg items-center">
                            <div className="col-span-2 flex justify-center">
                                <img src={p.image} width="80" alt={p.title} className="object-contain h-20" />
                            </div>
                            <div className="col-span-4 pl-2">
                                <p className="font-semibold text-sm line-clamp-1">{p.title}</p>
                                <p className="text-sm text-gray-600">Precio unitario: ${p.price}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs bg-zinc-200 px-2 py-1 rounded-md font-medium">
                                        Cant: {p.amount}
                                    </span>
                                    <span className="text-sm font-bold">
                                        Subtotal: ${(p.price * p.amount).toFixed(2)}
                                    </span>
                                </div>
                                <Button className="p-2 mt-2 h-8 text-xs rounded mx-2 bg-red-600 hover:bg-red-700"
                                    onClick={() => deleteCarrt(p.idCar)}>
                                    Eliminar
                                </Button>
                                <Button className="p-2 mt-2 h-8 text-xs rounded mx-2 bg-green-600 hover:bg-green-700">Comprar</Button>
                            </div>
                        </div>
                    ))
                )}
            </ScrollArea>
        </div>
    );
}