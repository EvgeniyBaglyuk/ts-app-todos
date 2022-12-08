import {Dispatch} from "redux";
import Post from "../../models/postModel";
import {Action} from "../index";
import ActionType from "../action-types";
import axios from "axios";

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type:ActionType.GET_POST_REQUEST
        })

        const {data} = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=10")

        dispatch({
            type:ActionType.GET_POST_SUCCESS,
            payload: data
        })
    } catch (error: any) {
        dispatch({
            type: ActionType.GET_POST_ERROR,
            payload: error.massage,
        })
    }
}