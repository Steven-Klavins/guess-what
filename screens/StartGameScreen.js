import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import Card from '../components/Card'
import Colours from '../constants/colours'
import Input from '../components/input'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number must be greater than 0 and less than 100',
        [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }],
      )
      return
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue('')
    Keyboard.dismiss()
  }

  let conFirmedOutPut

  if (confirmed) {
    conFirmedOutPut = (
      <Card style={styles.summary}>
        <Text>You selected:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colours.redButton}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colours.greenButton}
              />
            </View>
          </View>
        </Card>
        {conFirmedOutPut}
      </View>
    </TouchableWithoutFeedback>
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

  input: {
    width: 50,
    textAlign: 'center',
  },

  summary: {
    marginTop: 20,
    alignItems: 'center',
  },
})

export default StartGameScreen
