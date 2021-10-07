import React from 'react';
import {View, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {DeliveryItem} from '../../components/DeliveryItem/index';
import {useAPI} from '../../context/delivery-data';

export const DeliveryScreen = ({navigation, isLoadingTest = null}) => {
  const {deliveriesList: data, isLoading} = useAPI();

  const renderItem = ({item}) => (
    <DeliveryItem
      customer={item.customer}
      city={item.city}
      address={item.address}
      id={item.id}
      deliveries={item}
      titleText={'Details'}
      navigation={navigation}
      renderButton
    />
  );

  React.useEffect(() => {}, [isLoading]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
