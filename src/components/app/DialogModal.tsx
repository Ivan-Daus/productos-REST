import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DialogModalProps {
    nameButton:string;
    titleModal:string;
    children: React.ReactNode;
}
export function DialogModal({nameButton,titleModal,children}:DialogModalProps) {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">{nameButton}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{titleModal}</DialogTitle>
                        <DialogDescription>
                            {children}
                        </DialogDescription>
                    </DialogHeader>
                    {/* Tu formulario o contenido aquí */}
                </DialogContent>
            </Dialog>
        </>
    );

}