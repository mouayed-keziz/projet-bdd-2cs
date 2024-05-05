import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";
const MAX_PER_PAGE = 10;

export const commentRouter = createTRPCRouter({
    get_comments_of_post: publicProcedure
        .input(z.object({ postId: z.string() }))
        .query(async ({ input, ctx }) => {
            const comments = await ctx.Comment.find({ postId: input.postId }).sort({ createdAt: -1 });
            return comments
        }),
    create_comment: protectedProcedure.
        input(z.object({ postId: z.string(), content: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const comment = await ctx.Comment.create({
                postId: input.postId,
                content: input.content,
                username: ctx.session.user.name,
            })
            return comment;
        }),
});
