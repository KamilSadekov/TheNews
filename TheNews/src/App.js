import React, {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { Route, Switch, Redirect, useHistory, } from "react-router-dom"
import { MainLayout } from "./components/layouts/main"
import { authRoutes, mainRoutes } from "./routes"
import {appLogin} from "./store/app/actions";

const App = () => {
	const state = useSelector(s => s) // глобальное состояние всего приложения с помощью redux


	console.log("state.app.authToken", state.app.authToken)
	const [loading, setLoading] = useState(true)

	const dispatch = useDispatch()

	const history = useHistory()

	const authCheck = () => {
		const token = localStorage.getItem("authToken")
		console.log("token", token)
		if (token) {
			setTimeout(() => {
				dispatch(appLogin(token))
				history.push("/")
			}, 500)
		}

		setLoading(false)
	}


	const renderRoute = ({ path, component }) => {
		return <Route exact key={path} path={path} component={component} />
	}

	useEffect(() => {
		authCheck()
	}, [])



	// проверка на наличие токена авторизации от наличия которого показываю нужные стаки экранов
	const renderProtectedRoute = ({ path, component }) => {
		const Page = component

		const routeRender = ({ location }) =>
			state.app.authToken ? (
				<MainLayout>
					<Page />
				</MainLayout>
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: { from: location },
					}}
				/>
			)
		return <Route exact key={path} path={path} render={routeRender} />
	}

	return (
		<Switch>
			{authRoutes.map(renderRoute)}
			{mainRoutes.map(renderProtectedRoute)}
			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	)
}

export default App
