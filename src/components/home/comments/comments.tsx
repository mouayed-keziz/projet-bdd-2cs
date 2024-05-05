import { type IComment } from "@/server/mongo";
import Comment from "./comment";

export default function Comments({ comments }: { comments: IComment[] }) {

    return (
        <>
            <div className="f-full max-w-3xl mx-auto flex flex-col gap-2">
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        </>
    );
}
