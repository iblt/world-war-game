import { maxLength, minLength, object, pipe, string } from 'valibot'

export const RegisterFormSchema = object({
	name: pipe(
		string('Обязательное поле'),
		minLength(3, 'Имя не может быть короче 3 символов'),
		maxLength(20, 'Имя не может быть длинее 20 символов')
	),
	password: pipe(
		string('Обязательное поле'),
		minLength(8, 'Пароль не может быть короче 8 символов'),
		maxLength(255, 'Пароль не может быть длинее 255 символов')
	),
})
