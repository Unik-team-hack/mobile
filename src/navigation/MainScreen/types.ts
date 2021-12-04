import {StackScreenProps} from '@react-navigation/stack';

export enum MAIN_ROUTES {
  MAIN = 'Главная',
  EVENT_DETAIL = 'Конкурс',
  NOMINATION = 'Номинация',
}

export type MainStackParamList = {
  [MAIN_ROUTES.MAIN]: undefined;
  [MAIN_ROUTES.EVENT_DETAIL]: {
    id: string;
  };
  [MAIN_ROUTES.NOMINATION]: undefined;
};

export type ProfileNavProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;
