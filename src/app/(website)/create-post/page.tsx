"use client"

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"

export default function Page() {
    const router = useRouter();

    const { mutate, isPending } = api.post.create_post.useMutation({
        onSuccess: (e) => {
            toast("Event has been created.");
            setContent("");
            router.push(`/post/${e.id}`);
        },
        onError: (e) => toast.error(e.message)
    });
    const [content, setContent] = useState<string>("");

    const submit_handeler = () => {
        if (content.length < 1) toast.error("Post should contain some content.")
        else {
            mutate({ content: content })
        }
    }
    return (
        <>
            <div className="w-full max-w-xl mx-auto">
                <div className="prose dark:prose-invert">
                    <h1>Create Post:</h1>
                    <div className="grid w-full gap-2">
                        <Textarea disabled={isPending} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Type your message here." />
                        <div className="h-1" />
                        <Button onClick={() => submit_handeler()}>Post</Button>
                    </div>
                </div>
            </div>
        </>
    );
}