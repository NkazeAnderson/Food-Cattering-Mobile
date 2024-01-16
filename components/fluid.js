import React from 'react'
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native'

function Fluid({ children }) {
    const bgImg = require("../assets/image-23.png")
    return (
        <View className={`bg-primary w-screen h-screen pt-8`}  >
            <Image className={"w-screen"} source={bgImg}/>
            {children}
            <StatusBar style='auto'/>
      </View>
  )
}

export default Fluid