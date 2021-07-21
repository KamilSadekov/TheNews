import { LoginPage } from "../components/pages/auth/login"
import { RegistrationPage } from "../components/pages/auth/registration"
import { AboutScreen } from "../components/pages/main/about"
import { Page404 } from "../components/pages/main/error/404"
import { MainScreen } from "../components/pages/main/home"

export const mainRoutes = [
	{
		path: "/",
		component: MainScreen,
	},
	{
		path: "/about",
		component: AboutScreen,
	},
	{
		path: "*",
		component: Page404,
	},
]

export const authRoutes = [
	{
		path: "/login",
		component: LoginPage,
	},
	{
		path: "/registration",
		component: RegistrationPage,
	},
]
