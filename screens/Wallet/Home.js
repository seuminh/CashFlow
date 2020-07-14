import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import WalletTab from '../../routes/WalletTab'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            // <View>
            //     <Text>Home Wallet Screen</Text>
            // </View>
            <KeyboardAvoidingView style={styles.container} behavior='padding' keyboardVerticalOffset={(Platform.OS==="android")?-500:0}>
                <View style={styles.topContainer}>
                    <Text style={styles.balanceTitle}>Current Balance</Text>
                    <Text style={styles.balance}>200,000 $</Text>
                    <Text style={styles.balance}>200,000 ៛</Text>
                </View>
                <WalletTab></WalletTab>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    topContainer: {
        backgroundColor:'#2B2D3E',
        height:'40%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:-50,

        // transform : [ { scaleX : 1.4 } ],
        borderBottomStartRadius : 30,
        borderBottomEndRadius : 30,
        // overflow : 'hidden',
    },
    balanceTitle: {
        color:'#888',
        fontSize:18,
        marginTop:-60,
        marginBottom:10
    },
    balance: {
        fontSize:20,
        color: '#fff',
        marginTop:10
    }
})

export default Home;