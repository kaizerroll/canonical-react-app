import React, { useState } from "react"

export default function MyComponent(props) {
    const [myVal, setVal] = useState(0);

    const onClick = function (event) {
        setVal(myVal + 1);
        console.log('myVal:', myVal);
    }

    return (
        <React.Fragment>
            <h2>I like {props.turtle}</h2>
            <button onClick={onClick}>Click Me!</button>
            <h2>{myVal}</h2>
        </React.Fragment>
    );
}