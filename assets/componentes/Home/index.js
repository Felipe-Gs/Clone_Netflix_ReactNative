import React,{useState}from "react"
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView} from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../Header";
import Hero from "../Hero";
import Secao from "../Secao";
import Episodios from "../Episodios";

// https://www.youtube.com/watch?v=LxnKAjH-arc&list=PL_Axpn7FrXHSt92vK3EthJCId4mUn7viv&index=6

export default function Home({navigation}){

    // const [credenciais, setCredenciais] = useState({
    //     email:'',
    //     senha:''
    // })
    
    return(
        <ScrollView style={styles.container}>
            <ImageBackground
                style={styles.hero} 
                source={require('../imgs/vk5.jpg')}
            >
            
            <Header/>
            <Hero/>

            </ImageBackground>
            <View>
                <Text style={{color:'white',textAlign:"center", fontSize:20, fontWeight:"bold", marginTop:10}}>Top de 1 de hoje no Brasil</Text>
            </View>
            <View style={styles.menuheader}>
                <TouchableOpacity style={styles.menubutton}>
                    <Icon name="plus" color={'#fff'} size={20}/>
                    <Text style={styles.buttontext}>Minha Lista</Text>
                </TouchableOpacity>
                <Button
                    onPress={() => navigation.navigate('Episodios')}
                    icon={'play'}
                    uppercase={false}
                    mode={'contained'}
                    color={'#fff'}
                    >Assitir
                </Button>
                <TouchableOpacity style={styles.menubutton}>
                    <Icon name="information-outline" color={'#fff'} size={20}/>
                    <Text style={styles.buttontext}>Saiba mais</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.previacontainer}>
                <Title style={styles.previatitle}>Prévias</Title>
                <FlatList
                    horizontal
                    style={styles.FlatListcontainer}
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    renderItem={({item, index})=>(
                        <TouchableOpacity key={index} style={{marginLeft: index === 0 ? 20: 0, marginRight:10}}>
                            <View style={styles.oval}>
                                <Image style={{width:90, height:90, borderRadius:90}} source={require('../imgs/vk2.jpg')}/>
                            </View>
                        </TouchableOpacity>
                    )}                  
                />
            </View>
            <Secao/>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'#000'
   },
   hero:{
    height:500,
    width:'100%'
},
   menuheader:{
    width:'100%',
    height:38,
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:20
},
    buttontext:{
        color:"#fff"
    },
    menubutton:{
        justifyContent:'center',
        alignItems:"center"
        
    },
    FlatListcontainer:{
        width:'100%',
        height:100,
        marginTop:10,
        marginBottom:50
    },
    oval:{
        backgroundColor:'#E50914',
        padding:2.5,
        width:90,
        height:90,
        borderRadius:90
    },
    previacontainer:{
        width:'100%',
        marginTop:50
    },
    previatitle:{
        color:'#fff',
        marginLeft:20
    }
})