import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function AppHeader() {
    return (
        <View style={styles.header}>
            <Text>sdfd</Text>
            <Button title={'sd'} />
            <Button title={'sdf'} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
    }
})