import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import messaging from "@react-native-firebase/messaging";

export default function App() {
  async function requestUserPermission() {
    console.log("first");
    const authStatus = await messaging().requestPermission();
    console.log("authStatus", JSON.stringify(authStatus, null, 2));
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    console.log("enabled", JSON.stringify(enabled, null, 2));
    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  }

  useEffect(() => {
    // requestUserPermission();
    // if (requestUserPermission()) {
    // } else {
    //   console.log("Failed to get permission:", authStatus);
    // }

    console.log("Function called");
    requestUserPermission();
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
