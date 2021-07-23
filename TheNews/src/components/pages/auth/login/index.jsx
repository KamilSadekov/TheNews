import React, {useState} from "react"
import {Input} from "../../../common/ui/input";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {Button} from "../../../common/ui/button";
// import {apiPost} from "../../../../api";
import {appLogin} from "../../../../store/app/actions";
import {useHistory} from "react-router-dom";
// import {updateProfile} from "../../../../store/user/actions"; ф-я обновления юзера может приходить вместе с запросом на токен (это могут быть статичные данные: имя , фамилия , номер телефона и т.д)
// эту же ф-ю можно использовать например на экране пользователя для изменения пользователя

export const LoginPage = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [errObj, setErrObj] = useState("")
	const [err, setErr] = useState("")
	const dispatch = useDispatch()

	const history = useHistory()
	const { register, getValues } = useForm() // использование useform минимизирует количество рендеров


	// <---- небольшой пример запроса авторизации ---->

	// const handleAuth = data => {
	// 	setIsLoading(true)
	// 	apiPost({url: "/auth", postData: data}).then(res => {
	// 		if(res){
	// 		const {data, error} = res
	// 			if(error){
	// 				return
	// 			}
	// 			dispatch(appLogin(data.authToken)) //из запроса получаем токен и записываем его в глобальный стейт редакса
	// 			dispatch(updateProfile(data.profile)) // получаем инормацию о профиле и также записываем их в стейт
	// 		}
	// 	}).finally(() => {
	// 		setIsLoading(false)
	// 	})
	// }

	const localHandleSubmit = () => {
		const emailInput = getValues("email")
		const passwordInput = getValues("password")
		// показательная обработка ошибок , но обычно такие ошибки идут из бэка :)
		if(!emailInput && !passwordInput){
			setErrObj("Заполните инпуты чем угодно :)")
			setErr("Заполните инпуты чем угодно :)")
			return
		}
		if(!emailInput){
			setErrObj("Заполните E-mail")
			return
		}
		if(!passwordInput){
			setErr("Заполните Пароль")
			return
		}

		dispatch(appLogin("123"))
		history.push("/")
	}

	//самая первая страница - страница авторизации
	return (
		<>
				 {/*{isLoading && <Loader />} - загрузка при запросе показываю лоадер , чтобы с помощью ui показать что идет процесс запроса */}
				<div className="container">
					<div className="text-xl mb-8 mt-3">Авторизация</div>
					<Input
						name="email"
						register={register}
						label="E-Mail"
						type="mail"
						error={errObj}
					/>
					<Input
						name="password"
						type="password"
						register={register}
						label="Пароль"
						error={err}
					/>

					<Button onClick={localHandleSubmit} color="primary" size="wide">Войти</Button>
				</div>
			</>
	)
}
