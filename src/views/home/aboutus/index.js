import React from 'react';
import { View, TouchableOpacity, Text , StyleSheet } from 'react-native';

class AboutUSScreen extends React.Component {

    _onPress = () => {
        console.log('aboutus!!!');
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>AboutUSScreen</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this._onPress}
                >
                    <Text style={styles.textStyle}>Click</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle:{
        justifyContent: 'center',
        borderColor: '#000000',
        backgroundColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 10,
        margin: 20,
        height: 50,
        width: 100
    },
    textStyle:{
        fontSize: 16,
        color: '#000000',
        alignSelf: 'center'
    }
});

export default AboutUSScreen;