import { NavigatorScreenParams } from '@react-navigation/native';

export type TabsStack = {
  DashboardTab: undefined;
  OverviewTab: undefined;
};

export type MainStack = {
  TabNavigator: NavigatorScreenParams<TabsStack>;
};

export type RootStack = {
  Loading: undefined;
  Main: NavigatorScreenParams<MainStack>;
};
