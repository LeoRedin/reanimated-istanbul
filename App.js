/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const App: () => Node = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() => {
          offset.value = withSpring(Math.random());
        }}
        title="Move"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
});

export default App;
