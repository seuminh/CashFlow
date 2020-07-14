import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

class Expense extends Component {
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
                <LinearGradient style={styles.container} colors={['#F78E86', '#F6CB68']} start={[0, 1]} end={[1, 0]}>
                    <Text style={styles.date}>{currentTime}</Text>
                    <Text>hi</Text>
                    <Text>hi</Text>
                </LinearGradient>
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
        // backgroundColor:'#2B2D3E'
        // justifyContent:"center",
        // alignItems:"center"
    },
    date: {
        fontSize:18,
        textAlign:"center",
        color:'#fff'
    }
})

export default Expense;