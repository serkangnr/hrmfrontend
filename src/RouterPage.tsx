import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/EmployeeDashboard";
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
import OnayBekleyenler from "./pages/OnayBekleyenler";
import AdminList from "./pages/AdminList";
import AdminEkle from "./pages/AdminEkle";
import CompanyListPage from "./pages/CompanyList";
import EditAdminPage from "./pages/EditAdminPage";
import UpdateManager from "./pages/UpdateManager";
import CalisanEkle from "./pages/CalisanEkle";
import CalisanList from "./pages/CalisanList";
import ChangePassword from "./pages/ChangePassword";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import UpdateEmployee from "./pages/UpdateEmployee";
import IzinYonetimi from "./pages/IzinYonetimi";


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
                <Route path="/onaybekleyenler" element={<OnayBekleyenler />} />
                <Route path="/adminlist" element={<AdminList />} />
                <Route path="/adminekle" element={<AdminEkle />} />
                <Route path="/updatemanager" element={<UpdateManager />} />
                <Route path="/sirketlistesi" element={<CompanyListPage />} />
                <Route path="/edit-admin" element={<EditAdminPage />} />
                <Route path="/calisanekle" element={<CalisanEkle />} />
                <Route path="/calisanlist" element={<CalisanList />} />
                <Route path="/changepassword" element={<ChangePassword />} />
                <Route path="/edashboard" element={<EmployeeDashboard />} />
                <Route path="/updateemployee" element={<UpdateEmployee />} />
                <Route path="/izinyonetimi" element={<IzinYonetimi />} />

                


            </Routes>
        </BrowserRouter>
    );
}

export default RouterPage;
