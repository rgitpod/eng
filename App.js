import Home from './components/Home';
import Morphemics from './components/contents/Morphemics';
import Phonetics from './components/contents/Phonetics';
import Orthography from './components/contents/Orthography';
import AppHeader from './components/AppHeader';
import Note from './components/Note';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ header: () => <AppHeader /> }} />
        <Stack.Screen name="Morphemics" component={Morphemics} />
        <Stack.Screen name="Phonetics" component={Phonetics} />
        <Stack.Screen name="Orthography" component={Orthography} />
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const theme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
  elements: {
    Button: {
      titleStyle: {
        color: 'skyblue'
      },
      buttonStyle: {
        backgroundColor: 'rgb(199, 199, 204)'
      }
    }
  }
}