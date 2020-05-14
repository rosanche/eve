import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width * 0.91;

export const styles = StyleSheet.create({
    carShare: {
        flexDirection: 'row',
        width: width,
        height: 104,
        backgroundColor: '#2A2A2A',
        borderRadius: 24,
        padding: 15,
        marginBottom: 16,
    },
    title: {
        fontFamily: 'Gordita-Medium',
        fontSize: 16,
        color: '#FFCE00',
        paddingLeft: 8,
    },
    location: {
        fontFamily: 'Gordita-Medium',
        fontSize: 12,
        color: '#C4C4C4',
        paddingLeft: 8,
    },
    organisator: {
        flexDirection: 'row',
        paddingLeft: 8,
        paddingTop: 6,
    },
    img: {
        height: 24,
        width: 24,
        borderRadius: 15,
    },
    person: {
        fontFamily: 'Gordita-Medium',
        fontSize: 12,
        color: '#00FFF8',
        paddingLeft: 8,
        paddingTop: 7,
    },
    hourCar: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 2,
    },
    hour: {
        fontFamily: 'Gordita-Medium',
        fontSize: 16,
        color: '#C4C4C4',
    },
    car: {
        top: 18,
        height: 32,
        width: 32,
        backgroundColor: '#525252',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
