import { ExpoConfig } from "expo/config";

const appConfig: ExpoConfig = {
  name: "Confraria",
  slug: "confraria",
  scheme: "confraria",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
    },
  },
  plugins: ["expo-router"],
};

export default appConfig;
