import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { tokenRequestAsync } from "../store/token/actions";

export function useToken() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenRequestAsync());
  }, [])
}
