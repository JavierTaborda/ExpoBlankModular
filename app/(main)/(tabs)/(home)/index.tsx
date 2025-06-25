import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default function HomeScreen() {
  return (
    <>
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/example1">View details</Link>
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Progress.Bar 
        progress={0.6} // 60%
        width={200}
        unfilledColor='#e0e0e0'
        borderColor='#e0e0e0'
        animationConfig={{ bounciness: 0.5 }}
        animationType='spring'
        color="#4CAF50"
      />
    </View>
    </>
  );
}
;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
