import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const ListItem = (props) => {
    return (
        props.items.map((item, i) => (
            <TouchableHighlight
                onPress = {() => props.delete(i)}
                key = {i}
                style = {styles.listitem}
            >
                <View>
                    <Text>{item}</Text>
                </View>
            </TouchableHighlight>
        ))
    )
}

const styles = StyleSheet.create({
    listitem: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#cecece',
        width: '100%',
        marginTop: 20
    }
});


export default ListItem;
