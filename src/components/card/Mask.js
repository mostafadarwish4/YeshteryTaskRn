import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const Mask = ({name,size,colors}) => {

  return (
   <MaskedView
                    style={{ minHeight: 40,minWidth:size }}
                    maskElement={
                    <View
                        style={{
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}>
                        {name==='file-invoice-dollar'?<FontAwesome5
                        name={name}//qrcode
                        size={size}
                        color="white"
                        // style={{height:60}}
                        />:<MaterialCommunityIcons
                        name={name}//qrcode
                        size={size}
                        color="white"
                        
                        />}
                    </View>
                    }>
                    <LinearGradient
                    colors={colors}
                    style={{ flex: 1 }}
                    start={{x:0,y:1}}
                    end={{x:1,y:0}}
                    />
                </MaskedView>
  )
}

export default Mask

