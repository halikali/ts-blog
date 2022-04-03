import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { IPost } from "types/PostTypes";

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
