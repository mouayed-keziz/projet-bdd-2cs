import { Post, User } from "@prisma/client";

import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link";

interface PostWithUser extends Post {
    createdBy: User
}

export default function PostCard({ post }: { post: PostWithUser }) {
    return (
        <Card className="flex flex-col justify-between items-start">
            <CardHeader className="pb-3">
                <div className="flex justify-start items-center gap-2">
                    <Avatar>
                        <AvatarImage src={post.createdBy.image ?? ""} alt={post.createdBy.name} />
                        <AvatarFallback>{post.createdBy.name.at(0)}{post.createdBy.name.at(1)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-sm">{post.createdBy.name}</p>
                        <p className="text-sm">{post.createdAt.toDateString()}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription>{post.content}</CardDescription>
            </CardContent>

            <CardFooter>
                <div className="w-full flex justify-end items-center">
                    <Link href={`/post/${post.id}`} className={buttonVariants({ variant: "default" })}>
                        Details
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}