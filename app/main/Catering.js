import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import ButtonComponent from '../components/ButtonComponent'
import typography from '../typography'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import MealCard from '../components/MealCard'

const Catering = () => {
  const dishType = [
    "All", "Regular Food", "Sea Food", "Salad"
  ]
  return (
    <View className = "bg-light flex flex-1 px-4">
      <ScrollView className="space-y-6">
        <View className="flex flex-row justify-between align-middle">
          <View className="my-auto" >
            <Text className= " text-text-1" style={typography.titleLarge}>Choose a Dish</Text>
          </View>
          <View className="flex flex-row align-middle">
            <View className="my-auto">

            <Text className= " text-text-1" style={typography.bodySmall}>Filter</Text>
            </View>
            <View className="my-auto">

          <ButtonComponent icon={"filter_funnel"} bg="light" />
            </View>
          </View>
        </View>
        <View>
          <FlatList
            data={dishType}
            renderItem={({item}) => (
              <ButtonComponent textString={item} />
            )}
            keyExtractor={(item) => (item)}
            horizontal = {true}
            ItemSeparatorComponent={()=>(<View className="p-4"></View>)}
          />
        </View>
           <View className="space-y-4">
                  
                  <View className="flex flex-row justify-between">
                      
                  <Text className="text-text-1 mt-auto" style={typography.titleMedium}>Popular Meals</Text>
                  <Text className="text-text-1 mt-auto underline" style={typography.titleSmall}>See All</Text>
                  </View>
                  {/*Popular Meal List */}
                  <View className="flex flex-row space-x-1">
                     
                      <View>
                      <MealCard/>
                      </View>
                     
                      <View>
                       <MealCard/>
                      </View>
                     
                     
                  </View>
                  
              </View>
      </ScrollView>
      <Tabs.Screen
              options={{
                  headerLeft: props => (<ButtonComponent onpress={()=>{router.back()}} icon={"arrow_left"} bg="light-bg" />),
          headerTitle: () => (<Text className=" text-text-1 text-center ml-7" style={typography.titleLarge} >Catering Menu</Text>),
                  headerRightContainerStyle: {display: "none"}
              }}
              
          />
    </View>
  )
}

export default Catering