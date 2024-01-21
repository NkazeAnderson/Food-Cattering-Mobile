import { View, Text } from 'react-native'
import React from 'react'
import DayComponent from './DayComponent'
import typography from '../typography'
import MealLongCard from './MealLongCard'

const DeliveryProgress = () => {
  return (
    <View className="space-y-4">
          <View className="flex flex-row justify-between space-x-1" >
              <View className="basis-1/3 p-1 bg-primary rounded-3xl"></View>
              <View className="basis-1/3 p-1 bg-primary rounded-3xl"></View>
              <View className="basis-1/3 p-1 bg-light-bg rounded-3xl"></View>
          </View>
          <View className="flex flex-row">
              <View className ="flex-grow space-y-1">
                  <Text className="text-primary" style={typography.bodySmall} > Preparing...</Text>
                  <Text className="text-text-1" style={typography.titleMedium} > Your meal for delivery</Text>
                  <Text className="text-text-2" style={typography.bodySmall} > *You are unable to change today’s meal.</Text>
                  
              </View>
              <View>
                  <DayComponent date={{ name: "Mon", day: "23" }} />
              </View>
          </View>
          <View>
              <MealLongCard/>
          </View>
    </View>
  )
}

export default DeliveryProgress