import "./style.css"

import { useSelector } from "react-redux";

function Display(){

    const user = useSelector((state)=> state.user)

    return (
        <div className="display">
            {console.log(user.comments)}
            <ul className="caixa">
                {user.comments.map((e,i)=><li key={i} className="message">{e}</li>)}
            </ul>
        </div>
    )
}

export default Display;