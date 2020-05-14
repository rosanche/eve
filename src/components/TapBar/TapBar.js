import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import { styles, SpotLight } from './styles';

const TapBar = (props) => {
    const {
        renderIcon,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation,
    } = props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
        <View style={styles.container}>
            <View style={styles.activeBar}>
                <SpotLight style={styles.spotLight} pose={`route${activeRouteIndex}`} />
            </View>

            {routes.map((route, routeIndex) => {
                return (
                <TouchableWithoutFeedback
                    key={routeIndex}
                    onPress={() => {
                    onTabPress({ route });
                    }}
                    onLongPress={() => {
                    onTabLongPress({ route });
                    }}
                    accessibilityLabel={getAccessibilityLabel({ route })}
                >
                    <View style={styles.tabButton}>
                        {renderIcon({ route })}
                    </View>
                </TouchableWithoutFeedback>
                );
            })}
        </View>
    );
};

export default TapBar;
