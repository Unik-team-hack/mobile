export type EventResponseDto = {
  id: string;
  name: string;
  description: string;
  participantsCount: number;
  judgesCount: number;
  accessorsCount: number;
};
export type ExtendedEventResponseDto = EventResponseDto & {
  participants: object[];
  nominations: NominationResponseDto[];
};

export type NominationResponseDto = {
  title: string;
  description: string;
};

export type UserResponseDto = {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  email: string;
  image: string;
};
