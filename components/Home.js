import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from 'react-native-elements';
import { useTheme } from "@react-navigation/native";
import MenuButton from "./MenuButton";

export default function Home({ navigation }) {
  const { elements }  = useTheme()
  const theme = elements
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <MenuButton title="Фонетика" navTo="Phonetics" navigation={navigation} />
      <Button title="Морфология" onPress={() => navigation.navigate("Morphemics")} />      
      <Button title="Орфография" onPress={() => navigation.navigate("Spelling")} />
    </ThemeProvider>
  );
} 