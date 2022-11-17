/**
 * *ejemplo hooks
 * *useState()
 * *useContext()
 */
import React, { useState, useContext } from "react";

/**
 *
 * @returns component1
 * * dispone de un contexto que va a tener un valor
 * * que recibe el padre
 */
const miContexto = React.createContext(null);

export const Component1 = () => {
    //* inicializamos un estado vacio que va a rellenarse
    //* con datos del padre
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useContext(miContexto);
    return (
        <div>
            <h1>el token es: {state.token}</h1>
            <Component2></Component2>
        </div>
    );
};
/**
 *
 * @returns
 */
export const Component2 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useContext(miContexto);
    return (
        <div>
            <h2>la sesion es: {state.session}</h2>
        </div>
    );
};

const ComponenteConContexto = () => {
    const estadoInicial = {
        token: "12345566",
        session: 1,
    };

    //* creamos el estado del componente
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sessionData, setSessionData] = useState(estadoInicial);

    //* añadiremos valores con una funcion
    //todo: cualquier componente que este por debajo de este puedan acceder a los datos
    function actualizarSession() {
        setSessionData({
            token: "JWT123341231",
            session: sessionData.session + 1,
        });
    }
    //creamos el contexto
    return (
        <div>
            <miContexto.Provider value={sessionData}>
                {/* todos lo que este acá puede leer los datos de session data
                ademas, si se actualiza, los componentes de aqui, tambien lo actualizan
                 */}
                <h1>componente con contexto</h1>
                <Component1></Component1>
                <button onClick={actualizarSession}>actualiza session</button>
            </miContexto.Provider>
        </div>
    );
};

export default ComponenteConContexto;
