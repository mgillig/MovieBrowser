import React  from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import MovieSearch from '../Screens/MovieSearch';
import MovieDetail from '../Screens/MovieDetail';

const Stack = createStackNavigator();

function HomeScreenStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Search" component={MovieSearch}/>
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export {HomeScreenStack};