import { assoc } from "./assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const generateId = <O extends object> (obj: O) => assoc('id', generateRandomString())(obj);
