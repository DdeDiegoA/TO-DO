import React from "react";

export default function Ejemplo4(props) {
    return (
        <div>
            <h1>ejemplo4 Children props</h1>
            <h2>nombre: {props.nombre}</h2>
            {/* props.Children
            pintara por defecto lo que se encuentre entre las etiquetas de este componente */}
            {props.children}
        </div>
    );
}
