import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width * 0.91;

export const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        width: width,
        height: 72,
        backgroundColor: '#2A2A2A',
        borderRadius: 24,
        padding: 17,
        marginBottom: 16,
    },
    title: {
        fontFamily: 'Gordita-Medium',
        fontSize: 16,
        color: '#FFCE00',
        lineHeight: 20,
        paddingLeft: 8,
    },
    reason: {
        fontFamily: 'Gordita-Medium',
        fontSize: 12,
        color: '#C4C4C4',
        paddingLeft: 8,
    },
    toDo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 7,
    },
    check: {
        width: 24,
        height: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        height: 12,
        width: 12,
        borderRadius: 15,
        backgroundColor: '#00FF88',
    },
});
