import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

];

const Index = ({ navigation }) => {

    const tempArray = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <ScrollView horizontal>
            <View style={{ height: 200, flexDirection: 'row', padding: 10, marginBottom: 20, }}>
                {
                    images.map(image => (
                        <View style={{
                            height: 180, width: 180, backgroundColor: 'white', marginRight: 10, justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <View style={{ marginTop: 10 }}>
                                <Image
                                    style={{ width: 120, height: 120, borderRadius: 80 }}
                                    source={{
                                        uri: image
                                    }}
                                />
                            </View>


                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Product Name</Text>
                            </View>

                        </View>
                    ))
                }

            </View>
        </ScrollView>
    );
}


export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBE7',
    },
});
