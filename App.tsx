import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StripeProvider } from '@stripe/stripe-react-native';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import TrendingScreen from './src/screens/TrendingScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ItemScreen from './src/screens/ItemScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen'; // Fixed the typo here
import PaymentScreen from './src/screens/PaymentScreen';

const Stack = createNativeStackNavigator(); // Moved outside of the component

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <StripeProvider
        publishableKey="pk_test_51NsAtPLuk3xZSpfXTyIgObG4HpjXzved8WHp0A12gM5SzFra9xxy8cXsOd7yrRDy6rLer44ymC2C2SQlWoRolrQ700TjPDG6Sv"
        urlScheme="YOUR_URL_SCHEME"
      >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Trending" component={TrendingScreen} />
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Item" component={ItemScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StripeProvider>
    </NativeBaseProvider>
  );
}

export default App;
