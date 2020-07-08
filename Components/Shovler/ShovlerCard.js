import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import Header from '../../Components/Header'



const Index = ({ navigation }) => {

    const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <View style={{ height: 280, flexDirection: 'row', padding: 10, marginBottom: 10 }}>
            {
                tempArray.map(value => (
                    <View style={{ height: 260, width: 180, backgroundColor: 'white', padding: 10, marginRight: 10 }}>
                        <View style={{ backgroundColor: 'wheat', alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', padding: 2 }}>
                            <AntDesign name="checkcircleo" size={14} color="black" />
                            <Text style={{ fontSize: 15, marginLeft: 3, fontWeight: 'bold' }}>SAFE</Text>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontWeight: 'bold' }}>Personalised Full Body CheckUp</Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Includes 99 tests</Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Image
                                style={{ width: 80, height: 30 }}
                                source={{
                                    uri: 'https://res.cloudinary.com/onemg/image/upload/v1572953510/new_color_images/Final_1mg_labs_logo-2.png'
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#3BBB3B', alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', padding: 2, borderRadius: 2, }}>
                                <Text style={{ fontSize: 12, marginLeft: 3, fontWeight: 'bold', color: 'white' }}>4.9</Text>
                                <Entypo name="star" size={15} color="white" />
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={{ color: '#8F948F', fontSize: 12 }}>ISO, NABL</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 12, color: '#166116' }}>76% off + 20% Coupon</Text>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 12, marginRight: 5, color: '#525A52' }}>MRP</Text>
                            <Text style={{ fontSize: 12, textDecorationLine: 'line-through', color: '#525A52' }}>9500</Text>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>1758</Text>
                        </View>
                    </View>
                ))
            }

        </View>
    );
}


export default Index;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#879878',
        width: 'max-content'
    },
});
