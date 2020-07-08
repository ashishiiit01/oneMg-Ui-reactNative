import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


function StackScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Stack Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

const Index = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Stack.Navigator>
                <Stack.Screen name="Stack"
                    component={StackScreen}
                    options={{
                        headerLeft: () => (

                            <Ionicons
                                name="md-arrow-back"
                                onPress={() => navigation.goBack()}
                                size={24}
                                color="black" />
                        )
                    }}
                />

            </Stack.Navigator>
        </View>
    );
}

export default Index;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 150,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
});
