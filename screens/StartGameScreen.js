import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Card from '../components/Card'

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color="red" />
          </View>

          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color="green" />
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  button: {
    width: 100,
  },
})

export default StartGameScreen
