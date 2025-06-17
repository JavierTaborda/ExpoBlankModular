import { StyleSheet, Text, View } from 'react-native';

export default function ExampleScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab 2 Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
