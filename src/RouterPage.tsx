import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ChardCard from "./pages/ChardCard/ChardCard";
import ShiftCard from "./pages/ShiftCard";
import DanismanlikPage from "./pages/DanismanlikPage";
import Personel from "./pages/Personel";
import UserStoryPage from "./pages/UserStoryPage";
function RouterPage() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/ucretlendirme" element={<ChardCard />} />
                <Route path="/vardiya" element={<ShiftCard />} />
                <Route path="/danismanlik" element={<DanismanlikPage />} />
                <Route path="/personel" element={<Personel />} />
                <Route path="/userstory" element={<UserStoryPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default RouterPage;
