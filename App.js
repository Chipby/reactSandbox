import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text,TextInput, Title } from '@shoutem/ui';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the app...</Text>
      <TextInput
      style={styles.input}
  defaultValue={'Username or email'}
  onChangeText={()=>{}}
/>
<TextInput
style={styles.input}
  placeholder={'Password'}
  secureTextEntry
/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'red',
    width: 350,
  },
});
