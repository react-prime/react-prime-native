package com.reactprimenative;

import android.os.Bundle;
import com.facebook.react.ReactActivity;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {
    /**
    * Returns the name of the main component registered from JavaScript. This is used to schedule
    * rendering of the component.
    */
    @Override
    protected String getMainComponentName() {
      return "reactprimenative";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected void loadApp(String appKey) {
          RNBootSplash.init(MainActivity.this);
          super.loadApp(appKey);
        }

        @Override
        protected ReactRootView createRootView() {
          return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }
}
