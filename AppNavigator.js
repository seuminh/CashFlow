import React, { Component } from 'react';
import { Text, View, StyleSheet, Modal, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity, Platform, Image } from 'react-native';

import {Form, Item, Input, Label, Spinner} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import Drawer from './routes/Drawer';

class AppNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isAuthed: true,
            modalLogin: true,
            modalVerify: false,
            verifyCodeInput: '',
            phone: '',
            verifySuccess: true,
            loginPhoneError: false
        };
    }

    toggleVerifyModal = () => {
        this.setState({
            modalVerify:!this.state.modalVerify
        })
    }

    getCode = () => {
        // this.setState({
        //     isAuthed:true,
        // })
        if(this.state.phone==="123")
            this.toggleVerifyModal()
    }

    verifyCode = () => {
        if(this.state.verifyCodeInput==="123"){
            this.setState({
                modalLogin:false,
                modalVerify:false
            })
        }
        else {
            this.setState({
                verifySuccess:false
            })
        }
    }

    signOut = () =>  {
        this.setState({
            isAuthed:false
        })
    }

    phoneChange = (value)=> {
        let rjx = /^[0-9]+$/;
        let isValid = rjx.test(value);
        if(isValid){
          this.setState({phone:value,loginPhoneError:false})
        }else{
          this.setState({loginPhoneError:true})
        }
    }

    verifyCodeChange = (value) => {
        this.setState({
            verifyCodeInput:value
        })
    }

    renderLogin() {
        const { modalVerify,loginPhoneError } = this.state;
        if(modalVerify){
            return(
                <Modal animationType="slide" visible={modalVerify}>
                    {this.renderVerify()}
                </Modal>
            )
        }
        return (
            <KeyboardAvoidingView style={styles.containerLogin} behavior='padding' keyboardVerticalOffset={(Platform.OS==="android")?-500:0}>
                <View style={styles.imageLogoContainer}>
                    <Image source={{uri:"https://robohash.org/2"}} style={styles.imageLogo}></Image>
                </View>
                <Form style={styles.formLoginContainer}>
                    <Item floatingLabel>
                        <Label>Phone Number</Label>
                        <Input style={styles.phoneInput} keyboardType='numeric' onChangeText={this.phoneChange}/>
                    </Item>
                    {loginPhoneError&&<Text style={styles.error}>Phone Number must contain only number</Text>}
                    <TouchableOpacity onPress={this.getCode} style={styles.btnGetCode}>
                        <Text style={styles.btnGetCodeText}>Get Code</Text>
                    </TouchableOpacity>
                </Form>
            </KeyboardAvoidingView>
        )
    }

    renderVerify() {
        const { modalVerify,verifySuccess } = this.state;
        return(
            <KeyboardAvoidingView style={styles.containerVerify} behavior='padding' keyboardVerticalOffset={(Platform.OS==="android")?-500:0}>
                <TouchableOpacity style={styles.btnClose} onPress={this.toggleVerifyModal}>
                    <Ionicons name="ios-close" size={50} style={styles.closeIcon}></Ionicons>
                </TouchableOpacity>
                <Form style={styles.formVerifyContainer}>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input style={styles.phoneInput} onChangeText={this.verifyCodeChange}/>
                    </Item>
                    {!verifySuccess&&<Text style={styles.error}>Code not match</Text>}
                    <TouchableOpacity onPress={this.verifyCode} style={styles.btnVerify}>
                        <Text style={styles.btnVerifyText}>Verify</Text>
                    </TouchableOpacity>
                </Form>
            </KeyboardAvoidingView>
        )
    }

    render() {
        const { isAuthed, modalLogin } = this.state;

        if(!isAuthed && modalLogin){
            return(
                <Modal animationType="slide" visible={modalLogin}>
                    {this.renderLogin()}
                </Modal>
            )
        }
        return (
            // <View style={styles.container}>
            //     <Text>Hello</Text>
            // </View>
            <Drawer screenProps={{signOut:this.signOut}}></Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    error: {
        textAlign:"center",
        color:'red',
        marginTop:8,
        paddingLeft:5
    },
    imageLogoContainer: {
        // flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop: -50
    },
    imageLogo: {
        width: 250,
        height: 250
    },
    containerLogin:{
        flex:1,
        backgroundColor:'#fff',
        padding:50
    },
    formLoginContainer:{
        marginVertical:20,
        flex:2,
    },
    phoneInput: {
        marginTop:15,
        fontSize:17
    },
    btnGetCode: {
        backgroundColor:'darkslateblue',
        padding:13,
        marginVertical:20,
        width:300,
        alignSelf:'center',
        borderRadius:50
    },
    btnGetCodeText: {
        color: '#fff',
        fontSize:17,
        textAlign:"center",
        fontWeight:'600'
    },
    containerVerify:{
        flex:1,
        backgroundColor:'#fff',
        padding:50
    },
    closeIcon: {
        textAlign:"center",
        color:'darkslateblue'
    },
    btnVerify: {
        backgroundColor:'darkslateblue',
        padding:13,
        marginVertical:20,
        width:300,
        alignSelf:'center',
        borderRadius:50
    },
    btnVerifyText: {
        color: '#fff',
        fontSize:17,
        textAlign:"center",
        fontWeight:'600'
    },
    formVerifyContainer:{
        marginVertical:20,
        flex:2,
    },
})

export default AppNavigator;