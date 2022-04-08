import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Circle } from 'react-native-progress';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/Colors';
import CommonSlider from '../../common/CommonSlider';
import RegularText from '../../common/RegularText';

const PageFirst = ({ angerValue, setAngerValue }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', marginHorizontal: spacing.MARGIN_6, marginTop: spacing.MARGIN_12 }}>
            <View style={styles.dashedCircle} >
                <Circle
                    testID='PageFirstCircleProgress'
                    size={(spacing.FULL_WIDTH / 1.3) - spacing.MARGIN_36}
                    indeterminate={false}
                    progress={(angerValue * 10) / 100}
                    thickness={spacing.WIDTH_12}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    borderWidth={0}
                    color={colors.white}
                    children={<View style={styles.centerCircle} >
                        <View style={styles.numberCircle} >
                            <RegularText title={angerValue} textStyle={styles.angerCount} fontFamily={fontNames.FONT_FAMILY_SEMI_BOLD} />
                        </View>
                    </View>}
                >
                </Circle>
            </View>

            <CommonSlider
                minValue={0}
                maxValue={10}
                onSlide={setAngerValue}
                onSlidingComplete={() => { }}
                value={angerValue}
                steps={1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dashedCircle: {
        borderWidth: 2,
        borderStyle: 'dashed',
        height: spacing.FULL_WIDTH - spacing.MARGIN_36,
        width: spacing.FULL_WIDTH - spacing.MARGIN_36,
        marginBottom: spacing.MARGIN_24,
        borderRadius: spacing.FULL_WIDTH,
        borderColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberCircle: {
        height: (spacing.FULL_WIDTH / 2) - spacing.MARGIN_36,
        width: (spacing.FULL_WIDTH / 2) - spacing.MARGIN_36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondaryColor,
        borderRadius: spacing.FULL_WIDTH
    },
    centerCircle: {
        height: (spacing.FULL_WIDTH / 1.35) - spacing.MARGIN_36,
        width: (spacing.FULL_WIDTH / 1.35) - spacing.MARGIN_36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.themeLight,
        borderRadius: spacing.FULL_WIDTH,
        position: 'absolute'
    },
    angerCount: {
        fontSize: textScale(50),
        color: colors.white
    },
});

export default PageFirst;