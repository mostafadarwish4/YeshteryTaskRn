import { StyleSheet, Text, View,Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import RNQRGenerator from 'rn-qr-generator';
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient';

RNQRGenerator.detect({
  // uri: , // local path of the image. Can be skipped if base64 is passed.
  // base64: require('../api/0d04552f-6772-482c-ae0e-19b0ccfc2f1e.jpg'), // If uri is passed this option will be skipped.
})
  .then(response => {
    const { values } = response; // Array of detected QR code values. Empty if nothing found.
    console.log('values of qr',values)
  })
  .catch(error => console.log('Cannot detect QR code in image', error));
const Scan = ({navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={[styles.liner,styles.TL]}></View>
        <View style={[styles.liner,styles.TR]}></View>
        <View style={[styles.liner,styles.BL]}></View>
        <View style={[styles.liner,styles.BR]}></View>
        
        <View style={styles.line}/>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}
        style={styles.imgView}>
          <Image style={styles.image}  source={require('../api/0d04552f-6772-482c-ae0e-19b0ccfc2f1e.jpg')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.icon}>
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
    top:120,
    left:-5,
    bottom:0,
    right:0,
    zIndex:99,
    height:5,
    width:210,
    borderRadius:10,
    backgroundColor:"#8000FF"//"#C8CDD1"
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