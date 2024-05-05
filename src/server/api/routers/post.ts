import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
const MAX_PER_PAGE = 4;

export const postRouter = createTRPCRouter({
  get_posts: publicProcedure
    .input(z.number().positive().default(1))
    .query(async ({ ctx, input }) => {

      const [posts, count] = await ctx.db.$transaction([
        ctx.db.post.findMany({
          orderBy: { createdAt: "desc" },
          take: MAX_PER_PAGE,
          skip: (input - 1) * MAX_PER_PAGE,
          include: { createdBy: true }
        }),
        ctx.db.post.count(),
      ])

      return {
        posts,
        page: input,
        total_pages: Math.ceil(count / MAX_PER_PAGE),
        total_in_this_page: posts.length
      }
    }),

  create_post: protectedProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      if (input.content.length < 1) {
        throw new Error("Post should contain some content.")
      } else {
        const post = await ctx.db.post.create({
          data: {
            content: input.content,
            createdBy: { connect: { id: ctx.session.user.id } }
          }
        })
        return post
      }
    }),

  get_post: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({
        where: { id: input },
        include: { createdBy: true }
      })
      if (!post) {
        throw new Error("Post not found.")
      } else {
        return post
      }
    })
});
