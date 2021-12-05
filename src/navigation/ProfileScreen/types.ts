import {StackScreenProps} from '@react-navigation/stack';

export enum PROFILE_ROUTES {
  PROFILE = 'Профиль',
  CHANGE_NAME = 'Изменить имя',
  CHANGE_PASS = 'Поменять пароль',
}

export type ProfileStackParamList = {
  [PROFILE_ROUTES.PROFILE]: undefined;
  [PROFILE_ROUTES.CHANGE_NAME]: undefined;
  [PROFILE_ROUTES.CHANGE_PASS]: undefined;
};

export type ProfileNavProps<T extends keyof ProfileStackParamList> =
  StackScreenProps<ProfileStackParamList, T>;