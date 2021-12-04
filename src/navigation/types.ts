export enum CORE_ROUTES {
  MAIN = 'Главная',
  SERVICES = 'Сервисы',
  PROFILE = 'Профиль',
}

export type CoreTabsParamList = {
  [CORE_ROUTES.MAIN]: undefined;
  [CORE_ROUTES.SERVICES]: undefined;
  [CORE_ROUTES.PROFILE]: undefined;
};
