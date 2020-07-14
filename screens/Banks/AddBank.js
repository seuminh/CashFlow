import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class AddBank extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>AddBank Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default AddBank;