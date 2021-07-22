import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashBoard from '../screens/Dashboard';
import Register from '../screens/Register';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes(): ReactElement {
  return (
    <Navigator>
      <Screen name="DashBoard" component={DashBoard} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
