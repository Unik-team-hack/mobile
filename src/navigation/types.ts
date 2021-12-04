export enum CORE_ROUTES {
  MAIN = 'Главная',
  SERVICES = 'Сервисы',
  PROFILE = 'Профиль',
  EVENT = 'Конкурс',
}

export type CoreTabsParamList = {
  [CORE_ROUTES.MAIN]: undefined;
  [CORE_ROUTES.SERVICES]: undefined;
  [CORE_ROUTES.PROFILE]: undefined;
  [CORE_ROUTES.EVENT]: undefined;
};
