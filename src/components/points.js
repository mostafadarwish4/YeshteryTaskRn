import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
let {width,height}=Dimensions.get('window')

const Points = ({back}) => {
  return (
    <TouchableOpacity onPress={back} style={styles.root1}>
      <AntDesign name='star' size={40} color='grey' style={[styles.icon,styles.TR]} />
      <AntDesign name='staro' size={40} color='grey' style={[styles.icon,styles.TL]} />
      <AntDesign name='staro' size={40} color='grey' style={[styles.icon,styles.BR]} />
      <AntDesign name='star' size={40} color='grey' style={[styles.icon,styles.BL]} />
      <AntDesign name='star' size={40} color='grey' style={[styles.icon,styles.B]} />
      <AntDesign name='staro' size={40} color='grey' style={[styles.icon,styles.T]} />
      <LinearGradient  colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
        style={[styles.root]}>
          {/* <View style={styles.container}> */}
              <Text style={{color:'#fff',fontWeight:'400',fontSize:40}}>100</Text>
              <Text style={{color:'#fff',fontWeight:'400',fontSize:18}}>points</Text>
          {/* </View> */}
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Points

const styles = StyleSheet.create({
  root1:{
      position:'absolute',
      zIndex:99,
      height,
      width,
      alignItems:'center',
      justifyContent:'center',
      flex:1,
      backgroundColor:'rgba(0,0,0,0.4)',

      // opacity:.5
  },
    root:{
        height:200,
        width:200,
        borderRadius:100,
        borderColor:"grey",
        borderWidth:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
    },
  icon:{
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    zIndex:99,

    borderColor:"blue"
  },
  TL:{left:40,top:'30%'},
  TR:{left:'80%',top:'35%'},
  BL:{top:'50%',left:40},
  BR:{left:'80%',top:'60%'},
  B:{top:'70%',left:'50%'},
  T:{left:'50%',top:'30%'},
})