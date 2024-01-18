import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import typography from '../typography'

function Input({ lable, placeholder, value="", onchange}) {
    const placeHolderTypo = typography.bodyMedium
  return (
   <View>
          <Text className="text-text-1 pb-2" style={typography.titleMedium}>{lable }</Text>
          <TextInput className="bg-light-bg rounded-xl"
              mode='outlined'
              style={typography.bodyMedium}
              placeholder={placeholder}
              contentStyle={{ ...placeHolderTypo, padding: 16 }}
              outlineStyle={{ borderWidth: 0, borderRadius: 12 }}
              value={value}
              onChangeText={(val) => onchange(val)}
              
          ></TextInput>
    </View>
  )
}
const style = StyleSheet.create({
    
})
export default Input