import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import { Button, Title, Paragraph, Caption, Card, Chip, } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { SinglePickerMaterialDialog } from "react-native-material-dialog";
import {Linking} from 'react-native';

import { Avatar, Banner, BottomNavigation, Drawer,Modal, Portal, Provider, ToggleButton, Dialog, Appbar } from "react-native-paper";
import Secao from "../Secao";
import Episodios2 from "../Episodios2";

//https://www.npmjs.com/package/react-native-material-dialog
//para fazer o botao de temporadas aparecer....
// https://www.youtube.com/watch?v=UI6Av3IbbZE&list=PL_Axpn7FrXHSt92vK3EthJCId4mUn7viv&index=10
export default function Episodios({navigation}){
    const [visible, setVisible] = useState(false)
    const [temporada, setTemporada] = useState({value:1, label: 'Temporada 1'})

    // const [load, setLoad] = useState(false)
    // const carregar =()=>{
    //     if(load == false){
    //         setLoad(true)
    //     }else{
    //         setLoad(false)
    //     }
    // }
   const [collor, setCollor] = useState("#E50914")

    const [cor, setCor] = useState('#fff')
    const botaoLike =() => {
        if(cor == '#fff'){
            setCor('#E50914')
        }else{
            setCor('#fff')
        }
    }

    const enviar = () =>{
        shareWhatsApp = (text) => { 
        Linking.openURL (`whatsapp://send?text=${text} + \n + ${text}`); 
        }
    }

    return(
        <>
        <SinglePickerMaterialDialog
            title={'Serie - Temporadas!'}
            items={[
                {value:1, label: 'Temporada 1'},
                {value:2, label: 'Temporada 2'},
                {value:3, label: 'Temporada 3'},
                {value:4, label: 'Temporada 4'},
            ]}
            visible={visible}
            selectedItem={temporada}
            backgroundColor={()=>collor}
            titleColor={'#E50914'}
            colorAccent={'#E50914'}
            onCancel={(result) => setVisible(false)}
            onOk={(result) => {
                setCollor('#E50914')
                setVisible(false);
                setTemporada(result.selectedItem);
            }}
            />
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.capa} source={require('../imgs/vk4.png')}/>
            <View style={styles.containerpadding}>
                <Title style={{color:"#fff"}}>Nome do Filme</Title>
                <Button
                    style={{marginVertical:20}}
                    icon={'play'}
                    uppercase={false}
                    mode={'contained'}
                    color={'#fff'}
                    >Assitir
                </Button>
                <Paragraph style={{color:'#fff', fontSize:17}}>
                    Esta série dramática acompanha a vida do viking Ragnar Lothbrok em sua jornada para ampliar o domínio nórdico e desafiar um líder incompetente e sem visão.
                </Paragraph>

                <Caption style={{color:'#fff', width:'100%', marginVertical:20, fontSize:15}}>
                    Estrelando: Travis Fimmel,Katheryn Winnick,Clive Standen 
                    Criação: Michael Hirst
                </Caption>

                <View style={styles.menuheader}>
                <TouchableOpacity style={styles.menubutton}>
                    <Icon name="plus" color={'#fff'} size={20}/>
                    <Text style={styles.buttontext}>Minha Lista</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={botaoLike} style={styles.menubutton}>
                    <Icon name="thumb-up" color={(cor)}size={20}/>
                    <Text style={styles.buttontext}>Classifique</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                
                Linking.canOpenURL("whatsapp://send?text=Vim pelo app").then(supported => {
                    if (supported) {
                        return Linking.openURL(
                            "whatsapp://send?phone=5588993108812&text=Vim pelo app",
                            );
                        } else {
                            return Linking.openURL(
                                "https://api.whatsapp.com/send?phone=5588993108812&text=Vim pelo app"
                                );
                            }
                        })
                    } style={styles.menubutton}>
                    <Icon name="send" color={'#fff'} size={20}/>
                    <Text style={styles.buttontext}>Compartilhe</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menubutton}>
                    <Icon name="download" color={'#fff'} size={20}/>
                    <Text style={styles.buttontext}>Baixar</Text>
                </TouchableOpacity>
                </View>

            </View>
               <TouchableOpacity onPress={()=>setVisible(true)} style={styles.buttontemporada}>
                    <Text style={styles.name}>{temporada.label}</Text>
                    <Icon name="chevron-down" color={"#fff"} size={30}/>
               </TouchableOpacity>
                                     
               <FlatList 
                    data={[1, 2, 3, 4]}
                    renderItem={(item, index)=><Episodios2 key={index}/>}/>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    capa:{
        height:200,
        width:'100%',
    },
    containerpadding:{
        padding:20
    },
    botoes:{
    //    flexDirection:"row" ,
    },
    menubutton:{
        justifyContent:'center',
        alignItems:"center",
    },
    menuheader:{
        width:'100%',
        height:38,
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20, 
        marginVertical:20 
    },
    buttontext:{
        color:"#fff",
        fontSize:15
    },
    buttontemporada:{
        width:"90%",
        padding:10,
        borderRadius:3,
        backgroundColor:'grey',
        borderWidth:1,
        borderColor:'#fff',
        flexDirection:"row",
        justifyContent:'space-between',
        marginVertical:20,
        marginLeft:20
    }, 
    name:{
       color:"#fff",
       fontSize:15
    }
})