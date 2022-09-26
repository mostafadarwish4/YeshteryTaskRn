import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

const ProductsHeader = () => {
  return (
   <LinearGradient colors={['#4C86C1', '#00FFFF','#5E97D1' ]}
                    style={{ flex: 1,height:100 }}
                    start={{x:0,y:.5}}
                    end={{x:1,y:0.5}}>
      <FontAwesome5Icon name='arrow-left' size={20} color='#fff'/>
      <Text style={{color:'#fff',marginLeft:5}}>Scan Products</Text>
    </LinearGradient> 
  )
}

export default ProductsHeader

const styles = StyleSheet.create({})