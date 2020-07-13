import React from 'react';
import { StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];


class Index extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState(prev => ({ selectedIndex: prev.selectedIndex === images.length - 1 ? 0 : prev.selectedIndex + 1 }),
                () => {
                    this.scrollRef.current.scrollTo({
                        animated: true,
                        y: 0,
                        x: SCREEN_WIDTH * this.state.selectedIndex
                    })
                }
            )
        }, 3000)
    }
    setSelectedIndex = event => {
        //width of View Size
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        //current position of the scroll View 
        const contentOffset = event.nativeEvent.contentOffset.x
        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({ selectedIndex })
    }
    render() {
        return (
            <View style={{ marginBottom: 20, paddingHorizontal: 10, marginTop: 20 }}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}
                    style={styles.container}>
                    {
                        images.map((image, index) => (
                            <Image
                                key={index}
                                style={styles.asd}
                                source={{
                                    uri: image,
                                }}
                            />
                        ))
                    }
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {
                        images.map((value, index) => (
                            <View key={index} style={[styles.whiteDot, { opacity: index === this.state.selectedIndex ? 0.5 : 1 }]} />
                        ))
                    }
                </View>
            </View>
        )
    }
}


export default Index;

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: '100%',
        // paddingHorizontal: 10,
    },
    asd: {
        height: 150,
        width: SCREEN_WIDTH - 20,
        borderRadius: 5,
        marginRight: 10
    },
    whiteDot: {
        height: 5,
        width: 5,
        borderRadius: 10,
        color: 'black',
        backgroundColor: 'white',
        margin: 5
    }
});
