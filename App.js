import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStack from './src/navigation/StackNavigator';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    WorkSans: require("./assets/fonts/Work_Sans/WorkSans-VariableFont_wght.ttf"),
    Strac: require("./assets/fonts/strac/Straczynski.ttf"),
    sfPro: require("./assets/fonts/sf-pro/sf-pro-text-regular.ttf"),
    boldSfPro: require("./assets/fonts/sf-pro/sf-pro-text-bold.ttf"),
    heavySfPro: require("./assets/fonts/sf-pro/sf-pro-text-heavy.ttf"),
    Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  })

  const onLayoutRootView = useCallback(async() =>{
    
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    } 
  },[fontsLoaded] );

  if(!fontsLoaded){
    return null  
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppStack />
    </SafeAreaView>
  );
}