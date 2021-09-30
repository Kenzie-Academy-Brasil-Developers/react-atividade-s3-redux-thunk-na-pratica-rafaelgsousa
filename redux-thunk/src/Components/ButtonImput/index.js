import { useState } from "react";
import { useDispatch } from "react-redux";
import {addCommentThunk} from "./../../store/modules/user/thunks";
import "./style.css"

function ButtonInput (){

    const [comment,setComment]=useState("")
    const dispatch = useDispatch();

    return (
        <div className="addmessage">
            <input type="text" onChange={(e)=>setComment(e.target.value)}/>
            <button onClick={() => dispatch(addCommentThunk(comment))}>
                new comment
            </button>
        </div>
    )
}

export default ButtonInput;