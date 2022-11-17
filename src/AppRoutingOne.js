import "./App.css";
import {
    createBrowserRouter as Router,
    Route,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/homePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import RegisterForm from "./components/pure/forms/registerForm";
import TaskList from "./components/container/task_list";

const router = Router([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "Register",
        element: <RegisterForm />,
    },
    {
        path: "Tasks",
        element: <TaskList />,
    },
]);
function AppRoutingOne() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default AppRoutingOne;
