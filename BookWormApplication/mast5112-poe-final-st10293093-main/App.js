import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AddBookScreen from './screens/AddBookScreen';
import GenreScreen from './screens/GenreScreen';
import HistoryScreen from './screens/HistoryScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return(
    <Tab.Navigator 
    activeColor='#FF6700'
    inactiveColor='#004E98'
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
    barStyle={{
      backgroundColor: 'black',
      height: 65,
    }}
    shifting='true'
    keyboardHidesNavigationBar = 'true'
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => {
          return <Icon name='home-variant' color={color} size={26} />
        }
      }}/>
      <Tab.Screen name='Add Book' component={AddBookScreen} options={{
       tabBarLabel: 'Add Book',
       tabBarIcon: ({color}) => {
        return <Icon name='book-plus-outline' color={color} size={26} />
      }
      }}
      />
      <Tab.Screen name='Genre' component={GenreScreen} options={{
        tabBarLabel: 'Genre',
        tabBarIcon: ({color}) => {
          return <Icon name='shape' color={color} size={26} />
        }
      }}/>
      <Tab.Screen name='History' component={HistoryScreen} options={{
        tabBarLabel: 'History',
        tabBarIcon: ({color}) => {
          return <Icon name='history' color={color} size={26} />
        }
      }}/>
    </Tab.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}