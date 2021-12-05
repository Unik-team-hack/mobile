export const formConfig = [
  [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'example@email.com',
      autoCapitalize: 'none',
    },
    {
      name: 'password',
      label: 'Пароль',
      placeholder: '',
      autoCapitalize: 'none',
      secureTextEntry: true,
    },
    {
      name: 'password2',
      label: 'Повторите пароль',
      placeholder: '',
      autoCapitalize: 'none',
      secureTextEntry: true,
    },
  ],
  [
    {
      name: 'firstName',
      label: 'Имя',
      autoCapitalize: 'words',
    },
    {
      name: 'lastName',
      label: 'Фамилия',
      autoCapitalize: 'words',
    },
    {
      name: 'patronymic',
      label: 'Отчество',
      autoCapitalize: 'words',
    },
  ],
];

export const MIN_PASSWORD_LENGTH = 3;
export const validators = [
  (data: {email?: string; password?: string; password2?: string}) => {
    const trimmedUsername = data.email?.trim();
    return (
      !!trimmedUsername &&
      trimmedUsername.length > 0 &&
      !!data.password &&
      data.password.length > MIN_PASSWORD_LENGTH &&
      data.password === data.password2
    );
  },
  data => {
    const trimmedName = data.firstName?.trim();
    const trimmedLastName = data.lastName?.trim();

    return (
      validators[0](data) &&
      !!trimmedName &&
      trimmedName.length > 0 &&
      !!trimmedLastName &&
      trimmedLastName.length > 0
    );
  },
];
