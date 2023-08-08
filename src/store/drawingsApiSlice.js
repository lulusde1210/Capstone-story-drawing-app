import { apiSlice } from "./apiSlice";

const DRWINGS_URL = '/api/drawings';

export const drawingsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createDrawing: builder.mutation({
            query: (data) => ({
                url: `${DRWINGS_URL}`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Drawing']
        }),
        getAllDrawings: builder.query({
            query: () => ({
                url: `${DRWINGS_URL}`,
                method: 'GET',
            }),
            providesTags: ['Drawing']

        }),
        getOneDrawing: builder.query({
            query: (id) => ({
                url: `${DRWINGS_URL}/${id}`,
                method: "GET",
            }),
            providesTags: ['Drawing']

        }),
        updateDrawing: builder.mutation({
            query: ({ id, patch }) => ({
                url: `${DRWINGS_URL}/${id}`,
                method: 'PATCH',
                body: patch
            }),
            invalidatesTags: ['Drawing']
        }),
        deleteDrawing: builder.mutation({
            query: (id) => ({
                url: `${DRWINGS_URL}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Drawing']
        }),
        getDrawingByUserId: builder.query({
            query: (uid) => ({
                url: `${DRWINGS_URL}/user/${uid}`,
                method: "GET",
            }),
            providesTags: ['Drawing']
        }),
        updateDrawingLikeCount: builder.mutation({
            query: ({ id }) => ({
                url: `${DRWINGS_URL}/${id}/like`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Drawing']
        }),
    })
})




export const {
    useCreateDrawingMutation,
    useGetAllDrawingsQuery,
    useGetOneDrawingQuery,
    useUpdateDrawingMutation,
    useDeleteDrawingMutation,
    useGetDrawingByUserIdQuery,
    useUpdateDrawingLikeCountMutation,
} = drawingsApiSlice;