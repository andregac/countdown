import {
  useFonts,
  Archivo_400Regular,
  Archivo_600SemiBold,
  Archivo_700Bold,
} from "@expo-google-fonts/archivo";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import React from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";
import { Load } from "./src/components/Load";
import theme from "./src/styles/theme";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Poppins_400Regular,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Load />}
    </ThemeProvider>
  );
}
