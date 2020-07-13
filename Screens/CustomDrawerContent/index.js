import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { FontAwesome5, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const DrawerWidth = SCREEN_WIDTH * 0.8;
const Index = ({ progress, navigation, ...rest }) => {
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
                <View
                    style={{
                        flexDirection: 'column', alignItems: 'center', width: DrawerWidth / 3 - 5, justifyContent: 'center',
                        backgroundColor: 'green', marginRight: 5
                    }}
                    onPress={() => navigation.navigate('Cart')}

                >
                    <Ionicons name="ios-paper" size={24} color="black" onPress={() => navigation.navigate('Cart')} />
                    <Text style={{ marginTop: 10 }}>My Orders</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column', alignItems: 'center', width: DrawerWidth / 3 - 5, justifyContent: 'center',
                        backgroundColor: '#EBEBE7', marginRight: 5
                    }}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Entypo name="lab-flask" size={24} color="black" />
                    <Text style={{ marginTop: 10 }}>My Lab Test</Text>
                </View>

                <View
                    style={{ flexDirection: 'column', alignItems: 'center', width: DrawerWidth / 3, backgroundColor: '#EBEBE7', justifyContent: 'center', }}
                    onPress={() => navigation.navigate('Cart')}

                >
                    <MaterialCommunityIcons name="doctor" size={27} color="black" />
                    <Text style={{ marginTop: 10 }}>Consultaions</Text>
                </View>
            </View>
            <DrawerItemList {...rest} />
            <View style={{ height: 70, backgroundColor: '#EBEBE7', paddingHorizontal: 17, justifyContent: 'center' }}>
                <Text style={{ color: 'grey' }}>Medicines</Text>
            </View>

            <DrawerItem
                label={() => (<View style={{ flexDirection: 'row' }}>
                    <FontAwesome5 color={'black'} size={20} name={'rupee-sign'} style={{ marginRight: 10 }} />
                    <Text>Find Substitute</Text>
                </View>)}

                // onPress={() => console.log("hello ")}
                onPress={() => navigation.navigate('Cart')}


            />
            <DrawerItem
                label="Order And Prescription"
                onPress={() => navigation.navigate('Cart')}
            />

            <DrawerItem
                label="Pill Reminder"
                // onPress={() => console.log("hello ")}
                onPress={() => navigation.navigate('Cart')}

            />

            <DrawerItem
                label="My Health Records"
                // onPress={() => console.log("hello ")}
                onPress={() => navigation.navigate('Cart')}

            />

            <View style={{ height: 70, backgroundColor: '#EBEBE7', paddingHorizontal: 17, justifyContent: 'center' }}>
                <Text style={{ color: 'grey' }}>Doctors</Text>
            </View>

            <DrawerItem
                label="My Appointments"
                onPress={() => console.log("hello ")}
            />

            <View style={{ height: 70, backgroundColor: '#EBEBE7', paddingHorizontal: 17, justifyContent: 'center' }}>
                <Text style={{ color: 'grey' }}>Lab Tests</Text>
            </View>


            <DrawerItem
                label="Book Lab Tests"
                onPress={() => console.log("hello ")}
            />
            <View style={{ height: 70, backgroundColor: '#EBEBE7', paddingHorizontal: 17, justifyContent: 'center' }}>
                <Text style={{ color: 'grey' }}>Article</Text>
            </View>


            <DrawerItem
                label="View All"
                onPress={() => console.log("hello ")}
            />

            <DrawerItem
                label="Bookmarks"
                onPress={() => console.log("hello ")}
            />

        </DrawerContentScrollView>
    );
}


export default Index;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        // marginBottom: 20
    },
});
