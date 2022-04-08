import React from 'react';
import { View } from 'react-native';
import Slider from 'react-native-slider';
import { boxShadow } from '../../styles/Mixins';
import { spacing } from '../../styles/spacing';
import colors from '../../utility/Colors';

const CommonSlider = ({
    minValue,
    maxValue,
    steps,
    onSlide,
    value
}) => {

    return (
        <View style={{ alignItems: 'center', }} >
            <Slider
                testID={"CommonSlider"}
                value={value}
                onValueChange={(val) => onSlide(val)}
                minimumValue={minValue}
                maximumValue={maxValue}
                step={steps}
                style={{ width: '90%', }}
                thumbStyle={{ width: spacing.HEIGHT_30, height: spacing.HEIGHT_30, borderRadius: spacing.RADIUS_90, backgroundColor: colors.secondaryColor, borderWidth: spacing.HEIGHT_4, borderColor: colors.white, ...boxShadow() }}
                trackStyle={{ height: spacing.HEIGHT_24, borderRadius: spacing.RADIUS_90, }}
                maximumTrackTintColor={colors.white}
                minimumTrackTintColor={colors.secondaryColor}
            />
        </View>
    )
}

export default CommonSlider;