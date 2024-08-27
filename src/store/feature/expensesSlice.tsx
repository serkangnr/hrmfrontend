import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Rest from '../../config/RestApis';
import { IResponse } from '../../models/IResponse';

export enum EExpenseType {
    YEMEK = 'YEMEK',
    KONAKLAMA = 'KONAKLAMA',
    ULASIM = 'ULASIM',
    EGLENCE = 'EGLENCE',
    SAGLIK = 'SAGLIK',
    EGITIM = 'EGITIM',
    DIGER = 'DIGER',
}
export enum EStatus {
    
        PENDING = 'PENDING',
        ACTIVE = 'ACTIVE',
        PASSIVE = 'PASSIVE',
        REJECTED = 'REJECTED',
  
}
export interface ExpensesResponseDto {
    id: number;
    employeeName: string;
    employeeSurname: string;
    amount: number;
    expenseType: EExpenseType;
    description: string;
    expensesDate: string; 
    status?: EStatus;
    document: string;
}
export interface Expenses{
    id: number;
    employeeId?: string;
    managerId?: string;
    amount: number;
    expenseType: EExpenseType;
    description: string;
    expensesDate: string; 
    status: EStatus;
    document: string;
}

export interface IExpensesRequest {
    token: string;
    amount: number;
    expenseType: EExpenseType;
    description: string;
    expensesDate: string;
    document: string;
}

interface IExpensesState {
    isLoading: boolean;
    success: boolean;
    error: string | null;
    myExpensesList: Expenses[] | null;
    expensesList: ExpensesResponseDto[] | null;
    pendingExpensesCount: number ; 
}

const initialExpensesState: IExpensesState = {
    isLoading: false,
    success: false,
    error: null,
    myExpensesList: null,
    expensesList: null,
    pendingExpensesCount: 0,
};
export const fetchListExpenses = createAsyncThunk(
    'expenses/fetchListExpenses',
    async (token: string) => {
        try {
            const response = await fetch(`http://localhost:9098/api/v1/expenses/get-list-expenses?token=${token}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.data; // List of ExpensesResponseDto

        } catch (error) {
            throw new Error('Fetch failed');
        }
    }
);

export const fetchCreateExpense = createAsyncThunk(
    'expenses/fetchCreateExpense',
    async (payload: IExpensesRequest) => {
        try {
            const response = await fetch('http://localhost:9098/api/v1/expenses/save-expenses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.data; // Boolean değer dönecek

        } catch (error) {
            throw new Error('Fetch failed');
        }
    }
);
export const fetchConfirmExpense = createAsyncThunk(
    'expenses/fetchConfirmExpense',
    async (id: number) => {
        try {
            const response = await fetch(`http://localhost:9098/api/v1/expenses/confirm-expenses?id=${id}`, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.data; // Boolean değer dönecek

        } catch (error) {
            throw new Error('Fetch failed');
        }
    }
);
export const fetchMyExpenses = createAsyncThunk(
    'expenses/fetchMyExpenses',
    async (token: string) => {
        try {
            const response = await fetch(`http://localhost:9098/api/v1/expenses/get-my-expenses-list-by-token?token=${token}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.data; // Assuming data is a list of expenses

        } catch (error) {
            throw new Error('Fetch failed');
        }
    }
);
export const fetchRejectExpense = createAsyncThunk(
    'expenses/fetchRejectExpense',
    async (id: number) => {
        try {
            const response = await fetch(`http://localhost:9098/api/v1/expenses/reject-expenses?id=${id}`, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.data; // Boolean değer dönecek

        } catch (error) {
            throw new Error('Fetch failed');
        }
    }
);
export const fetchPendingExpensesCount = createAsyncThunk(
    'expenses/fetchPendingExpensesCount',
    async (token: string) => {
        try {
            const response = await fetch(`http://localhost:9098/api/v1/expenses/get-pending-expenses-count?token=${token}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.data; // Assuming data.data is the count of pending expenses

        } catch (error) {
            throw new Error('Fetch failed');
        }
    }
);

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: initialExpensesState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreateExpense.pending, (state) => {
                state.isLoading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(fetchCreateExpense.fulfilled, (state, action: PayloadAction<boolean>) => {
                state.isLoading = false;
                state.success = action.payload; // Assuming payload is a boolean indicating success
                state.error = null;
            })
            .addCase(fetchCreateExpense.rejected, (state, action) => {
                state.isLoading = false;
                state.success = false;
                state.error = action.error.message || 'Failed to save expenses';
            })
            .addCase(fetchConfirmExpense.pending, (state) => {
                state.isLoading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(fetchConfirmExpense.fulfilled, (state, action: PayloadAction<boolean>) => {
                state.isLoading = false;
                state.success = action.payload; // Assuming payload is a boolean indicating success
                state.error = null;
            })
            .addCase(fetchConfirmExpense.rejected, (state, action) => {
                state.isLoading = false;
                state.success = false;
                state.error = action.error.message || 'Failed to confirm expenses';
            })
            .addCase(fetchRejectExpense.pending, (state) => {
                state.isLoading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(fetchRejectExpense.fulfilled, (state, action: PayloadAction<boolean>) => {
                state.isLoading = false;
                state.success = action.payload; // Assuming payload is a boolean indicating success
                state.error = null;
            })
            .addCase(fetchRejectExpense.rejected, (state, action) => {
                state.isLoading = false;
                state.success = false;
                state.error = action.error.message || 'Failed to reject expenses';
            })
             .addCase(fetchMyExpenses.pending, (state) => {
                state.isLoading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(fetchMyExpenses.fulfilled, (state, action: PayloadAction<Expenses[]>) => {
                state.isLoading = false;
                state.success = true;
                state.myExpensesList = action.payload; // List of expenses
                state.error = null;
            })
            .addCase(fetchMyExpenses.rejected, (state, action) => {
                state.isLoading = false;
                state.success = false;
                state.expensesList = null;
                state.error = action.error.message || 'Failed to fetch expenses';
            })
            .addCase(fetchListExpenses.pending, (state) => {
                state.isLoading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(fetchListExpenses.fulfilled, (state, action: PayloadAction<ExpensesResponseDto[]>) => {
                state.isLoading = false;
                state.success = true;
                state.expensesList = action.payload; // List of expenses
                state.error = null;
            })
            .addCase(fetchListExpenses.rejected, (state, action) => {
                state.isLoading = false;
                state.success = false;
                state.expensesList = null;
                state.error = action.error.message || 'Failed to fetch expenses';
            });
    
    builder
    .addCase(fetchPendingExpensesCount.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
    })
    .addCase(fetchPendingExpensesCount.fulfilled, (state, action: PayloadAction<number>) => {
        state.isLoading = false;
        state.success = true;
        state.pendingExpensesCount = action.payload; // Yeni state güncelleme
        state.error = null;
    })
    .addCase(fetchPendingExpensesCount.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.pendingExpensesCount = 0; // Yeni state güncelleme
        state.error = action.error.message || 'Failed to fetch pending expenses count';
    });
},
});

export default expensesSlice.reducer;
