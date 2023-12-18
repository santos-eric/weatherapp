import React from 'react'
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'

const App = () => {
  return (
    // SafeAreaView is used to avoid the notch in the phone
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.temp}>38F</Text>
          <Text styles={styles.feels}>Feels Like 30F </Text>
          <View style={styles.hiLowWrapper}>
            <Text styles={styles.hiLow}>High: 64F</Text>
            <Text styles={styles.hiLow}>Low: 38F</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <Text>It's Cloudy</Text>
          <Text>Wear your jacket</Text>
        </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temperature: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  hiLow: {
    color: 'black',
    fontSize: 20
  },
  hiLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})

export default App