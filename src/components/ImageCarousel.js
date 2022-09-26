import React, { useCallback, useState } from 'react';
import { FlatList,Image,StyleSheet,Text,View,Dimensions } from 'react-native';
import { imgBase } from '../api/server';
import {  imgs } from './card/Card';
const windowWidth=Dimensions.get('screen').width
const ImageCarousel=({images})=>{
    const [active,setActive]=useState(0)
    const viewConfig=useCallback(({viewableItems})=>{
        if(viewableItems.length > 0){
            setActive(viewableItems[0].index);
        }
             },[])
    return(
        <View  >
            <FlatList 
            keyExtractor={(item,i)=>item+i
              }
             data={images.length?images:imgs}
             renderItem={({item})=>{
                const uri=imgBase+item.url
                return(
                    images.length>0?
                    <Image  source={{uri}} style={[styles.image]}/>:
                    <Image  source={{uri:item}} style={[styles.image]}/>
                )
             }            
                    }
             horizontal
             showsHorizontalScrollIndicator={false}
             snapToAlignment={'center'}
             decelerationRate={'fast'}
             viewabilityConfig={{
                 viewAreaCoveragePercentThreshold:90,
             }
             }
             onViewableItemsChanged={viewConfig}
             pagingEnabled
             />

            <View style={styles.dots}>
                {
                images.length?images.map((img,i)=><View key={i} style={active===i?styles.activeDot:styles.dot}/>):
                imgs.map((img,i)=><View key={i} style={active===i?styles.activeDot:styles.dot}/>)   
                }
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    root:{
        
    },
    image:{
        resizeMode:'contain' ,
        width:windowWidth-40,
        minHeight:300,
        marginBottom:10,
        marginRight:10,
        borderWidth:2,
        borderColor:"#ebeef0",
        borderRadius:10,
    },
    dots:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red',
        
    },
    dot:{
        height:8,
        width:8,
        borderRadius:8,
        borderColor:"red",
        backgroundColor:'#c2bdbc',
        marginHorizontal:5
    },
    activeDot:{
        backgroundColor:'#9e9e9e',
        width:8,
        height:8,
        borderRadius:8,
        marginHorizontal:5
    }
})

export default ImageCarousel;