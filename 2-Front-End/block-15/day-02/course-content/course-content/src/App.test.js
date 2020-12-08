import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks()); // After each test our mock is clean. It is useful to we don't have interference between one test and another.
it('fetch joke', async () => { // It's important to have the 'async' here to we be able to use 'await findByText' where we are saying to our test: "ei espere até que consiga encontrar esse texto no dom ou de erro por limite de tempo ".
  const joke = { // This const creates an object similar to the object wich is returned by our API.
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, "fetch") // The 'jest.spyOn' spies the "fetch" function calls of the object global, it`s throught this 'global' object we can use any function from the system, like "parseint".
  global.fetch.mockResolvedValue({ // When we call the 'fetch' function, instead of call an API we will call our mock.
    json: jest.fn().mockResolvedValue(joke), // because of the previous note we use yhe 'mockResolvedValue and simulates a fetch return. First of all we retur an object wich contains a .json function, inside it we create a mock wich returns our joke.
  });

  const { findByText } = render(<App />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1); // The function toBeCalledTimes ensures the call nunber to all fetch. 
  expect(global.fetch).toBeCalledWith( // The function toBeCalledWith ensures that the fetch was called with the correct arguments.
    'https://icanhazdadjoke.com/',
    {"headers": {"Accept": "application/json"}}
  );
});