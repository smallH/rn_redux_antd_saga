import React from 'react';
import { View, TouchableOpacity, Text , StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class LoginScreen extends React.Component {

    _onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Home', {prevScreenTitle:'AuthScreen'});
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>LoginScreen</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this._onPress}
                >
                    <Text style={styles.textStyle}>登录</Text>
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

LoginScreen.propTypes = {
    navigation: PropTypes.object
};

export default LoginScreen;