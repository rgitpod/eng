import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  return (
    <View>
      <Button
        title="Solid Button"
      />
      <Button
        title="Outline button"
        type="outline"
      />
    </View>
  );
}


