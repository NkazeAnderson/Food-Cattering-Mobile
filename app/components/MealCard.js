import { View, Text, Image } from 'react-native'
import React from 'react'
import food  from  "../assets/images/img_1.png"
import star  from  "../assets/images/star.png"
import fire  from  "../assets/images/fire.png"
import ButtonComponent from './ButtonComponent'
import typography from '../typography'
const MealCard = () => {
  return (
      <View className="relative h-fit  overflow-hidden">
          <View className="p-2 z-10">
              <Image className="w-[140] mx-auto h-[140] rounded-full" source={food} />
              <View className="space-y-2 ">
                  
                  <View className="w-[140]">
                      <Text className="text-text-1" style={typography.titleSmall}>
                  Bhuna Khichuri and Thai Chiken
              </Text>
              </View>
              
              <View className="flex flex-row align-middle justify-between">
                  <View className="flex flex-row space-x-1">
                      <Image className="w-4 h-4" source = {star} />
                    <Text className="text-text-1" style={typography.bodySmall}>4.8</Text>
                  </View>
                  <View className="flex flex-row align-middle space-x-1">
                      <Image className="w-4 h-4" source = {fire} />
                    <Text className="text-text-1" style={typography.bodySmall}>160 Kcal</Text>
                  </View>
              </View>
              <View className="flex flex-row justify-end">
                  <ButtonComponent icon="plus" stroke='white' />
                  </View>
                  
                </View>
          </View>
          {/* Background */}
          <View className ="bg-light-bg w-full h-[370] rounded-t-3xl absolute top-[110]">
              
      </View>
    </View>
  )
}

export default MealCard