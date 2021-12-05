import type {
  CriteriaResponseDto,
  EventResponseDto,
  ExtendedEventResponseDto,
  MarksResponseDto,
  NominationResponseDto,
  SignInRequestDto,
  SignInResponseDto,
  SignUpRequestDto,
  UserResponseDto,
} from './dto';

const userMock: UserResponseDto = {
  firstName: 'Александр',
  image:
    'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
  lastName: 'Качмазов',
  id: '1234',
  patronymic: 'Отчество',
  email: 'example@mail.ru',
};

const critsMock: CriteriaResponseDto[] = [
  {
    title: 'android',
    maxValue: 5,
    description: 'develop android app',
    nominationName: 'Приложение',
  },
  {
    title: 'ios',
    maxValue: 6,
    description: 'develop ios app',
    nominationName: 'Приложение',
  },
];

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
      participants: [userMock],
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
      users: [userMock],
      criteriaList: critsMock,
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
  getMarks: async () => {
    const res: {[key: string]: MarksResponseDto[]} = {
      '1324': [
        {
          mark: 4.3,
          criteria: critsMock[0],
        },
      ],
    };

    return res;
  },
};

export const API = {
  events,
  nominations,
  auth,
  marks,
};
