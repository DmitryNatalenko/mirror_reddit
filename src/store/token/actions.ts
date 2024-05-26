import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState} from "../reduser";
import axios from "axios";

export const SAVE_TOKEN = 'SAVE_TOKEN';
export type SaveTokenAction = {
  type: typeof SAVE_TOKEN;
  token: string;
}
export const saveToken: ActionCreator<SaveTokenAction> = (token: string) => ({
  type: SAVE_TOKEN,
  token,
});

export type DataToken = {
  data: {access_token: string}
}

export const tokenRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const url = new URLSearchParams(window.location.search);
  const code = url.get('code');
  if (sessionStorage.getItem('token')) dispatch(saveToken(sessionStorage.getItem('token')))
  const token = getState().token;

  if (code && token === '' || token === undefined ) {
    axios.post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${code}&redirect_uri=http://www.localhost:3000/auth`,
      {
        auth: { username: 'ike4h2vJJ9uIkxupISjjrg', password: '38nRDCEPsCJyKzDN_i2ltSI2u03JLg' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
      }
    )
      .then(({ data }: DataToken ) => {
        if (!data) return
        dispatch(saveToken(data.access_token));
        sessionStorage.setItem('token', data.access_token);
      })
  }
}
