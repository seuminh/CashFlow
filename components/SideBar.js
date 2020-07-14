import { Text, View, StyleSheet, ScrollView, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import {DrawerItems} from 'react-navigation-drawer';

function Sidebar(props){
    return(
        <View style={styles.container}>
            <View style={styles.topSidebar}>
                <Image style={styles.image} source={{uri:'https://robohash.org/2'}}></Image>
                <Text style={styles.topSidebarText}>Cash FLow</Text>
            </View>
            <View style={styles.bottomSidebar}>
                <ScrollView style={{marginTop:-5}}>
                    <DrawerItems {...props}></DrawerItems>
                </ScrollView>
                <View style={{marginBottom:40}}>
                    <TouchableOpacity style={styles.btnSignOut} onPress={()=>props.signOut()}>
                        <Text style={styles.btnSignOutText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#2B2D3E',
    },
    topSidebar: {
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30,
        paddingVertical:40
    },
    topSidebarText: {
        color: '#fff',
        fontSize:16,
        fontWeight:'500',
        marginTop:10,
    },
    bottomSidebar:{
        flex:1,
    },
    image: {
        width:100,
        height:100,
        // borderRadius:50,
        // borderWidth:2,
        // borderColor:'darkslateblue'
    },
    btnSignOut: {
        // backgroundColor:'red',
        padding:10,
        // flex: 1,
        borderColor: '#FF2E63',
        borderWidth: 1,
        borderRadius:25,
        width:'70%',
        alignSelf:'center'
    },
    btnSignOutText: {
        textAlign:'center',
        color:'#fff',
        fontSize:16,
        letterSpacing:1
    }
})

export default Sidebar;