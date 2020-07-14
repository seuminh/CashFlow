import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Header({navigation,title}){

    const openDrawer = ()=>{
        navigation.openDrawer()
    }
   
    return(
        <SafeAreaView style={styles.header}>
            <TouchableOpacity style={styles.iconLeft} onPress={openDrawer}>
                <AntDesign name='bars' size={25} color='#FF2E63'></AntDesign>
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
        </SafeAreaView>
    )
}
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    header: {
        flex:1,
        width:screenWidth,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText: {
        color:'#FF2E63',
        fontSize:17,
        letterSpacing:1,
    },
    iconLeft : {
        position:"absolute",
        right:17,
        backgroundColor:'#333',
        borderRadius:50,
        padding:7
    },
    iconRight: {
        color:'#fff',
        position:"absolute",
        right:17
    }
})