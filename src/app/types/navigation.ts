export type MainTabsStack = {
  DashboardTab: undefined;
  OverviewTab: undefined;
};

export type MainTabBar = {
  MainTabs: MainTabsStack;
};

export type RootStack = {
  Loading: undefined;
  Main: MainTabBar;
};
