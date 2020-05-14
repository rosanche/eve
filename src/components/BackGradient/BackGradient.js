import React from 'react';
import { View } from 'react-native';
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient';

const BackGradient = (props) => {
    return (
        <View style={styles.screen}>
            <LinearGradient useAngle={true} angle={109.12} colors={['#FFD300', '#FF00DB']} locations={[0.20, 0.5237]} style={styles.gradientRed1} />
            <LinearGradient useAngle={true} angle={109.12} colors={['#FFD300', '#FF00DB']} locations={[0.20, 0.5237]} style={styles.gradientRed2} />
            <LinearGradient useAngle={true} angle={109.79} colors={['#00FFDA', '#8F00FF']} locations={[0.6846, 0.87]} style={styles.gradientBlue1} />
            <LinearGradient useAngle={true} angle={102.86} colors={['#00FFDA', '#8F00FF']} locations={[0.20, 0.5237]} style={styles.gradientBlue2} />
            {props.children}
        </View>
    );
};

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         backgroundColor: '#1B1B1B',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     gradientRed1: {
//         height: 98.71,
//         width: 687.87,
//         borderRadius: 50,
//         transform: [{'rotate': '-47.61deg'}],
//         position: 'absolute',
//         left: '28%',
//         top: '13%',
//     },
//     gradientRed2: {
//         height: 98.71,
//         width: 687.87,
//         borderRadius: 50,
//         transform: [{'rotate': '-47.61deg'}],
//         position: 'absolute',
//         left: '62%',
//         top: '21%',
//     },
//     gradientBlue1: {
//         height: 98.71,
//         width: 452.87,
//         borderRadius: 50,
//         transform: [{'rotate': '132.39deg'}],
//         position: 'absolute',
//         left: '-5%',
//         top: '-22%',
//     },
//     gradientBlue2: {
//         height: 98.71,
//         width: 452.87,
//         borderRadius: 50,
//         transform: [{'rotate': '132.39deg'}],
//         position: 'absolute',
//         left: '-50%',
//         top: '97%',
//     },
// });

export default BackGradient;
