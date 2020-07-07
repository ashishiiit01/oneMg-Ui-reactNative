import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Header from '../../Components/Header'
import Ads from '../../Components/Ads'
import Banner from '../../Components/Banner'

import Card from '../../Components/Common/Card';


const Index = ({ navigation }) => {
    const title = 'Order quickly with prescription';
    const description = 'Upload prescription and tell us what you need. we do the rest.'
    return (
        <SafeAreaView style={styles.container} >
            <Header navigation={navigation} />
            <ScrollView>
                {/* <Ads /> */}
                <Banner />
                <Card title={title} description={description} />

            </ScrollView>

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
