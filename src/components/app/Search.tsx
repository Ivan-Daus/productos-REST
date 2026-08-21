
import { Input } from '@/components/ui/input'

interface InputFiltroProps {
    onFiltroChange: (valor: string) => void;
}

export default function Search({ onFiltroChange }: InputFiltroProps){
    
    return (
        <>
            <Input type="text" className='w-10/11 px-3 py-2 my-6 mx-5 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            onChange={ (e) => onFiltroChange(e.target.value) } />
        </>
    );
}