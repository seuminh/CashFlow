import { Text, View, StyleSheet, Button } from 'react-native';
import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>Home Bank Screen</Text>
                <Button title="Bank" onPress={()=>this.props.navigation.navigate("Bank")}></Button>
                <Button title="Add" onPress={()=>this.props.navigation.navigate("AddBank")}></Button>
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

export default Home;