"use client"
import PostsSection from "@/components/home/posts-section"
import { Button, buttonVariants } from "@/components/ui/button"
import { api } from "@/trpc/react"
import { Plus } from "lucide-react"
import Link from "next/link"


export default function Home() {
  return (
    <>
      <div className="prose dark:prose-invert">
        <h1>all posts:</h1>
      </div>
      <PostsSection />
      <div className="absolute bottom-0 right-0 m-3">
        <Link href="/create-post" className={buttonVariants({ className: "gap-2" })}>
          new post
          <Plus className="w-5 h-5" />
        </Link>
      </div>
    </>
  )
}