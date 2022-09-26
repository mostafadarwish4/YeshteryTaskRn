import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Mask from './Mask'
import { useNavigation } from '@react-navigation/native';
import { imgBase } from '../../api/server';

export const imgs=['https://miro.medium.com/max/762/1*ex0NacXNgnVffkr8Hac6KA.jpeg',
'https://fashionsgirl.com/wp-content/uploads/2020/05/smiling-girl.png',
'https://images.unsplash.com/photo-1629374029669-aab2f060553b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'    ]
const Card = ({item,index}) => {
   const navigation=useNavigation()
   const uri=imgBase+item.image_url
  return (
   <TouchableOpacity style={styles.root} onPress={()=>{navigation.navigate('Product',{id:item.id})}}  >
            <Image style={styles.image}  source={{uri}} />
            <View style={styles.rightContainer}>
                <View style={styles.top}>
                    <Text numberOfLines={2} style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.maskRoot}>
                    <Mask colors={['#00FFFF', '#4C86C1', '#5E97D1']} size={35} name='qrcode-scan' />
                    <Text style={styles.num}>120</Text>
                    </View>
                    <View style={styles.maskRoot}>
                    <Mask colors={['#00FFFF', '#4C86C1', '#5E97D1']} size={35} name='file-invoice-dollar' />
                    <Text style={styles.num}>200</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
  )
}

export default Card
