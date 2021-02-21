import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';
import { AntDesign } from '@expo/vector-icons'; 


const StyledButton = (props) => {
    const {type, content, onPress} = props;
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor:backgroundColor}]}
                onPress = {() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>
                    {content + '   '}
                    <AntDesign name="downcircleo" size={20} color="white" />
                </Text>
            </Pressable>
        </View>
    )
}

export default StyledButton;
