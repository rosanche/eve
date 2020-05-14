import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import FeedScreen from '../screens/FeedScreen/FeedScreen';
import TapBar from '../components/TapBar/TapBar';
import { SearchScreen, ProfileScreen, AddScreen } from '../screens/Screens';

import Feed from '../assets/svg/feed.svg';
import Search from '../assets/svg/search.svg';
import Add from '../assets/svg/add.svg';
import Profile from '../assets/svg/profile.svg';

const TabNavigator = createBottomTabNavigator(
    {
        FeedScreen: {
            screen: FeedScreen,
            navigationOptions: {
                tabBarIcon: () => <Feed />,
            },
        },
        SearchScreen: {
            screen: SearchScreen,
            navigationOptions: {
                tabBarIcon: () => <Search />,
            },
        },
        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: () => <Add />,
            },
        },
        AddScreen: {
            screen: AddScreen,
            navigationOptions: {
                tabBarIcon: () => <Profile />,
            },
        },
    },
    {
        tabBarComponent: props => {
            return (
                <View style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}>
                    <TapBar {...props} />
                </View>
            );
        },
    }
);

export default createAppContainer(TabNavigator);
