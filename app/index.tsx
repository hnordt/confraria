import React, { useEffect, useRef, useState } from "react"
import {
  View,
  Button,
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Image } from "expo-image"
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
import { BlurView } from "expo-blur"
import { LinearGradient } from "expo-linear-gradient"

const videos = [
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661373294056-8ff95e69c18e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Full Body",
    category: 1,
    number: 10,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Treino Funcional",
    category: 1,
    number: 11,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Treino de Hipertrofia",
    category: 1,
    number: 8,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Treino Express",
    category: 2,
    number: 4,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Power Burn",
    category: 2,
    number: 7,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1620213391117-0d169a917221?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Desafio de Força",
    category: 2,
    number: 8,
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661443931307-2f75249a530e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Desvendando a si mesmo",
    category: 3,
    number: 8,
  },
  {
    imageUrl:
      "https://images.unsplash.com/reserve/YEc7WB6ASDydBTw6GDlF_antalya-beach-lulu.jpg?q=80&w=3101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Meditação",
    category: 3,
    number: 8,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1620110488106-dad904f50930?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Emoções",
    category: 3,
    number: 8,
  },
]

const headings = [32, 24]
const spacing = 24

function Heading(props: { children: React.ReactNode }) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingBottom: 12,
      }}
    >
      <Text
        style={{
          fontFamily: "Inter_600SemiBold",
          fontSize: headings[1],
          lineHeight: 32,
          color: "#111827",
        }}
      >
        {props.children}
      </Text>
    </View>
  )
}

function Videos(props: { videos: typeof videos }) {
  return (
    <ScrollView
      snapToInterval={152 + 12}
      decelerationRate="fast"
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "row",
        gap: 12,
        paddingHorizontal: 20,
      }}
    >
      {props.videos.map((video) => (
        <View key={video.title} style={{ width: 152 }}>
          <Image
            style={{
              borderRadius: 8,
              height: 152,
            }}
            source={video.imageUrl}
            contentFit="cover"
          />
          <View
            style={{
              marginTop: 8,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter_500Medium",
                fontSize: 14,
                lineHeight: 20,
                color: "#111827",
              }}
              numberOfLines={1}
            >
              {video.title}
            </Text>
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                color: "#64748b",
                fontSize: 14,
                lineHeight: 20,
              }}
            >
              {video.number}min
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default function Playground() {
  const insets = useSafeAreaInsets()

  const [loaded] = useFonts({
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

  if (!loaded) {
    return null
  }

  return (
    <View
      style={
        {
          // paddingTop: insets.top,
          // paddingBottom: 32,
          // paddingHorizontal: 24,
        }
      }
    >
      <View
        style={{
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            // marginLeft: 20,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            paddingTop: insets.top,
            // paddingBottom: 12,
            paddingHorizontal: 20,
            // borderBottomWidth: 1,
            // borderBottomColor: "#e5e7eb",
            // backgroundColor: "#f3f4f6",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#f3f4f6",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
            }}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={26}
              color="#111827"
              style={
                {
                  // borderColor: "red",
                  // borderWidth: 1,
                  // marginRight: -0.5,
                  // marginBottom: -0.5,
                }
              }
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              // display: "none",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#f3f4f6",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
              }}
            >
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color="#111827"
                style={{
                  // borderColor: "red",
                  // borderWidth: 4,
                  // marginRight: -0.5,
                  marginTop: 0.5,
                  marginLeft: 1,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            height: 6,
            backgroundColor: "white",
            marginBottom: spacing,
          }}
        />
        {/* <Image
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          source="https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          contentFit="cover"
        /> */}
        {/* <BlurView
          intensity={100}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        /> */}
        <View
          style={{
            // paddingBottom: 32,
            // alignItems: "center",
            paddingBottom: 0,
            marginHorizontal: 20,
            // borderWidth: 1,
            // borderColor: "red",
          }}
        >
          {/* <View
            style={{
              shadowOpacity: 0.2,
              shadowColor: "black",
              shadowRadius: 30,
              shadowOffset: {
                width: 0,
                height: 32,
              },
              marginBottom: 16,
            }}
          >
            <Image
              source="https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              contentFit="cover"
              style={{
                width: 200,
                height: 200,
                borderRadius: 8,
              }}
            />
          </View> */}
          <Text
            style={{
              fontFamily: "Inter_700Bold",
              fontSize: headings[0],
              lineHeight: 36,
              color: "#111827",
              // color: "rgba(255, 255, 255, 0.85)",
            }}
          >
            Treinos na academia
          </Text>
          {/* <Text
            style={{
              fontFamily: "Inter_500Medium",
              color: "#6b7280",
              fontSize: 14,
              lineHeight: 20,
              // color: "rgba(255, 255, 255, 0.65)",
            }}
          >
            21 vídeos &middot; 3h36min
          </Text> */}
        </View>
        {/* <LinearGradient
          colors={["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.5)"]}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        /> */}
        {/* <View
          style={{
            position: "absolute",
            top: insets.top,
            left: 24,
            width: 32,
            height: 32,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 16,
          }}
        >
          <Ionicons
            name="chevron-back"
            size={24}
            color="rgba(255, 255, 255, 0.9)"
            style={{
              marginLeft: -2,
            }}
          />
        </View> */}
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: spacing,
          gap: spacing,
          backgroundColor: "white",
        }}
      >
        <View>
          <Heading>Segunda-feira</Heading>
          <Videos videos={videos.filter((video) => video.category === 2)} />
        </View>
        <View>
          <Heading>Terça-feira</Heading>
          <Videos videos={videos.filter((video) => video.category === 1)} />
        </View>
        <View>
          <Heading>Quarta-feira</Heading>
          <Videos videos={videos.filter((video) => video.category === 3)} />
        </View>
      </ScrollView>
    </View>
  )
}
