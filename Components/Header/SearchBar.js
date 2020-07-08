import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"


const SearchBar = () => {
    const [value, onChangeText] = React.useState('Search medicines and health Products');

    return (
        <View style={styles.container} >
            <TextInput
                style={{ height: 50, borderColor: 'black', borderRadius: 5, backgroundColor: '#E4E4DF', paddingLeft: 40, }}
                onChangeText={text => onChangeText(text)}
                placeholder={"Search medicines and health Products"}
                placeholderTextColor="#000"

            />
            <FontAwesome
                style={{ position: 'absolute', top: 10, left: 25 }}
                name="search" size={24} color="black"
                onPress={() => navigation.navigate('Cart')}

            />
        </View>
    );

}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        position: 'relative'

    },
});
