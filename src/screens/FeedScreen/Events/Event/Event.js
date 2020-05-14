import React from 'react';
import { View, Text, Image } from 'react-native';

import moment from 'moment';
import 'moment/locale/fr';

import Round from '../../../../assets/svg/round.svg';
import { styles } from './styles';

const Event = (props) => {
    return (
        <View style={styles.event}>
            <Round />
            <View style={styles.information}>
                <Text style={styles.title}>{props.event.title}</Text>
                <Text style={styles.location}>{props.event.adress} • {props.event.city}</Text>
                <View style={styles.organisator}>
                    <Image
                        style={styles.img}
                        source={require('../../../../assets/images/Romain.jpg')}
                    />
                    <Text style={styles.person}>Par {props.event.organisator}</Text>
                </View>
            </View>
            <View style={styles.hours}>
                <Text style={styles.hourStart}>{moment(props.event.date).utc().format('HH : mm')}</Text>
                <Text style={styles.hourEnd}>- {moment(props.event.end).utc().format('HH : mm')}</Text>
            </View>
        </View>
    );
};

export default Event;
