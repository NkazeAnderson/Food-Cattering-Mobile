import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link, Tabs} from 'expo-router'
import ButtonComponent from '../components/ButtonComponent'
import Input from '../components/Input'
import typography from '../typography'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import SimpleMealList from '../components/SimpleMealList'
import MealCard from '../components/MealCard'
import DayComponent from '../components/DayComponent'
import Greetings from '../components/Greetings'
const Home = () => {
    
    const days = [
        { name: "Mon", day: "23" },
        { name: "Tue", day: "24" },
        { name: "Wed", day: "25" },
        { name: "Thu", day: "26", active: true },
        { name: "Fri", day: "27" },
        { name: "Sat", day: "28" },
        { name: "Sun", day: "29" },
    ]
    const todayMeals = [
        { name: "Snacks", img: "food" },
        { name: "Breakfast", img: "food1" },
        { name: "Lunch", img: "food2" },
        { name: "Dinner", img: "food3", active: true },
    ]
      const goToCatering = () => {
        console.log("Pressed")
    }
  return (
      <View className="flex flex-1 px-4 bg-light">
          
          <ScrollView className="space-y-6 pb-28" showsVerticalScrollIndicator={false}>
            {/* Greetings and welcome text */}
          <View >
               <Greetings time={"Afternoon"} userName={"Rehan!"} secondarText={"Choose the right meal for you"}/>
              </View> 
              {/* Meal search */}
              <View className=" flex justify-between flex-row space-x-2">
                  <View className="flex-grow">    
                  <Input leftIcon={"search"} placeholder="Search lunch, dishes" />
                  </View>
                  <ButtonComponent stroke='white' icon={"filter"} />
              </View>
              {/* Serving calender */}
              <View className="space-y-4">
                  
                  <View className="flex flex-row justify-between">
                      
                  <Text className="text-text-1 mt-auto" style={typography.titleMedium}>Serving this Month</Text>
                  <Text className="text-primary mt-auto" style={typography.labelMedium}>{"23-29 Jan (7 Days)"}</Text>
                  </View>
                  {/* Calender */}
                 
                   <FlatList
                          data={days}
                      renderItem={({item}) => {return (<DayComponent date={item} />)}}
                      keyExtractor={item => (item.day)}
                      ItemSeparatorComponent={()=>(<View className="w-1"/>)}
                      horizontal
                      />
              </View>

              {/* Today meals */}
              <View className="space-y-4">
                  
                  <View className="flex flex-row justify-between">
                      
                  <Text className="text-text-1 mt-auto" style={typography.titleMedium}>Today's Meal</Text>
                  </View>
                  {/* Meal List */}
                  
                  <FlatList
                          data={todayMeals}
                      renderItem={({item}) => {return (<SimpleMealList nameOf={item.name} img={item.img} active={item.active}/>)}}
                      keyExtractor={item => (item.name)}
                      ItemSeparatorComponent={()=>(<View className="w-1"/>)}
                      horizontal
                      />
              </View>

              {/* Popular meals */}
              <View className="space-y-4">
                  
                  <View className="flex flex-row justify-between">
                      
                  <Text className="text-text-1 mt-auto" style={typography.titleMedium}>Popular Meals</Text>
                      <Link href={"/main/Catering"} asChild>
                      <Text className="text-text-1 mt-auto underline" style={typography.titleSmall}>
                          See All
                      </Text>
                      </Link>
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
              <View className="h-[140] relative">
                 
              </View>
          </ScrollView>
    
         
             
          <Tabs.Screen
              options={{
                  headerLeft: props => (<ButtonComponent icon={"dashboard"} bg="light-bg" />),
                  headerTitle: () => (<Input bg='light' placeholder={"Bamenda, Cameroon"} leftIcon={"location"} rightIcon={"down-chevron"} />),
                  headerRight: props => <ButtonComponent icon={"bell"} bg="light-bg" />,
                 headerTitleContainerStyle: {padding: 0, margin: 0, width: "100%", display: "flex", justifyContent: "center"}
              }}
              
          />
    </View>
  )
}

export default Home