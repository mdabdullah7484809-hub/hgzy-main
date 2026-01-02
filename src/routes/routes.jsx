import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import Activity from "../Pages/Activity";
import Wallet from "../Pages/Wallet";
import Promotion from "../Pages/Promotion";
import AdminLogin from "../admin/pages/Adminlogin";
import AdminLayout from "../Layouts/Adminlaout";
import Overview from "../admin/pages/Overview";
import AddSlider from "../admin/pages/slider/Addslider";
import Sliderlist from "../admin/pages/slider/Sliderlist";
import Addsectiongame from "../admin/pages/gamelist/Addsectiongame";
import Sectiongame from "../admin/pages/gamelist/Sectiongame";
import DemoGame from "../Pages/DemoGame";
import Deposit from "../Pages/Deposit";
import Withdraw from "../Pages/Withdraw";
import Account from "../Pages/Account";
import Language from "../Pages/Language";
import WalletMethod from "../Pages/WalletMethod";
import EwalletMethod from "../Pages/EwalletMethod";
import Activeuser from "../admin/pages/users/Activeuser";
import Alldeposit from "../admin/pages/deposit/Alldeposit";
import Allwithdraw from "../admin/pages/withdraw/Allwithdraw";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/games/:id",
        element: <DemoGame />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { path: "/dashboard", element: <Overview /> },
      { path: "/dashboard/add-slider", element: <AddSlider /> },
      { path: "/dashboard/slider-list", element: <Sliderlist /> },
      { path: "/dashboard/add-game", element: <Addsectiongame /> },
      { path: "/dashboard/all-games", element: <Sectiongame /> },
      { path: "/dashboard/active-users", element: <Activeuser /> },
      { path: "/dashboard/all-deposits", element: <Alldeposit /> },
      { path: "/dashboard/all-withdraw", element: <Allwithdraw /> },
    ],
  },
  { path: "/account", element: <Account /> },
  { path: "/promotion", element: <Promotion /> },
  { path: "/activity", element: <Activity /> },
  { path: "/wallet", element: <Wallet /> },
  { path: "/deposit", element: <Deposit /> },
  { path: "/withdraw", element: <Withdraw /> },
  { path: "/login", element: <Login /> },
  { path: "/admin-login", element: <AdminLogin /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <ForgotPassword /> },
  { path: "/language", element: <Language /> },
  { path: "/method", element: <WalletMethod /> },
  { path: "/ewallet", element: <EwalletMethod /> },
]);

export default router;
