/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-reanimated'
import React, { useEffect } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Provider, useDispatch } from 'react-redux';
import Main from './src/navigation/Main';
import { getProducts } from './src/store/actions';
import store from './src/store/store';


const App=()=>{
  
  
  return(
    <LinearGradient colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                    style={{ flex: 1 }}
                    start={{x:0,y:.5}}
                    end={{x:1,y:0.5}}>
      <Provider store={store}>
        <Main/>
      </Provider>
    </LinearGradient>
  )
}

export default App;
