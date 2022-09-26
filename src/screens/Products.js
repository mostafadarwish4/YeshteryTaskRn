import { StyleSheet, Text, ScrollView, View, SafeAreaView, FlatList, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/card/Card';
import LinearGradient from 'react-native-linear-gradient';

const Products = () => {
    const products=useSelector(state=>state.products);
  return (
      <LinearGradient colors={['#4C86C1', '#00FFFF','#5E97D1' ]}
                    style={{ flex: 1 }}
                    start={{x:0,y:.5}}
                    end={{x:1,y:.5}}>
        <View style={{borderTopRightRadius:50,borderTopLeftRadius:50,height:50,width:'100%',backgroundColor:'#fff'}}></View>
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <FlatList
                            style={{flex:1,minWidth:'100%',}}
                            // horizontal
                            data={products}
                            renderItem={({item,index})=><Card key={item.id} item={item} index={index} />}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            
                        />
        </View>
    </LinearGradient>
  )
}

export default Products