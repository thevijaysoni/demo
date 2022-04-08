import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { textScale } from '../../styles/responsiveStyles';
import { spacing } from '../../styles/spacing';
import { fontNames } from '../../styles/typography';
import colors from '../../utility/Colors';
import RegularText from './RegularText';

const CommonButton = ({ backgroundColor, title, textStyle, buttonStyle, onPressButton, disabled, showNext, smallNext, fetching }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={[
                styles.buttonStyle,
                buttonStyle,
                { backgroundColor: backgroundColor != undefined ? backgroundColor : colors.white, }
            ]}
            onPress={() => {
                if (!fetching) {
                    if (onPressButton) {
                        onPressButton()
                    }
                }
            }}
            testID={"common-button"}
        >
            {!fetching &&
                <RegularText
                    title={title}
                    textStyle={[styles.textStyle, textStyle]}
                    fontFamily={fontNames.FONT_FAMILY_SEMI_BOLD}
                />
            }
            {
                fetching == true &&
                <ActivityIndicator color={colors.white} size='small' />
            }
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonStyle: {
        height: spacing.HEIGHT_50,
        borderRadius: spacing.RADIUS_90,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: spacing.PADDING_16,
        flexDirection: 'row'
    },
    textStyle: {
        color: colors.theme,
        fontSize: textScale(14)
    }
});

export default CommonButton;