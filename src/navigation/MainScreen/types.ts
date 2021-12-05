import {StackScreenProps} from '@react-navigation/stack';

export enum MAIN_ROUTES {
  MAIN = 'Главная',
  EVENT_DETAIL = 'Конкурс',
  NOMINATION = 'Номинация',
  ASSESSMENT = 'Оценивание',
}

export type MainStackParamList = {
  [MAIN_ROUTES.MAIN]: undefined;
  [MAIN_ROUTES.EVENT_DETAIL]: {id: string};
  [MAIN_ROUTES.NOMINATION]: {id: string};
  [MAIN_ROUTES.ASSESSMENT]: undefined;
};

export type MainNavProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;
