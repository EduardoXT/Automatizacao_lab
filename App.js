import React, { useState } from "react";
import { View, Switch, StyleSheet, SafeAreaView, Text } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.controles}>Controles</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.menu}>
      <Text style={styles.acionamentos}>Luz</Text>
      <Switch
        style={styles.botao}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}/>
      <Text style={styles.acionamentos}>Porta</Text>
      <Switch
        style={styles.botao}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}/>
      <Text style={styles.acionamentos}>Arcondicionado</Text>
      <Switch
        style={styles.botao}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}/>
      <Text style={styles.acionamentos}>Café</Text>
      <Switch
        style={styles.botao}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}/>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  controles: {
    paddingTop: 100,
    fontSize: 50,
    fontWeight: "bold",
  },
  acionamentos: {
    paddingTop: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
  } 
});

export default App;