/**
 * *crear un componente de tipo funcion y acceder a su estado
 * *privado a través de un hook y, ademas, poder modificarlo.
 */
import React, { useState } from "react";

const Ejemplo1 = () => {
    //* valor inicial para un contador
    const valorInicial = 0;
    //* valor inicial para una persona
    const personaInicial = {
        nombre: "diego",
        email: "dieego@",
    };
    /**
     * * queremos que el valor incial y persona inicial sean parte del
     * * estado del componente para asi poder gestionar su cambio
     * * y que este se vea reflejado en la vista del componente.
     */

    // ? definimos el state de contador
    const [contador, setContador] = useState(valorInicial);

    // ? definimos el state de persona
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizaPersona() {
        setPersona({
            nombre: "elpepe",
            email: "elpepe@pepe",
        });
    }

    return (
        <div>
            <h1>useState ejemplo1</h1>
            <h2>contador: {contador}</h2>
            <h2>datos de persona</h2>
            <h3>nombre: {persona.nombre}</h3>
            <h4>email: {persona.email}</h4>
            <button onClick={incrementarContador}>incrementar</button>
            <button onClick={actualizaPersona}>cambiar datos</button>
        </div>
    );
};

export default Ejemplo1;
