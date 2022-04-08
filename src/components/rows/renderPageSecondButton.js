import React from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { textScale } from '../../styles/responsiveStyles';
import { spacing } from '../../styles/spacing';
import colors from '../../utility/Colors';

const buttonReduceValue = 1.3
const button1Width = spacing.FULL_WIDTH / buttonReduceValue
const button2Width = button1Width / buttonReduceValue
const button3Width = button2Width / buttonReduceValue
const button4Width = button3Width / buttonReduceValue
const button5Width = button4Width / buttonReduceValue

function RenderButton({ value, angerValue, setAngerValue }) {

    const animatedButtonScale = new Animated.Value(1);

    const onPressIn = () => {
        Animated.spring(animatedButtonScale, { toValue: 1.2, useNativeDriver: true, }).start();
    };

    const onPressOut = (value) => {
        Animated.spring(animatedButtonScale, { toValue: 1, useNativeDriver: true, }).start();
        setAngerValue(value)
    };

    const animatedScaleStyle = {
        transform: [{ scale: animatedButtonScale }]
    };

    let buttonWidth =
        value == 5 ? button1Width :
            value == 4 ? button2Width :
                value == 3 ? button3Width :
                    value == 2 ? button4Width :
                        value == 1 ? button5Width :
                            button5Width

    let isActive = value <= angerValue ? true : false

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => { }}
            onPressIn={onPressIn}
            onPressOut={() => onPressOut(value)}
            style={{ marginBottom: spacing.MARGIN_12 }}
            testID={'render-button'}
        >
            <Animated.View style={[styles.buttonView, animatedScaleStyle, {
                width: buttonWidth,
                backgroundColor: isActive ? colors.white : colors.grey500
            }]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    angerValueText: {
        color: colors.white,
        fontSize: textScale(16),
        marginVertical: spacing.MARGIN_12
    },
    buttonView: {
        height: spacing.HEIGHT_56,
        backgroundColor: colors.white,
        borderRadius: spacing.RADIUS_90
    }
});

export default RenderButton