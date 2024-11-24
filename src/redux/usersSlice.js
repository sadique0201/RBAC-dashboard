import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: [
        { id: 1, name: 'Sadique', email: 'sadique@gmail.com', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Ahmed', email: 'ahmed@gmail.com', role: 'User', status: 'Inactive' },
    ],
    reducers: {
        addUser: (state, action) => { state.push(action.payload); },
        deleteUser: (state, action) => { return state.filter(user => user.id !== action.payload); },
        updateUser: (state, action) => {
            const index = state.findIndex(user => user.id === action.payload.id);
            state[index] = action.payload;
        },
    },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
