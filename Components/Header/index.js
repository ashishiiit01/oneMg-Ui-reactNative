import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Top from './Top';
import SearchBar from './SearchBar';
import Bottom from './Bottom';


const Index = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Top navigation={navigation} />
            <SearchBar />
            <Bottom />
        </View>
    );
}




export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
});
