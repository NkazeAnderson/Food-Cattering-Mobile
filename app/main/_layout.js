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
                tabBarStyle: {
                    
                    position: "absolute",
                    borderRadius: 24,
                    width: "100%",
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    bottom: 50
                },
               
                // tabBarBackground: () => (
                //     <View className="flex flex-row bg-light  absolute bottom-16 justify-around mx-10 py-2 w-full">
                //         <View >
                            
                //             <ButtonComponent active bg="transparent" icon={"home"} onpress={goToCatering} />
                        
                //         </View>
                        
                //         <View className="rounded-full bg-primary">

                //         <ButtonComponent stroke='white' large icon={"catering"} />
                //         </View>
                //     <ButtonComponent bg="transparent"  icon={"person"} />
                // </View>)
      }}>
          

          
          <Tabs.Screen
              name='index'
              options={{
                  tabBarButton: () => (<View className=" bg-light flex flex-grow justify-center">
                     <View className="mx-auto"><ButtonComponent icon="home" bg='light' onpress={()=>{router.push("/main/")}} /></View> 
                  </View>),
                  
                    }}
                
          />
          <Tabs.Screen
              name='MyMeal'
              options={{
                  tabBarButton: () => (<View className=" bg-light flex flex-grow justify-center">
                      <View className="mx-auto p-2 bg-primary rounded-full">
                          <ButtonComponent icon="catering" stroke='white' onpress={()=>{router.push("/main/MyMeal")}}  />
                      </View> 
                  </View>),
                  
                    }}
                
          />
          <Tabs.Screen
              name='Profile'
                    options={{
                  tabBarStyle: {display: "none"},
                  tabBarButton: () => (<View className=" bg-light flex flex-grow justify-center">
                     <View className="mx-auto"><ButtonComponent icon="person" bg='light' onpress={()=>{router.push("/main/Profile")}}  /></View> 
                  </View>),
                  
                    }}
                
          />
          <Tabs.Screen
              name='Catering'
                    options={{
                  href: null
                  
                    }}
                
          />
         
            </Tabs>
     
          </>
  )
}

export default _layout