import React, { useState } from "react";
import Child from "../pure/child";

const Father = () => {
    const [name, setname] = useState("");

    function showMessage(text) {
        alert(`Messange recived: ${text}`);
        setname(text);
    }

    return (
        <div>
            <Child name={"ramon"} send={showMessage}></Child>
            <h3>your name is: {name}</h3>
        </div>
    );
};

export default Father;
