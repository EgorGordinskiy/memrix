import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type IEducationalBlock } from '../../models/educational-block.model';

export const educationalBlockApi = createApi({
  reducerPath: 'educationalBlockApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/educational-blocks/' }),
  endpoints: (builder) => ({
    getAllEducationalBlocks: builder.query<IEducationalBlock[], void>({
      query: () => ''
    }),
    getEducationalBlockById: builder.query<IEducationalBlock, string | undefined>({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (id) => `/${id}`
    }),
    createEducationalBlock: builder.mutation<IEducationalBlock, Partial<IEducationalBlock>>({
      query: (newBlock) => ({
        url: '',
        method: 'POST',
        body: newBlock
      })
    })
  })
});

export const { useGetAllEducationalBlocksQuery } = educationalBlockApi;
export const { useGetEducationalBlockByIdQuery } = educationalBlockApi;
export const { useCreateEducationalBlockMutation } = educationalBlockApi;
