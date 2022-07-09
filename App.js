import Home from './scr/Home';
import Morphemics from './scr/contents/Morphemics';
import Phonetics from './scr/contents/Phonetics';
import Note from './scr/Note';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Copy from './scr/contents/Copy';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Morphemics" component={Morphemics} />
        <Stack.Screen name="Phonetics" component={Phonetics} />
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}