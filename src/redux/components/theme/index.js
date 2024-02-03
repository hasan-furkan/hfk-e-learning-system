import { createSlice } from '@reduxjs/toolkit'

const themeSLice = createSlice({
    name: 'theme',
    initialState: localStorage.getItem('theme') || 'light',
    reducers: {
        themeChange: (state, action) => {
            state = action.payload
            localStorage.setItem('theme', state)
            return state
        }
    },
})

export const { themeChange } = themeSLice.actions
export default themeSLice.reducer