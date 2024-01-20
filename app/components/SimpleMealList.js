import { View, Text, Image } from 'react-native'
import React from 'react'
import typography from '../typography'
import food  from  "../assets/images/img_1.png"
import food1  from  "../assets/images/img_2.png"
import food2  from  "../assets/images/img_3.png"
import food3  from  "../assets/images/img_4.png"
const SimpleMealList = ({active, nameOf, img}) => {
  return (
    <View>
      <View className="space-y-2 ">
                          
                      <View className={` ${active ? "bg-bgGreen border-2  border-primary" : "bg-light-bg border-2 border-[transparent]"}  p-3 rounded-full`}>
                          <Image className="w-[48] h-[48] p-0 object-fill mx-auto my-auto rounded-full" source={food2} />
                        </View>
                          
        <Text className="text-center text-text-1" style={typography.titleSmall}>{ nameOf }</Text>    
                      </View>
    </View>
  )
}

export default SimpleMealList