import type {EventResponseDto, ExtendedEventResponseDto} from './dto';

const events = {
  getList: async () =>
    [
      {
        name: 'Хакатон Таволга',
        description:
          'Хакатон по разработке приложения для оценивания конкурсов',
        participantsCount: 10,
      },
      {
        name: 'Хакатон StudHack',
        description:
          'Хакатон по разработке приложения для профсоюзной организации Самарского университета',
        participantsCount: 3,
      },
    ] as EventResponseDto[],
  getDetails: async (id: string) => {
    return {
      id: id,
      name: 'Хакатон Таволга',
      description: 'Хакатон по разработке приложения для оценивания конкурсов',
      nominations: [],
      participants: [],
      accessorsCount: 0,
      judgesCount: 0,
      participantsCount: 0,
    } as ExtendedEventResponseDto;
  },
};

const nominations = {
  getNominations: async (params: type) => {},
};

export const API = {
  events,
};
