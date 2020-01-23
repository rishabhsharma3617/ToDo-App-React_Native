import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image ,Alert, ScrollView , TouchableOpacity, FlatList , TouchableWithoutFeedback , Keyboard} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem'
import AddTodo from './components/addtodo'

export default function App() {
  const [todos , setTodos] = useState([
    { text : 'Drinking Coffe' , key : '1'},
    { text : 'Go to College' , key : '2'},
    { text : 'Study Hard' , key : '3'},
    { text : 'Fitness Goals' , key : '4'},
    { text : 'New Year Resolutions' , key : '5'},
    { text : 'SIx Paxks' , key : '6'},
  ])
  
  const deleteItem = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key!=key)
  })  
  }

  const submitnewTodo = (text) => {
    if(text.length > 3)
    {
    setTodos((prevTodos) => {
      return [
        { text : text , key : Math.random().toString() },
        ...prevTodos
      ]

    })
    }
    else
    {
      Alert.alert('!OOPS' , 'Todos must be over 3 chars long' , [
        { text : 'Understood1' , onPress : () => console.log('Alert CLosed')},
        { text : 'Understood2' , onPress : () => console.log('Alert CLosed')}
      ])
    }

  }


  return (
    <TouchableWithoutFeedback onPress={() => {  //touching anywhere on the screen it shoots the onpress event 
      Keyboard.dismiss() //it closes the keyboard
    }}>
        <View style={styles.container}>
       {/**header */}
       <Header />
       <View style={styles.content}>
         <AddTodo submitnewTodo={submitnewTodo}/>
         <View style={styles.list}>
           <FlatList 
           data= {todos}
           renderItem={( {item }) => (
           <TodoItem item={item} deleteItem={deleteItem}/>
           )}
           
           />
         </View>
       </View>
    </View>
    </TouchableWithoutFeedback>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content : {
    flex: 1,   //flex dont let the content go off screen
    padding: 40
  },
  list : {
    flex :1 ,
    marginTop : 20
  } 
  
 
});
