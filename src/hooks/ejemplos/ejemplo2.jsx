// * use Efect y combinar hooks

import React, { useEffect, useRef, useState } from "react";

const Ejemplo2 = () => {
    // Todo: haremos dos contadores, cada uno en estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //? creamos una ref con useRef()
    //* para asociar una variable con un elemento del DOM

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }
    function incrementar2() {
        setContador2(contador2 + 2);
    }

    //* useEffect

    //* al no tener opciones se ejecuta siempre que haya una modificacion en el estado del componente
    //? en las opciones podemos definir si se ejecuta solo si hay un cambio en el elemento deseado
    useEffect(() => {
        console.log("ejemplo");
        console.log(miRef);
    }, [contador1]);

    return (
        <div>
            <h1>useState,useEffect,useRef ejemplo1</h1>
            <h2>contador 1: {contador1}</h2>
            <h2>contador 2: {contador2}</h2>
            {/* elemento referenciado */}
            <h4 ref={miRef}>elemento referenciado</h4>
            <div>
                <button onClick={incrementar1}>incremetnar uno</button>
                <button onClick={incrementar2}>incremetnar dos</button>
            </div>
        </div>
    );
};

export default Ejemplo2;
