import { View, Text } from 'react-native'
import React from 'react'
import typography from '../typography'

const DayComponent = ({date}) => {
  return (
    <View className={`${date.active ? "bg-primary" : "bg-light-bg"} p-2 rounded-xl `}>
          <Text className={`${date.active ? "text-light" : "text-text-1"}   text-center`} style={typography.titleSmall}>{ date.name}</Text>
          <Text className={`${date.active ? "text-light" : "text-text-1"}   text-center`}  style={typography.titleSmall}>{ date.day}</Text>
   </View>
  )
}

export default DayComponent