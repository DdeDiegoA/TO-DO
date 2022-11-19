import "./App.css";
import "./styles/menu.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import MenuComponent from "./components/pure/menuComponent";

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
