
export async function DataApi(){
    try {
        const response = await fetch("https://fakestoreapi.com/products",{
            method:"get",
            headers:{
                "Content-Type": "application/json",
            }
            
        })
        if (!response.ok) {
            throw new Error(`Error al consultar la api: ${response.status}` )
        }
        return await response.json();
    } catch (error) {
        console.log("Fallo de la petición: " + error)
    }
}