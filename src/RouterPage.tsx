import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

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
import IzinTalepSayfası from "./pages/IzinTalepSayfası";
import PendingLeave from "./pages/PendingLeave";

import ManagerList from "./pages/ManagerList";

import CalisanListDurum from "./pages/CalisanListDurum";
import VardiyaYonetimi from "./pages/VardiyaYonetimi";
import VerifyEmailPageEmployee from "./pages/VerifyEmailPageEmployee";
import ZimmetYonetimi from "./pages/ZimmetYonetimi";
import EquipmentTable from "./component/molecules/EquipmentTable";
import EquipmentTablePage from "./pages/EquipmentTablePage";
import EmployeeEquipmentTablePage from "./pages/EmployeeEquipmentTablePage";
import PendingEquipmentTablePage from "./pages/PendingEquipmentTablePage";
import RejectedEquipmentTablePage from "./pages/RejectedEquipmentTablePage";
import HarcamaTalepleri from "./pages/HarcamTalepleri";
import EmployeeExpensesList from "./pages/EmployeeExpensesList";





function RouterPage() {

    const isLogin = useAppSelector((state) => state.auth.isAuth);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
             
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
                <Route path="/izintalepsayfası" element={<IzinTalepSayfası />} />
                <Route path="/pendingleave" element={<PendingLeave />} />

                <Route path="/manager-list" element={<ManagerList />} />

                <Route path="/calisandurum" element={<CalisanListDurum />} />
                <Route path="/vardiyayonetimi" element={<VardiyaYonetimi />} />
                <Route path="/api/v1/auth/verifyEmailEmployee" element={<VerifyEmailPageEmployee />} />
                <Route path="/zimmetyonetimi" element={<ZimmetYonetimi />} />
                <Route path="/equipmenttable" element={<EquipmentTablePage />} />
                <Route path="/employeeequipmenttable" element={<EmployeeEquipmentTablePage />} />
                <Route path="/pendingequipmenttable" element={<PendingEquipmentTablePage />} />
                <Route path="/rejectedequipmenttable" element={<RejectedEquipmentTablePage />} />
                <Route path="/harcama-talepleri" element={<HarcamaTalepleri />} />
                <Route path="/expenses-employee-list" element={<EmployeeExpensesList />} />










                


            </Routes>
        </BrowserRouter>
    );
}

export default RouterPage;
