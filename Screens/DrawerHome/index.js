import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../../Components/Header'
import Ads from '../../Components/Ads'


const Index = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <Header navigation={navigation} />
            {/* <Ads /> */}
        </SafeAreaView>
    );
}


export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBE7',
    },
});
