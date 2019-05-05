import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { checkToken } from '../reducers/auth/actions';
import { sagaProduct } from '../reducers/products/actions';

class Content extends React.Component {

    static propTypes = {
        tokenData: PropTypes.object,
        checkToken: PropTypes.func,
        sagaProduct: PropTypes.func,
        products: PropTypes.array
    }

    // 在挂载组件钩子函数中改变Redux状态并不会触发重新挂载
    componentDidMount(){

    }

    _stateChangeHandle = () => {
        this.props.checkToken('newtoken');
    }

    _postHandle = () => {
        this.props.sagaProduct();
    }

    render(){
        const { tokenData, products} = this.props;
        console.log(products);
        return(
            <View>
                <View>
                    <Text>[{tokenData.token}]身份，验证次数:{tokenData.haveCheckedTime}</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this._stateChangeHandle}
                >
                    <Text style={styles.textStyle}>点击验证</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this._postHandle}
                >
                    <Text style={styles.textStyle}>POST请求</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    tokenData: state.auth.token,
    products: state.products
});

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

export default connect(mapStateToProps, { checkToken, sagaProduct })(Content);