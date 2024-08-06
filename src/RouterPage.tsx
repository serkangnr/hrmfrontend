import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChardCard from "./pages/ChardCard/ChardCard";
import ShiftCard from "./pages/ShiftCard";
import DanismanlikPage from "./pages/DanismanlikPage";
import Personel from "./pages/Personel";
import UserStoryPage from "./pages/UserStoryPage";
import { useAppSelector } from "./store";
import ManagerDashboard from "./pages/ManagerDashboard";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import AdminDashboard from "./pages/AdminDashboard";
function RouterPage() {

    const isLogin = useAppSelector((state) => state.auth.isAuth);

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
                <Route path="/mdashboard" element={<ManagerDashboard />} />
                <Route path="/api/v1/auth/verifyEmail" element={<VerifyEmailPage />} />
                <Route path="/adashboard" element={<AdminDashboard />} />


            </Routes>
        </BrowserRouter>
    );
}

export default RouterPage;
