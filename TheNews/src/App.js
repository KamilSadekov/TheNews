import React from "react"
import { useSelector } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import { AuthLayout } from "./components/layouts/auth"
import { MainLayout } from "./components/layouts/main"
import { authRoutes, mainRoutes } from "./routes"

const App = () => {
	const state = useSelector(s => s)

	const renderRoute = ({ path, component }) => (
		<Route exact key={path} path={path} component={component} />
	)

	if (!state.app.authToken) {
		return (
			<AuthLayout>
				<Switch>
					{authRoutes.map(renderRoute)}

					<Route path="*">
						<Redirect to="/login" />
					</Route>
				</Switch>
			</AuthLayout>
		)
	}

	return (
		<MainLayout>
			<Switch>{mainRoutes.map(renderRoute)}</Switch>
		</MainLayout>
	)
}

export default App
