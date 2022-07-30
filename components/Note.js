import { StyleSheet, Text, View } from 'react-native';
import { list } from './contents/data/List'

export default function Note({ navigation, route }) {
  const name = route.params.name
  const id = route.params.id
  
  return (
    <View>
      <Text>{list[name][id].text}</Text>
    </View>
  );
}

