import { View, Text, Image } from 'react-native'
import React from 'react'
import star  from  "../assets/images/star.png"
import fire  from  "../assets/images/fire.png"
import clock  from  "../assets/images/clock.png"
import food from "../assets/images/image_20.png"
import typography from '../typography'
const MealLongCard = () => {
  return (
      <View className="space-y-2">
          <View >
      <Image className="w-full object-cover rounded-2xl" source={food}/>
          </View>
          <View>
              <Text className="text-text-1" style={typography.hSmall}>Khichuri and Thai Chicken</Text>
              <Text className="text-text-2" style={typography.bodyMedium}>Chicken stuffed along with vegetables and Fried with Khichuri</Text>
          </View>
           <View className="  flex flex-row align-middle justify-between space-x-3">
                  <View className="flex bg-light-bg flex-grow rounded-md flex-row space-x-1 justify-center p-2">
                      <Image className="w-4 h-4" source = {star} />
                    <Text className="text-text-1" style={typography.bodySmall}>4.8</Text>
                  </View>
                  <View className="flex bg-light-bg flex-grow rounded-md flex-row space-x-1 justify-center p-2">
                      <Image className="w-4 h-4" source = {fire} />
                    <Text className="text-text-1" style={typography.bodySmall}>150 Kcal</Text>
                  </View>
                  <View className="flex bg-light-bg flex-grow rounded-md flex-row space-x-1 justify-center p-2">
                      <Image className="w-4 h-4" source = {clock} />
                    <Text className="text-text-1" style={typography.bodySmall}>5-10 Min</Text>
                  </View>
              </View>
    </View>
  )
}

export default MealLongCard