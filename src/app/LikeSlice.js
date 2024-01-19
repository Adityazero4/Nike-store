import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  likeState: false,
  likeItems: localStorage.getItem("like")
    ? JSON.parse(localStorage.getItem("like"))
    : [], // Let Suppose Database
  likeTotalQantity: 0,
};

const LikeSlice = createSlice({
  initialState,
  name: "like",
  reducers: {
    setOpenLike: (state, action) => {
      state.likeState = action.payload.likeState;
    },
    setCloseLike: (state, action) => {
      state.likeState = action.payload.likeState;
    },
    setAddItemToLike: (state, action) => {
      const itemIndex = state.likeItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        toast.success(`Item Already Added`);
      } else {
        const temp = { ...action.payload };
        state.likeItems.push(temp);

        toast.success(`${action.payload.title} added to Likes`);

        localStorage.setItem("like", JSON.stringify(state.likeItems));
      }
    },
    setRemoveItemFromLike: (state, action) => {
      const removeItem = state.likeItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.likeItems = removeItem;
      localStorage.setItem("like", JSON.stringify(state.likeItems));

      toast.success(`${action.payload.title} Removed From Likes`);
    },
    setClearLikeItems: (state, action) => {
      state.likeItems = [];
      toast.success(`Likes Cleared`);
      localStorage.setItem("like", JSON.stringify(state.likeItems));
    },
  },
});

export const {
  setOpenLike,
  setCloseLike,
  setAddItemToLike,
  setRemoveItemFromLike,
  setClearLikeItems,
} = LikeSlice.actions;

export const selectLikeState = (state) => state.like.likeState;
export const selectLikeItems = (state) => state.like.likeItems;

export default LikeSlice.reducer;
