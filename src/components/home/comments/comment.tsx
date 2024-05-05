"use client"

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type IComment } from "@/server/mongo";

export default function Comment({ comment }: { comment: IComment }) {
    return (
        <>
            <Card className="p-4 ">
                <div className="flex justify-start items-center gap-4">
                    <Avatar className="w-10 h-10">
                        <AvatarImage className="rounded-full" src="null" alt="@shadcn" />
                        <AvatarFallback className="uppercase">
                            {comment.username[0]}{comment.username[1]}
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col justify-start">
                        <p className="text-md">{comment.username}</p>
                        <b className="text-xs">{comment.createdAt.toDateString()}</b>
                    </div>
                </div>
                <div className="mt-6 prose dark:prose-invert">
                    <p>{comment.content}</p>
                </div>
            </Card>
        </>
    );
}