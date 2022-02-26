import { NavigatorScreenParams } from '@react-navigation/native';

export type MainTabsStack = {
  DashboardTab: undefined;
  OverviewTab: undefined;
};

export type MainTabBar = {
  MainTabs: NavigatorScreenParams<MainTabsStack>;
};

export type RootStack = {
  Loading: undefined;
  Main: NavigatorScreenParams<MainTabBar>;
};
