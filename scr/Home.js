import { StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-elements';


export default function Home({ navigation }) {
  return (
    <View>
      <Button title="Go to Morf" onPress={() => navigation.navigate("Morphemics")} />
      <Button title="Go to Phon" onPress={() => navigation.navigate("Phonetics")} />
      <Button title="Go to Phon54" onPress={() => navigation.navigate("Copy")} />
    </View>
  );
} 