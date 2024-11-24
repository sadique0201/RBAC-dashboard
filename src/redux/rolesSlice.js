import { createSlice } from '@reduxjs/toolkit';

const rolesSlice = createSlice({
    name: 'roles',
    initialState: [
        { id: 1, name: 'Admin', permissions: ['read', 'write', 'delete'] },
        { id: 2, name: 'User', permissions: ['read'] },
    ],
    reducers: {
        addRole: (state, action) => { state.push(action.payload); },
        deleteRole: (state, action) => { return state.filter(role => role.id !== action.payload); },
        updateRole: (state, action) => {
            const index = state.findIndex(role => role.id === action.payload.id);
            state[index] = action.payload;
        },
    },
});

export const { addRole, deleteRole, updateRole } = rolesSlice.actions;
export default rolesSlice.reducer;
