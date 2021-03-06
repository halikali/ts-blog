import { db } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { IPost } from "types/PostTypes";
import { type } from "os";

export const createPost = (post: IPost) => {
  return (dispatch: any) => {
    dispatch({
      type: "CREATE_POST_REQUEST",
    });

    try {
      addDoc(collection(db, "posts"), post);
      dispatch({
        type: "CREATE_POST_SUCCESS",
        payload: "post başarıyla eklendi",
      });
    } catch (error) {
      dispatch({
        type: "CREATE_POST_FAILURE",
        error,
      });
    }
  };
};

export const getAllPosts = () => {
  return async (dispatch: any) => {
    dispatch({ type: "GET_ALL_POSTS_REQUEST" });

    try {
      let allPosts: IPost[] = [];

      const querySnapshot = await getDocs(collection(db, "posts"));

      querySnapshot.forEach((item) => {
        allPosts.push({
          author: item.data().author,
          category: item.data().category,
          content: item.data().content,
          contentImageURL: item.data().contentImageURL,
          coverImageURL: item.data().coverImageURL,
          createdAt: item.data().createdAt,
          tags: item.data().tags,
          title: item.data().title,
          id: item.id,
        });
      });
      dispatch({ type: "GET_ALL_POSTS_SUCCESS", payload: allPosts });
    } catch (error) {
      dispatch({ type: "GET_ALL_POSTS_FAILURE", error });
    }
  };
};

export const getPostDetail = (id: any) => {
  return async (dispatch: any) => {
    dispatch({ type: "GET_POST_DETAIL_REQUEST" });

    try {
      const snapshot = await getDoc(doc(db, "posts", id));
      if (snapshot.exists()) {
        dispatch({ type: "GET_POST_DETAIL_SUCCESS", payload: snapshot.data() });
      }
    } catch (error) {
      dispatch({ type: "GET_POST_DETAIL_FAILURE", error });
    }
  };
};

export const clearPostDetails = () => {
  return (dispatch: any) => {
    dispatch({ type: "CLEAR_POST_DETAIL" });
  };
};

let categoryPosts: IPost[] = [];
export const getPostByCategory = (category: string) => {
  return async (dispatch: any) => {
    dispatch({ type: "GET_POST_BY_CATEGORY_REQUEST" });

    try {
      const q = query(
        collection(db, "posts"),
        where("category", "==", category),
        limit(3)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.forEach((item) => {
        categoryPosts.forEach((category) => {
          category.id === item.id &&
            categoryPosts.splice(categoryPosts.indexOf(category), 1);
        });
        categoryPosts.push({
          author: item.data().author,
          category: item.data().category,
          content: item.data().content,
          contentImageURL: item.data().contentImageURL,
          coverImageURL: item.data().coverImageURL,
          createdAt: item.data().createdAt,
          tags: item.data().tags,
          title: item.data().title,
          id: item.id,
        });
      });
      dispatch({
        type: "GET_POST_BY_CATEGORY_SUCCESS",
        payload: categoryPosts,
      });
    } catch (error) {
      dispatch({ type: "GET_POST_BY_CATEGORY_FAILURE", error });
    }
  };
};
