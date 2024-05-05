"use client"
import PostsSection from "@/components/home/posts-section"
import { api } from "@/trpc/react"


export default function Home() {
  return (
    <>
      <div className="prose dark:prose-invert">
        <h1>all posts:</h1>
      </div>
      <PostsSection />
    </>
  )
}