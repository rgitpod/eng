import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { phonetics } from './data/PhonList';
import { Zvuki } from './data/Phonetics/Zvuki';

export default function Phonetics({ navigation }) {
  return (
    <View>
      {
        phonetics.map((item, i) => (
          <TouchableOpacity onPress={() => { navigation.navigate("Note", { name: 'Phone', id: i }) }} key={i}>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))
      }
    </View>
  );
}