import {StackScreenProps} from '@react-navigation/stack';

export enum MAIN_ROUTES {
  MAIN = 'Конкурсы',
}

export type MainStackParamList = {
  [MAIN_ROUTES.MAIN]: undefined;
};

export type ProfileNavProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;
