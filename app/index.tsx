import {View, Text, ImageBackground} from "react-native";
import React from "react";

import beachBg from "@/assets/meditation-images/beach.webp";

export default function App() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachBg}
        resizeMode="cover"
        className="flex-1"
      >
        <Text>App</Text>
      </ImageBackground>
    </View>
  );
}
