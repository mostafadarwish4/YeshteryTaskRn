import { View, Text,StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../store/actions';
import ImageCarousel from '../components/ImageCarousel';
// import { images } from '../components/card/Card';
import Variants from '../components/variants';
import Footer from '../components/Footer';
import Points from '../components/points';
const Product = ({route,navigation}) => {
  const [get,setGet]=useState(false)
    const dispatch=useDispatch()
    const product=useSelector(state=>state.product)
    const {id}=route.params
    useEffect(()=>{
            dispatch(getProduct(id))
    },[])
    const callback=()=>{
      navigation.navigate('Scan')
      setGet(true)
    }
    const back=()=>{
      setGet(false)
      navigation.goBack()
    }
  return (
    product?
    <>
      {get&&<Points back={back}/>}
      <ScrollView style={styles.root}>
        <ImageCarousel images={product.images}/>
        <View style={styles.header}>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.prices}>
            <Text style={styles.price}>( {product.price} EGP )</Text>
            
          </View>
        </View>
        <Text  style={styles.desc} >{product.description}</Text>
        <Variants  />
        <Footer name='qrcode-scan'  txt1={'Scan'} txt2='& Get 100 points' title='Scan' callback={callback}/>
        <Footer name='file-invoice-dollar' txt1={'Buy & Submit'} txt2='The receipt for 120 points' title='Add to chart'/>
      </ScrollView>
      
    </>
    :<ActivityIndicator size={50} />
  )
}

export default Product

const styles=StyleSheet.create({
  root:{
    flex:1,
    margin:15,
  },
  header:{
    flexDirection:'row',

  },
  title:{
    fontSize:20,
    fontWeight:'500',
    flex:.5
  },
  prices:{
    flex:.5,
    justifyContent:'center',
    alignItems:'flex-end',
    marginRight:10
  },
  price:{
    color:'#5E97D1',
    fontSize:18
  },
  desc:{
    color:'gray',
    marginTop:15
  }

})