import React, { useEffect, useState } from 'react'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../store/actions';
import Products from '../screens/Products';
import Product from '../screens/Product';
import Scan from '../screens/Scan';
import ProductsHeader from '../components/ProductsHeader';
import { ActivityIndicator,StyleSheet,View } from 'react-native';
// import styles from '../components/card/styles';
const Main = () => {
  const products=useSelector(state=>state.products)
  const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'#fff'
  },}
    const Stack=createNativeStackNavigator()
    const dispatch=useDispatch()
      useEffect(()=>{
        dispatch(getProducts())
      },[])
  return (
    !products.length?<View style={styles.wait}>
        <ActivityIndicator  color={'#fff'} size={100}  />
      </View>:
    <NavigationContainer theme={myTheme}>
        <Stack.Navigator>
            <Stack.Screen name='Scan Products' component={Products} 
            options={{ headerStyle:{backgroundColor:'transparent'},headerTintColor:'white', }}
        />
            <Stack.Screen name='Product' component={Product}  options={{headerShown:false}}/>
            <Stack.Screen name='Scan' component={Scan} options={{headerTransparent:true,title:'scan code'}} />
               
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main

const styles=StyleSheet.create({
  wait:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})