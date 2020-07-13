import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import Card from '../../Components/Common/Card';
import Shovler from '../../Components/Shovler';
import ProductCard from '../../Components/Shovler/ProductCard';
import MyOrderScreen from '../MyOrder';
import LabTestScreen from '../LabTest';
import ConsultaionScreen from '../Consultaion';


function HomeScreen({ navigation }) {
    const title = 'Order quickly with prescription';
    const description = 'Upload prescription and tell us what you need. we do the rest.'
    return (
        <SafeAreaView style={styles.container} >
            <Header navigation={navigation} />
            <ScrollView>
                <Banner />
                <Card title={title} description={description} />

                <Shovler />
                <ProductCard />
                <Shovler />
            </ScrollView>
        </SafeAreaView>
    );
}

const Tab = createBottomTabNavigator();

const Index = ({ navigation }) => {
    const title = 'Order quickly with prescription';
    const description = 'Upload prescription and tell us what you need. we do the rest.'
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'My Order') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    } else if (route.name === 'LabTest') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Consultation') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';

                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="My Order" component={MyOrderScreen} />
            {/* <Tab.Screen name="MyOrder" component={MyOrderScreen} /> */}
            <Tab.Screen name="LabTest" component={LabTestScreen} />
            <Tab.Screen name="Consultation" component={ConsultaionScreen} />

        </Tab.Navigator>
    );
}

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBE7',
    },
});
