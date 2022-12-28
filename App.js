import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import RouteNav from './Routes/Route';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#173353" barStyle="light-content" />
      <RouteNav/>
    </NavigationContainer>
  );
}

