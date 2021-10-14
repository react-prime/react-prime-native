import { NavigatorScreenParams } from '@react-navigation/core';

export type TabsStack = {
  DashboardTab: undefined;
  OverviewTab: undefined;
};

export type MainStack = {
  Tabs: NavigatorScreenParams<TabsStack>;
};

export type RootStack = {
  Loading: undefined;
  Main: NavigatorScreenParams<MainStack>;
};
