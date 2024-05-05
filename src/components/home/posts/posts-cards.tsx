import { Post, User } from "@prisma/client";
import PostCard from "./post-card";


interface PostWithUser extends Post {
    createdBy: User
}


export default function PostsCards({ posts }: { posts: PostWithUser[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}