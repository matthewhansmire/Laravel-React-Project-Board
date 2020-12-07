
import Landing from "../pages/Landing";

import Login from "../pages/Authentication/Login";
import AutoLogin from "../pages/Authentication/AutoLogin";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPassword from "../pages/Authentication/ForgetPassword";

import Dashboard from "../pages/Me/Dashboard";
import Profile from "../pages/Me/Profile";
import Projects from "../pages/Projects";
import Everything from "../pages/Everything";
import People from "../pages/People";
import Reports from "../pages/Reports";

import Manage from "../pages/Manage";

const authProtectedRoutes = [	
	{ path: "/me/dashboard", component: Dashboard },
	{ path: "/me/profile", component: Profile },
	{ path: "/projects/:tab", exact: true, component: Projects },
	{ path: "/projects/detail/:tab/:id", component: Projects },
	{ path: "/everything/:tab", component: Everything },
	{ path: "/people", component: People },
	{ path: "/reports", component: Reports },	
	{ path: "/manage/detail", component: Manage}
];

const publicRoutes = [
  { path: "/", exact: true, component: Landing },  
	{ path: "/login", component: Login },
	{ path: "/autologin/:email/:password", component: AutoLogin },
	{ path: "/logout", component: Logout },
	{ path: "/register", component: Register },
	{ path: "/forgetpassword", component: ForgetPassword },
];

export { authProtectedRoutes, publicRoutes };
