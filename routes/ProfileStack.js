import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';
import Header from '../components/Header'

import Home from '../screens/Profile/Home';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> {
            return({
                headerTitle:()=><Header title="Profile" navigation={navigation}></Header>
            })
        }
    },
}

const ProfileStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#2B2D3E',
        },
        headerTintColor:'#FF2E63',
    }
});

export default ProfileStack;