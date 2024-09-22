import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

import MOCK_DATA from './MOCK_DATA.json';
import { useState } from 'react';


function BarraPesquisa(){
 const [searcWord, setSearchWord] = useState('')
 
 
  return(
    <View>
      <StatusBar barStyle = "light-content"/>
      <TextInput placeholder='Selecionar Destino'
      onChangeText={setSearchWord}/>

      <ScrollView>
      {MOCK_DATA.filter((val) => {
        if(searcWord === ""){
          return val
        }
        else if(val.first_name.toLowerCase.includes(searcWord.toLowerCase())){
          return val
        }
        
      }).map((item, index) => (
          <Text key={index}>{item.first_name} </Text>
      ))}
      </ScrollView>
    </View>  
)}


export default BarraPesquisa; 