import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

import { Ionicons, MaterialCommunityIcons, Feather, Entypo } from "@expo/vector-icons"


const Top = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', height: 50, justifyContent: 'center', paddingHorizontal: 10, }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Entypo name="menu"
                    size={28} color="black"
                    onPress={() => navigation.openDrawer()}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: '' }}>
                    <Text
                        style={{ marginLeft: 30, fontSize: 18 }}
                        onPress={() => navigation.navigate('Location')}

                    >
                        Location
                </Text>
                    <Feather
                        style={{}}
                        name="chevron-down" size={24} color="black" />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Feather
                        style={{}}
                        name="bell" size={24} color="black"
                        onPress={() => navigation.navigate('Cart')}

                    />
                    <Feather
                        style={{}}
                        name="shopping-cart" size={24} color="black"
                        onPress={() => navigation.navigate('Cart')}

                    />
                </View>
            </View>

        </View>
    );
}

export default Top;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});
