import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./features/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
