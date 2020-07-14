import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import React, { Component } from 'react';

import { Entypo, FontAwesome } from '@expo/vector-icons';

import BankStack from './BankStack';
import WalletStack from './WalletStack';
import ProfileStack from './ProfileStack';
import Sidebar from '../components/SideBar';

const drawerOptions = {
    WalletStack: {
        screen: WalletStack,
        navigationOptions: {
            title: "Wallet",
            drawerIcon: ({tintColor})=><Entypo name="wallet" size={17} color={tintColor} />
        }
    },
    BankStack: {
        screen: BankStack,
        navigationOptions: {
            title: "Banks",
            drawerIcon: ({tintColor})=><FontAwesome name="bank" size={17} color={tintColor} />
        }
    },
    ProfileStack: {
        screen: ProfileStack,
        navigationOptions: {
            title: "Profile",
            drawerIcon: ({tintColor})=><FontAwesome name="user" size={17} color={tintColor} />
        }
    },
}

const Drawer = createDrawerNavigator(drawerOptions,{
    contentComponent:props=>{
        return <Sidebar {...props} signOut={()=>props.screenProps.signOut()}></Sidebar>
    },
    // hideStatusBar:true,
    contentOptions: {
        activeBackgroundColor: '#2B2D3E',
        activeTintColor:'#FF2E63',
        inactiveTintColor:'#777',
        labelStyle: {
           letterSpacing: 1,
           fontWeight:'normal',
           fontSize: 15
        },
        itemsContainerStyle: {
            marginLeft: 10
        },
    },
});

export default createAppContainer(Drawer);