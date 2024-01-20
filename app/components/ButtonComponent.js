import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Button, IconButton } from 'react-native-paper'
import typography from '../typography'
import { icons } from '../index'

function ButtonComponent({ bg= "primary", textString = "Button", onpress = ()=>{console.log("Button Pressed")}, loading = false , icon, fill = "none", stroke = "#323434" , active, large}) {

  if (icon) {
    const Icon = icons(`./${icon}.svg`).default
 
    return (
        <IconButton size={large? 35 : 25} className={`bg-${bg} rounded-xl ${!active ? "" : "border-b-4"} `} icon={()=>(<Icon width={18} hieght ={35} fill = {fill} stroke={stroke} />)} onPress= {()=>onpress()}/>
    )
  }
  return (
    <Button loading={loading} className={`bg-${bg} rounded-xl p-3 `}  onPress= {()=>onpress()} mode='contained' style={typography.labelLarge}>
      <Text className="text-light" style={typography.labelLarge}>{textString}</Text>
    </Button>
  )
}

export default ButtonComponent