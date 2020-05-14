import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Config from '../../../assets/config-events/config-events.json';

import Event from './Event/Event';
import Task from './Task/Task';
import CarShare from './CarShare/CarShare';

import moment from 'moment';
import 'moment/locale/fr';
import { styles } from './styles';

const Events = () => {
    let dateDone = '';

    const [events] = useState(
        Config.sort((a, b) => {
            return a.date.localeCompare(b.date);
        })
    );


    const writeDate = (date) => {
        if (dateDone !== date)
        {
            dateDone = date;
            return (<Text style={styles.date}>{date}</Text>);
        }
    };

    const typeEvent = (event, index) => {
        if (event.type === 'task')
            return (<Task task={event} id={index}/>);
        else if (event.type ===  'event')
            return (<Event event={event}/>);
        else if (event.type === 'carshare')
            return (<CarShare carshare={event}/>);
    };

    return (
        <FlatList
            style={styles.list}
            data={events}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
                let date = moment(item.date).locale('fr').format('dddd Do MMMM');
                date = date.charAt(0).toUpperCase() + date.slice(1);
                return (
                    item.date.localeCompare(new Date().toISOString()) >= 0 ?
                        <View>
                            {writeDate(date)}
                            {typeEvent(item, index)}
                        </View> :
                        null
                );
            }}
        />
    );
};

export default Events;
