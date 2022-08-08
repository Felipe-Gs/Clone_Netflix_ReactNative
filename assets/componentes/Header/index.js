import React from "react";
import {Text, StyleSheet, SafeAreaView, View, TouchableOpacity, Image} from "react-native";


export default function Header(){
    return(
        <>
            {/* <View>
                <Text style={styles.textoBranco}>Header</Text>
            </View> */}
            <SafeAreaView style={styles.HeaderSafeAreaView}>
                <Image style={{width:'20%', height:90, }} source={require('../imgs/NN.png')}/>
                <TouchableOpacity>
                    <Text style={styles.textoBranco}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textoBranco}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textoBranco}>Minha Lista</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

// https://www.youtube.com/watch?v=LxnKAjH-arc&list=PL_Axpn7FrXHSt92vK3EthJCId4mUn7viv&index=6
const styles= StyleSheet.create({
    textoBranco:{
     color:'#fff',
     fontWeight:"bold",
     fontSize:20
    },
    header:{
        position:'absolute',
        top:0,
        zIndex:999,
    },
    HeaderSafeAreaView:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
        height:70,
        alignItems:"center",
        marginTop:30
    }
 })