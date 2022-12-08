import ActionType from "./action-types";
import Post from "../models/postModel";


interface GetPostRequestAction {
    type: ActionType.GET_POST_REQUEST
}

interface GetPostSuccessAction {
    type: ActionType.GET_POST_SUCCESS,
    payload: Post[]
}

interface GetPostErrorAction {
    type: ActionType.GET_POST_ERROR,
    payload: string
}


export type Action = GetPostErrorAction | GetPostRequestAction | GetPostSuccessAction