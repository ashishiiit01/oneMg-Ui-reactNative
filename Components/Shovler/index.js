import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';


import ShovlerCard from './ShovlerCard';

const Index = ({ navigation }) => {

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, alignItems: 'center' }}>
                <Text style={{ fontSize: 12, marginBottom: 5, color: '#525A52' }}>FULL BODY HEALTH CHECKUPS | FLAT 50% OFF</Text>
                <Text style={{ fontSize: 11, color: 'red' }}>SEE ALL</Text>
            </View>
            <ScrollView horizontal>
                <ShovlerCard />
            </ScrollView>
        </View>
    );
}


export default Index;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#EBEBE7',
    },
});
