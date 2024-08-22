import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IResponse } from '../../models/IResponse';

interface ICommentRequestDto {
  token: string;
  comment: string;
  rate: number;
}
export interface CommentManagerResponseDto {
  comment: string;
  managerName: string;
  managerSurname: string;
  managerAvatar: string;
  companyName: string;
  companyLogo: string;
  sector: string;
}

interface CommentUpdateRequestDto {
  id?: string;
  token: string;
  comment: string;
  rate: number;
}

interface CommentResponseDto {
  id: string;
  comment: string;
  managerId: string;
  companyId: string;
  rate: number;
}

interface CommentState {
  loading: boolean;
  success: boolean;
  error: string | null;
  commentData: CommentResponseDto | null;
  commentList: CommentManagerResponseDto[] | null;
  updateSuccess: boolean;
}

const initialState: CommentState = {
  loading: false,
  success: false,
  error: null,
  commentData: null,
  updateSuccess: false,
  commentList: null,
};

export const fetchCommentList = createAsyncThunk(
  'comment/fetchCommentList',
  async () => {
      const response = await fetch('http://localhost:9095/api/v1/comment/commnet-list', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const data = await response.json();
      console.log('API Response:', data);
      return data;
  }
);


export const fetchGetComment = createAsyncThunk(
  'comment/getComment',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:9095/api/v1/comment/get-comment?token=${token}`);

      if (!response.ok) {
        throw new Error('Failed to fetch comment');
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message || 'Error fetching comment');
    }
  }
);

export const fetchSaveComment = createAsyncThunk(
  'comment/saveComment',
  async (dto: ICommentRequestDto, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:9095/api/v1/comment/save-comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto),
      });

      if (!response.ok) {
        throw new Error('Failed to save comment');
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message || 'Error saving comment');
    }
  }
);

export const fetchUpdateComment = createAsyncThunk(
  'comment/updateComment',
  async (dto: CommentUpdateRequestDto, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:9095/api/v1/comment/update-comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto),
      });

      if (!response.ok) {
        throw new Error('Failed to update comment');
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message || 'Error updating comment');
    }
  }
);
export const fetchDeleteComment = createAsyncThunk(
    'comment/deleteComment',
    async (token: string, { rejectWithValue }) => {
      try {
        const response = await fetch(`http://localhost:9095/api/v1/comment/delete-comment?token=${token}`, {
          method: 'GET',
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete comment');
        }
  
        return await response.json();
      } catch (error: any) {
        return rejectWithValue(error.message || 'Error deleting comment');
      }
    }
  );

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSaveComment.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(fetchSaveComment.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      

    builder
      .addCase(fetchGetComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetComment.fulfilled, (state, action: PayloadAction<IResponse>) => {
        state.loading = false;
        state.commentData = action.payload.data;
      })
      builder
      .addCase(fetchDeleteComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeleteComment.fulfilled, (state, action: PayloadAction<IResponse>) => {
        state.loading = false;
        state.success = action.payload.data;
      })
      .addCase(fetchDeleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
      builder.addCase(fetchCommentList.fulfilled, (state, action: PayloadAction<IResponse>) => {
        state.commentList = action.payload.data;
    })
      

   
  },
});

export default commentSlice.reducer;
