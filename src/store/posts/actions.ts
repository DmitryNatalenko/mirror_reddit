import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reduser";
import axios from "axios";

export interface IPostsData {
  id?: string;
  title?: string;
  imgPost?: string;
  date?: string;
  author?: string;
  authorAvatar?: string;
  karma?: string;
  flair?: string;
  numComments?: string;
  upvote?: number;
}

export const POST_REQUEST = 'POST_REQUEST';
export type PostRequestAction = {
  type: typeof POST_REQUEST;
}
export const postRequest: ActionCreator<PostRequestAction> = () => ({
  type: POST_REQUEST,
});

export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export type PostRequestSuccessAction = {
  type: typeof POST_REQUEST_SUCCESS;
  data: IPostsData[];
  nextAfter: string;
}
export const postRequestSuccess: ActionCreator<PostRequestSuccessAction> = (data, nextAfter) => ({
  type: POST_REQUEST_SUCCESS,
  data,
  nextAfter,
});

export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export type PostRequestErrorAction = {
  type: typeof POST_REQUEST_ERROR;
  error: string;
}
export const postRequestError: ActionCreator<PostRequestErrorAction> = (error: string) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const postRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const nextAfter = getState().post.nextAfter;
  const prevData = getState().post.data;
  dispatch(postRequest());
  async function loadPosts () {
    try {
      const {data:{data:{after, children}}} = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
        params: {
          limit: 10,
          after: nextAfter,
        }
      });
      const result = children.map((el:any) => {
        const { data } = el;
        return {
            id:data.id,
            title:data.title,
            imgPost: data.url_overridden_by_dest,
            date: data.created,
            author: data.subreddit,
            authorAvatar: data.sr_detail.header_img,
            karma: data.score,
            flair: data.link_flair_text,
            numComments: data.num_comments,
            upvote: data.upvote_ratio,
        };
      });
      const array = prevData.concat(result)
      const arrId = array.map(({id}) => id)
      const uniqArray = array.filter((el, index) => {
        if (el.id) return arrId.indexOf(el.id) === index
      })
      dispatch(postRequestSuccess(uniqArray, after));
    } catch (error:any) {
      dispatch(postRequestError(error.message))
    }

  }
  loadPosts();
}

