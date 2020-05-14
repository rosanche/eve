import React from 'react';
import { View, Text, Image } from 'react-native';

import Triangle from '../../../../assets/svg/triangle.svg';
import Car from '../../../../assets/svg/car.svg';
import { styles } from './styles';

import moment from 'moment';
import 'moment/locale/fr';

const CarShare = (props) => {
    return (
        <View style={styles.carShare}>
            <Triangle />
            <View style={styles.information}>
                <Text style={styles.title}>{props.carshare.title}</Text>
                <Text style={styles.location}>{props.carshare.adress} • {props.carshare.city}</Text>
                <View style={styles.organisator}>
                    <Image
                        style={styles.img}
                        source={require('../../../../assets/images/Romain.jpg')}
                    />
                    <Text style={styles.person}>Par {props.carshare.organisator}</Text>
                </View>
            </View>
            <View style={styles.hourCar}>
                <Text style={styles.hour}>
                    {moment(props.carshare.date).utc().format('HH : mm')}
                </Text>
                <View style={styles.car}><Car /></View>
            </View>
        </View>
    );
};

export default CarShare;
