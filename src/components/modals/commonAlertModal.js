import React from 'react';
import {
    Dimensions, Modal, StyleSheet,
    TouchableOpacity, View
} from 'react-native';
import { textScale } from '../../styles/responsiveStyles';
import { spacing } from '../../styles/spacing';
import { fontNames } from '../../styles/typography';
import colors from '../../utility/Colors';
import { Images } from '../../utility/imageRes';
import CommonButton from '../common/CommonButton';
import CommonImage from '../common/CommonImage';
import RegularText from '../common/RegularText';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const CommonAlertModal = ({
    visible,
    onClose,

    icon,
    message,
    buttonText,
    onPressButton,
    fetching
}) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                onClose()
            }}>
            <TouchableOpacity
                style={styles.modalMainContainer}
                activeOpacity={1}
                onPress={() => onClose()}
            >
                <TouchableOpacity activeOpacity={1} style={styles.visibleViewStyle}>
                    <TouchableOpacity style={styles.closeContainer} onPress={() => onClose()}>
                        <CommonImage source={Images.IMG_CLOSE} />
                    </TouchableOpacity>
                    {icon &&
                        <CommonImage source={icon} />
                    }
                    <RegularText title={message} textStyle={styles.inputLable} fontFamily={fontNames.FONT_FAMILY_REGULAR} />
                    <CommonButton
                        title={buttonText}
                        buttonStyle={styles.createButtonStyle}
                        textStyle={{ color: colors.white, fontSize: textScale(11) }}
                        onPressButton={() => onPressButton()}
                        fetching={fetching}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalMainContainer: {
        backgroundColor: colors.white,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.transparentBlack
    },
    visibleViewStyle: {
        backgroundColor: colors.white,
        width: screenWidth,
        alignItems: "center",
        paddingVertical: spacing.PADDING_32,
        paddingHorizontal: spacing.PADDING_12,
        borderTopLeftRadius: spacing.RADIUS_12,
        borderTopRightRadius: spacing.RADIUS_12,
    },
    inputLable: {
        fontSize: textScale(14),
        color: colors.grey800,
        marginTop: spacing.MARGIN_12
    },
    createButtonStyle: {
        width: spacing.FULL_WIDTH / 3,
        marginTop: spacing.MARGIN_20
    },
    closeContainer: {
        alignSelf: 'flex-end',
        marginBottom: spacing.MARGIN_24,
        marginHorizontal: spacing.MARGIN_20
    }
})

export default CommonAlertModal;