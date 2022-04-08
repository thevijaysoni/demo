import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import Strings from '../../../translation/language';
import colors from '../../../utility/Colors';
import { Images } from '../../../utility/imageRes';
import CommonButton from '../../common/CommonButton';
import RegularText from '../../common/RegularText';
import PageFirst from './page1';
import PageSecond from './page2';
import PageIndicator from './pageIndicator';

const HomeScreen = ({ }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(5)

    const [pageOneAngerValue, setPageOneAngerValue] = useState(0)
    const [pageTwoAngerValue, setPageTwoAngerValue] = useState(1)

    function onPressNext() {
        if (currentPage < 5) {
            setCurrentPage(currentPage + 1)
        }
        else {
            setCurrentPage(1)
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.theme }}>
            <PageIndicator currentPage={currentPage} totalPage={totalPage} />
            <View style={styles.mainContainer} >
                <View style={{ flexDirection: 'row', marginTop: spacing.MARGIN_12, alignItems: 'center' }} >
                    <RegularText title={Strings.rescue_session + ': ' + Strings.anger_frustation} textStyle={styles.pageTitle} style={{ flex: 1 }} />
                    <TouchableOpacity>
                        <Image source={Images.IMG_CLOSE} style={{ height: spacing.HEIGHT_18, width: spacing.HEIGHT_18, tintColor: colors.white }} />
                    </TouchableOpacity>
                </View>

                <RegularText title={Strings.msg_pick_anger_frustation_level} textStyle={styles.pageMessage} fontFamily={fontNames.FONT_FAMILY_BOLD} style={{ marginTop: spacing.MARGIN_24 }} />

                {currentPage == 1 &&
                    <PageFirst angerValue={pageOneAngerValue} setAngerValue={setPageOneAngerValue} />
                }

                {currentPage == 2 &&
                    <PageSecond angerValue={pageTwoAngerValue} setAngerValue={setPageTwoAngerValue} />
                }

            </View>
            <CommonButton
                title={Strings.next}
                buttonStyle={{
                    marginHorizontal: spacing.MARGIN_12,
                    marginBottom: spacing.MARGIN_12
                }}
                onPressButton={() => onPressNext()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: spacing.MARGIN_12,
        flex: 1
    },
    pageTitle: {
        color: colors.white,
        fontSize: textScale(16),
        textTransform: 'uppercase'
    },
    pageMessage: {
        color: colors.white,
        fontSize: textScale(22),
    }
});

export default HomeScreen;