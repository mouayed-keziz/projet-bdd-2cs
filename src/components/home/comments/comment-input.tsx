"use client";

import LoginButton from "@/components/navbar/login-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function AddCommentSection({ postId }: { postId: string }) {
    const { status } = useSession();
    return (
        <>
            {status === "authenticated" && <CommentInput postId={postId} />}
            {status === "unauthenticated" && <LoginToComment />}
        </>
    );
}

function LoginToComment() {
    return (
        <Card className="mt-4 w-full max-w-3xl mx-auto p-4 flex flex-col justify-center items-center gap-2">
            <p className="text-lg">Login to comment</p>
            <LoginButton />
        </Card>
    );

}

function CommentInput({ postId }: { postId: string }) {
    const [comment, setComment] = useState("");
    const router = useRouter();
    const { isPending, mutate } = api.comment.create_comment.useMutation({
        onSuccess: (result) => {
            setComment("");
            router.refresh();
            toast.success("Comment added successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });


    return (
        <>
            <form className=" w-full max-w-3xl mx-auto" onSubmit={(e) => { e.preventDefault(); mutate({ postId: postId, content: comment }) }}>

                <div className="mt-2 flex justify-end items-center gap-2">
                    <Input value={comment} onChange={(e) => setComment(e.target.value)} type="text" placeholder="Comment" />
                    <Button disabled={isPending} className="gap-2" type="submit">
                        submit
                        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    </Button>
                </div>
            </form>
        </>
    );
}


