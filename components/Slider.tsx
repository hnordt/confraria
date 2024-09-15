import React from "react"
import { View, StyleSheet } from "react-native"
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated"

const SLIDER_WIDTH = 300

const Slider = () => {
  const offset = useSharedValue(0)
  const MAX_VALUE = SLIDER_WIDTH - 50

  const tap = Gesture.Tap().onBegin((event) => {
    const x = event.x - 25
    if (x < 0) {
      offset.value = 0
    } else if (x > MAX_VALUE) {
      offset.value = MAX_VALUE
    } else {
      offset.value = x
    }
  })

  const pan = Gesture.Pan()
    // .cancelsTouchesInView(false)
    .onChange((event) => {
      offset.value =
        Math.abs(offset.value) <= MAX_VALUE
          ? offset.value + event.changeX <= 0
            ? 0
            : offset.value + event.changeX >= MAX_VALUE
            ? MAX_VALUE
            : offset.value + event.changeX
          : offset.value
    })

  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }))

  return (
    <>
      <GestureHandlerRootView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GestureDetector gesture={tap}>
          <View style={styles.sliderTrack}>
            <GestureDetector gesture={pan}>
              <Animated.View style={[styles.sliderHandle, sliderStyle]} />
            </GestureDetector>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
    </>
  )
}

const styles = StyleSheet.create({
  sliderTrack: {
    width: SLIDER_WIDTH,
    height: 50,
    backgroundColor: "#82cab2",
    borderRadius: 25,
    justifyContent: "center",
    padding: 5,
  },
  sliderHandle: {
    width: 40,
    height: 40,
    backgroundColor: "#f8f9ff",
    borderRadius: 20,
    position: "absolute",
    left: 5,
  },
})

export default Slider
