import { StyleSheet, Text, View } from 'react-native';

export default function Copy() {
  return (
    <View style={styles.container}>
      <Text>Morfdf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});