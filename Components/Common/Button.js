import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Button } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

// import { COLORS, FONTS, FONT_SIZES } from '../../constants'

const viewableHeight = hp('100%') - 44 - 34

const responsiveHeight = 50;
const buttonHeight = 40;
const buttonWidth = wp('30%');

const startButtonStyle = { backgroundColor: '#EC6845' }

const AmanaButton = ({
    title,
    onPress,
}) => {

    return (
        <View style={styles.container}>
            <Button
                backgroundColor={'grey'}
                buttonStyle={[styles.buttonStyle, startButtonStyle]}
                containerStyle={styles.buttonContainerStyle}
                onPress={onPress}
                title={title}
                titleStyle={styles.titleStyle}
            />
        </View>
    )
};

export default AmanaButton;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        height: buttonHeight,
        width: buttonWidth,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStyle: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 18,
        // fontFamily: FONTS.HEAVY,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});
