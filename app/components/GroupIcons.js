import React, { Suspense, lazy } from 'react'
import { Image, View } from 'react-native'
import fbLogo from  "../assets/fb1.png"
import ggLogo from  "../assets/gg1.png"
import apLogo from "../assets/ap1.png"
import visaLogo from "../assets/visa.png"
import applepayLogo from "../assets/applepay.png"
import birdLogo from "../assets/bird.png"
import { ActivityIndicator } from 'react-native-paper'

const Paper =lazy(()=>import("react-native-paper"))

function GroupIcons({social=false}) {
    if (social) {
        return (
    <View className="flex flex-row justify-between space-x-4">
                <View className="p-4 bg-light-bg flex-grow rounded-lg">
                    <Image className="mx-auto" source={ggLogo}/>
                </View>
                <View className="p-4 bg-light-bg flex-grow rounded-lg">
                    <Image className="mx-auto" source={fbLogo}/>
                </View>
                <View className="p-4 bg-light-bg flex-grow rounded-lg">
                    <Image className="mx-auto" source={apLogo}/>
                </View>
                        
            </View>
        )
    }
    return (
            
        <View className="flex flex-row justify-between space-x-4">
                <View className="p-4 bg-light-bg flex-grow rounded-lg">
                    <Image className="mx-auto" source={visaLogo}/>
                </View>
                <View className="p-4 bg-light-bg flex-grow rounded-lg">
                    <Image className="mx-auto" source={birdLogo}/>
                </View>
                
                <View className="p-4 bg-light-bg flex-grow rounded-lg">
                    <Image className="mx-auto" source={applepayLogo}/>
                </View>
                
                        
            </View>
            
   
  )
}

export default GroupIcons