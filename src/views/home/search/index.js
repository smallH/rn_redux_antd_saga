import React from 'react';
import { View, StyleSheet } from 'react-native';
import Content from '../../../components/Content';

class SearchScreen extends React.Component {

    render(){
        return(
            <View style={styles.containerStyle}>
                <Content />
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

export default SearchScreen;