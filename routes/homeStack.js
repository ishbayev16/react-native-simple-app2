import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
const screens = {
    Home:{
        screen: Home,
        navigationOptions:{
            title: "GameZone",
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title: "Reviews",
            // headerStyle: { backgroundColor: 'lightblue'} overides in the screen
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: 'lightblue', height: 70,
        }
    }
});

export default createAppContainer(HomeStack);