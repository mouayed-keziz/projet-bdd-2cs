import { Card } from "@/components/ui/card";
import { api } from "@/trpc/server";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const post = await api.post.get_post(params.id)
    return (
        <>

            <Card className="p-6 max-w-3xl mx-auto relative">
                <div className="absolute top-0 left-0 m-3">
                    <Link href="/" className={buttonVariants({ variant: "outline", size: "icon" })}>
                        <ChevronLeft className="h-4 w-4" />
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src={post.createdBy.image ?? ""} alt={post.createdBy.name} />
                        <AvatarFallback>{post.createdBy.name.at(0)}{post.createdBy.name.at(1)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center items-start">
                        <p>{post.createdBy.name}</p>
                        <p>{post.createdAt.toDateString()}</p>
                    </div>
                </div>
                <div className="mt-10 prose dark:prose-invert">
                    <p>{post.content}</p>
                </div>
            </Card>
        </>
    );
}