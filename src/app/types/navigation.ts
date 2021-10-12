import { NavigatorScreenParams } from '@react-navigation/core';

export type OnboardingStack = {
  Screen1: undefined;
  Screen2: undefined;
};

export type TabsStack = {
  DashboardTab: undefined;
  OverviewTab: undefined;
};

export type MainStack = {
  Onboarding: NavigatorScreenParams<OnboardingStack>;
  Tabs: NavigatorScreenParams<TabsStack>;
};

export type RootStack = {
  Loading: undefined;
  Main: NavigatorScreenParams<MainStack>;
};
