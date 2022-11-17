import React, { useState } from "react";

const LogOutComponent = ({ logOutAction }) => {
    return <button onClick={logOutAction}>LogOut</button>;
};
const LogInComponent = ({ logInAction }) => {
    return <button onClick={logInAction}>LogIn</button>;
};

const OptionalRenders = () => {
    const [acces, setAcces] = useState(true);
    const [nMessage, setNMessage] = useState(0);

    const logOutActionBtn = () => {
        setAcces(false);
    };
    const logInActionBtn = () => {
        setAcces(true);
    };
    const newMessage = () => {
        setNMessage(nMessage + 1);
    };

    return (
        <div>
            {acces ? (
                <LogOutComponent
                    logOutAction={logOutActionBtn}
                ></LogOutComponent>
            ) : (
                <LogInComponent logInAction={logInActionBtn}></LogInComponent>
            )}
            <div>
                {nMessage > 0 && <p>you have {nMessage} new messages...</p>}
                {nMessage === 0 && <p>there are no new messages</p>}
                <button onClick={newMessage}>mesage++</button>
            </div>
        </div>
    );
};

export default OptionalRenders;
