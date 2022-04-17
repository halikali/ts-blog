import { IPost } from "./PostTypes";

export interface IAppState {
  AllPosts: {
    data: IPost[];
  };
  Detail?: {
    data: IPost;
  };
  CategoryPost?: {
    data: IPost[];
  };
}
