import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-paper'
import typography from '../typography'

function ButtonComponent({textString, onpress, loading}) {
  return (
    <Button loading={loading} className="bg-primary rounded-xl p-2"  onPress= {()=>onpress()} mode='contained' style={typography.labelLarge}>
          <Text className="text-light" style={typography.labelLarge}>{textString}</Text>
    </Button>
  )
}

export default ButtonComponent