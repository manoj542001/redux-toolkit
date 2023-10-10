import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: "todoApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: " https://calm-plum-jaguar-tutu.cyclic.app",
  }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => ({ url: "todos" }),
      providesTags: ["Todos"],
    }),

    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: "DELETE",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    createTodo: builder.mutation({
      query: (todo) => ({
        url: `todos`,
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTodoQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} = todoApi;
