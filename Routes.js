import React from "react";
import PaginaLogin from "./assets/componentes/PaginaLogin";
import Home from "./assets/componentes/Home";
import Filme from "./assets/componentes/Filme";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator, tabBarIcon } from '@react-navigation/material-bottom-tabs';
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import Episodios from "./assets/componentes/Episodios";

const color = '#fff'
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = ()=>{
    return(
        <Tab.Navigator 
            initialRouteName="Episodios"
            activeColor={'#fff'}
            shifting={false}
            barStyle={{ backgroundColor: '#141414', color:'#fff',}}>
            <Tab.Screen 
                
                barStyle={{color:'red', backgroundColor:'red',}}
                theme={''}
                activeColor={'#fff'}
                inactiveColor={'red'}
                name="Home" 
                component={Home}
                options={{
                    color:'white',
                    tabBarLabel: 'Início',
                    shifting: false,
                    tabBarIcon: ({color}) =>{
                        return <Icon name="account" color={color} size={26} zIndex={10}/>
                    }
                }}
            />
            <Tab.Screen 
                name="buscar" 
                component={Episodios}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({color})=>{
                        return <Icon name="magnify" color={color} size={26}/>
                    }
                }}
            />
            <Tab.Screen 
                name="em-breve" 
                component={Filme}
                options={{
                    tabBarLabel: 'Em breve',
                    tabBarIcon: ({color})=>{
                       return <Icon name="play-speed" color={color} size={26}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Dowloads" 
                component={Filme}
                options={{
                    tabBarLabel: 'Dowloads',
                    tabBarIcon: ({color})=>{
                        return <Icon name="download" color={color} size={26}/>
                    }
                }}
            />
            <Tab.Screen 
                name="mais" 
                component={Episodios}
                options={{
                    tabBarLabel: 'Mais',
                    tabBarIcon: ({color})=>{
                       return <Icon name="menu" color={color} size={26}/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PaginaLogin">

                <Stack.Screen options={{headerShown: false, }} name='Login'  component={PaginaLogin}/>
                <Stack.Screen options={{headerShown: false}} name='Home' component={HomeTabs}/>
                <Stack.Screen options={{headerShown: false}} name='Filme' component={Filme}/>
                <Stack.Screen options={{headerShown: false}} name='Episodios' component={Episodios}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}