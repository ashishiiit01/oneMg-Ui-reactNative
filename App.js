import * as React from 'react';
import { View, Text, SafeAreaView, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import DrawerHome from './Screens/DrawerHome';
import ManagePayment from './Screens/ManagePayment';


import { createStackNavigator } from '@react-navigation/stack';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;


function CustomDrawerContent({ progress, ...rest }) {
  return (
    <DrawerContentScrollView>
      <View style={{ backgroundColor: '#DEDFBE', height: 100, justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{ fontSize: 26 }}>Welcome User</Text>
        <Text>Login/Signup</Text>
        <View style={{ height: 1, backgroundColor: 'black', width: '100%', marginTop: 5 }}></View>
      </View>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Drawer Home" component={DrawerHome} />
      <Drawer.Screen name="Manage Payment" component={ManagePayment} />
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



function ShoppingCart({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cart Screen</Text>
    </View>
  );

}

function LocationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Location Screen</Text>
    </View>
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
          name="Cart"
          component={ShoppingCart}
        />

        <Stack.Screen
          name="Location"
          component={LocationScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
