import Home from './components/Home';
import Morphemics from './components/contents/Morphemics';
import Phonetics from './components/contents/Phonetics';
import Spelling from './components/contents/Spelling';
import Note from './components/Note';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Morphemics" component={Morphemics} />
        <Stack.Screen name="Phonetics" component={Phonetics} />
        <Stack.Screen name="Spelling" component={Spelling} />
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}