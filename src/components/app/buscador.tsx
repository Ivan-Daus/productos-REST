
import { Input } from '@/components/ui/input'

interface InputFiltroProps {
    onFiltroChange: (valor: string) => void;
}

export default function FiltroTexto({ onFiltroChange }: InputFiltroProps){
    
    return (
        <>
            <div>
                <Input type="text" className='w-full px-3 py-2 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 m-5'
                    onChange={ (e) => onFiltroChange(e.target.value) } />
                
            </div>
        </>
    );
}