import { StyleSheet, Dimensions } from 'react-native';
import posed from 'react-native-pose';

const windowWidth = Dimensions.get('window').width;
const tabWidth = windowWidth / 4;
export const SpotLight = posed.View({
  route0: { x: 0 },
  route1: { x: tabWidth },
  route2: { x: tabWidth * 2 },
  route3: { x: tabWidth * 3 },
});

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: 92,
        borderTopLeftRadius: 38,
        borderTopRightRadius: 38,
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeBar: {
        position: 'absolute',
        bottom: -2,
        width: tabWidth,
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    spotLight: {
        width: 30,
        height: 6,
        backgroundColor: '#00FF88',
        alignSelf: 'center',
        borderRadius: 8,
    },
});