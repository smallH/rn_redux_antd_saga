import React from 'react';
import { View, Easing, Animated, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../views/login';
import { SearchScreen, HotScreen, AboutUSScreen } from '../views/home/index.js';

const HomeNavigator = createBottomTabNavigator(
    {
        Search: SearchScreen,
        Hot: HotScreen,
        Aboutus: AboutUSScreen
    },
    {
        initialRouteName: 'Search', // 第一次加载时初始选项卡路由的 routeName
        order: ['Search', 'Hot', 'Aboutus'], // 定义选项卡顺序的 routeNames 数组
        backBehavior: 'initialRoute', // 触发navigation.goBack()方法时是否包括Tab页间切换的的返回操作，不包括为none，包括为initialRoute(默认包括)
        tabBarOptions: {
            activeTintColor: 'red', // 活动选项卡标签文本和图标颜色
            activeBackgroundColor: '#FFFFFF', // 活动选项卡的背景色
            inactiveTintColor: 'gray', // 非活动选项卡的标签文本和图标颜色
            inactiveBackgroundColor: '#FFFFFF', // 非活动选项卡的背景色
            showLabel: true, // 是否显示选项卡的标签, 默认值为 true
            showIcon: true, // 是否显示 Tab 的图标，默认为false
            // 选项卡栏的样式
            style: {
                borderTopColor: 'red',
                height: 50
            }, 
            // 选项卡的默认样式
            tabStyle: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }, 
            // 选项卡标签文本的默认样式
            labelStyle: {
                fontSize: 14
            }, 
            allowFontScaling: true // 允许标签字体自动缩放以对界面更友好，默认为: true
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarVisible: true, // true或false用于显示或隐藏标签栏，如果未设置，则默认为true
            // 选项卡 自定义图标
            // eslint-disable-next-line
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state; // 选项卡名称
                console.log(focused); // 是否处于活动状态,是为true
                console.log(horizontal); // 是否处于横屏,是为true
                console.log(tintColor); // 状态颜色值
                let textStyle = {};
                if(focused){
                    textStyle = {
                        color: 'red'
                    };
                }
                return(
                    <View>
                        <Text style={textStyle}>{routeName}-Icon</Text>
                    </View>
                );
            }
        })
    }
);

const rootNavigator = createStackNavigator(
    {
      Login: { screen: LoginScreen },
      Home: { screen: HomeNavigator }
    },
    {
      initialRouteName: 'Login', // 设置 stack navigator 的默认页面， 必须是路由配置中的某一个
      initialRouteParams: { param: 'initParam' }, // 初始路由的参数，仅对初始页有效
      mode: 'modal', // 定义跳转风格
      headerMode: 'none', // 隐藏该导航堆栈中的标题栏
      // 类似于微信的左右切换路由页
      transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;
            const Width = layout.initWidth;
            //沿X轴平移
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [Width, 0, -(Width)], // Width,0指新页面进入坐标变化; 0,-(Width)是指旧页面推出坐标变化
            });
            //透明度
            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });
            return {opacity, transform: [{translateX}]};
        }
      })
    }
);


const AppContainer  = createAppContainer(rootNavigator);
class RootNavigator extends React.Component {
    render(){
        return(
            <View style={{flex:1}}>
                <AppContainer />
            </View>
        );
    }
}

export default RootNavigator;