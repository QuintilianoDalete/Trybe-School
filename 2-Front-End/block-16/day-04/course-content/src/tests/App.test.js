import { fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import fetchMock from 'fetch-mock-jest';
import App from '../App';
import renderWithRedux from './helpers';

describe('Main page', () => {
  test('The button add dog is in the page', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonDog = queryByText('New Dog');

    expect(buttonDog).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(buttonDog);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});
