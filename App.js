import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, Button, Image, Heading, Title } from "@shoutem/ui";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        styleName="medium-avatar"
        source={{
          uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-3.png",
        }}
      />
      <Heading style={styles.Heading}>Welcome To The App</Heading>
      <Title>Please Login...</Title>
      <TextInput
        style={styles.input}
        defaultValue={"Username or email"}
        onChangeText={() => {}}
      />
      <TextInput
        style={styles.input}
        placeholder={"Password"}
        secureTextEntry
      />
      <Button styleName="secondary" style={styles.button}>
        <Text>Login</Text>
      </Button>
      <StatusBar style="auto" />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 10,
            flex: 1,
            height: 1,
            marginHorizontal: 30,
            marginVertical: 40,
            backgroundColor: "black",
          }}
        />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>OR</Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            marginHorizontal: 30,
            marginVertical: 40,
            backgroundColor: "black",
          }}
        />
      </View>

      <Button styleName="secondary" style={styles.button}>
        <Text>Create An Account</Text>
      </Button>
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
    marginTop: 25,
    borderWidth: 1,
    padding: 10,
    borderColor: "red",
    width: 350,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "black",
    color: "white",
  },
  button: {
    marginTop: 20,
    width: 300,
    borderRadius: 15,
  },
  Heading: {
    marginTop: 35,
  },
});
