import { ActionCreator, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions";
import { MeState, meReducer } from "./me/reducer";
import { SAVE_TOKEN, SaveTokenAction } from "./token/actions";
import { PostState, postReducer } from "./posts/reducer";
import { POST_REQUEST, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS, PostRequestAction, PostRequestErrorAction, PostRequestSuccessAction } from "./posts/actions";

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
  post: PostState;
};

const initialState: RootState = {
  commentText: '',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
  post: {
    loading: false,
    error: '',
    data: [{}],
    nextAfter: '',
  },
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

type MyAction = UpdateCommentAction
  | SaveTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | PostRequestAction
  | PostRequestSuccessAction
  | PostRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    case POST_REQUEST:
    case POST_REQUEST_SUCCESS:
    case POST_REQUEST_ERROR:
      return {
        ...state,
        post: postReducer(state.post, action),
      }
    default:
      return state;
  }
}
