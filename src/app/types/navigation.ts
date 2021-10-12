import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/core';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type OnboardingStack = {
  Screen1: undefined;
  Screen2: undefined;
};

export type DashboardStack = {
  DashboardOverview: undefined;
  DashboardDetail: {
    shareId: string;
  };
};

export type TabsStack = {
  DashboardTab: DashboardStack;
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
export type DashboardNavigation = CompositeNavigationProp<
StackNavigationProp<DashboardStack>,
CompositeNavigationProp<
BottomTabNavigationProp<TabsStack>,
StackNavigationProp<MainStack>
>
>;

export type OnboardingNavigation = CompositeNavigationProp<
StackNavigationProp<OnboardingStack>,
StackNavigationProp<MainStack>
>;
