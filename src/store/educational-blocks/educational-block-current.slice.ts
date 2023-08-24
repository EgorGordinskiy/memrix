import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IEducationalBlock } from '../../models/educational-block.model';

interface IEducationalBlockState {
  educationalBlock: IEducationalBlock | null;
}

const initialState: IEducationalBlockState = {
  educationalBlock: null
};

const educationalBlockCurrentSlice = createSlice({
  name: 'educationalBlockCurrent',
  initialState,
  reducers: {
    setEducationalBlockCurrent: (state, action: PayloadAction<IEducationalBlock | null>) => {
      state.educationalBlock = action.payload;
    }
  }
});

export const { setEducationalBlockCurrent } = educationalBlockCurrentSlice.actions;

export const educationalBlockCurrentReducer = educationalBlockCurrentSlice.reducer;
