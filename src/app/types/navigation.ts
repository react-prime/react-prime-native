import { NavigatorScreenParams } from '@react-navigation/core';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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

// Screen specific types
export type OnboardingNavigation = CompositeNavigationProp<
StackNavigationProp<OnboardingStack>,
StackNavigationProp<MainStack>
>;
