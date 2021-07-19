const users = [
	{
		name: 'Vitya',
		login: 'fredikey',
		password: '12345678'
	},
	{
		name: 'Vasya',
		login: 'blackdesk',
		password: '23456781'
	},
	{
		name: 'Tanya',
		login: '@tanya',
		password: '34567812'
	}
]

function checkUser() {
	let user_checkin = {
		login: prompt(' Введите логин', ''),
		password: prompt(' Введите пароль', '')
	}

	if (user_checkin.login === null || user_checkin.password === null) {
		alert('Вы не ввели логин и/или пароль!')
		return
	}

	for (let i = 0; i < users.length; i++) {
		if (user_checkin.login === users[i].login && user_checkin.password === users[i].password) {
			alert('Здравствуйте!' + users[i].name)
			break
		} else if (i === users.length - 1) alert('Вы не были ранее зарегистрированы')
	}
}

checkUser()
