import { useState } from "react";
import Line from "./Line.jsx";

const Input = ({ handleFunction, value, isDisable }) => {

    const [isFocus, setIsFocus] = useState(false)

    return (
        <>
            <input
                className="field"
                type="text"
                placeholder="0.00"
                onChange={(e)=>{handleFunction(e)}}
                value={value}
                disabled={isDisable}
                onFocus={()=>setIsFocus(true)}
                onBlur={()=>setIsFocus(false)}
            />
            <Line isFocus={isFocus} />
        </>
    )
}

export default Input