import * as React from 'react';
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerHome from './Screens/DrawerHome';
import ManagePayment from './Screens/ManagePayment';
import Notification from './Screens/Notification';
import Cart from './Screens/Cart';
import LocationScreen from './Screens/Location';
import ReferAndEarn from './Screens/ReferAndEarn';
import CustomDrawerContent from './Screens/CustomDrawerContent';


const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        width: SCREEN_WIDTH * 0.8,
      }}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
      }}
      drawerType={'slide'}

    >
      <Drawer.Screen name="Drawer Home" component={DrawerHome} />
      <Drawer.Screen name="Manage Payment" component={ManagePayment} />
      <Drawer.Screen name="Refer And Earn" component={ReferAndEarn} />

    </Drawer.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <MyDrawer />
    </SafeAreaView>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ title: "Offers" }}

        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: "Cart" }}

        />

        <Stack.Screen
          name="Location"
          component={LocationScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
