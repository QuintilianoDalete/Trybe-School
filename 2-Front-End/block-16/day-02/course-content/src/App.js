// 5th application step: Conecting the Redux with the React.
import React from 'react';
import { Provider } from 'react-redux'; // 5th - The Provider it`s the way to make the Store available.
import store from './store';
import List from './components/List'; // 6th
import InputsList from './components/InputList'; // 6th

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <InputsList /> {/* 6th - Implementing the components List.js and Inputlist.js */}
          <List /> {/* 6th */}
        </Provider>
      </div>
    )
  }
}

export default App;
