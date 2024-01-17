import { Stack } from 'expo-router'
import React from 'react'

function _layout() {
  return (
    <Stack screenOptions={{
      navigationBarHidden: true,
      headerTransparent: true,
      headerShown: false,
      statusBarTranslucent: true
    }}/>
  )
}

export default _layout