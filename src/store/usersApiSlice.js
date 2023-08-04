import { apiSlice } from "./apiSlice";

const USERS_URL = '/api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/signup`,
                method: 'POST',
                body: data
            })
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: `${USERS_URL}`,
                method: 'GET',
            })
        }),
        getOneUser: builder.query({
            query: (uid) => ({
                url: `${USERS_URL}/${uid}`,
                method: 'GET',
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/user/update`,
                method: 'PATCH',
                body: data
            })
        }),
    })
})


export const {
    useLoginMutation,
    useLogoutMutation,
    useSignupMutation,
    useGetAllUsersQuery,
    useGetOneUserQuery,
    useUpdateUserMutation } = usersApiSlice;