export type EventStatus =
  | 'Deleted'
  | 'Inited'
  | 'Not started'
  | 'In progress'
  | 'Fixed'
  | 'Ended';

export type EventResponseDto = {
  id: string;
  name: string;
  description: string;
  date: string;
  participantsCount: number;
  judgesCount: number;
  accessorsCount: number;
  status: EventStatus;
};

export type ExtendedEventResponseDto = EventResponseDto & {
  participants: UserResponseDto[];
  nominations: NominationResponseDto[];
  nominationRoles: {[key: string]: 'PARTICIPANT' | 'ACCESSOR' | 'JUDGE'};
};

export type NominationResponseDto = {
  id: string;
  title: string;
  description: string;
  criteriaList: CriteriaResponseDto[];
  users: UserResponseDto[];
};

export type CriteriaResponseDto = {
  title: string;
  description?: string;
  nominationName: string;
  maxValue: number;
};

export type UserResponseDto = {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  email: string;
  image: string;
  admin?: boolean;
};

export type SignInRequestDto = {
  email: string;
  password: string;
};

export type SignInResponseDto = {
  email: string;
  token: string;
};

export type SignUpRequestDto = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  imageKey?: string;
  patronymic: string;
};

export type MarksResponseDto = {
  mark: number;
  criteria: CriteriaResponseDto;
};
