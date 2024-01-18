import { Stack, Sl } from 'expo-router'
import React from 'react'
import { PaperProvider } from 'react-native-paper'

function _layout() {
  return (
    <PaperProvider>
    <Stack screenOptions={{
      navigationBarHidden: true,
      headerTransparent: true,
      headerShown: false,
      statusBarTranslucent: true
      }} /> 
      
   </PaperProvider>
  )
}

export default _layout