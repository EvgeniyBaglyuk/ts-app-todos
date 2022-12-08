import React from "react";
import {useDispatch,useSelector} from "../../hooks";
import {postActions} from "../../store"
import {FC, useEffect} from "react";
import Loader from "../Ui/loader";
import PostCard from "../PostCard/PostCard";

const App: FC = () => {

    const dispatch = useDispatch()

    const {loading, data} = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(postActions.getPosts())
    },[dispatch]);

    return (
        <div className="container py-5">
            <div className="row">
                {loading ? <Loader /> : data &&
                    data.map(post => (
                        <div className = "cold-md-6 col-lg-4" key={post.id}>
                            <PostCard post={post}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default App