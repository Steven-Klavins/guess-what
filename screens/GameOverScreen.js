import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import TitleText from '../constants/TitleText'
import BodyText from '../constants/BodyText'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/images/robodog.png')}
      />
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="New Game" onPress={props.onRestart}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '80%',
    height: 300,
  },
})

export default GameOverScreen
