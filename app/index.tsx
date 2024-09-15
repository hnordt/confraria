import React, { useEffect, useRef, useState } from "react"
import {
  View,
  Button,
  StyleSheet,
  Pressable,
  Text,
  TouchableWithoutFeedback,
} from "react-native"
import {
  Audio,
  InterruptionModeAndroid,
  InterruptionModeIOS,
  ResizeMode,
  Video,
} from "expo-av"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Ionicons from "@expo/vector-icons/Ionicons"
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
import { SplashScreen } from "expo-router"
import Slider from "../components/Slider"

const VideoPlayer = () => {
  const video = useRef(null)
  const [status, setStatus] = useState({})
  const [rate, setRate] = useState(1)

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

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  // console.log(status)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        paddingTop: insets.top,
        paddingBottom: insets.bottom + 24,
      }}
    >
      <Video
        source={{
          uri: "https://videos.pexels.com/video-files/4057322/4057322-uhd_1440_2732_25fps.mp4",
        }}
        useNativeControls={false}
        // shouldPlay
        resizeMode="cover"
        style={{
          flex: 1,
          // width: "100%",
          // borderRadius: 24,
        }}
      />
      <Ionicons
        name="close"
        size={32}
        color="#d1d5db"
        style={{
          // borderWidth: 1,
          // borderColor: "red",
          position: "absolute",
          top: insets.top + 24,
          right: 24,
        }}
      />
      <View
        style={{
          paddingVertical: 24,
          // paddingHorizontal: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          // borderWidth: 1,
          // borderColor: "red",
          // gap: 24,
          position: "absolute",
          bottom: insets.bottom + 24,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          // opacity: 0.7,
        }}
      >
        <View
          style={{
            height: 8,
            backgroundColor: "#374151",
            // borderRadius: 8,
            position: "absolute",
            top: -8,
            left: 0,
            right: 0,
          }}
        >
          <View
            style={{
              backgroundColor: "#2563eb",
              width: "30%",
              height: 8,
              // borderRadius: 8,
            }}
          >
            <View
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor: "#2563eb",
                position: "absolute",
                right: -8,
                top: -4,
              }}
            />
          </View>
        </View>
        <Ionicons
          name="pause"
          size={32}
          color="#d1d5db"
          style={
            {
              // borderWidth: 1,
              // borderColor: "red",
            }
          }
        />
        {/* <Text
          style={{
            fontFamily: "Inter_500Medium",
            fontSize: 16,
            lineHeight: 20,
            color: "#6b7280",
          }}
        >
          <Text style={{ color: "#d1d5db" }}>34:45</Text> / 56:23
        </Text> */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_500Medium",
              fontSize: 16,
              lineHeight: 20,
              color: "#d1d5db",
            }}
          >
            <Text style={{ color: "#d1d5db" }}>34:45</Text> / 56:23
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Inter_500Medium",
            fontSize: 16,
            lineHeight: 20,
            color: "#d1d5db",
          }}
        >
          1.0X
        </Text>
        {/* <View
          style={{
            // borderRadius: 32,
            // borderColor: "#d1d5db",
            // borderWidth: 1,
            // width: 36,
            // height: 36,
            // justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "#d1d5db",
            paddingVertical: 0,
            paddingHorizontal: 8,
            borderRadius: 32,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 12,
              lineHeight: 20,
              color: "#6b7280",
            }}
          >
            <Text style={{ color: "#000", letterSpacing: 1 }}>1.0X</Text>
          </Text>
        </View> */}
        {/* <Ionicons
          name="scan"
          size={32}
          color="#d1d5db"
          style={
            {
              // borderWidth: 1,
              // borderColor: "red",
            }
          }
        /> */}
      </View>
    </View>
  )

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        paddingTop: insets.top,
      }}
    >
      {/* <Video
        ref={video}
        source={{
          uri: "https://videos.pexels.com/video-files/4057322/4057322-uhd_1440_2732_25fps.mp4",
        }}
        rate={rate}
        useNativeControls={false}
        onPlaybackStatusUpdate={setStatus}
        // shouldPlay={status.isPlaying}
        resizeMode="cover"
        style={{
          flex: 1,
          borderRadius: 32,
        }}
      /> */}
      <View>
        <CustomSlider />
      </View>
      <View
        style={{
          paddingTop: 20,
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: insets.bottom,
          // gap: 16,
          // borderWidth: 2,
          // borderColor: "red",
          paddingHorizontal: 32,
        }}
      >
        <View />
        <Pressable
          style={{
            flex: 1,
            // borderWidth: 2,
            // borderColor: "red",
          }}
          onPress={() => {
            if (
              status.durationMillis === status.positionMillis &&
              !status.isLooping
            ) {
              video.current.playFromPositionAsync(0)
              return
            }

            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }}
        >
          <Ionicons
            name={
              status.durationMillis === status.positionMillis &&
              !status.isLooping
                ? "refresh"
                : status.isPlaying
                ? "pause"
                : "play"
            }
            size={32}
            color="#fff"
          />
        </Pressable>
        <View
          style={{
            flex: 1,
          }}
        />
        <Pressable
          style={{
            flex: 1,
            alignItems: "flex-end",
          }}
          onPress={() => {
            setRate((rate) => {
              switch (rate) {
                case 0.5: {
                  return 1
                }

                case 1: {
                  return 1.5
                }

                case 1.5: {
                  return 2
                }

                case 2: {
                  return 0.5
                }

                default: {
                  return 1
                }
              }
            })
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 14,
              lineHeight: 20,
              color: "#fff",
              opacity: 0.5,
            }}
          >
            Velocidade
          </Text>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 14,
              lineHeight: 20,
              color: "#fff",
            }}
          >
            {rate === 0.5
              ? "Lento"
              : rate === 1
              ? "Normal"
              : rate === 1.5
              ? "Rápido"
              : "Super Rápido"}{" "}
            {rate}x
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default VideoPlayer
