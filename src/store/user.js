import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    phone: JSON.parse(localStorage.getItem("phone")) || null,
    image: localStorage.getItem("image") || null,
    links: JSON.parse(localStorage.getItem("links")) || {},
  },
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
      localStorage.setItem("phone", JSON.stringify(action.payload));
    },
    updateEmail: (state, action) => {
      state.user = { ...state.user, email: action.payload };
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state.user, email: action.payload })
      );
    },
    updateImage: (state, action) => {
      state.image = action.payload;
      localStorage.setItem("image", action.payload);
    },
    deleteImage: (state) => {
      state.image = null;
      localStorage.removeItem("image");
    },
    updateLinks: (state, action) => {
      state.links = action.payload;
      localStorage.setItem("links", JSON.stringify(action.payload));
    },
  },
});

export const {
  register,
  updatePhone,
  updateEmail,
  updateImage,
  deleteImage,
  updateLinks,
} = userSlice.actions;
export default userSlice.reducer;
