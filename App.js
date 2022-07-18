import React, { useState } from "react";
import { View, Switch, StyleSheet, SafeAreaView, Text } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch1 = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch4 = () => setIsEnabled(previousState => !previousState);


  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.controles}>Controles</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.menu}>
      <Text style={styles.acionamentos}>Luzes</Text>
      <Switch
        style={styles.botao}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isEnabled}/>
      <Text style={styles.acionamentos}>Porta</Text>
      <Switch
        style={styles.botao}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled}/>
      <Text style={styles.acionamentos}>Ar-condicionado</Text>
      <Switch
        style={styles.botao}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch3}
        value={isEnabled}/>
      <Text style={styles.acionamentos}>Cafeteira</Text>
      <Switch
        style={styles.botao}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch4}
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