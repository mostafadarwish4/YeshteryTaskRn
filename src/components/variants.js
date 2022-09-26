import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Variants = ({colors=['red','green','blue'],sizes=['s','m','L','xl']}) => {
    const [color,setColor]=useState(colors[0])
    const [size,setSize]=useState(sizes[0])
  return (
    <View style={styles.root}>
      <View style={styles.colors}>
        <Text  style={styles.txt}>Colors</Text>
        <View style={styles.container}>
            {
                colors.map((i,index)=>(
                    color!==i?<Pressable key={i+"t"} onPress={()=>setColor(i)}
                    style={[styles.color,{backgroundColor:i.toLowerCase()}]}/>:
                    <LinearGradient key={i+'c'}
                         colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                        style={styles.colorGradient}
                        start={{x:0,y:1}}
                        end={{x:1,y:1}}
                    >
                        <View style={[styles.color,{backgroundColor:i.toLowerCase(),alignSelf:'center'}]} />
                    </LinearGradient>
                ))
            }
        </View>
      </View>
      <View style={styles.colors}>
        <Text style={styles.txt}>Size:</Text>
        <View style={styles.container}>
            {
                sizes.map((i,index)=>(
                    size!==i?<Pressable key={i+'c'} onPress={()=>setSize(i)}
                    style={[styles.size,{marginRight:5}]}>
                         <Text>{i}</Text>
                    </Pressable>:
                    <LinearGradient key={i+'c'}
                         colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                        style={styles.sizeGradient}
                        start={{x:0,y:1}}
                        end={{x:1,y:0}}
                    >
                        <View style={[styles.size,{borderWidth:0}]}>
                        <Text >{i}</Text>
                        </View>
                    </LinearGradient>
                ))
            }
        </View>
      </View>
    </View>
  )
}

export default Variants

const styles = StyleSheet.create({
    root:{
        marginVertical:15
    },
    container:{
        flexDirection:'row',
        width:'100%',
        // justifyContent:'space-between'
    },
    colors:{
        marginBottom:10
    },
    color:{
        width:32,
        height:32,
        borderRadius:32,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:3,
        borderColor:'#fff',
        alignSelf:'center',
    },
    colorGradient:{
        width:35,
        height:35,
        borderRadius:35,
        alignItems:'center',
        justifyContent:'center',
        marginRight:5,
    },
    size:{
        width:65,
        height:45,
        borderWidth:1,
        borderColor:'#B9BBBE',
        borderRadius:20,
        
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        alignSelf:'center'
    },
        
    sizeGradient:{
        width:67,
        height:47,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        margin:10
    },
    txt:{
        fontSize:18,
        color:'blue',
        fontWeight:'500',
    }

})