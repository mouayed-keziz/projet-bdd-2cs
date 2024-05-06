import { api } from "@/trpc/server";
import Comments from "./comments";
import AddCommentSection from "./comment-input";

export default async function CommentsSection({ postId }: { postId: string }) {
    const comments = await api.comment.get_comments_of_post({ postId });
    return (
        <>
            <AddCommentSection postId={postId} />
            <div className="h-6" />
            {(comments.length > 0) && <Comments comments={comments} />}
            <div className="h-12" />
        </>
    );
}



