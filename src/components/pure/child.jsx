import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";

const Child = ({ name, send }) => {
    const messageRef = useRef("");

    const [texto, setTexto] = useState();

    function pressButton() {
        const text = messageRef.current.value;
        alert(`text is ${text}`);
    }
    function pressButtonParams(text) {
        alert(`Text ${text}`);
    }
    function dataChange(txt) {
        setTexto(txt);
    }

    return (
        <div>
            <h3
                onMouseOver={() => {
                    console.log("mouse Over");
                }}
            >
                child component
            </h3>
            <Button onClick={pressButton}>boton1</Button>
            <Button onClick={() => pressButtonParams("hola")}>boton2</Button>
            <br />
            <br />
            <input
                placeholder="Inster your Name"
                onFocus={() => console.log("input focused")}
                onChange={(e) => dataChange(e.target.value)}
                ref={messageRef}
            ></input>
            <Button onClick={() => send(messageRef.current.value)}>
                funcion del padre
            </Button>
            <div>
                <h2>{texto}</h2>
            </div>
        </div>
    );
};

export default Child;
