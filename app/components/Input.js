import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import typography from '../typography'
import { icons } from '../index'
import ButtonComponent from './ButtonComponent'

function Input({ lable, placeholder, value="", onchange = ()=>{console.log("Typing")}, rightIcon, leftIcon, bg = "light-bg"}) {
    const placeHolderTypo = typography.bodyMedium;
  return (
   <View>
      {lable &&  <Text className="text-text-1 pb-2" style={typography.titleMedium}>{lable }</Text>}
          <TextInput className={`bg-${bg} rounded-xl`}
              mode='outlined'
              style={typography.bodyMedium}
              placeholder={placeholder}
              contentStyle={{ ...placeHolderTypo, padding: 16 }}
              outlineStyle={{ borderWidth: 0, borderRadius: 12 }}
              value={value}
        onChangeText={(val) => onchange(val)}
        right={rightIcon && <TextInput.Icon icon={()=>(<ButtonComponent icon={rightIcon} bg={bg}/>) } /> }
        left={leftIcon &&  <TextInput.Icon icon={()=>(<ButtonComponent icon={leftIcon} bg={bg}/>) } /> }
          ></TextInput>
    </View>
  )
}
const style = StyleSheet.create({
    
})
export default Input