import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontNames } from '../../styles/typography';

const RegularText = ({
    title,
    style,
    fontFamily,
    numberOfLines,
    textStyle,
}) => {

    const [isTxtShow, setIsTxtShow] = useState(true);

    return (
        <View style={[styles.constainer, style]}>
            <Text
                numberOfLines={numberOfLines != undefined ? numberOfLines : 100}
                style={[
                    textStyle,
                    {
                        fontFamily: fontFamily != undefined ? fontFamily : fontNames.FONT_FAMILY_REGULAR,
                    }
                ]}
                testID={'regular-text'}
            >
                {
                    title
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        justifyContent: 'center',
    },
});

export default RegularText;