import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';


import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import Card from '../../Components/Common/Card';
import Shovler from '../../Components/Shovler';
import ProductCard from '../../Components/Shovler/ProductCard';




const Index = ({ navigation }) => {
    const title = 'Order quickly with prescription';
    const description = 'Upload prescription and tell us what you need. we do the rest.'
    return (
        <SafeAreaView style={styles.container} >
            <Header navigation={navigation} />
            <ScrollView>
                <Banner />
                <Card title={title} description={description} />

                <Shovler />
                <ProductCard />
                <Shovler />

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
