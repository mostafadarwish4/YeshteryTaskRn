import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Btn = ({txt,callback,stles}) => {
  return (
    <LinearGradient
                    colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}//{['#00FFFF', '#4C86C1', '#5E97D1']}
                    style={[styles.linear,{...stles}]}
                    start={{x:0,y:1}}
                    end={{x:1,y:0}}
                    >
                        <TouchableOpacity onPress={callback} style={styles.btn} >
                            <Text style={styles.txt}>{txt}</Text>
                        </TouchableOpacity>
                    </LinearGradient>
  )
}

export default Btn

const styles = StyleSheet.create({
  linear:{
      flex: 1,
      // width:10,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:5
  },
  btn:{
    justifyContent:'center',
    alignItems:'center',
  },
  txt:{
    color:'#fff',
    fontSize:18
  }
})