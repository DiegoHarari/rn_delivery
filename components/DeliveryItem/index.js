import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export const DeliveryItem = ({
  props,
  customer,
  address,
  city,
  id,
  deliveries,
  navigation,
  titleText,
  renderButton,
}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{customer}</Text>
    <Text style={styles.title}>{address}</Text>
    <Text style={styles.title}>{city}</Text>
    {props}
    {renderButton && (
      <TouchableOpacity
        testID="details-button"
        onPress={() => {
          navigation.navigate({
            name: 'DeliveryDetails',
            params: {deliveryId: id, deliveriesList: deliveries},
          });
        }}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{titleText}</Text>
      </TouchableOpacity>
    )}
  </View>
);
