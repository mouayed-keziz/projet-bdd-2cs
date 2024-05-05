"use client";

import { api } from "@/trpc/react";
import { parseAsInteger, useQueryState } from 'nuqs'
import PostsLoading from "./posts/posts-loading";
import PostsCards from "./posts/posts-cards";
import { Button } from "../ui/button";
import PaginationComponent from "./posts/pagination";

export default function PostsSection() {
    const [page, setPage] = useQueryState(
        'page',
        parseAsInteger.withDefault(1)
    )
    const { isLoading, isSuccess, isError, data } = api.post.get_posts.useQuery(page)
    return (
        <>
            <PaginationComponent
                current_page={page}
                total_pages={data?.total_pages ?? 1}
                next_page={() => setPage(page + 1)}
                previous_page={() => setPage(page - 1)}
            />
            {isLoading && <PostsLoading />}
            {isSuccess && <PostsCards posts={data.posts} />}
            {isError && <div>error</div>}
        </>
    );
}


