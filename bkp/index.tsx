import { View, Text, ScrollView } from "react-native"
import { Image } from "expo-image"
const videos = [
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661949023358-b97985a80714?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Treinos em casa",
    category: 1,
    number: 6,
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Treinos na academia",
    category: 1,
    number: 12,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mobilidade",
    category: 1,
    number: 12,
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1678304224523-d25b4117558f?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dicas de limpeza",
    category: 2,
    number: 4,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1624377638671-904e9428f79c?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Recomendações de produtos",
    category: 2,
    number: 4,
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1668416065881-41ac5e406759?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Decoração e DIY",
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
          fontSize: 24,
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
              {video.number} vídeos
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default function MainPage() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 32,
      }}
    >
      <View style={{ marginTop: 12 }}>
        <Heading>Casa</Heading>
        <Videos videos={videos.filter((video) => video.category === 2)} />
      </View>
      <View style={{ marginTop: 24 }}>
        <Heading>Saúde</Heading>
        <Videos videos={videos.filter((video) => video.category === 1)} />
      </View>
      <View style={{ marginTop: 24 }}>
        <Heading>Autoconhecimento</Heading>
        <Videos videos={videos.filter((video) => video.category === 3)} />
      </View>
    </ScrollView>
  )
}
