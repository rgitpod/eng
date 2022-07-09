import Home from './scr/Home';
import Morphemics from './scr/contents/Morphemics';
import Phonetics from './scr/contents/Phonetics';
import Copy from './scr/contents/Copy';
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
        <Stack.Screen name="Copy" compotnent={Copy} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}