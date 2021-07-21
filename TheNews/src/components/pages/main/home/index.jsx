import React from "react"
import { Link } from "react-router-dom"
import { Container } from "reactstrap"

export const MainScreen = () => {
	return (
		<Container>
			<h1>Главный экран</h1>

			<Link to="/about">About</Link>
		</Container>
	)
}
