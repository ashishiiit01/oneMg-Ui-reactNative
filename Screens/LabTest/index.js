import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Index = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Labtest Screen</Text>
        </View>
    );
}


export default Index;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        // marginBottom: 20
    },
});
