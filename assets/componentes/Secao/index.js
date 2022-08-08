import React,{useState}from "react"
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView} from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";


// https://www.youtube.com/watch?v=GcG9IUDElC0&list=PL_Axpn7FrXHSt92vK3EthJCId4mUn7viv&index=8

export default function Secao(){
    return(
     <View style={styles.container}>
        <Title style={{color:"#fff", marginLeft:20}}>Ação e Aventura</Title>
        <FlatList 
            style={{width:'100%'}}
            horizontal
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({item, index})=>(
                <TouchableOpacity key={index} style={{marginLeft:15, marginTop:10}}>
                    <Image style={{width:100, height:200, marginBottom:10, borderRadius:4, marginLeft: index === 0 ? 20:0 }} source={require('../imgs/vk5.jpg')}/>
                </TouchableOpacity>
            )}        
        />
        <Title style={{color:"#fff", marginLeft:20}}>Ficção Cientifica</Title>
        <FlatList 
            style={{width:'100%'}}
            horizontal
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({item, index})=>(
                <TouchableOpacity key={index} style={{marginLeft:15, marginTop:10}}>
                    <Image style={{width:100, height:200, marginBottom:10, borderRadius:4, marginLeft: index === 0 ? 20:0 }} source={require('../imgs/vk5.jpg')}/>
                </TouchableOpacity>
            )}        
        />
        <Title style={{color:"#fff", marginLeft:20}}>Drama</Title>
        <FlatList 
            style={{width:'100%'}}
            horizontal
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({item, index})=>(
                <TouchableOpacity key={index} style={{marginLeft:15, marginTop:10}}>
                    <Image style={{width:100, height:200, marginBottom:10, borderRadius:4, marginLeft: index === 0 ? 20:0 }} source={require('../imgs/vk5.jpg')}/>
                </TouchableOpacity>
            )}        
        />
     </View>   
    )
}

const styles= StyleSheet.create({
  container:{

  }
})