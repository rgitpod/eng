import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { topics } from '../data/PhonList';


export default function Phonetics({ navigation }) {
  return (
    <View>
      {
        topics.map((item, i) => (
          <TouchableOpacity onPress={() => { console.log('pressed') }} key={i}>
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