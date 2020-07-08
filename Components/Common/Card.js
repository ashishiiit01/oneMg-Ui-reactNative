import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ButtonComp from './Button';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Card = ({ navigation, description, title }) => {
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <View style={styles.container} >
                <View style={{ justifyContent: "space-between", flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: (SCREEN_WIDTH - 40) * 0.68, }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>{title}</Text>
                        <Text style={{ fontSize: 12 }}>{description}</Text>
                        <Text style={{ color: 'green', marginTop: 5 }}>Save 18%</Text>

                    </View>
                    <View style={{ width: (SCREEN_WIDTH - 40) * 0.3, }}>
                        <ButtonComp title='Upload' />
                    </View>
                </View>
            </View >
        </View>
    );
}


export default Card;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 110,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 20

    },
});
