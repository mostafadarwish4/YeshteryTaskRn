import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Mask from './card/Mask'
import Btn from './botton'
const Footer = ({name,txt1,txt2,title,callback}) => {
  return (
    <View style={styles.root}>
        <View style={styles.container}>
            <View style={styles.right}>
                <Mask size={40} name={name} colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']} />
                <View style={styles.mid} >
                    <Text style={[styles.txt]}>{txt1}</Text>
                    <Text numberOfLines={2} style={styles.txt2}>{txt2}</Text>
                </View>
            </View>
           
            <Btn txt={title} stiles={styles.btn}  callback={callback}/>
        </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    root:{
        flex:1,
        marginBottom:15,
    },
    container:{
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'space-between'
    },
    right:{
        flex:2,
        flexDirection:"row",
        alignItems:'center'
    },
    mid:{
        marginLeft:10,
        flex:.7
    },
    btn:{
        alignSelf:'flex-end',
        alignItems:'flex-end',
        width:10,
        flex:1
    },
    txt:{
        fontSize:18,
        color:'blue',
        fontWeight:'600'
    },
    txt2:{
        fontSize:15
    }
})