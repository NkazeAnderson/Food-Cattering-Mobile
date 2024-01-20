import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import ButtonComponent from '../components/ButtonComponent'

const _layout = () => {
    const goToCatering = () => {
        console.log("Pressed")
    }
    return (
      <>
            <Tabs screenOptions={{
                tabBarStyle: { padding: 8 , position: "absolute", height: 74, border: 0, shadowColor: "transparent", borderRadius: 24},
                tabBarItemStyle: {display: "none",},
                tabBarBackground: () => (
                    <View className="flex flex-row bg-light  absolute bottom-16 justify-around mx-10 py-2">
                        <View >
                            
                            <ButtonComponent active bg="transparent" icon={"home"} onpress={goToCatering} />
                        
                        </View>
                        
                        <View className="rounded-full bg-primary">

                        <ButtonComponent stroke='white' large icon={"catering"} />
                        </View>
                    <ButtonComponent bg="transparent"  icon={"person"} />
                </View>)
      }}>
          

          <Tabs.Screen
              name='index'
              options={{
                  href: null
              }}
          />
          <Tabs.Screen
              name='Catering'
              options={{
                  href: null
              }}
          />
          <Tabs.Screen
              name='Profile'
              options={{
                  href: null
              }}
          />
            </Tabs>
     
          </>
  )
}

export default _layout