import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <>
            <div className="container mx-auto flex justify-center items-center">
                <Loader2 className="w-20 h-20 animate-spin " />
            </div>
        </>
    );
}