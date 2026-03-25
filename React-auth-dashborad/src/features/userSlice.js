export const fetchUsers = createAsyncThunk(
     "users/fetchUsers",
     async () =>{
        const response = await fetch(`/users?page=${pages}`);
        return res.data.data;
     }
);

const userSlice =  createSlice({
    name:"user",
    initialState:{
        users:[],
        loading: false,
        error: null,
    },
    extraReducers : (builder) =>{
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUsers.fullfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.loading = false;
            state.error   = "Failed to fetch users";
        })
    },
});

export default userSlice.reducer;