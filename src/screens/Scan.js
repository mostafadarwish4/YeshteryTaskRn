import { StyleSheet,  View,Image, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  cancelAnimation,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather'

const Scan = ({navigation}) => {
  const [start,setStart]=useState(false)
  const top = useSharedValue(20);
  top.value=start?withRepeat(withSpring(220,{restSpeedThreshold:10,stiffness:40}),-1,true):20

  const topStyle = useAnimatedStyle(() => {
    return {
      top:top.value
    }
  });
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={[styles.liner,styles.TL]}></View>
        <View style={[styles.liner,styles.TR]}></View>
        <View style={[styles.liner,styles.BL]}></View>
        <View style={[styles.liner,styles.BR]}></View>
        
        <Animated.View  style={[styles.line,topStyle]}/>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}
        style={styles.imgView}>
          <Image style={styles.image}  source={require('../api/0d04552f-6772-482c-ae0e-19b0ccfc2f1e.jpg')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.icon} onPress={()=>{
        setStart(s=>!s)
        cancelAnimation(top)
        }}>
        <Feather name='zap' size={50} color='white' />
      </TouchableOpacity>
    </View>
  )
}

export default Scan

const styles = StyleSheet.create({
  root:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'grey'
  },
  container:{
    height:250,width:200,
    justifyContent:'center',alignItems:'center',
  },
  line:{
    position:'absolute',
    top:20,
    left:-5,
    bottom:0,
    right:0,
    zIndex:99,
    height:5,
    width:210,
    borderRadius:10,
    backgroundColor:'blue'//"#8000FF"//"#C8CDD1"
  },
  liner:{
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    zIndex:99,
    height:60,
    width:60,
    borderColor:"blue"
  },
  image:{
    height:200,
    width:200,
  },
  imgView:{
    height:220,
    width:220,
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    // backgroundColor:'green'
  },
  icon:{
    position:'absolute',
    top:'80%',
    left:'40%',
    right:0,
    bottom:0,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#C8CDD1',
    width:80,
    height:80,
    borderRadius:80
  },
  TL:{borderTopWidth:2,borderTopLeftRadius:20,borderLeftWidth:2,left:-40},
  TR:{borderTopWidth:2,borderTopRightRadius:20,borderRightWidth:2,left:180},
  BL:{borderBottomWidth:2,borderBottomLeftRadius:20,borderLeftWidth:2,top:190,left:-40},
  BR:{borderBottomWidth:2,borderBottomRightRadius:20,borderRightWidth:2,left:180,top:190},

})