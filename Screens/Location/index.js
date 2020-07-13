import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Index = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Text>hii</Text>
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
