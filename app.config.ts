import { ExpoConfig } from "expo/config";

const appConfig: ExpoConfig = {
  // General
  name: "Confraria",

  // Linking
  scheme: "confraria",

  // Assets
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
  },

  // Expo Specific
  owner: "hnordt",
  slug: "confraria",

  // Android Specific
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
    },
  },

  // Plugins
  plugins: ["expo-router"],
};

export default appConfig;
