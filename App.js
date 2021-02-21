import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarsList from './components/CarsList'
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

{{/* <WebView 
  source={{ uri: 'https://www.youtube.com/embed/0lN0RnOWTlI' }} 
  style={{width:300, maxHeight:300, marginTop:100,borderWidth:2,borderColor:'red'}}
  javaScriptEnabled={true}
/> */}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
