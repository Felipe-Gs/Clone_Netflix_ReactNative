import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './Routes';

import { StatusBar } from 'react-native';

export default function App() {
  // const theme = {
  //   ...DefaultTheme,
  //   colors:{
  //     ...DefaultTheme.colors,
  //     primary:'#ES0914'
  //   },
  // }
  return (
    <>
      <StatusBar backgroundColor="#000"/>
      <Routes/>

      
    </>
  );
}



