import { StyleSheet, Text, View } from 'react-native';

export default function Note({navigation ,route}) {
  return (
    <View>
      <Text>{route.params.te}</Text>
    </View>
  );
}

