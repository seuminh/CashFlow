import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';
import Header from '../components/Header'

import Home from '../screens/Wallet/Home';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> {
            return({
                headerTitle:()=><Header title="Wallet" navigation={navigation}></Header>
            })
        }
    },
}

const WalletStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#2B2D3E',
            elevation:0,
            shadowColor:'transparent'
        },
        headerTintColor:'#FF2E63',
    }
});

export default WalletStack;