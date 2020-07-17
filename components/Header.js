import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colours from '../constants/colours'
import TitleText from '../constants/TitleText'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colours.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: 'white',
  },
})

export default Header
