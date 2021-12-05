import type {
  EventResponseDto,
  ExtendedEventResponseDto,
  NominationResponseDto,
  SignInRequestDto,
  SignInResponseDto,
  SignUpRequestDto,
  UserResponseDto,
} from './dto';

const events = {
  getList: async () => {
    const res: EventResponseDto[] = [
      {
        id: '1231245',
        date: new Date().toISOString(),
        name: 'Хакатон Таволга',
        accessorsCount: 1,
        participantsCount: 1,
        description: 'Хакатон по разработке мобильного приложения',
        judgesCount: 0,
      },
    ];
    return res;
  },
  getDetails: async (id: string) => {
    const res: ExtendedEventResponseDto = {
      id: '1231245',
      date: new Date().toISOString(),
      name: 'Хакатон Таволга',
      accessorsCount: 1,
      participantsCount: 1,
      description: 'Хакатон по разработке мобильного приложения',
      judgesCount: 0,
      nominations: [
        {title: 'Приложение', description: 'Android+ios', id: '123'},
      ],
      participants: [
        {
          firstName: 'Александр',
          image:
            'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
          lastName: 'Качмазов',
        },
      ],
      nominationRoles: {
        '123': 'ACCESSOR',
      },
    };

    return res;
  },
};

const nominations = {
  // getList: async (params: type) => {},
  getById: async (id: string) => {
    const res: NominationResponseDto = {
      title: 'Приложение',
      description: 'Android+ios',
      id: '123',
      users: [
        {
          firstName: 'Александр',
          image:
            'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
          lastName: 'Качмазов',
        },
      ],
      criteriaList: [
        {
          title: 'android',
          maxValue: 5,
        },
        {
          title: 'ios',
          maxValue: 6,
        },
      ],
    };
    return res;
  },
};

const auth = {
  signIn: async (data: SignInRequestDto) => {
    const res: SignInResponseDto = {
      email: 'example',
      token: 'token',
    };
    return {data: res};
  },
  signUp: async (data: SignUpRequestDto) => {
    const res: UserResponseDto = {
      firstName: 'Александр',
      image:
        'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
      lastName: 'Качмазов',
      id: '124r',
    };

    return {data: res};
  },
  getMe: async () => {
    const res: UserResponseDto = {
      id: '1234',
      email: 'example@mail.ru',
      firstName: 'Александр',
      image:
        'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
      lastName: 'Качмазов',
      patronymic: 'Отчество',
    };
    return res;
  },
};

const marks = {
  setMark: async () => {
    return {};
  },
};

export const API = {
  events,
  nominations,
  auth,
  marks,
};
