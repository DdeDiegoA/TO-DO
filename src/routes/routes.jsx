import { createBrowserRouter as Router, redirect } from "react-router-dom";

import HomePage from "../pages/home/homePage";
import NotFoundPage from "../pages/error/NotFoundPage";
import RegisterForm from "../components/pure/forms/registerForm";
import TaskPage from "../pages/taskPage";
import TaskDetail from "../pages/taskDetail";
import LoginForm from "../components/pure/forms/loginForm";

const logged = false;

const isLogged = async () => {
    const log = await logged;
    if (!log) {
        alert("you must be logged! redirect to Home...");
        return redirect("/");
    }
};
const isNotLogged = async () => {
    const log = await logged;
    if (log) {
        alert("you're already logged! redirect to Home...");
        return redirect("/");
    }
};

export const router = Router([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/Register",
        element: <RegisterForm />,
        loader: isNotLogged,
    },
    {
        path: "/Login",
        element: <LoginForm />,
        loader: isNotLogged,
    },
    {
        path: "/Tasks",
        element: <TaskPage />,
        loader: isLogged,
    },
    {
        path: "/Tasks/:id",
        element: <TaskDetail />,
        loader: isLogged,
    },
]);
