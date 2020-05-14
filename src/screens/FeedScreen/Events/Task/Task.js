import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Star from '../../../../assets/svg/star.svg';
import { styles } from './styles';

import { useSelector, useDispatch } from 'react-redux';

const Task = (props) => {
    const tasksCompleted = useSelector(state => state.tasksCompleted);
    const dispatch = useDispatch();

    const displayTaskCompleted = () => {
        if (tasksCompleted.findIndex(item => item.id === props.id) !== -1)
        {
            return (
                <View style={styles.checked} />
            );
        }
    };

    const dispatchCheck = () => {
        dispatch({ type: 'TOGGLE_TASK', value: props});
    };

    return (
        <View style={styles.task}>
            <Star />
            <View style={styles.information}>
                <Text style={styles.title}>{props.task.title}</Text>
                <Text style={styles.reason}>• {props.task.for}</Text>
            </View>
            <View style={styles.toDo}>
                <TouchableOpacity onPress={() => dispatchCheck()}>
                    <View style={styles.check}>
                        {displayTaskCompleted()}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Task;
