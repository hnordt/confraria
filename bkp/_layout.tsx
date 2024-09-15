import { Tabs } from "expo-router"
import { Link } from "expo-router"
import { Stack } from "expo-router/stack"
import { Pressable, ScrollView, Text } from "react-native"
import { View } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useEffect, useState } from "react"
import AppLoading from "expo-app-loading"
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter"
import * as SplashScreen from "expo-splash-screen"

const tabs = [
  {
    icon: "home",
    title: "Início",
    href: "/",
    active: true,
  },
  {
    icon: "aperture",
    title: "Comunidade",
    href: "/",
    active: false,
  },
  {
    icon: "person-circle",
    title: "Perfil",
    href: "/perfil",
    active: false,
  },
]

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  })

  const insets = useSafeAreaInsets()

  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <>
      {/* <View
        style={{
          paddingTop: insets.top + 20,
          paddingBottom: 12,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
          borderBottomColor: "#e5e7eb",
          borderBottomWidth: isScrolling ? 1 : 0,
        }}
      >
        <Text
          style={{
            fontFamily: "Inter_700Bold",
            fontSize: 30,
            lineHeight: 36,
            color: "#111827",
          }}
        >
          Início
        </Text>
      </View> */}
      <Tabs
        tabBar={() => null}
        screenOptions={{
          headerShown: false,
        }}
        sceneContainerStyle={{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Início",
          }}
        />
        <Tabs.Screen
          name="perfil"
          options={{
            title: "Perfil",
          }}
        />
      </Tabs>
      {/* <View
        style={{
          backgroundColor: "#fff",
          paddingBottom: insets.bottom,
          // paddingHorizontal: 20,
          borderTopColor: "#e5e7eb",
          borderTopWidth: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {tabs.map((tab) => (
          <Link key={tab.title} href={tab.href} asChild>
            <Pressable
              style={{
                paddingTop: 16,
                width: 76,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={tab.icon as any}
                size={32}
                color={tab.active ? "#111827" : "#6b7280"}
              />
            </Pressable>
          </Link>
        ))}
      </View> */}
    </>
  )
}
