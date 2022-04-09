export interface IPost {
  id?: string;
  category: string;
  title: string;
  coverImageURL: string;
  content: string;
  contentImageURL: string;
  tags: string[];
  author: string;
  createdAt: Date;
}

export interface IPostState {
  posts: IPost[];
}

export interface IPostAction {
  type: string;
  payload?: any;
  error?: any;
}

interface CREATE_POST_REQUEST {
  type: "CREATE_POST_REQUEST";
}
interface CREATE_POST_SUCCESS {
  type: "CREATE_POST_SUCCESS";
  payload: IPost;
}
interface CREATE_POST_FAILURE {
  type: "CREATE_POST_FAILURE";
  error: any;
}

export type PostAction =
  | CREATE_POST_REQUEST
  | CREATE_POST_SUCCESS
  | CREATE_POST_FAILURE;
