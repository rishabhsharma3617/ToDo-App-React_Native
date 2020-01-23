import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image , ScrollView , TouchableOpacity, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function TodoItem(props) {
    return(
        <TouchableOpacity >
            <View style={styles.item}>
            <MaterialCommunityIcons name='delete' size={18} color={'#333'} onPress={() => props.deleteItem(props.item.key)}/>
            <Text style={styles.textItem}>{props.item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item : {
        padding : 16,
        marginTop : 16,
        borderColor : '#bbb',
        borderWidth : 2,
        borderRadius : 10,
        flexDirection : 'row'
    },
    textItem : {
        marginLeft : 10
    }
})