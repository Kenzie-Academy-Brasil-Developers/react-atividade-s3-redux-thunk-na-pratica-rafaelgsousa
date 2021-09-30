import {ADD_COMMENT} from "./actionsTypes";

export const addComment = (updateUser) => ({
    type: ADD_COMMENT,
    updateUser,
});