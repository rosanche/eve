import { StyleSheet, Dimensions } from 'react-native';

const margin = Dimensions.get('window').width * 0.045;

export const styles = StyleSheet.create({
    header: {
        // position: 'fix',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginLeft: margin,
        marginRight: margin,
        // alignItems: 'space-between',
    },
    img: {
        width: 71 * 0.84,
        height: 77 * 0.84,
    },
    events: {
        alignItems: 'center',
        marginBottom: 75,
        marginTop: 10,
    },
    icon: {
        // paddingBottom: 20,
        marginBottom: 7,
    },
});
