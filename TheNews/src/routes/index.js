import { LoginPage } from "../components/pages/auth/login"
import { RegistrationPage } from "../components/pages/auth/registration"
import { AboutScreen } from "../components/pages/main/about"
import { Page404 } from "../components/pages/main/error/404"
import { MainScreen } from "../components/pages/main/home"


// здесь импортируются все страницы
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
// стак главных экранов также легко и просто ипортировать и прописать путь и компонент , который только что импортировали

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
// стак экранов для авторизации / подтверждений после регистрации сюда можно в любой момент добавить нужный экран
