import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, FontAwesome5, FontAwesome, Fontisto, Entypo } from "@expo/vector-icons"

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Bottom = () => {
    const [toggle, setToggle] = React.useState(false)


    return (
        <View style={styles.container} >
            <View style={styles.row1}>
                <FontAwesome5
                    style={styles.icon}
                    name="capsules" size={24} color="#E86A48"
                    onPress={() => navigation.navigate('Cart')}

                />
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="flask" size={28} color="#E86A48"
                    onPress={() => navigation.navigate('Cart')}

                />

                <MaterialCommunityIcons
                    style={styles.icon}
                    name="message" size={28} color="#E86A48"
                    onPress={() => navigation.navigate('Cart')}

                />
                {
                    toggle ? (
                        <FontAwesome5
                            style={styles.icon}
                            name="chevron-up" size={28} color="#E86A48"
                            onPress={() => setToggle(!toggle)}

                        />
                    ) : (
                            <FontAwesome5
                                style={styles.icon}
                                name="chevron-down" size={28} color="#E86A48"
                                onPress={() => setToggle(!toggle)}

                            />
                        )
                }


            </View>
            {
                toggle ? (
                    <View style={styles.row1}>
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name="alarm" size={30} color="#E86A48"
                            onPress={() => navigation.navigate('Cart')}

                        />
                        <Fontisto
                            style={styles.icon}
                            name="test-bottle" size={28} color="#E86A48"
                            onPress={() => navigation.navigate('Cart')}

                        />

                        <Entypo
                            style={styles.icon}
                            name="news" size={28} color="#E86A48"
                            onPress={() => navigation.navigate('Cart')}

                        />


                    </View>
                ) : null}




        </View>
    );

}

export default Bottom;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        minHeight: 50,
    },
    row1: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'white',
        minHeight: 50,
        paddingHorizontal: 25,
    }, icon: {
        width: SCREEN_WIDTH / 4
    }
});
