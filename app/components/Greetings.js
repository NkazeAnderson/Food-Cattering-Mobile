import { View, Text } from 'react-native'
import React from 'react'
import typography from '../typography'

const Greetings = ({time, userName, secondarText}) => {
  return (
    <View className="space-y-1 pt-6 ">
               <Text className="text-text-1" style={typography.hMedium}>
              {`Good ${time}, `}
              <Text className="text-primary">
                  {`${userName}`}
              </Text>
              </Text>
              <Text className= " text-text-2" style={typography.bodyLarge} >
                  {`${secondarText}`}
              </Text>
              </View> 
  )
}

export default Greetings