import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IEducationalBlock } from '../../models/educational-block.model';

interface ILibraryState {
  educationalBlocks: IEducationalBlock[];
}

const initialState: ILibraryState = {
  educationalBlocks: []
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addEducationalBlock: (state, action: PayloadAction<IEducationalBlock>) => {
      state.educationalBlock = action.payload;
    }
  }
});

export const { addEducationalBlock } = librarySlice.actions;

export const libraryReducer = librarySlice.reducer;
