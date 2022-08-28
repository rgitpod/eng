import { Button } from "react-native-elements";
import { View } from "react-native";

export default function MenuButton({ navigation, title, onPress, navTo }) {
    console.log(navTo.toString())
    return (
        <View>
            <Button title={title} onPress={() => navigation.navigate(navTo)} />
            <Button title='?'/>
        </View>
    )
}