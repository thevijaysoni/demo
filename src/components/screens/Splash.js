import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { spacing } from '../../styles/spacing';
import colors from '../../utility/Colors';
import { navigate } from '../../utility/commonFunctions';
import { KEY_APP } from '../../utility/constants';
import { Images } from '../../utility/imageRes';

const Splash = ({ }) => {

    useEffect(() => {
        navigate(KEY_APP)
        // setTimeout(() => {
        // }, 2000);
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center' }} >
            <Image
                source={Images.IMG_APP_LOGO}
                style={styles.logoStyle}
                resizeMode={'contain'}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    logoStyle: {
        height: spacing.FULL_WIDTH / 3,
        width: spacing.FULL_WIDTH / 3,
    }
});

export default Splash;