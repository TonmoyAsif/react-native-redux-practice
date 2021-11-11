import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        list: [
            {
                id: 1,
                name: 'John'
            },
            {
                id: 2,
                name: 'Doe'
            }
        ]
    }
})

export default userSlice.reducer;