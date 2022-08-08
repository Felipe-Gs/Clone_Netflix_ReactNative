import React,{useState}from "react"
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";


export default function PaginaLogin({navigation}){

    const [credenciais, setCredenciais] = useState({
        email:'',
        senha:''
    })
    
    return(
        <View style={styles.felipe}>
        <Image style={styles.logo} source={require('../imgs/netflixlogo.png')}/>
        <View style={{color:'white'}}>
            <TextInput
                
                mode="flat"
                style={styles.marginBottom}
                label="Email"
                value={credenciais.email}
                theme={{colors:{primary:'#E50914', background:'#3C3C3C', placeholder:'#ffffff', text:'#fff'}}}
                onChangeText={text => setCredenciais({...credenciais, email:text})}
            />

            <TextInput
                placeholderTextColor={'#fff'}
                mode="flat"
                style={styles.marginBottom}
                label="Senha"
                secureTextEntry
                value={credenciais.senha}
                theme={{colors:{primary:'#E50914', background:'#3C3C3C', placeholder:'#ffffff', placeholderTextColor:"#fff",text:'#fff'}}}
                onChangeText={text => setCredenciais({...credenciais, senha:text})}
            />
            <Button 
                mode="contained" 
                style={styles.marginBottom}
                onPress={() => navigation.navigate('Home')}
                theme={{colors:{primary:'#E50914'}}}>
                Entrar
            </Button>

            <Button 
               
                style={styles.marginBottom}
                onPress={() => console.log('Pressed')}
                theme={{colors:{primary:'#fff'}}}>
                Recuperar Senha
            </Button>
        </View>
        <Text style={styles.textSmall}>
            O acesso está protegido pelo Google reCAPTCHAR para garantir que voce não é um robo. Saiba mais.
        </Text>
        </View>
    )
}

const styles= StyleSheet.create({
    felipe:{
        backgroundColor:'#000', 
        flex:1
    },
    logo:{
        display:'flex',
        alignSelf:'center',
        width:'50%', 
        height:100, 
        marginTop:60, 
        marginBottom:100
    },
    marginBottom:{
        marginBottom:20,
        width:'90%',
        marginLeft:20,
        color:'#ffff'
        
    },
    textSmall:{
        color:'rgba(255,255,255,0.6)',
        textAlign:"center",
        marginTop:30
    }
})