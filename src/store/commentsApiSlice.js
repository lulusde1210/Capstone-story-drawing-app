import { apiSlice } from "./apiSlice";

const COMMENTS_URL = '/api/comments';

export const commentsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createComment: builder.mutation({
            query: (data) => ({
                url: `${COMMENTS_URL}`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Comments', 'Drawing']
        }),

        getCommentsByDrawingId: builder.query({
            query: (drawingId) => ({
                url: `${COMMENTS_URL}/drawing/${drawingId}`,
                method: "GET",
            }),
            providesTags: ['Comments', 'Drawing']
        }),

        deleteComment: builder.mutation({
            query: (id) => ({
                url: `${COMMENTS_URL}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Comments', 'Drawing']
        }),
    })
})


export const {
    useCreateCommentMutation,
    useGetCommentsByDrawingIdQuery,
    useDeleteCommentMutation
} = commentsApiSlice;