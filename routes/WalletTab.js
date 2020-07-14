import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import Income from '../screens/Wallet/Income';
import Expense from '../screens/Wallet/Expense';

const Width = Dimensions.get('window').width;
const tabBarWidth = Width/2 ; 

const Tabs = {
    Income: {
        screen: Income,
        navigationOptions: {
            title: "Income",
        }
    },
    Expense: {
        screen: Expense,
        navigationOptions: {
            title: "Expense"
        }
    }
}

const WalletTab = createMaterialTopTabNavigator(Tabs,{
    tabBarOptions: {
        labelStyle: {
            fontSize: 16,
            letterSpacing: 1,
            fontWeight:"700"
        },
        style: {
            backgroundColor: '#fff',
            margin:20,
            borderRadius:10,
            shadowColor: '#777',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
        },
        upperCaseLabel:false,
        tabStyle: {
            paddingVertical:12,
        },
        indicatorStyle: {
            backgroundColor:'#FF2E63',
            borderWidth:0,
            width:Width/5,
            marginHorizontal:tabBarWidth/4,
        },
        activeTintColor: '#FF2E63',
        inactiveTintColor: 'black',
    }
});

export default createAppContainer(WalletTab);