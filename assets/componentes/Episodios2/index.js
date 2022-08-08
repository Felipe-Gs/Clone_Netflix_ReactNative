import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Button, Title, Paragraph, Caption, Card, Chip, } from "react-native-paper";


// https://www.youtube.com/watch?v=UI6Av3IbbZE&list=PL_Axpn7FrXHSt92vK3EthJCId4mUn7viv&index=10
export default function Episodios2(){
   
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.imagem} source={require('../imgs/vk5.jpg')}/>
                <View>
                    <Title style={{color:"#fff"}}>1. Nome do Episodio</Title>
                    <Caption style={{color:"grey"}}>45 mins</Caption>
                </View>
            </View>
            <Caption style={{color:"grey"}}>
                 Esta série dramática acompanha a vida do viking Ragnar Lothbrok em sua jornada para ampliar o domínio nórdico e desafiar um líder incompetente e sem visão.
            </Caption>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:30,
        marginLeft:20
    },
    row:{
        flexDirection:"row",
        marginBottom:10
    },
    imagem:{
        width:130,
        height:70,
        marginRight:10
    }
})