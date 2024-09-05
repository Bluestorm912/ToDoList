import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const SkipButton = ({navigation}) => {
  return (
    <View style={styles.but}>
     <TouchableOpacity onPress={() => navigation.navigate("WelcomeScreen")}>
        <Text style={styles.text}>
SKIP
        </Text>
     </TouchableOpacity>
    </View>
  )
}

export default SkipButton

const styles = StyleSheet.create({
    but: {
        position: 'absolute',
    top: 40, 
    left: 20,
    padding: 10,
    backgroundColor: 'transparent'
    },

    text: {
        fontSize: 16,
        color: 'rgba(247, 247, 247, 0.4)', 
        fontWeight: 'bold',
    }
})