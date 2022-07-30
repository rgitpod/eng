import { StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-elements';


export default function Home({ navigation }) {
  return (
    <View>
      <Button title="Морфология" onPress={() => navigation.navigate("Morphemics")} />
      <Button title="Фонетика" onPress={() => navigation.navigate("Phonetics")} />
      <Button title="Правописание" onPress={() => navigation.navigate("Spelling")} />
    </View>
  );
} 