import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import BackGradient from '../../components/BackGradient/BackGradient';
import Events from './Events/Events';

import Calendar from '../../assets/svg/calendar.svg';
import Message from '../../assets/svg/message.svg';

import { styles } from './styles';

const FeedScreen = () => {
    return (
        <BackGradient>
            <SafeAreaView style={styles.header}>
                <Calendar style={styles.icon}/>
                <Image
                    style={styles.img}
                    source={require('../../assets/images/logo.png')}
                />
                <Message style={styles.icon}/>
            </SafeAreaView>
            <View style={styles.events}>
                <Events />
            </View>
        </BackGradient>
    );
};

export default FeedScreen;
