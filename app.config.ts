import { ExpoConfig } from "expo/config";

const appConfig: ExpoConfig = {
  name: "Confraria",
  slug: "confraria",
  version: "0.0.1",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
    },
  },
};

export default appConfig;
