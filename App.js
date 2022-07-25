import Home from './scr/Home';
import Morphemics from './scr/contents/Morphemics';
import Phonetics from './scr/contents/Phonetics';
import Spelling from './scr/contents/Spelling';
import Text from './scr/Text';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from './scr/AppHeader';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: (props) => <AppHeader {...props} /> }} />
        <Stack.Screen name="Spelling" component={Spelling} />
        <Stack.Screen name="Morphemics" component={Morphemics} />
        <Stack.Screen name="Phonetics" component={Phonetics} />
        <Stack.Screen name="Text" component={Text} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}