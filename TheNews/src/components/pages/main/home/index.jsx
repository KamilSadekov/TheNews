import React from "react"
import { Link } from "react-router-dom"
import { Container } from "reactstrap"
import {NewsItem} from "../../../common/newsItem"

const newsList = [{id:1, autor:"Kamil Sadekov", newsTittle:"Попытка устроиться в компанию Open", newsDescription:"Описание Описание Описание описание",mounth:"Jul 17",time:"3 min read",theme:"IT, Programming", imgPath:"https://miro.medium.com/fit/c/200/134/1*Kt_c3UwgWYuSVTfVfioKmw.jpeg"},{id:2, autor:"Elena", newsTittle:"Подбор кадров для проекта на миллион", newsDescription:"Описание Описание Описание описание",mounth:"Jul 17",time:"3 min read",theme:"Manager", imgPath:"https://miro.medium.com/fit/c/200/134/1*l21ma0RcVmy9oy0sFgXDsA.jpeg"}]
// пример того что обычно приходит из сервера , накидал так статичных данных создал отдельный компонент , с одной новостью
// экран просмотра конкретной новости , в боевых условиях это страница , на которой при первом рендере будет запрос по -
// ID конкретной новости (например :) )

export const MainScreen = () => {
	return (
		<Container>
			<h1 className="mb-8 text-4xl mt-3">Главный экран</h1>

			<div className="row">
				<div className="col-6">
					{newsList.map(i => (
						<NewsItem key={i.id} data={i} />
					))}
				</div>
				<div className="col-6">
					Дополнительные блоки , доп инфа или всё что душе угодно :-)
				</div>
			</div>
		</Container>
	)
}
