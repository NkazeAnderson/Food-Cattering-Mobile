import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const Profile = () => {
  return (
    <View>
          <Text>Profile</Text>
          <Tabs.Screen
              options={{
              href: null,
          }}
          />
    </View>
  )
}

export default Profile