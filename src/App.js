import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

//Screens
import Login from './common-screens/Login';
import Register from './common-screens/Register';
import ForgotPassword from './common-screens/ForgotPassword';
import Address from './pages/Address';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Account from './pages/Account';
import OrderHistory from './pages/OrderHistory';
import Restraunt from './pages/Restraunt';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import OrderSucessful from './pages/OrderSuccessful';

//Custom Components
import IconWithBadge from './components/IconWithBadge';

//Styles
import colors from './styles/colors';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 24,
        minWidth: 200
      },
      headerTintColor: 'white'
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white'
    }
  },
});

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    },
  },
  Restraunt: {
    screen: Restraunt,
    navigationOptions: ({ navigation }) => ({
      headerShown: false
    })
  }
});

const AccountStack = createStackNavigator({
  Account: {
    screen: Account,
    navigationOptions: ({ navigation }) => ({
      headerShown: false
    })
  },
  Address: {
    screen: Address,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Manage Address'
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Edit Profile'
    })
  },
  Settings: {
    screen: Settings
  }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 24,
      minWidth: 200
    },
    headerTintColor: 'white'
  })
});

const CartStack = createStackNavigator({
  Cart,
  CheckOut,
  OrderSucessful:{
    screen: OrderSucessful,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Order Placed'
    })
  }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 24,
      minWidth: 200
    },
    headerTintColor: 'white'
  })
});

const TabStack = createBottomTabNavigator({
  Home: HomeStack,
  Cart: CartStack,
  Account: AccountStack,
  History: OrderHistory
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName, params } = navigation.state;
      let IconComponent = Icon;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'home';
        IconComponent = IconWithBadge;
      } else if (routeName === 'History') {
        iconName = 'clipboard';
      } else if (routeName === 'Cart') {
        iconName = 'shopping-basket';
      } else if (routeName === 'Account') {
        iconName = 'user';
      }

      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: colors.primary,
    inactiveTintColor: 'gray',
  },
});

const RootStack = createSwitchNavigator(
  {
    Auth: AuthStack,
    Home: TabStack
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none'
  }
);

const App = createAppContainer(RootStack);

export default App;