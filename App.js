import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {APIContextProvider} from './context/delivery-data';
import {DeliveryDetails} from './screens/DeliveryDetailScreen/DeliveryDetailScreen';
import {DeliveryScreen} from './screens/DeliveryScreen/DeliveryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StoreProvider} from './context/store';

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <APIContextProvider>
      <StoreProvider>
        <SafeAreaView style={styles.appContainer}>
          <NavigationContainer>
            <MainStack.Navigator>
              <MainStack.Screen name="Deliveries" component={DeliveryScreen} />
              <MainStack.Screen
                name="DeliveryDetails"
                component={DeliveryDetails}
              />
            </MainStack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </StoreProvider>
    </APIContextProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
