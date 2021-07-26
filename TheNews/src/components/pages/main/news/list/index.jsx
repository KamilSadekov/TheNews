import React, {useState, useEffect} from "react"
import { Container } from "reactstrap"
import {NewsItem} from "../../../../common/newsItem"
import {Select} from "../../../../common/ui/select";
import {handlePickerChange} from "../../../../../global";
import {useSelector} from "react-redux";

const newsList = [{id:1, autor:{name:"Kamil Sadekov", subscribes:"23k", description: "React & react-native developer with 2+ years experience, i like to develop some mobile apps , this is interesting for me , and i want to do my best for get this job"}, newsTittle:"Попытка устроиться в компанию Open", newsDescription:"Описание Описание Описание описание",mounth:"Jul 17",time:"3 min read",theme:"IT, Programming", imgPath:"https://miro.medium.com/fit/c/200/134/1*Kt_c3UwgWYuSVTfVfioKmw.jpeg"},
	{id:2, autor:{name:"Elena", subscribes:"16k", description: "Astrophysics student, writer for over a decade. A passion for language and the unexplored universe. I aim to marry poetry and science."}, newsTittle:"Подбор кадров для проекта на миллион", newsDescription:"Описание Описание Описание описание",mounth:"Jul 17",time:"3 min read",theme:"Manager", imgPath:"https://miro.medium.com/fit/c/200/134/1*l21ma0RcVmy9oy0sFgXDsA.jpeg"}
	]
// пример того что обычно приходит из сервера , накидал так статичных данных создал отдельный компонент , с одной новостью
// экран просмотра конкретной новости , в боевых условиях это страница , на которой при первом рендере будет запрос по -
// ID конкретной новости, например

export const MainScreen = () => {
	const [hasMore, setHasMore] = useState(true)
	const [page, setPage] = useState(1)
	const [subjectList, setSubjectList] = useState([])
	const [isLoading, setIsLoading] = useState(false)


	const state = useSelector(s => s)

	console.log("state", state)

	const { subject } = state.filter.fillterAttr // я решил вынести атрибуты фильтрации в глобальный стейт
	// создал глобальную ф-ю для изменения селекта то есть одну функцию для всего сайта / приложения, везде , нужно лишь добавлять аттрибут типа: табуляции селекты и тд )
	// в редаксе сосздал ещё функцию очистки селектов фильтрации , который задает initial state
	const selectList = [{label:"it", value:0}, {label:"political", value:1}, {label: "smth1", value:2}, {label:"smth2", value: 3}]

	// пример запроса с фильтрацией на получение листа новостей по конкретному фильтру
	//%%%%%%------
	// const getList = () => {
	// 	if (!isLoading) {
	// 		setIsLoading(true)
	// 		let url = `/news-list?page=${page}&limit=5`
	// 		if(data.value){
	// 			url += `&type=${subject}`
	// 		}
	//
	// 		apiGet({
	// 			url,
	// 		})
	// 			.then(res => {
	// 				if (res) {
	// 					const { data } = res
	// 					if (page === 1) {
	// 						setSubjectList(data.models)
	// 					} else {
	// 						setSubjectList([...subjectList, ...data.models])
	// 					}
	// 					setHasMore(page < data.lastPage)
	// 				}
	// 			})
	// 			.finally(() => setIsLoading(false))
	// 	}
	// }


	// useEffect(() => {
	// 	getList()
	// },[subject]) получение списка новосте при любом изменении subject

	return (
		<Container>
			<h1 className="mb-8 text-4xl mt-3">Главный экран</h1>

			<Select list={selectList} name="filterNews" onChange={value  => handlePickerChange("type", value, () => setPage(1))} />
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
