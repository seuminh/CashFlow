import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';
import Header from '../components/Header'

import AddBank from '../screens/Banks/AddBank';
import Bank from '../screens/Banks/Bank';
import Home from '../screens/Banks/Home';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> {
            return({
                headerTitle:()=><Header title="Bank" navigation={navigation}></Header>
            })
        }
    },
    Bank: {
        screen: Bank,
        navigationOptions: ({navigation})=> {
            return({
                headerTitle:()=><Header title="Bank" navigation={navigation}></Header>
            })
        }
    },
    AddBank: {
        screen: AddBank,
        navigationOptions: ({navigation})=> {
            return({
                headerTitle:()=><Header title="Bank" navigation={navigation}></Header>
            })
        }
    }
}

const BankStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#2B2D3E',
        },
        headerTintColor:'#FF2E63',
    }
});

export default BankStack;