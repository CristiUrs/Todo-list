import CssBaseLine from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

export default function App() {
    return (
        <>
            <CssBaseLine />
            <Navbar />
            <TodoList />
        </>
    );
}
