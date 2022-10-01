import { configureStore } from "@reduxjs/toolkit";
import buttonsLikeState from "./buttonsLikeState";
import productsCartReducer from "./productsCartReducer";
import productsReduser from "./productsReduser";


export const store = configureStore({
  reducer: {
    cartProductsState: productsCartReducer,
    products:productsReduser,
    buttonsState: buttonsLikeState
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch