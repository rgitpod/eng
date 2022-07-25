import { StyleSheet, Text, View } from 'react-native';

export default function Spelling() {
  return (
    <View style={styles.container}>
      <Text>Spelling</Text>
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