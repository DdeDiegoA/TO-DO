import "./App.css";
import "./styles/menu.scss";
import {
    createBrowserRouter as Router,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/homePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import RegisterForm from "./components/pure/forms/registerForm";
import TaskPage from "./pages/taskPage";
import MenuComponent from "./components/pure/menuComponent";

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
        element: <TaskPage />,
    },
]);
function AppRoutingOne() {
    return (
        <div>
            <header className="todo-header">
                <MenuComponent />
            </header>
            <main>
                <RouterProvider router={router} />
            </main>
        </div>
    );
}

export default AppRoutingOne;
