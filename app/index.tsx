import { View, Text, StyleSheet } from "react-native"

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Novos e recomendados</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 22,
  },
})
