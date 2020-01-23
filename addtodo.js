import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,Keyboard , ScrollView , TouchableOpacity, FlatList} from 'react-native';

export default function addTodo(props) {

    const [newTodo , setIt] = useState('')

    const changeHandler = (val) => {
        setIt(val)
    }

    const onPressAdd = () => {
        Keyboard.dismiss()
        props.submitnewTodo(newTodo)
        setIt('')
    }

    return(
        <View>
            <TextInput 
            placeholder='New todo ...'
            onChangeText={changeHandler}
            style={styles.input}
            value={newTodo}
            />

            <Button 
            onPress={onPressAdd}
            title='Add'
            color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        marginBottom : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd'
    }
})