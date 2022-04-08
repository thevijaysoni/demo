import React from 'react';
import { StyleSheet, View } from 'react-native';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import Strings from '../../../translation/language';
import colors from '../../../utility/Colors';
import RegularText from '../../common/RegularText';
import RenderButton from '../../rows/renderPageSecondButton';

const PageSecond = ({ angerValue, setAngerValue }) => {

    let angerStatus = angerValue == 5 ? Strings.high :
        (angerValue < 5 && angerValue > 2) ? Strings.medium :
            angerValue < 2 ? Strings.low : Strings.low

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.MARGIN_20 }}>
            <RegularText
                title={angerStatus}
                textStyle={styles.angerValueText}
                fontFamily={fontNames.FONT_FAMILY_SEMI_BOLD}
                style={{ flex: 0.2, justifyContent: 'center', }}
            />
            <View style={{ flex: 1, alignItems: 'center', }} >
                <RenderButton value={5} angerValue={angerValue} setAngerValue={setAngerValue} />
                <RenderButton value={4} angerValue={angerValue} setAngerValue={setAngerValue} />
                <RenderButton value={3} angerValue={angerValue} setAngerValue={setAngerValue} />
                <RenderButton value={2} angerValue={angerValue} setAngerValue={setAngerValue} />
                <RenderButton value={1} angerValue={angerValue} setAngerValue={setAngerValue} />
            </View>
        </View>
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

export default PageSecond;