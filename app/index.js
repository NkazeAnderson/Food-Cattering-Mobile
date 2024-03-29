import React, { useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import typography from './typography';
import backgroundImage from "./assets/image-23.png"
import cookImage from "./assets/image-22.png"
import { Button } from 'react-native-paper';
import { PaperProvider } from 'react-native-paper';
import ButtonComponent from './components/ButtonComponent';
import { Link, router } from 'expo-router';

export const icons = require.context("./assets/icons", false, /\.svg$/);

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

    const start = () => {
        router.push("/Login")
    }
  return (
      <View className="bg-light">
          
      <ImageBackground className="flex w-screen h-screen bg-bgGreen" resizeMode='cover' source={backgroundImage}>
          <SafeAreaView>
            
        
          <View className="">
          <Image className="mx-auto h-[427]" source={cookImage} />
        </View>
        <View className=" relative">
            <View className={`w-[500] 
           bg-light
           h-[450]
           -left-[20%]
           -top-3 
            rounded-full
             absolute
             `}>

          </View>
          <View className="space-y-4  px-4 py-[35]">
            <Text className="text-text-1 text-center" style={typography.displaySmall}>
              The Fastest In Delivery 
              <Text className="text-primary"> Food</Text>
            </Text>
            <Text className={"text-center  text-text-2"} style={typography.titleMedium}>
              our job is to filling your tummy with delicious food and fast delivery.
            </Text>
              <View className="h-2 w-6 mx-auto bg-primary rounded-3xl">
            </View>
                 <View >          
                    <ButtonComponent textString={"Get Started"} onpress={start}></ButtonComponent>
                </View>
                         
             
          </View>
          
        </View>
</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImg: {
    mixBlendMode: "overlay"
  }
})
