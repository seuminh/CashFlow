import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Input } from 'react-native-elements';
import { SimpleLineIcons } from '@expo/vector-icons';

class Income extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTime: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        setInterval( () => {
          this.setState({
            currentTime : new Date().toLocaleString()
          })
        },1000) 
    }

    render() {
        const {currentTime} = this.state;
        return (
            <ScrollView>
                {/* <LinearGradient style={styles.container} colors={['#6677EC', '#E86BF9']} start={[0, 1]} end={[1, 0]}> */}
                <View style={styles.container}>
                    <Text style={styles.date}>{currentTime}</Text>

                    <Input
                        keyboardType='numeric'
                        placeholder='Enter your amount'
                        label="Amount in Dollars"
                        // placeholderTextColor='#555'
                        placeholderTextColor='#777'
                        // style={styles.input}
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        containerStyle={styles.inputTextContainer}
                        inputContainerStyle={styles.inputContainer}
                        // errorMessage="error"
                        // errorStyle={styles.inputError}
                    />

                    <Input
                        keyboardType='numeric'
                        placeholder='Enter your amount'
                        label="Amount in Riels"
                        // placeholderTextColor='#555'
                        placeholderTextColor='#777'
                        // style={styles.input}
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        containerStyle={styles.inputTextContainer}
                        inputContainerStyle={styles.inputContainer}
                        // errorMessage="error"
                        // errorStyle={styles.inputError}
                    />

                    <Input
                        autoCorrect={false}
                        label="Note"
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        containerStyle={styles.inputTextContainer}
                        inputContainerStyle={styles.inputContainer}
                        placeholder='Write note'
                        placeholderTextColor='#777'
                        leftIcon={
                            <SimpleLineIcons name="note" size={20} color="#fff" />
                        }
                    />
                </View>
                {/* </LinearGradient> */}
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        // flex:1,
        marginHorizontal:20,
        marginBottom:20,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,

        backgroundColor:'#2B2D3E'
        // justifyContent:"center",
        // alignItems:"center"
    },
    date: {
        fontSize:18,
        // textAlign:"center",
        // color:'#fff'
        color:'#FF2E63'
    },
    input: {
        fontSize: 16,
        color:'#fff'
    },
    label: {
        color:'#fff',
        fontSize:16,
        textAlign:'center'
    },
    inputTextContainer: {
        marginTop:15
    },
    inputContainer: {
        borderBottomColor:'#fff'
    },
    inputError: {
        fontSize:14,
        textAlign:'center',
        color:'darkblue'
    }
})

export default Income;