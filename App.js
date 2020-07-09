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
import { FontAwesome5, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const DrawerWidth = SCREEN_WIDTH * 0.8

function CustomDrawerContent({ progress, ...rest }) {
  return (
    <DrawerContentScrollView >
      {/* //upper Design */}
      <View style={{ backgroundColor: '#F9EDDF', height: 135, }}>
        <View style={{ backgroundColor: '#F9EDDF', height: 100, justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{ fontSize: 36 }}>Welcome User</Text>
          <Text>Login/Signup</Text>
          <View style={{ height: 1, backgroundColor: 'black', width: '100%', marginTop: 5 }}></View>
        </View>

        <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome5 name="rupee-sign" size={24} color="black" />
          <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>1mgCash</Text>
          <Entypo name="chevron-right" size={26} color="black" style={{ position: 'absolute', right: 15 }} />
        </View>
      </View>
      {/* //upper Design  End*/}

      <View style={{
        height: 100, backgroundColor: 'white', width: DrawerWidth,
        flexDirection: 'row',
      }}>
        <View style={{
          flexDirection: 'column', alignItems: 'center', width: DrawerWidth / 3 - 5, justifyContent: 'center',
          backgroundColor: '#EBEBE7', marginRight: 5
        }}>
          <Ionicons name="ios-paper" size={24} color="black" />
          <Text style={{ marginTop: 10 }}>My Orders</Text>
        </View>
        <View style={{
          flexDirection: 'column', alignItems: 'center', width: DrawerWidth / 3 - 5, justifyContent: 'center',
          backgroundColor: '#EBEBE7', marginRight: 5
        }}>
          <Entypo name="lab-flask" size={24} color="black" />
          <Text style={{ marginTop: 10 }}>My Lab Test</Text>
        </View>

        <View style={{ flexDirection: 'column', alignItems: 'center', width: DrawerWidth / 3, backgroundColor: '#EBEBE7', justifyContent: 'center', }}>
          <MaterialCommunityIcons name="doctor" size={27} color="black" />
          <Text style={{ marginTop: 10 }}>Consultaions</Text>
        </View>
      </View>
      <DrawerItemList {...rest} />

    </DrawerContentScrollView>
  );
}

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
