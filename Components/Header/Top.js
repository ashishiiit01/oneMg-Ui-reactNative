import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

import { Feather, Entypo } from "@expo/vector-icons";


const Top = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Entypo name="menu"
                    size={28} color="black"
                    onPress={() => navigation.openDrawer()}
                />
                <View style={styles.LocationContainer}>
                    <Text
                        style={styles.LocationText}
                        onPress={() => navigation.navigate('Location')}
                    >
                        Location
                </Text>
                    <Feather
                        name="chevron-down" size={24} color="black" />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Feather
                        name="bell" size={24} color="black"
                        onPress={() => navigation.navigate('Notification')}

                    />
                    <Feather
                        style={{ marginLeft: 15 }}
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
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    LocationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    LocationText: {
        marginLeft: 30,
        fontSize: 18
    }
});
