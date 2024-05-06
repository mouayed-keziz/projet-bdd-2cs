import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await getServerAuthSession();
    if (!session) {
        redirect("/login")
    }
    return (
        <>
            <Card className="w-full max-w-3xl mx-auto p-4 flex flex-col justify-center items-center">
                <Avatar className="w-20 h-20">
                    <AvatarImage src={session.user.image ?? ""} alt={session.user.name ?? ""} />
                    <AvatarFallback>{session.user.name?.at(0)}{session.user.name?.at(1)}</AvatarFallback>
                </Avatar>
                {session.user.name}
            </Card>
        </>
    );
}