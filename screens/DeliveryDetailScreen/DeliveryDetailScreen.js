import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useStore} from '../../context/store';
import {useAPI} from '../../context/delivery-data';
import {DeliveryItem} from '../../components/DeliveryItem/index';

export const DeliveryDetails = ({navigation, route}) => {
  const {deliveriesList: data, isLoading} = useAPI();
  const {state, dispatch} = useStore();
  const isButtonActive = state.active;
  const {deliveryId} = route.params;
  const selectedDelivery = [data.find(delivery => delivery.id === deliveryId)];

  const postRequest = (deliveryData, delivered) => {
    dispatch({type: 'inactive'});
    return {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        status: delivered,
        latitude: deliveryData.latitude,
        longitude: deliveryData.longitude,
        id: deliveryData.id,
      }),
    };
  };

  React.useEffect(() => {}, [data]);

  return (
    data && (
      <View style={styles.container}>
        {selectedDelivery.map(delivery => (
          <View>
            <DeliveryItem
              customer={delivery.customer}
              address={delivery.address}
              city={delivery.city}
              props={<Text style={styles.title}>{delivery.zipCode}</Text>}
            />
            {!isButtonActive ? (
              <TouchableOpacity
                onPress={() => dispatch({type: 'active'})}
                style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{'Make Active'}</Text>
              </TouchableOpacity>
            ) : (
              <View>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => postRequest(delivery, 'delivered')}>
                  <Text style={styles.buttonText}>Delivered</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => postRequest(delivery, 'not delivered')}>
                  <Text style={styles.buttonText}>Not Delivered</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </View>
    )
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    elevation: 8,
    borderRadius: 10,
    marginTop: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'white',
    width: '50%',
    marginLeft: '25%',
  },
  buttonText: {
    fontSize: 16,
    color: '#00a3e0',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
