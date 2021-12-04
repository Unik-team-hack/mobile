import {StackScreenProps} from '@react-navigation/stack';

export enum MAIN_ROUTES {
  MAIN = 'Главная',
  EVENT_DETAIL = 'Конкурс',
}

export type MainStackParamList = {
  [MAIN_ROUTES.MAIN]: undefined;
  [MAIN_ROUTES.EVENT_DETAIL]: {
    id: string;
  };
};

export type ProfileNavProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;
