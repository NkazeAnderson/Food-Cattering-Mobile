import React, { useState } from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import loginBg from  "./assets/loginBG.png"
import greenLogo from  "./assets/Logogreen1.png"
import ButtonComponent from './components/ButtonComponent'
import typography from './typography'
import Input from './components/Input'
import GroupIcons from './components/GroupIcons'
import { Link, router } from 'expo-router'

function Login() {
    const [ email, setEmail ] = useState(null)
    const [password, setPassword] = useState(null)
    const [submiting, setSubmiting] = useState(false)
    
    const windowHeight = Dimensions.get('window').height;
    const bg = windowHeight * 0.25
    const main = windowHeight * 0.75
    const style = StyleSheet.create({
    bg: {
        height: bg
        },
        main: {
        height: main
    }
        
    })
    const userData = {
        email: "wale@gmail.com",
        password: "12345678"
    }

    function submit() {
        setSubmiting(true)
        setEmail(null)
        setPassword(null)
        if (email === userData.email && password === userData.password) {
            setSubmiting(false)
            router.push("/main/")
        }
        else {
            setTimeout(() => {
                 router.push("/main/")
                setSubmiting(false)
            }, 2000)
        }
    }
    return (
      <View className="flex flex-1 bg-light" >
            
      <ImageBackground style={style.bg} source={loginBg}>
            <SafeAreaView className="h-screen" >

                <View  className="py-4 mx-auto">
                    <View className=" bg-light rounded-3xl p-4">
                        <Image className=" bg-light rounded-3xl" source={greenLogo} />
                    </View>
                </View>


                <View className="flex flex-auto h-full">
                    <View className=" rounded-t-3xl bg-light h-max" >
                            <View className="p-2">
                                <View className="w-[72] h-[5] bg-[#DEDEDE] mx-auto"></View>
                            </View>
                        <View className="space-y-6 px-4">
                            <Text className="text-text-1" style={typography.hLarge}>Login</Text>
                            {/* Form */}
                            <View className="space-y-4">
                                
                                    <View>

                                        <Input lable={"Email Address"} placeholder={"Type your email"} value={ email } onchange = {setEmail} />
                                    </View>
                                <View>    
                                        <Input lable={"Password"} placeholder={"Type your password"} value={password} onchange={ setPassword} />
                                </View>
                                
                                <View>
                                <ButtonComponent textString={"Login"} onpress={submit} loading={submiting} />
                                </View>
                                
                            </View>
                            {/* Social section */}
                            <View>
                                <Text className="text-text-1 text-center" style={typography.labelLarge}>Or, login with</Text>
                            </View>
                                {/* Social icons */}
                                <View>

                                    <GroupIcons social={ true} />
                                </View>

                            
                        </View>
                       
                    </View>
                  <View className="mt-auto ">
                            <Text className="text-center text-text-1" style={typography.bodySmall}>
                            Haven’t account? 
                                <Text className="text-primary">
                                    <Link href={"/SignUp"}>
                                      {" Register now"}
                                    </Link>
                             
                            </Text>
                            </Text>
                            </View>
                    
                   
                </View>
             
            </SafeAreaView>
            
      </ImageBackground>
      </View>
     
  )
}

export default Login