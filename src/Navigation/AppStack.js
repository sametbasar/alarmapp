import React from 'react';
import {NavigationContainer, HeaderBackButton} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import SplashScreen from '../Screens/Splash';
import WelcomeScreen from '../Screens/Welcome';
import RegisterScreen from '../Screens/Register';
import LoginScreen from '../Screens/Login';
import {TouchableOpacity} from 'react-native';
import {Icons, Theme} from '../../contants';
import {SvgFromXml} from 'react-native-svg';

const App = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <App.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
          headerTransparent: true,
          headerTitleStyle: {
            color: Theme.colors.text,
            fontSize: Theme.sizes.h4,
          },
          headerLeft: (props) => _renderHeaderLeft(props),
        }}
        initialRouteName="Splash">
        <App.Screen name="Home" component={HomeScreen} />
        <App.Screen name="Splash" component={SplashScreen} />
        <App.Screen name="Welcome" component={WelcomeScreen} />
        <App.Screen
          name="Register"
          options={{headerShown: true, title: 'Yeni Üye'}}
          component={RegisterScreen}
        />
        <App.Screen
          name="Login"
          options={{headerShown: true, title: 'Üye Girişi'}}
          component={LoginScreen}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};
const _renderHeaderLeft = (props) => {
  return (
    <>
      {props.canGoBack ? (
        <TouchableOpacity
          {...props}
          style={{
            marginLeft: 15,
            transform: [
              {
                rotate: '180deg',
              },
            ],
          }}>
          <SvgFromXml
            width={25}
            height={25}
            fill={Theme.colors.text}
            xml={Icons.arrowRight}
          />
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default AppStack;
