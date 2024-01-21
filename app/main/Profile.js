import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import ButtonComponent from '../components/ButtonComponent'
import typography from '../typography'
import face from  "../assets/images/avatar_face.png"
import { Icon } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'

const Profile = () => {
  const entries = [
    "Profile information",
    "Order History",
    "Location",
    "Payment Method",
    "Gift Voucher",
    "Refer a friend",
  ]
  return (
    <View className="flex flex-1 bg-light px-4 space-y-6">
          <View className ='p-6 bg-primary flex flex-row rounded-2xl justify-between'>
          <View className="space-y-2">
              <Text className="text-light" style={typography.hSmall}>Hi Rehan,</Text>
              <Text className="text-light" style={typography.bodyMedium}>rehanurraihan@gmail.com</Text>
        </View>
        <View className="bg-light rounded-full">
          <Image source={ face} />
        </View>
      </View>
      <View>
        <FlatList
          data={entries}
          renderItem={({item}) => (
            <View className="flex flex-row justify-between">
              <Text className="text-text-1 my-auto" style={typography.titleMedium}>{item }</Text>
        <View className="my-auto py-3">
          <Icon color='#323434' source={"chevron-right"} size={25}/>
        </View>
        </View>
          )}
        />
      <View className="flex flex-row justify-between">
        <Text className="text-text-1 my-auto" style={typography.titleMedium}>Push notification</Text>
        <View className="my-auto py-3">
          <Icon color='#323434' source={"chevron-right"} size={25}/>
        </View>
        </View>
        
      <View className="flex flex-row justify-between">
        <Text className="text-text-1 my-auto" style={typography.titleMedium}>Contact Us</Text>
        <View className="my-auto py-3">
          <Icon color='#323434' source={"chevron-right"} size={25}/>
        </View>
        </View>
        
      <View className="flex flex-row justify-between">
        <Text className="text-text-1 my-auto" style={typography.titleMedium}>Logout</Text>
        <View className="my-auto py-3">
          <Icon color='#323434' source={"chevron-right"} size={25}/>
        </View>
      </View>
     
        
      
    </View>
     


          <Tabs.Screen
              options={{
                  headerLeft: props => (<ButtonComponent onpress={()=>{router.back()}} icon={"arrow_left"} bg="light-bg" />),
          headerTitle: () => (<Text className=" text-text-1 text-center ml-7" style={typography.titleLarge} >Profile</Text>),
                  headerRightContainerStyle: {display: "none"}
              }}
          />
    </View>
  )
}

export default Profile