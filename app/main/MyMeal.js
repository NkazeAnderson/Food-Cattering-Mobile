import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import ButtonComponent from '../components/ButtonComponent'
import typography from '../typography'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Greetings from '../components/Greetings'
import DeliveryProgress from '../components/DeliveryProgress'
import DayComponent from '../components/DayComponent'

const Catering = () => {
  const dishType = [
    "All", "Regular Food", "Sea Food", "Salad"
    ]
const days = [
        { name: "Mon", day: "23" },
        { name: "Tue", day: "24" },
        { name: "Wed", day: "25" },
        { name: "Thu", day: "26", active: true },
        { name: "Fri", day: "27" },
        { name: "Sat", day: "28" },
        { name: "Sun", day: "29" },
    ]
  return (
      <View className="bg-light flex flex-1 px-4">
          <View className="flex flex-row space-x-6">
              <View className="py-2 border-b-2 border-b-primary">
                  <Text className="text-text-1" style={typography.labelLarge} >Delivery</Text>
              </View>
              <View className="py-2">
                  <Text className="text-text-2" style={typography.labelLarge}>Plans</Text>
              </View>
              <View className="py-2 ">
                  <Text  className="text-text-2" style={typography.labelLarge}>Favorite</Text>
              </View>
              <View className="py-2">
                  <Text  className="text-text-2" style={typography.labelLarge}>Cart</Text>
              </View>
          </View>
      <ScrollView showsVerticalScrollIndicator = {false} className="space-y-6">
        <View >
          <Greetings time={"Afternoon"} userName={"Rehan"} secondarText={"Here is your today’s meal."}/>
        </View>
        <View>
          <DeliveryProgress/>
        </View>
           <View className="space-y-4">
                  
                  <View className="flex flex-row justify-between">
                      
                  <Text className="text-text-1 mt-auto" style={typography.titleMedium}>Your Next Meal</Text>
                  <Text className="text-text-2 mt-auto " style={typography.bodySmall}>{"01-31 Jan (20 meals)"}</Text>
                  </View>
                  {/*Popular Meal List */}
                  <View className="">
                     <FlatList
                          data={days}
                      renderItem={({item}) => {return (<DayComponent date={item} />)}}
                      keyExtractor={item => (item.day)}
                      ItemSeparatorComponent={()=>(<View className="w-1"/>)}
                      horizontal
                      />
                     
                     
                  </View>
                  
              </View>
              <View className="h-[140] relative">
                 
              </View>
      </ScrollView>
      <Tabs.Screen
              options={{
                  headerLeft: props => (<ButtonComponent onpress={()=>{router.back()}} icon={"arrow_left"} bg="light-bg" />),
          headerTitle: () => (<Text className=" text-text-1 text-center ml-7" style={typography.titleLarge} >My Meal</Text>),
                  headerRightContainerStyle: {display: "none"}
              }}
              
          />
    </View>
  )
}

export default Catering