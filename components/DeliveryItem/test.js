/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
// import {APIContextProvider} from '../context/delivery-data';
import {DeliveryItem} from './index';

let component;

describe('DeliveryScreen', () => {
  beforeEach(() => {
    component = render(
      <DeliveryItem renderButton titleText={'Testing'} customer={'John'} />,
    );
  });
  it('Renders Items Correctly', () => {
    expect(component).toBeDefined();
    expect(component.getByText(/testing/i));
    expect(component.getAllByText(/john/i).length).toBe(1);
    expect(component.getAllByText(/john/i).length).not.toBe(undefined);
    expect(component.getByTestId('details-button')).toBeDefined();
  });
});
