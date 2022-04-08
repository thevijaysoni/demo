import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { spacing } from '../../../styles/spacing';
import colors from '../../../utility/Colors';

const PageIndicator = ({ currentPage, totalPage }) => {
    return (
        <View style={{ marginHorizontal: spacing.MARGIN_6, marginTop: spacing.MARGIN_12 }}>
            <FlatList
                data={Array.from(Array(totalPage).keys())}
                keyExtractor={(item, index) => String(index)}
                numColumns={totalPage}
                testID={"page-indicator"}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={[
                                styles.indicatorStyle,
                                (currentPage - 1) == index && {
                                    backgroundColor: colors.white
                                }
                            ]}
                        />
                    )
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    indicatorStyle: {
        height: spacing.HEIGHT_4,
        flex: 1,
        backgroundColor: colors.grey500,
        marginHorizontal: spacing.MARGIN_6,
        borderRadius: spacing.RADIUS_90
    }
});

export default PageIndicator;